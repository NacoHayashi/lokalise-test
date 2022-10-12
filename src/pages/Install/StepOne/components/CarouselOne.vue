<script setup lang="ts">
// plugins
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="relative">
    <img class="w-3/4" src="@/assets/images/install/24hour_monitoring.png" alt="24H Monitoring" />
    <div class="absolute right-0 top-1/2 w-1/4 text-right">
      <div class="text-cyan-500 text-lg font-bold mb-4">
        {{ t('24H efficient monitoring') }}<br />
        <div v-html="t(`at just <span class='custom-text'>{percent}</span> manpower.`, { percent: '30%' })" />
      </div>
      <div class="text-aiopt-dark font-medium text-base">
        {{
          t(
            'Let A.I. do the works and find potential customers for you even in your sleep. Do more with less, simplify cumbersome marketing tasks, and reach performance targets faster with A.I. support.'
          )
        }}
      </div>
    </div>
  </div>
</template>

<style>
.custom-text {
  @apply text-5xl italic;
}
</style>
