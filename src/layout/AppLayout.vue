<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppContainer from '@/components/AppContainer/Index.vue';
import AppSidebar from './components/AppSidebar.vue';
import AppWrapper from './components/AppWrapper.vue';
import AppFooter from './components/AppFooter.vue';
import { defineComponent, useAttrs } from 'vue';

defineComponent({
  name: 'AppHeader',
});
const attrs = useAttrs();
</script>
<template>
  <div class="app-layout" v-bind="attrs">
    <AppContainer direction="vertical">
      <AppHeader />
      <AppContainer class="mt-[77px] ">
        <AppSidebar class="hidden md:block" />
        <AppWrapper>
          <router-view/>
        </AppWrapper>
      </AppContainer>
      <AppFooter />
    </AppContainer>
  </div>
</template>
