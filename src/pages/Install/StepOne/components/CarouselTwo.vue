<script setup lang="ts">
// components
import FourIntros from '../../components/FourIntros.vue';
import AnalyticsDataImg from '@/assets/images/install/analytics_data.svg';
import OnlineAdvertisingImg from '@/assets/images/install/online_advertising.svg';
import DiscoverAudiencesImg from '@/assets/images/install/discover_audiences.svg';
import ExpertSupportImg from '@/assets/images/install/expert_support.svg';

// plugins
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const intros = [
  { id: 1, description: "Configure A.I. Optimization's Analytics and discover new opportunities.", imgSrc: AnalyticsDataImg, imgName: 'Analytics Data' },
  { id: 2, description: 'Get assistance with automating your online advertising.', imgSrc: OnlineAdvertisingImg, imgName: 'Online Advertising' },
  { id: 3, description: 'Discover our A.I. audiences and launch your first campaigns.', imgSrc: DiscoverAudiencesImg, imgName: 'Discover Audiences' },
  { id: 4, description: 'Get tailored advice from an expert and optimize your advertising with A.I. Optimization.', imgSrc: ExpertSupportImg, imgName: 'Expert Support' },
];
</script>

<template>
  <div class="text-base">
    <FourIntros />
    <div class="flex justify-center gap-3 mt-10">
      <div v-for="item in intros" :key="item.id" :hoverStyle="true" class="w-1/4 flex flex-col gap-4 items-center">
        <img class="max-w-full h-[150px] object-cover" :src="item.imgSrc" :alt="item.imgName" />
        <div class="p-5 font-bold text-aiopt-dark">{{ t(`${item.description}`) }}</div>
      </div>
    </div>
  </div>
</template>
