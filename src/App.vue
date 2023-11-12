<template>
  <div>
    <router-view></router-view>
    <tabbar v-if="!route.meta.hiddenTabBar"></tabbar>
  </div>
</template>

<script setup>
import tabbar from "@/components/tabbar/index.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style lang="scss" scoped></style>
