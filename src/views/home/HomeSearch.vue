<script setup>
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/cityStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { formatMonthDay, getDiffDays } from "@/utils/dateUtil";

const props = defineProps({
  hotSuggests: {
    type: Array,
    default: () => [],
  },
});

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
const nextDate = new Date().setDate(nowDate.getDate() + 1);
const startDay = ref(formatMonthDay(nowDate));
const endDay = ref(formatMonthDay(nextDate));
const diffDays = ref(getDiffDays(nowDate, nextDate));

const show = ref(false);
const onConfirm = (values) => {
  const [start, end] = values;
  startDay.value = formatMonthDay(start);
  endDay.value = formatMonthDay(end);
  diffDays.value = getDiffDays(start, end);
  show.value = false;
};
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

    <div class="item item-flex selection" @click="show = true">
      <div class="common">
        <span class="text">入住</span>
        <span class="date">{{ startDay }}</span>
      </div>

      <div class="total-day">共{{ diffDays }}晚</div>

      <div class="common">
        <span class="text">离店</span>
        <span class="date">{{ endDay }}</span>
      </div>
    </div>

    <van-calendar
      v-model:show="show"
      type="range"
      color="#ff9854"
      :show-confirm="false"
      @confirm="onConfirm"
    />

    <div class="item item-flex desc">
      <span>价格不限</span>
      <span>人数不限</span>
    </div>

    <div class="item item-flex desc keyword">
      <span>关键字/位置/民宿</span>
    </div>

    <div class="item">
      <template v-for="item in hotSuggests">
        <div
          class="hot-suggest"
          :style="{
            color: item.tagText.color,
            'background-color': item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
.search {
  padding: 10px;
  background-color: #f6f8fa;

  .location {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 12px;

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

  .item {
    width: 80%;
    margin: 16px 10px;
  }

  .item-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .selection {
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

  .desc {
    font-size: 12px;
    color: #9a9b9f;
  }

  .keyword {
    margin: 24px 10px;
  }

  .hot-suggest {
    display: inline-block;
    margin: 3px;
    padding: 4px 6px;
    border-radius: 8px;
    font-size: 12px;
  }
}
</style>
