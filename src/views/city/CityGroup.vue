<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/cityStore";

const props = defineProps({
  groupData: {
    default: () => ({}),
    required: true,
  },
});

const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group);
  list.unshift("#");
  return list;
});

const router = useRouter();
const store = useCityStore();
const cityClick = (city) => {
  console.log(city);
  store.currentCity = city;
  router.back();
};
</script>

<template>
  <van-index-bar
    highlight-color="#ff9875"
    :sticky="false"
    :index-list="indexList"
  >
    <van-index-anchor>热门</van-index-anchor>
    <div class="hotCity">
      <template v-for="item in groupData.hotCities" :key="item.cityId">
        <div class="city" @click="cityClick(item)">
          {{ item.cityName }}
        </div>
      </template>
    </div>
    <template v-for="(cityGroup, index) in groupData?.cities" :key="index">
      <van-index-anchor :index="cityGroup.group" />
      <template v-for="city in cityGroup?.cities" :key="city.cityId">
        <van-cell :title="city.cityName" @click="cityClick(city)" />
      </template>
    </template>
  </van-index-bar>
</template>

<style scoped lang="less">
.hotCity {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px 20px 10px 10px;

  .city {
    width: 70px;
    height: 28px;
    color: #333;
    font-size: 12px;
    background-color: #fff4ec;
    border-radius: 14px;
    text-align: center;
    line-height: 28px;
    margin: 6px 0;
  }
}
</style>
