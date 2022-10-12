<script setup lang="ts">
import { useAttrs, GlobalComponents } from 'vue';

const attrs = useAttrs();

const defaultOption: Partial<GlobalComponents['ElTag']> = {
  size: 'default',
  effect: 'light',
};

const option: Partial<GlobalComponents['ElTag']> = {
  ...defaultOption,
  ...attrs,
};
</script>

<template>
  <el-tag v-bind="option">
    <slot></slot>
  </el-tag>
</template>
