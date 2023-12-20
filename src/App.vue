<template>
  <div>
    <router-view></router-view>
    <loading />
    <tabbar v-if="!route.meta.hiddenTabBar"></tabbar>
  </div>
</template>

<script setup>
import tabbar from "@/components/tabbar/index.vue";
import { useRoute } from "vue-router";
import Loading from "@/components/loading/loading.vue";

const route = useRoute();
</script>

<style lang="scss" scoped></style>
