<script setup lang="ts">
import { useAttrs, GlobalComponents, defineComponent } from 'vue';

defineComponent({
  name: 'AppSpace',
});
const attrs = useAttrs();

const defaultOption: Partial<GlobalComponents['ElSpace']> = {
  size:8
};

const option: Partial<GlobalComponents['ElSpace']> = {
  ...defaultOption,
  ...attrs,
};
</script>

<template>
  <el-space v-bind="option">
    <slot></slot>
  </el-space>
</template>
