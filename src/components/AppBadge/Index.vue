<script setup lang="ts">
import { useAttrs, GlobalComponents } from 'vue';

const attrs = useAttrs();

const defaultOption: Partial<GlobalComponents['ElBadge']> = {
  type: 'primary',
};

const option: Partial<GlobalComponents['ElBadge']> = {
  ...defaultOption,
  ...attrs,
};
</script>

<template>
  <el-badge v-bind="option" class="custom-badge">
    <slot></slot>
  </el-badge>
</template>

<style lang="scss">
.custom-badge {
  min-height: 12px;
  min-width: 12px;
  border-radius: 10px;
  padding: 1px 2.5px;
  .el-badge__content {
    font-size: 0.75rem;
    line-height: 10px;
    position: relative;
    transform: translateY(0%) translateX(0%) scaleX(0.66) scaleY(0.66);
    border: 0;
  }
}
</style>
