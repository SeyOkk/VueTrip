<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log("获取位置成功：", res);
      console.log("经纬度：", res.coords.latitude, res.coords.longitude);
    },
    (err) => {
      console.log("获取位置失败：", err);
    },
    {}
  );
};

const gotoCity = () => {
  router.push("/city");
};
</script>

<template>
  <div class="location">
    <div class="city" @click="gotoCity">广州</div>
    <div class="position" @click="positionClick">
      <span>我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="" />
    </div>
  </div>
</template>

<style scoped lang="less">
.location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 12px 0 12px;

  .city {
    font-size: 15px;
  }

  .position {
    display: flex;
    align-items: center;
    font-size: 12px;

    img {
      width: 22px;
      margin-left: 6px;
    }
  }
}
</style>
