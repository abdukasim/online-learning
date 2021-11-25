<template>
  <div class="list flex-auto overflow-auto position-relative shadow-xl m-12">
    <table class="student-list w-full">
      <thead class="text-left">
        <tr>
          <th>No</th>
          <th>
            <button
              class="plain text-left w-full font-bold"
              @click="
                sortBy = 'test';
                sortBy = 'name';
              "
            >
              Name
            </button>
          </th>
          <th class="hidden md:table-cell">
            <button
              class="plain text-left w-full font-bold"
              @click="
                sortBy = 'test';
                sortBy = 'username';
              "
            >
              Username
            </button>
          </th>
          <th class="hidden md:table-cell w-14 text-center">
            <button
              class="plain text-left w-full font-bold"
              @click="
                sortBy = 'test';
                sortBy = 'grade';
              "
            >
              Grade
            </button>
          </th>
          <th class="hidden md:table-cell w-14 text-center">
            <button class="plain text-left w-full font-bold">Section</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- <Stagger :height="cellHeight"> -->
        <tr v-for="(student, i) in filteredStudents" :key="student._id">
          <!-- <tr v-for="(student, i) in filteredStudents" :key="i"> -->
          <td>{{ i + 1 }}</td>
          <td>
            {{ getName(student) }}
          </td>
          <td class="hidden md:table-cell">
            {{ student.login.username }}
          </td>
          <td class="hidden md:table-cell w-14 text-center">
            {{ student.grade.level }}
          </td>
          <td class="hidden md:table-cell w-14 text-center">
            {{ student.grade.section.toUpperCase() }}
          </td>
        </tr>
        <!-- </Stagger> -->
      </tbody>
    </table>
    <div
      class="empty-list flex justify-center"
      v-if="filteredStudents.length === 0"
    >
      <p class="my-3 text-gray-500 text-2xl">Empty List.</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sortBy: "",
    nameSorter: false,
    usernameSorter: false,
    gradeSorter: false,
    students: [],
  }),
  methods: {
    getName(student) {
      if (student.personal.name.first && student.personal.name.last)
        return `${student.personal.name.first} ${student.personal.name.last}`;
      else return `Full Name`;
    },
  },

  computed: {
    filteredStudents() {
      return this.sortedStudents.length === 0
        ? []
        : this.sortedStudents.filter((student) => {
            let pass = true;
            let name = `${student.personal.name.first} ${student.personal.name.last}`;
            pass =
              name.toLowerCase().search(this.nameFilter.toLowerCase()) !== -1;

            return pass;
          });
    },
    sortedStudents() {
      let x = false;
      return this.students.slice(0).sort((a, b) => {
        if (this.sortBy === "name") {
          this.nameSorter = !this.nameSorter;
          x = this.nameSorter ? 1 : -1;
          return this.getName(a).toLowerCase() > this.getName(b).toLowerCase()
            ? 1 * x
            : -1 * x;
        } else if (this.sortBy === "username") {
          this.usernameSorter = !this.usernameSorter;
          x = this.usernameSorter ? 1 : -1;
          return a.login.username.toLowerCase() > b.login.username.toLowerCase()
            ? 1 * x
            : -1 * x;
        } else if (this.sortBy === "grade") {
          this.gradeSorter = !this.gradeSorter;
          x = this.gradeSorter ? 1 : -1;
          return parseInt(a.grade.level) > parseInt(b.grade.level)
            ? 1 * x
            : -1 * x;
        } else return 1;
      });
    },
  },
};
</script>

<style>
th {
  @apply p-1.5 md:p-2.5;
}
td {
  @apply px-1.5 md:px-2.5;
}
@media screen and (min-width: 768px) {
  td {
    height: 48px;
  }
}
@media screen and (max-width: 768px) {
  td {
    height: 32px;
  }
}
th,
td {
  @apply text-sm md:text-base;
}
th:first-child,
td:first-child {
  @apply pl-2 md:pl-4 text-center w-6 md:w-12;
}
th:last-child,
td:last-child {
  @apply pr-3 md:pr-4;
}

th:nth-child(2) {
}
td:nth-child(2) {
  @apply bg-gray-200 bg-opacity-50;
}

thead th {
  position: sticky;
  top: 0;
  z-index: 1;
  @apply bg-gray-700 text-gray-200;
}
tbody tr {
  @apply cursor-pointer text-gray-600 hover:bg-gray-300 hover:bg-opacity-50 hover:text-black;
}
tbody tr:nth-child(2n + 1) {
  @apply bg-gray-400 bg-opacity-40;
}

.actions {
  @apply text-right;
}
.actions i {
  @apply text-sm font-bold md:text-lg mx-1 md:mx-2 text-gray-700 cursor-pointer transition-all;
}
.actions i.edit {
  @apply text-blue-400 hover:text-blue-700;
}
.actions i.delete {
  @apply text-red-400 hover:text-red-700;
}
</style>
