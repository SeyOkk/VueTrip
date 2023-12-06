<script setup>
defineProps({
  house: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="container">
    <div class="cover">
      <img :src="house?.image?.url" alt="" />
    </div>
    <div class="info">
      <div class="item location">
        <img src="@/assets/img/home/location.png" alt="" />
        {{ house?.location }}
      </div>
      <div class="item house-name">
        {{ house?.houseName }}
      </div>
      <div class="item summary">
        {{ house?.summaryText }}
      </div>
      <div class="price-info">
        <span class="final-price">￥{{ house?.finalPrice }}</span>
        <span class="item product-price">￥{{ house?.productPrice }}</span>
        <span
          class="item tip-badge"
          :style="{
            color: house?.priceTipBadge?.color,
            'background-image':
              'linear-gradient(90deg, ' +
              house?.priceTipBadge?.gradient?.startColor +
              ', #' +
              house?.priceTipBadge?.gradient?.endColor +
              ')',
          }"
          >{{ house?.priceTipBadge?.text }}</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  width: 49%;
  margin-bottom: 10px;

  .cover {
    img {
      width: 100%;
      border-radius: 8px;
    }
  }

  .info {
    padding: 10px 10px 0;
    font-size: 12px;

    .item {
      margin-bottom: 8px;
    }

    .location {
      display: flex;
      align-items: center;

      img {
        width: 14px;
      }
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
      font-size: 14px;

      span {
        margin-right: 4px;
      }

      .item {
        font-size: 12px;
        vertical-align: top;
      }

      .final-price {
        color: var(--primary-color);
      }

      .product-price {
        color: #9a9b9f;
        text-decoration: line-through;
      }

      .tip-badge {
        padding: 0 4px;
        border-radius: 6px;
      }
    }
  }
}
</style>
