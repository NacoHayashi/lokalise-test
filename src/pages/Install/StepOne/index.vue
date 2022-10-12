<script setup lang="ts">
// components
import AppCarousel from '@/components/AppCarousel/Index.vue';
import AppCarouselItem from '@/components/AppCarouselItem/Index.vue';
import CarouselOne from './components/CarouselOne.vue';
import CarouselTwo from './components/CarouselTwo.vue';
import CarouselThree from './components/CarouselThree.vue';
import Header from '../components/Header.vue';

// plugins
import { h, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// data
const carouselREF = ref();
const activeCarouselIndex = ref(0);
const steps = [
  { id: 0, titles: ['Pre-Lauch Set-Up', "While we're loading your data. here's an interesting statistic:"], component: CarouselOne },
  { id: 1, titles: ['Pre-Lauch Set-Up', "While we're loading your data. here's an interesting statistic:"], component: CarouselTwo },
  { id: 2, titles: ['Data analysis in progress...'], component: CarouselThree },
];

// methods
const onChangeCarousel = (index: number) => {
  console.log('change', index);
  activeCarouselIndex.value = index;
};
const goToPrevCut = () => {
  carouselREF.value.prev();
};
const goToNextCut = () => {
  carouselREF.value.next();
};
</script>
<template>
  <div class="w-full">
    <Header />
    <!-- ./ header block End -->

    <div class="w-full xl:w-[1110px] mx-auto relative">
      <div class="h-[120px] flex flex-col justify-center text-center text-xl font-bold text-aiopt-dark">
        <div v-for="title in steps[activeCarouselIndex].titles" :key="title">{{ t(`${title}`) }}</div>
      </div>
      <!-- ./ step title block End -->

      <AppCarousel ref="carouselREF" arrow="never" indicator-position="none" :autoplay="true" height="500px" @change="onChangeCarousel">
        <AppCarouselItem v-for="item in steps" :key="item.id">
          <component :is="item.component" />
        </AppCarouselItem>
      </AppCarousel>
      <!-- ./ carousel block End -->
    </div>
  </div>
</template>

<style scoped></style>
