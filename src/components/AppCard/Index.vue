<script setup lang="ts">
const props = defineProps({
  hoverStyle: {
    type: Boolean,
    default: false,
  },
  activeStyle: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    :class="[
      'bg-white px-9 py-10 relative shadow-card  rounded-2xl',
      { 'hover-style': props.hoverStyle, 'active-style': props.activeStyle, 'border border-solid border-aiopt-gray-25': !props.hoverStyle },
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss">
.hover-style {
  box-sizing: border-box;
  box-shadow: inset 0 0 0 1px rgba(116, 138, 161, 0.25), 0px 16px 38px rgba(37, 38, 94, 0.0843805);

  &:hover {
    box-shadow: inset 0 0 1px 2.5px #4e61ff, 0px 16px 38px rgba(37, 38, 94, 0.0843805);
  }
}
.active-style {
  box-shadow: inset 0 0 1px 2.5px #4e61ff, 0px 16px 38px rgba(37, 38, 94, 0.0843805);
}
</style>
