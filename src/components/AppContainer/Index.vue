<script setup lang="ts">
import { defineComponent, useAttrs } from 'vue';

defineComponent({
  name: 'AppContainer',
});
const attrs = useAttrs();

const props = defineProps({
  direction: {
    type: String,
  },
});

const options = { ...props, ...attrs };
</script>
<template>
  <el-container v-bind="options">
    <slot />
  </el-container>
</template>
