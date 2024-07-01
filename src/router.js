import { createRouter, createWebHistory } from "vue-router";
import ProjectPage from "./pages/ProjectPage.vue";
import HomePage from "./pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectPage,
    },
  ],
});

export { router };
