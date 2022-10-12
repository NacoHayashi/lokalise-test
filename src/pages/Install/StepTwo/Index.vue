<script setup lang="ts">
// components
import Header from '../components/Header.vue';
import FourIntros from '../components/FourIntros.vue';
import StoreInformation from './components/StoreInformation.vue';

// plugins
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="w-full">
    <Header />
    <!-- ./ header block End -->

    <div class="w-full xl:w-[1110px] mx-auto relative py-3">
      <StoreInformation class="mb-3" />
      <!-- ./ store information block End -->

      <div class="font-bold text-lg mb-2">{{ t('Now choose one following advertising goal:') }}</div>
      <FourIntros :hoverStyle="true" labelName="Launch" :canClick="true" />
      <!-- ./ select goal block End -->
    </div>
  </div>
</template>
