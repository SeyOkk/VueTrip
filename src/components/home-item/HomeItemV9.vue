<script setup>
import { computed } from "vue";

const props = defineProps({
  house: {
    type: Object,
    default: () => ({}),
  },
});

const score = computed(() => {
  return Number(props.house.commentScore);
});
</script>

<template>
  <div class="container">
    <div class="cover">
      <img :src="house.image.url" alt="" />
      <div class="info">
        <span class="item summary">
          {{ house.summaryText }}
        </span>
        <span class="item house-name">{{ house.houseName }}</span>
        <div class="item price-info">
          <van-rate v-model="score" :size="15" allow-half />
          <div class="price">￥{{ house.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  width: 49%;
  margin-bottom: 10px;

  .cover {
    position: relative;

    img {
      width: 100%;
      border-radius: 8px;
    }

    .info {
      position: absolute;
      bottom: 0;
      padding: 10px;
      padding-bottom: 0;
      color: #fff;
      font-size: 12px;

      display: flex;
      justify-content: center;
      flex-direction: column;

      .item {
        margin-bottom: 10px;
      }

      .house-name {
        font-size: 14px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; /* 这里是超出几行省略 */
        overflow: hidden;
      }

      .price-info {
        display: flex;
        justify-content: space-between;

        .price {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
