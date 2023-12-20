<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params.id);
</script>

<template>
  <div>详情页 {{ $route.params.id }}</div>
</template>

<style scoped lang="less"></style>
