import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/routes/routes";

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
});
