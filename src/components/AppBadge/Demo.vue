<script setup>
// components
import AppBadge from '@/components/AppBadge/Index.vue';
</script>

<template>
  <div class="mb-5 rounded-md bg-aiopt-primary/30 p-4 w-fit">
    <div class="text-lg text-aiopt-dark font-bold">AppBadge</div>
    <AppBadge :value="12" />
  </div>
</template>
