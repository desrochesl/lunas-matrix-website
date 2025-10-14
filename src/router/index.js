// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Add from "../components/Add.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/add", component: Add },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
