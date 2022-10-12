<script setup lang="ts">
// components
import AppCard from '@/components/AppCard/Index.vue';
import AppTag from '@/components/AppTag/Index.vue';

// plugins
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

// props
const props = defineProps({
  hoverStyle: {
    type: Boolean,
    default: false,
  },
  labelName: {
    type: String,
    default: 'Ready to use',
  },
  canClick: {
    type: Boolean,
    default: false,
  },
});

// data
const { t } = useI18n();
const activeItem = ref();
const intros = [
  { id: 1, description: 'Increase website traffic', label: props.labelName },
  { id: 2, description: 'Increase new customers', label: props.labelName },
  { id: 3, description: 'Keeping existing customers coming back for more', label: props.labelName },
  { id: 4, description: 'Merchandise sales', label: props.labelName },
];

// methods
type TItem = { id: number; description: string; label?: string };
const clickHandler = (item: TItem) => {
  console.log(item.description);
  if (props.canClick) {
    activeItem.value = item.id;
  }
};
</script>

<template>
  <div class="flex justify-center gap-3">
    <AppCard
      v-for="item in intros"
      :key="item.id"
      :hoverStyle="props.hoverStyle"
      :activeStyle="activeItem === item.id"
      :class="['flex flex-col justify-between items-center w-1/4 text-center text-base font-bold text-aiopt-dark px-4 py-5', { 'cursor-pointer': props.canClick }]"
      @click.capture="clickHandler(item)"
    >
      <div class="text-cyan-500 mb-2">{{ t(`${item.description}`) }}</div>
      <AppTag>{{ t(`${item.label}`) }}</AppTag>
    </AppCard>
  </div>
</template>
