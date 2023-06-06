import { createRouter, createWebHistory } from "vue-router";
import UsersList from "./components/UsersList.vue";
import Landing from "./components/Landing.vue";
import Login from "./components/Login.vue";
import UserRegister from "./components/UserRegister.vue";
import Home from "./components/Home.vue";
import requireAuth from "./guards/AuthGuard.js";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
    beforeEnter: (to, from, next) => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn) {
        next("/home");
      } else {
        next();
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/create-user",
    name: "Crear usuario",
    component: UserRegister,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: requireAuth,
  },
  {
    path: "/users",
    name: "Users",
    component: UsersList,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
