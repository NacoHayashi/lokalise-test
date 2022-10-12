<script setup lang="ts">
// components
import AppCarousel from '@/components/AppCarousel/Index.vue';
import AppCarouselItem from '@/components/AppCarouselItem/Index.vue';

// plugins
import { ref } from 'vue';

const outsideREF = ref();
const insideREF = ref();

const onChangeCarousel = (index: number) => {
  console.log(index);
};

const insideNext = () => {
  insideREF.value.next();
};
const insidePrev = () => {
  insideREF.value.prev();
};
const outsideNext = () => {
  outsideREF.value.next();
};
const outsidePrev = () => {
  outsideREF.value.prev();
};
</script>

<template>
  <div class="flex gap-4">
    <div class="mb-5 rounded-md bg-aiopt-primary/30 w-[600px] p-4">
      <div class="text-lg text-aiopt-dark font-bold">App Carousel - default</div>
      <el-button @click="insidePrev"> prev</el-button>
      <el-button @click="insideNext"> next</el-button>
      <div class="flex flex-col">
        <AppCarousel ref="insideREF"  @change="onChangeCarousel">
          <AppCarouselItem v-for="item in 4" :key="item">
            <div class="  bg-neutral-500 h-full w-full">
              <h3 text="2xl" justify="center">{{ item }} Cut</h3>
            </div>
          </AppCarouselItem>
        </AppCarousel>
      </div>
    </div>
    <div class="mb-5 rounded-md bg-aiopt-primary/30 w-[600px] p-4">
      <div class="text-lg text-aiopt-dark font-bold">App Carousel - arrow outside</div>
      <el-button @click="outsidePrev"> prev</el-button>
      <el-button @click="outsideNext"> next</el-button>
      <div class="flex flex-col">
        <AppCarousel ref="outsideREF" :arrow-outside="true" :cuts-number="4" @change="onChangeCarousel">
          <AppCarouselItem v-for="item in 4" :key="item">
            <div class=" bg-neutral-500 h-full w-full">
              <h3 text="2xl" justify="center">{{ item }} Cut</h3>
            </div>
          </AppCarouselItem>
        </AppCarousel>
      </div>
    </div>
  </div>
</template>
