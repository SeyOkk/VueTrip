<script setup>
import useHomeStore from "@/stores/modules/homeStore";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { categories } = storeToRefs(homeStore);
</script>

<template>
  <div class="categories">
    <template v-for="item in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" />
        <div>{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="less">
.categories {
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  background-color: var(--home-bg-color);

  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    img {
      width: 32px;
    }

    width: 72px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
}
</style>
