<script setup>
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/cityStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { formatMonth } from "@/utils/dateUtil";

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

const { currentCity } = storeToRefs(useCityStore());

const nowDate = new Date();
const nowDay = ref(formatMonth(nowDate));
const nextDay = ref(formatMonth(nowDate.setDate(nowDate.getDate() + 1)));
</script>

<template>
  <div class="search">
    <div class="location">
      <div class="city" @click="gotoCity">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span>我的位置</span>
        <img src="../../assets/img/home/icon_location.png" alt="" />
      </div>
    </div>

    <div class="selection">
      <div class="common">
        <span class="text">入住</span>
        <span class="date">{{ nowDay }}</span>
      </div>

      <div class="total-day">共一晚</div>

      <div class="common">
        <span class="text">离店</span>
        <span class="date">{{ nextDay }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.search {
  padding: 0 10px;

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

  .selection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 10px;
    width: 80%;

    .common {
      display: flex;
      flex-direction: column;

      .text {
        font-size: 12px;
        color: rgb(150, 147, 147);
        margin-bottom: 4px;
      }

      .date {
        color: #5d5a5a;
      }
    }

    .total-day {
      font-size: 13px;
      color: #645d5d;
    }
  }
}
</style>
