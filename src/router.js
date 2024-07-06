import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import ShowProject from "./pages/ShowProject.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import ContactsPage from "./pages/ContactsPage.vue";

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
      component: ShowProject,
    },
    {
      path: "/contacts",
      nome: "contacts",
      component: ContactsPage,
    },
    //questa deve essere sempre l'ultima in modo che controlli tutte le rotte prima del notFounf
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundPage,
    },
  ],
});

export { router };
