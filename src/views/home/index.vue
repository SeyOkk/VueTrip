<template>
  <div class="home">
    <home-nav-bar />

    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>

    <home-search :hot-suggests="hotSuggests" />

    <home-categories />

    <div class="search-box" v-show="isShowTopSearch">
      <search-box />
    </div>

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
import useScroll from "@/hooks/UseScroll";
import { computed, watch } from "vue";
import SearchBox from "@/components/search-box/SearchBox.vue";

const homeStore = useHomeStore();
homeStore.fetchHotSuggests();
homeStore.fetchCategories();
homeStore.fetchHouseList();

const { isBottom, scrollTop } = useScroll();
watch(isBottom, (newVal) => {
  if (isBottom.value) {
    homeStore.fetchHouseList().then((res) => {
      isBottom.value = false;
    });
  }
});

const { hotSuggests } = storeToRefs(homeStore);

const isShowTopSearch = computed(() => {
  return scrollTop.value >= 440;
});
</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }

  .search-box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    height: 45px;
    padding: 6px 16px;
    box-sizing: border-box;
    background-color: #fff;
  }
}
</style>
