<template>
  <div>
    <Navbar :teacher="false" />
    <div class="min-h-screen grid grid-cols-7 gap-4 overflow-hidden">
      <Sidebar>
        <li>
          <router-link to="/profile" :class="anchorStyle">
            <span :class="icon"><i class="bx bx-user"></i></span>
            <span class="text-sm font-medium">Profile</span>
          </router-link>
        </li>
        <li>
          <button
            class="bg-transparent"
            :class="anchorStyle"
            @click="showCoursesToggle"
          >
            <span :class="icon"><i class="bx bx-book-alt"></i></span>
            <span class="text-sm font-medium">Courses</span>
            <span :class="icon"
              ><i class="bx bx-down-arrow text-xs mt-1 ml-8"></i
            ></span>
          </button>
        </li>
        <transition
          enter-active-class="transform transition duration-500 ease-custom"
          enter-class="-translate-y-1/2 scale-y-0 opacity-0"
          enter-to-class="translate-y-0 scale-y-100 opacity-100"
          leave-active-class="transform transition duration-300 ease-custom"
          leave-class="translate-y-0 scale-y-100 opacity-100"
          leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
        >
          <div v-show="open">
            <div class="rounded-lg ml-16">
              <button
                v-for="course in myCourses"
                :key="course.code"
                @click="this.selectedCourse = course"
                :class="options"
              >
                {{ course.name }}
              </button>
            </div>
          </div>
        </transition>
        <li>
          <router-link to="/" :class="anchorStyle">
            <span :class="icon"><i class="bx bx-receipt"></i></span>
            <span class="text-sm font-medium">Homework</span>
          </router-link>
        </li>
      </Sidebar>

      <div class="col-start-2 col-span-4">
        <div class="max-w-full mx-16 py-4 px-8 bg-gray-100 shadow-md card my-4">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: { Navbar, Sidebar },
  data: () => ({
    anchorStyle:
      "flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800",
    icon: "inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400",
    selectedCourse: "",
    myCourses: [
      { name: "Biology", code: "01" },
      { name: "Chemistry", code: "02" },
      { name: "Physics", code: "03" },
    ],
    open: false,
    options:
      "flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 rounded-lg mr-24 hover:text-gray-800;",
  }),
  methods: {
    showCoursesToggle() {
      this.open = !this.open;
      this.$router.push("/courses");
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 1.75rem;
}
</style>
