import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Teacher from "@/views/Teacher/Teacher.vue";
import Lessons from "@/views/Teacher/Lessons.vue";
import StudentView from "@/views/Teacher/StudentView.vue";

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
        component: StudentView,
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
