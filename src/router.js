import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import ShowProject from "./pages/ShowProject.vue";


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
    {
        path: "/projects/:slug",
        name: "showProject",
        component: ShowProject
    }
  ],
});

export { router };
