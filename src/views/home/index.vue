<template>
  <div class="home">
    <home-nav-bar />

    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>

    <home-search />
  </div>
</template>

<script setup>
import HomeNavBar from "@/views/home/cpns/HomeNavBar.vue";
import HomeSearch from "@/views/home/cpns/HomeSearch.vue";
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
