<script setup>
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import useCityStore from "@/stores/modules/cityStore";
import { storeToRefs } from "pinia";
import CityGroup from "@/views/city/CityGroup.vue";

const router = useRouter();

const onCancel = () => {
  router.back();
};

const activeName = ref();

const store = useCityStore();
store.fetchAllCity();
const { allCity } = storeToRefs(store);

// const groupData = computed(() => allCity.value[activeName.value]);
</script>

<template>
  <div class="city">
    <div class="top">
      <van-search show-action placeholder="城市/区域/位置" @cancel="onCancel" />

      <van-tabs v-model:active="activeName" color="#ff9854">
        <template v-for="(item, key) in allCity">
          <van-tab :title="item.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <div class="content">
      <template v-for="(item, key) in allCity" :key="key">
        <city-group v-show="activeName === key" :group-data="item" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  height: calc(100vh - 94px);
  overflow-y: auto;
}
</style>
