<script setup>
import { useRoute, useRouter } from "vue-router";
import useDetailStore from "@/stores/modules/detailStore";
import { storeToRefs } from "pinia";

const router = useRouter();
const route = useRoute();

const onClickLeft = () => {
  router.back();
};

const detailStore = useDetailStore();
detailStore.fetchDetailInfos(route.params.id);

const { infos } = storeToRefs(detailStore);
console.log(infos.value);
</script>

<template>
  <div>
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<style scoped lang="less"></style>
