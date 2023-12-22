<script setup>
import useDetailStore from "@/stores/modules/detailStore";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

const detailStore = useDetailStore();
const { housePicture } = storeToRefs(detailStore);

const picCategoryGroup = ref({});
watch(housePicture, (val) => {
  val.housePics.forEach((pic) => {
    if (!picCategoryGroup[pic.enumPictureCategory]) {
      picCategoryGroup.value[pic.enumPictureCategory] = [pic];
    } else {
      picCategoryGroup.value[pic.enumPictureCategory].push(pic);
    }
  });
  console.log(picCategoryGroup.value);
});

const nameReg = /【(.*?)】/i;
const formatName = (title) => {
  return nameReg.exec(title)[1];
};
</script>

<template>
  <div class="swipes">
    <van-swipe>
      <template v-for="pic in housePicture.housePics">
        <van-swipe-item>
          <img :src="pic.url" style="width: 100%" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator>
        <div class="indicator">
          <template
            v-for="(picCategory, index) in picCategoryGroup"
            :key="index"
          >
            <span>{{ formatName(picCategory[0].title) }}</span>
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
}
</style>
