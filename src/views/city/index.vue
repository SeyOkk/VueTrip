<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import useCityStore from "@/stores/modules/cityStore";
import { storeToRefs } from "pinia";

const router = useRouter();

const onCancel = () => {
  router.back();
};

const active = ref(0);

const store = useCityStore();
store.fetchAllCity();
const { allCity } = storeToRefs(store);
</script>

<template>
  <div class="city">
    <van-search show-action placeholder="城市/区域/位置" @cancel="onCancel" />

    <van-tabs v-model:active="active" color="#ff9854">
      <template v-for="item in allCity">
        <van-tab :title="item.title"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<style scoped lang="less"></style>
