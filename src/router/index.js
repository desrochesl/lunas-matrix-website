// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/Home.vue";
import Add from "../Pages/Add.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/add", component: Add },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
