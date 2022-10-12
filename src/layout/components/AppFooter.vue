<script setup lang="ts">
import { computed, defineComponent, useAttrs } from 'vue';
defineComponent({
  name: 'AppFooter',
});
const currentYear = computed(() => {
  return new Date().getFullYear();
});
const attrs = useAttrs();

</script>
<template>
  <el-footer v-bind="attrs" class="text-center">
    <div class=" leading-[60px] h-[60px]"
      >© {{ currentYear }}
      <a class="text-aiopt-dark hover:text-aiopt-primary" href="https://atelli.ai/" target="_blank">Atelli</a>
      All Rights Reserved
    </div></el-footer
  >
</template>
