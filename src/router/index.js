import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      name: "home",
      path: "/home",
      component: () => import("@/views/home/index.vue"),
    },
    {
      name: "order",
      path: "/order",
      component: () => import("@/views/order/index.vue"),
    },
    {
      name: "favor",
      path: "/favor",
      component: () => import("@/views/favor/index.vue"),
    },
    {
      name: "message",
      path: "/message",
      component: () => import("@/views/message/index.vue"),
    },
    {
      name: "city",
      path: "/city",
      component: () => import("@/views/city/index.vue"),
      meta: {
        hiddenTabBar: true,
      },
    },
    {
      name: "search",
      path: "/search",
      component: () => import("@/views/search/index.vue"),
      meta: {
        hiddenTabBar: true,
      },
    },
  ],
});

export default router;
