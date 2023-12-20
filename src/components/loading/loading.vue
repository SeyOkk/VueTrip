<script setup>
import useMainStore from "@/stores/modules/mainStore";

const mainStore = useMainStore();

const loadingClick = () => {
  mainStore.isLoading = false;
};
</script>

<template>
  <div class="loading" v-show="mainStore.isLoading" @click="loadingClick">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" />
    </div>
  </div>
</template>

<style scoped lang="less">
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;

  .bg {
    width: 104px;
    height: 104px;

    background: url("@/assets/img/home/loading-bg.png") 0 0 / 100% 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 8px;
    }
  }
}
</style>
