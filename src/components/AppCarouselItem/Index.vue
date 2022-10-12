<script setup lang="ts">
import { useAttrs, GlobalComponents } from 'vue';

const attrs = useAttrs();

const defaultOption: Partial<GlobalComponents['ElCarouselItem']> = {
  
};

const option: Partial<GlobalComponents['ElCarouselItem']> = {
  ...defaultOption,
  ...attrs,
};
</script>

<template>
  <el-carousel-item v-bind="option">
    <slot></slot>
  </el-carousel-item>
</template>
