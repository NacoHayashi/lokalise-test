<script setup lang="ts">
import AppSVG from '@/components/AppSVG/Index.vue';
import { useAttrs, GlobalComponents, ref } from 'vue';

const attrs = useAttrs();
const props = defineProps({
  arrowOutside: {
    type: Boolean,
    default: false,
  },
  cutsNumber: {
    type: Number,
    default: 1,
  },
});

const defaultOption: Partial<GlobalComponents['ElCarousel']> = {
  height: '300px',
  arrow: props.arrowOutside ? 'never' : 'always',
  autoplay: false,
};

const option: Partial<GlobalComponents['ElCarousel']> = {
  ...defaultOption,
  ...attrs,
};

const $emit = defineEmits<{
  (e: 'change', id: number): void;
}>();

const carouselREF = ref();
const currentCut = ref(0);
const onChange = (index: number) => {
  currentCut.value = index;
  $emit('change', index);
};

const prev = () => {
  carouselREF.value.prev();
};

const next = () => {
  carouselREF.value.next();
};

const setActiveItem = (index: number) => {
  carouselREF.value.setActiveItem(index);
};

// for parent use api
defineExpose({
  /** @description manually switch slide */
  setActiveItem,
  /** @description switch to the previous slide */
  prev,
  /** @description switch to the next slide */
  next,
});
</script>

<template>
  <!-- arrow at outside -->
  <div v-if="props.arrowOutside" class="carousel-card">
    <div v-show="currentCut !== 0" class="carousel-arrow carousel-prev" @click="prev">
      <AppSVG iconName="bb-icon-arrow-left" />
    </div>
    <el-carousel ref="carouselREF" v-bind="option" @change="onChange">
      <slot></slot>
    </el-carousel>
    <div v-show="currentCut !== cutsNumber - 1 && cutsNumber > 0" class="carousel-arrow carousel-next" @click="next">
      <AppSVG iconName="bb-icon-arrow-right" />
    </div>
  </div>

  <!-- default element ui arrow -->
  <el-carousel v-else ref="carouselREF" v-bind="option" @change="onChange">
    <slot></slot>
  </el-carousel>
</template>

<style lang="scss" scoped>
::v-deep .el-carousel__indicators--horizontal {
  overflow-x: scroll;
  max-width: 205px;
  display: flex;
  &::-webkit-scrollbar {
    opacity: 0;
    height: 3px;
    transition: opacity 0.7s ease;
  }
  &:hover {
    &::-webkit-scrollbar {
      opacity: 1;
    }
    &::-webkit-scrollbar-track {
      border-radius: 0;
      // box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 0;
    }

    &::-webkit-scrollbar-thumb:window-inactive {
      background: rgba(0, 0, 0, 0.1);
    }
  }
}
.el-carousel.el-carousel--horizontal {
  overflow: hidden;
}

::v-deep .el-carousel__container {
  width: 100%;
  height: 115px;
  overflow: hidden;
}

::v-deep .is-active {
  .el-carousel__button {
    height: 6px;
    width: 44px;
    border-radius: 5px;
    background-color: rgba(116, 138, 161, 0.5);
  }
}
::v-deep .el-carousel__button {
  height: 6px;
  width: 6px;
  opacity: 0.4;
  border-radius: 5px;
  background-color: #748aa1;
}

.carousel-card {
  position: relative;
  .carousel-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 40%;
    position: absolute;
    cursor: pointer;
    z-index: 999;
    box-sizing: border-box;
    height: 36px;
    width: 36px;
    border: 1px solid rgba(116, 138, 161, 0.25);
    border-radius: 18px;
    background-color: #ffffff;
    box-shadow: 0 8px 24px 0 rgba(37, 38, 94, 0.06);
    font-weight: bolder;
    color: #0d1c2e;
  }
  .carousel-prev {
    left: -17px;
  }
  .carousel-next {
    right: -17px;
  }

  ::v-deep .el-carousel__container {
    height: 275px;
  }
}
</style>
