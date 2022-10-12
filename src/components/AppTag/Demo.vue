<script setup>
// components
import AppTag from '@/components/AppTag/Index.vue';

// plugins
import { ref } from 'vue';

const round = ref(false);
</script>

<template>
  <div class="mb-5 rounded-md bg-aiopt-primary/30 p-4 w-fit">
    <div class="text-lg text-aiopt-dark font-bold">AppTag</div>
    <div class="flex gap-2">
      <AppTag size="small" type="info" :round="round">small</AppTag>
      <AppTag closable>default</AppTag>
      <AppTag size="large" type="danger" :round="round">large</AppTag>
    </div>
    <button class="bg-aiopt-primary text-white self-start" @click="round = !round">Toggle Round</button>
  </div>
</template>
