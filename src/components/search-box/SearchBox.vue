<script setup>
import useMainStore from "@/stores/modules/mainStore";
import { storeToRefs } from "pinia";
import { formatMonthDay } from "@/utils/dateUtil";
import { computed } from "vue";

const { hotelDate } = storeToRefs(useMainStore());

const startDate = computed(() =>
  formatMonthDay(hotelDate.value.startDate, "MM.DD")
);
const endDate = computed(() =>
  formatMonthDay(hotelDate.value.endDate, "MM.DD")
);
</script>

<template>
  <div class="search">
    <div class="left">
      <div class="item start">
        <span class="title">住</span>
        <span class="date">{{ startDate }}</span>
      </div>
      <div class="item end">
        <span class="title">离</span>
        <span class="date">{{ endDate }}</span>
      </div>
      <div></div>
    </div>
    <div class="content">
      <div class="keyword">关键字/位置/名宿</div>
    </div>
    <div class="right">
      <i class="search-icon"></i>
    </div>
  </div>
</template>

<style scoped lang="less">
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #f1f3f5;
  height: 45px;
  border-radius: 5px;
  padding: 4px 8px;
  box-sizing: border-box;
  font-size: 12px;

  .left {
    .item {
      display: flex;
      align-items: center;
    }

    .title {
      color: #c9c6c4;
      margin-right: 2px;
    }

    .date {
      color: #666a73;
    }
  }

  .content {
    flex: 1;
    height: 45px;
    line-height: 45px;
    margin-left: 10px;

    .keyword {
      color: #9c9b9d;
    }
  }

  .right {
    height: 45px;
    display: flex;
    align-items: center;
    .search-icon {
      display: inline-block;
      height: 24px;
      width: 24px;
      background-image: url("../../assets/img/home/home-sprite.png");
      background-position: -29px -151px;
      background-size: 207px 192px;
    }
  }
}
</style>
