<script setup lang="ts">
// plugins
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="w-full h-[66px] bg-[#4285f4] flex items-center justify-center">
    <div class="w-[120px] absolute left-2">
      <img class="object-cover w-full" src="@/assets/images/logo/Atelli.svg" alt="Atelli Logo" />
    </div>
    <div class="text-white">
      <div class="font-semibold text-center">{{ t('Installation Process Guide') }}</div>
      <div class="text-center text-sm">{{ t("We're still loading your data, but we'll let you know as soon as your A.I. optimization  account is ready.") }}</div>
    </div>
  </div>
</template>
