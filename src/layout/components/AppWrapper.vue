<script setup lang="ts">
import { defineComponent, useAttrs } from 'vue';

defineComponent({
  name: 'AppWrapper',
});
const attrs = useAttrs();
</script>
<template>
  <el-main v-bind="attrs" class="min-h-[calc(100vh-77px-60px)] md:ml-[64px]">
    <div class="max-w-[1440px] mx-auto ">
      <slot ></slot>
    </div>
  </el-main>
</template>
