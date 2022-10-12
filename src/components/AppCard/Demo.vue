<script setup>
// components
import AppCard from '@/components/AppCard/Index.vue';
</script>

<template>
  <AppCard class="mb-5 w-fit">
    <div class="text-lg text-aiopt-dark font-bold">AppCard</div>
    <div>no hover style</div>
  </AppCard>
  <AppCard class="mb-5 w-fit" :hover-style="true">
    <div class="text-lg text-aiopt-dark font-bold">AppCard</div>
    <div>with hover style</div>
  </AppCard>
</template>
