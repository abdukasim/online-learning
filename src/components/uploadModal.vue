<template>
  <div class="fixed screen z-10 top-0 h-full flex bg-black bg-opacity-60">
    <div class="p-4 bg-white w-screen md:w-max bg-whtie m-auto rounded-lg">
      <div class="flex justify-end">
        <button
          href=""
          class="
            flex
            justify-self-end
            w-min
            bg-white
            rounded-full
            font-bold
            text-red-600
            py-2
            px-2
            transition
            duration-300
            ease-in-out
            hover:bg-red-400 hover:text-white
          "
          @click="$emit('close')"
        >
          <i class="bx bx-x"></i>
        </button>
      </div>
      <form name="student_application" id="student_application" action="">
        <div class="py-4 px-8">
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2"
              >File Type</label
            >
            <input
              class="border rounded w-full py-2 px-3 text-grey-darker"
              type="text"
              name="student_id"
              id="student_id"
              value=""
              placeholder=""
            />
          </div>
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2"
              >File Name</label
            >
            <input
              class="border rounded w-full py-2 px-3 text-grey-darker"
              type="text"
              name="student_name"
              id="student_name"
              value=""
              placeholder="Enter File Name"
            />
          </div>
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2"
              >Course:</label
            >
            <Dropdown animation="slide-in-right" color="blue"></Dropdown>
          </div>

          <div
            class="extraOutline mb-4 bg-white w-max bg-whtie m-auto rounded-lg"
          >
            <div
              class="
                file_upload
                p-5
                relative
                border-4 border-dotted border-gray-300
                rounded-lg
                w-full
              "
            >
              <svg
                class="text-indigo-500 w-24 mx-auto mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <div class="input_field flex flex-col w-max mx-auto text-center">
                <label>
                  <input
                    class="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    multiple
                  />
                  <div
                    class="
                      text
                      bg-indigo-600
                      text-white
                      border border-gray-300
                      rounded
                      font-semibold
                      cursor-pointer
                      p-1
                      px-3
                      hover:bg-indigo-500
                    "
                  >
                    Select
                  </div>
                </label>

                <div class="title text-indigo-500 uppercase">
                  or drop files here
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <button
              class="
                mb-2
                mx-16
                rounded-full
                py-1
                px-24
                bg-gradient-to-r
                from-green-400
                to-blue-500
              "
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
    <div
      class="
        close_btn
        absolute
        -top-10
        -right-10
        bg-white
        p-4
        cursor-pointer
        hover:bg-gray-100
        py-2
        text-gray-600
        rounded-full
      "
    >
      X
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";
export default {
  components: { Dropdown },
};
</script>

<style>
.screen {
  width: 100vw;
}
</style>
