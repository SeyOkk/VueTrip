<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabbarData">
      <div
        class="tabbar-item"
        @click="changeTabbar(index, item.path)"
        :class="{ active: currentIndex === index }"
      >
        <img
          v-if="currentIndex !== index"
          :src="getAssetsImg(item.img)"
          alt=""
        />
        <img v-else :src="getAssetsImg(item.imgActive)" alt="" />
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar";
import { getAssetsImg } from "@/utils/getAssets";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const currentIndex = ref(0);
watch(route, (newRoute) => {
  const index = tabbarData.findIndex((item) => item.path === newRoute.path);
  if (index === -1) return;
  currentIndex.value = index;
});

const changeTabbar = (index, path) => {
  currentIndex.value = index;
  router.push(path);
};
</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: solid 1px #f3f3f3;
  background-color: #fff;

  .tabbar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      color: var(--primary-color);
    }

    img {
      width: 36px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>
