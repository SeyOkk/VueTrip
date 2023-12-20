<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="house in houseList">
        <home-item-v3
          v-if="house.discoveryContentType === 3"
          :house="house.data"
          @click="gotoDetail(house.data)"
        />
        <home-item-v9
          v-if="house.discoveryContentType === 9"
          :house="house.data"
          @click="gotoDetail(house.data)"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/homeStore";
import { storeToRefs } from "pinia";
import HomeItemV3 from "@/components/home-item/HomeItemV3.vue";
import HomeItemV9 from "@/components/home-item/HomeItemV9.vue";
import { useRouter } from "vue-router";

const homeStore = useHomeStore();
const { houseList } = storeToRefs(homeStore);

const router = useRouter();
const gotoDetail = (house) => {
  router.push(`/detail/${house.houseId}`);
};
</script>

<style lang="less" scoped>
.content {
  background-color: var(--home-bg-color);
  padding: 0 16px;

  .title {
    margin-bottom: 20px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
