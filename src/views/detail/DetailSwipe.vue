<script setup>
import useDetailStore from "@/stores/modules/detailStore";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

const detailStore = useDetailStore();
const { housePicture } = storeToRefs(detailStore);

const picCategoryGroup = ref({});
watch(housePicture, (val) => {
  val.housePics.forEach((pic) => {
    if (!picCategoryGroup.value[pic.enumPictureCategory]) {
      picCategoryGroup.value[pic.enumPictureCategory] = [pic];
    } else {
      picCategoryGroup.value[pic.enumPictureCategory].push(pic);
    }
  });
});

const nameReg = /【(.*?)】/i;
const formatName = (title) => {
  return nameReg.exec(title)[1];
};

const getCategoryIndex = (item) => {
  const picArr = picCategoryGroup.value[item.enumPictureCategory];
  return picArr.findIndex((data) => data == item) + 1;
};
</script>

<template>
  <div class="swipes">
    <van-swipe :autoplay="3000">
      <template v-for="pic in housePicture.housePics">
        <van-swipe-item>
          <img :src="pic.url" style="width: 100%" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(picCategory, key) in picCategoryGroup" :key="key">
            <span
              class="item"
              :class="{
                active:
                  housePicture.housePics[active]?.enumPictureCategory == key,
              }"
            >
              <span>{{ formatName(picCategory[0].title) }}</span>
              <span
                v-if="
                  housePicture.housePics[active]?.enumPictureCategory == key
                "
              >
                {{ getCategoryIndex(housePicture.housePics[active]) }}/{{
                  picCategory.length
                }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style scoped lang="less">
.indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);

  .item {
    margin: 0 3px;

    &.active {
      padding: 0 3px;
      border-radius: 4px;
      background-color: #fff;
      color: #333;
    }
  }
}
</style>
