<template>
  <div class="home">
    <home-nav-bar />

    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>

    <home-search :hot-suggests="hotSuggests" />

    <home-categories />

    <home-content />
  </div>
</template>

<script setup>
import HomeNavBar from "@/views/home/HomeNavBar.vue";
import HomeSearch from "@/views/home/HomeSearch.vue";
import useHomeStore from "@/stores/modules/homeStore";
import { storeToRefs } from "pinia";
import HomeCategories from "@/views/home/HomeCategories.vue";
import HomeContent from "./HomeContent.vue";

const homeStore = useHomeStore();
homeStore.fetchHotSuggests();
homeStore.fetchCategories();
homeStore.fetchHouseList();

const { hotSuggests } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
