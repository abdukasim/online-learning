import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

import Teacher from "@/views/Teacher/Teacher.vue";
import Lessons from "@/views/Teacher/Lessons.vue";
import StudentList from "@/views/Teacher/StudentList";

import Student from "@/views/Student/Student.vue";
import Courses from "@/views/Student/Courses.vue";
import Profile from "@/views/Student/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/teacher",
    name: "Teacher",
    component: Teacher,
    children: [
      {
        path: "/lessons",
        component: Lessons,
      },
      {
        path: "/students",
        component: StudentList,
      },
    ],
  },
  {
    path: "/student",
    name: "Student",
    component: Student,
    children: [
      {
        path: "/courses",
        component: Courses,
      },
      {
        path: "/profile",
        component: Profile,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
