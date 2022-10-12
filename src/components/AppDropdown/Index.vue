<script setup lang="ts">
import { defineComponent, useAttrs } from 'vue';

defineComponent({
  name: 'AppDropdown',
});

const attrs = useAttrs();

const props = defineProps({});
</script>
<template>
  <el-dropdown v-bind="attrs">
    <slot></slot>
    <template #dropdown>
      <el-dropdown-menu>
        <slot name="dropdown"></slot>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
