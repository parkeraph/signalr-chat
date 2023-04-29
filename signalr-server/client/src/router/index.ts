import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Chat from "../views/Chat.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
