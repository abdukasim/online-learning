<template>
  <div class="lessons flex flex-cols w-screen">
    <div class="week ml-16 mr-12 mt-12">
      <div
        class="
          group
          w-max
          bg-gray-200
          hover:bg-green-600
          rounded-lg
          shadow-lg
          overflow-hidden
          flex flex-cols
          p-2
        "
        v-for="day in days"
        :key="day.date"
      >
        <div
          class="w-full text-center py-4 px-12 space-y-1 justify-center my-auto"
        >
          <p class="text-base text-gray-400 font-normal group-hover:text-white">
            {{ day.name }}
          </p>
          <p class="text-6xl text-gray-900 group-hover:text-gray-300 font-bold">
            {{ day.date }}
          </p>
        </div>

        <div class="vl self-center"></div>

        <div class="w-full text-left mx-16 py-4 space-y-2 my-auto">
          <p
            class="text-xl text-green-800 font-semi-bold group-hover:text-white"
          >
            {{ day.lessons }}
          </p>
          <p
            class="
              text-base text-gray-400
              group-hover:text-gray-300
              font-normal
            "
          >
            {{ day.grade }}
          </p>
        </div>
      </div>
    </div>
    <div class="day ml-24 mt-12">
      <div class="flex flex-row" v-for="(time, i) in times" :key="i">
        <p class="mr-8 text-gray-500 font-thin text-lg">{{ time.time }}</p>
        <div
          class="
            group
            w-96
            mx-auto
            mb-16
            bg-gray-200
            hover:bg-green-600
            rounded-lg
            shadow-lg
            overflow-hidden
            flex flex-cols
          "
        >
          <!-- <div class="w-72 h-24"> -->
          <div class="flex w-52 m-4 items-center justify-center">
            <img class="w-20 h-20 object-cover rounded-full" :src="time.src" />
          </div>
          <!-- </div> -->
          <div class="w-full text-left p-1 space-y-2 my-auto">
            <p
              class="
                text-xl text-green-800
                font-semi-bold
                group-hover:text-white
              "
            >
              {{ time.subject }}
            </p>
            <p
              class="
                text-base text-gray-400
                group-hover:text-gray-300
                font-normal
              "
            >
              {{ time.mode }}
            </p>
          </div>
          <span
            class="text-3xl text-gray-400 group-hover:text-gray-300 m-auto pr-4"
            >></span
          >
        </div>
      </div>
    </div>

    <div
      class="
        overview
        bg-gray-100
        min-h-screen
        rounded-xl
        w-full
        mt-12
        self-center
        ml-32
        flex-shrink
      "
    >
      <div class="m-12">
        <p class="text-4xl mb-4 font-bold">Biology</p>
        <p class="text-gray-600 mb-10 font-thin">
          Lecture: The Molecular Structure of Single Cell Organisms
        </p>
        <span class="text-gray-600 pb-10 font-thin">Participants</span>
        <div class="flex flex-row mt-2">
          <img
            v-for="participant in participants"
            :key="participant.name"
            class="w-12 h-12 object-cover rounded-full"
            :src="participant.src"
          />
        </div>

        <div class="details mt-20 space-y-6">
          <div class="date flex flex-cols items-start">
            <span class="mr-8"
              ><i class="bx bx-calendar text-gray-400 text-3xl"></i
            ></span>
            <div class="text-left">
              <p class="font-extrabold text-xl">10 October,2021</p>
              <p class="text-base text-gray-400 font-normal mt-1">Date</p>
            </div>
          </div>

          <div class="date flex flex-cols items-start">
            <span class="mr-8"
              ><i class="bx bx-time text-gray-400 text-3xl"></i
            ></span>
            <div class="text-left">
              <p class="font-extrabold text-xl">9:00 - 9:45</p>
              <p class="text-base text-gray-400 font-normal mt-1">Time</p>
            </div>
          </div>

          <div class="date flex flex-cols items-start">
            <span class="mr-8"
              ><i class="bx bx-timer text-gray-400 text-3xl"></i
            ></span>
            <div class="text-left">
              <p class="font-extrabold text-xl">45 mins</p>
              <p class="text-base text-gray-400 font-normal mt-1">Duration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    participants: [
      {
        name: "student1",
        src: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      },
      {
        name: "student2",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      },
      {
        name: "student3",
        src: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
      },
      {
        name: "student4",
        src: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
      },
    ],

    days: [
      { name: "Mon", date: "10", lessons: "4 lessons", grade: "Grade 9" },
      { name: "Tue", date: "11", lessons: "3 lessons", grade: "Grade 9 " },
      { name: "Wed", date: "12", lessons: "5 lessons", grade: "Grade 8 " },
      { name: "Thu", date: "13", lessons: "4 lessons", grade: "Grade 11" },
      { name: "Fri", date: "14", lessons: "5 lessons", grade: "Grade 9" },
    ],

    times: [
      {
        time: "9:00",
        src: "https://source.unsplash.com/ruJm3dBXCqw",
        subject: "Biology",
        mode: "Lecture",
      },
      {
        time: "10:00",
        src: "https://source.unsplash.com/arwTpnIUHdM",
        subject: "Chemisty",
        mode: "Tutorial",
      },
      {
        time: "11:00",
        src: "https://source.unsplash.com/KZa4fREZoKk",
        subject: "Physics",
        mode: "Test",
      },
      {
        time: "13:00",
        src: "https://source.unsplash.com/ruJm3dBXCqw",
        subject: "Biology",
        mode: "Lecture",
      },
    ],
  }),
};
</script>

<style>
.vl {
  border-left: 1px solid #ccc;
  height: 80px;
}
</style>
