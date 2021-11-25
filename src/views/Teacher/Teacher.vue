<template>
  <div>
    <Navbar :teacher="true" />
    <div class="min-h-screen grid grid-cols-7 gap-4 overflow-hidden">
      <Sidebar>
        <li v-for="listItem in listItems" :key="listItem.name">
          <router-link :to="listItem.route" class="a-style">
            <span :class="icon"><i :class="listItem.icon"></i></span>
            <span class="text-sm font-medium"> {{ listItem.name }} </span>
          </router-link>
        </li>
      </Sidebar>
      <div class="col-start-2 col-end-8">
        <router-view></router-view>
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
    listItems: [
      { name: "Lessons", icon: "bx bx-book-alt", route: "/lessons" },
      { name: "Students", icon: "bx bx-user-plus", route: "/students" },
      { name: "Messages", icon: "bx bx-message-dots", route: "/messages" },
    ],
    icon: "inline-flex                  items-center                  justify-center h-12                  w-12                  text-lg text-gray-400;",
  }),
};
</script>

<style>
.a-style {
  @apply flex flex-row
              items-center
              h-12
              transform
              hover:translate-x-2
              transition-transform
              ease-in
              duration-200
              text-gray-500
              hover:text-gray-800;
}
</style>
