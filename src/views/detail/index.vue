<script setup>
import { useRoute, useRouter } from "vue-router";
import useDetailStore from "@/stores/modules/detailStore";
import DetailSwipe from "@/views/detail/DetailSwipe.vue";

const router = useRouter();
const route = useRoute();

const onClickLeft = () => {
  router.back();
};

const detailStore = useDetailStore();
detailStore.fetchDetailInfos(route.params.id);
</script>

<template>
  <div>
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />

    <detail-swipe />
  </div>
</template>

<style scoped lang="less"></style>
