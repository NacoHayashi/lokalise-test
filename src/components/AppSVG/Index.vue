<script setup lang="ts">
import { useAttrs, computed } from 'vue';
import sprite from "@/assets/images/icons/svg-sprite.svg";

console.log(sprite)
interface IProps {
  iconName: string;
  size?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  iconName: '',
  size: '20px',
});

const attrs = useAttrs();
const iconStyle = computed(() => {
  return {
    width: props.size || '20px',
    height: props.size || '20px',
  };
});
</script>

<template>
  <svg @click="$emit('click', $event)" v-bind="attrs" :style="iconStyle" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <use :href="`${sprite}#${iconName}`"></use>
  </svg>
  <!-- <div>
    svg
  </div> -->
</template>
