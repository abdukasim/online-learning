<template>
  <nav>
    <div class="grid md:grid-cols-7 gap-4 mt-4 pb-4">
      <!-- Logo and Mobile Menu Button -->
      <div class="flex">
        <div
          class="md:hidden flex items-center"
          :class_x="{ active: isBurgerActive }"
          @click.prevent="toggle"
        >
          <button class="pl-4 outline-none mobile-menu-button">
            <svg
              class="w-6 h-6 text-gray-500 hover:text-green-500"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div class="w-full flex justify-center items-center">
          <a href="#" class="px-3">
            <img
              class="h-10 w-14"
              src="@/assets/images/cape.png"
              alt="Temaru logo"
            />
          </a>
          <span class="font-semibold text-gray-500 text-lg">Temaru</span>
        </div>
      </div>

      <!-- Search box and Upload/Chat Button -->
      <div
        class="
          hidden
          md:inline-flex md:col-start-2 md:col-span-4
          flex
          justify-between
        "
      >
        <div
          class="
            border-2
            py-1
            px-3
            w-96
            flex
            items-center
            ml-16
            rounded-full
            bg-gray-100
          "
        >
          <span class="icon mr-2"><i class="bx bx-search"></i></span>

          <input
            class="
              flex-grow
              outline-none
              text-gray-600
              bg-gray-100
              focus:text-blue-600
            "
            type="text"
            placeholder="Search"
          />
        </div>
        <div class="mr-16">
          <button
            class="
              flex
              text-white
              items-center
              bg-yellow-500
              py-3
              px-4
              rounded-full
            "
            @click="isTeacher ? upload() : chat()"
          >
            <span class="icon"
              ><i :class="[isTeacher ? uploadIcon : chatIcon]"></i
            ></span>
            <span class="ml-2"> {{ isTeacher ? "upload" : "chat" }} </span>
          </button>
        </div>
        <div
          v-show="showModal"
          @click="showModal = false"
          class="fixed inset-0 h-full w-full z-10"
        ></div>
      </div>

      <div class="hidden md:block md:col-start-6 md:col-span-2">
        <div class="flex justify-end mr-8 space-x-3 mt-3">
          <div>
            <button @click="settingDown = !settingDown" class="">
              <i class="bx bx-cog bx-sm text-green-800"></i>
            </button>

            <div
              v-show="settingDown"
              @click="settingDown = false"
              class="fixed inset-0 h-full w-full z-10"
            ></div>

            <div
              v-show="settingDown"
              class="
                absolute
                right-0
                mt-2
                bg-white
                rounded-md
                shadow-lg
                overflow-hidden
                z-20
              "
            >
              <a href="#" class="dropdownMenuItems"> your profile </a>
              <a href="#" class="dropdownMenuItems"> Your projects </a>
              <a href="#" class="dropdownMenuItems"> Help </a>
              <a href="#" class="dropdownMenuItems"> Settings </a>
              <a href="#" class="dropdownMenuItems"> Sign Out </a>
            </div>
          </div>

          <button @click="notificationDown = !notificationDown">
            <i class="bx bx-bell bx-sm text-green-800"></i>
          </button>

          <div
            v-show="notificationDown"
            @click="notificationDown = false"
            class="fixed inset-0 h-full w-full z-10"
          ></div>

          <div
            v-show="notificationDown"
            class="
              absolute
              right-0
              mt-8
              bg-white
              rounded-md
              shadow-lg
              overflow-hidden
              z-20
            "
            style="width: 20rem"
          >
            <div class="py-2">
              <a
                href="#"
                class="
                  flex
                  items-center
                  px-4
                  py-3
                  border-b
                  hover:bg-gray-100
                  -mx-2
                "
              >
                <img
                  class="h-8 w-8 rounded-full object-cover mx-1"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt="avatar"
                />
                <p class="text-gray-600 text-sm mx-2">
                  <span class="font-bold" href="#">Sara Salah</span> replied on
                  the
                  <span class="font-bold text-blue-500" href="#"
                    >Upload Image</span
                  >
                  artical . 2m
                </p>
              </a>
              <a
                href="#"
                class="
                  flex
                  items-center
                  px-4
                  py-3
                  border-b
                  hover:bg-gray-100
                  -mx-2
                "
              >
                <img
                  class="h-8 w-8 rounded-full object-cover mx-1"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  alt="avatar"
                />
                <p class="text-gray-600 text-sm mx-2">
                  <span class="font-bold" href="#">Slick Net</span> start
                  following you . 45m
                </p>
              </a>
              <a
                href="#"
                class="
                  flex
                  items-center
                  px-4
                  py-3
                  border-b
                  hover:bg-gray-100
                  -mx-2
                "
              >
                <img
                  class="h-8 w-8 rounded-full object-cover mx-1"
                  src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt="avatar"
                />
                <p class="text-gray-600 text-sm mx-2">
                  <span class="font-bold" href="#">Jane Doe</span> Like Your
                  reply on
                  <span class="font-bold text-blue-500" href="#"
                    >Test with TDD</span
                  >
                  artical . 1h
                </p>
              </a>
              <a
                href="#"
                class="flex items-center px-4 py-3 hover:bg-gray-100 -mx-2"
              >
                <img
                  class="h-8 w-8 rounded-full object-cover mx-1"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                  alt="avatar"
                />
                <p class="text-gray-600 text-sm mx-2">
                  <span class="font-bold" href="#">Abigail Bennett</span> start
                  following you . 3h
                </p>
              </a>
            </div>
            <a
              href="#"
              class="block bg-gray-800 text-white text-center font-bold py-2"
              >See all notifications</a
            >
          </div>
        </div>
      </div>
    </div>
    <uploadModal v-if="showModal" @close="showModal = false" />
  </nav>
</template>

<script>
import uploadModal from "@/components/uploadModal.vue";
// import { state, mutations } from "../store";
export default {
  components: { uploadModal },
  props: {
    teacher: Boolean,
  },
  data: () => ({
    settingDown: false,
    notificationDown: false,
    showModal: false,
    chatIcon: "bx bx-chat",
    uploadIcon: "bx bx-upload",
  }),

  computed: {
    isTeacher() {
      return this.teacher;
    },
    // isBurgerActive() {
    //   return state.isSidebarOpen;
    // },
  },

  methods: {
    upload() {
      console.log("upload");
      this.showModal = true;
    },
    chat() {
      console.log("chat");
    },
    // toggle() {
    //   mutations.toggleSidebar();
    // },
  },
};
</script>

<style>
.dropdownMenuItems {
  @apply block
                  px-4
                  py-2
                  text-sm
                  capitalize
                  text-gray-700
                  hover:bg-blue-500 hover:text-white;
}
</style>
