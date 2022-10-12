<script setup lang="ts">
import { computed, defineComponent, useAttrs } from 'vue';
import { useI18n } from 'vue-i18n';
import { Brush } from '@element-plus/icons-vue';
import AppBreadcrumb from './AppBreadcrumb.vue';
import AppSpace from '@/components/AppSpace/Index.vue';
import AppDropdown from '@/components/AppDropdown/Index.vue';
import useLanguage from '@/hooks/useLanguage';
import AppSVG from '@/components/AppSVG/Index.vue';

defineComponent({
  name: 'AppHeader',
});
const attrs = useAttrs();
const currentEnv = import.meta.env.MODE;
const avatarImg = "'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'";
// language toggle
const { t } = useI18n();
const { currentLang, toggleLang } = useLanguage();
const onChangeLang = (selectedLang: any) => {
  toggleLang();
};

const onClickedLogout = () => {
  console.log('logout');
};

//
const languages = ['zh-TW', 'en'];
</script>
<template>
  <el-header v-bind="attrs" class="!p-4 !h-fit fixed w-full bg-white shadow-header-shadow z-[1001] border-b border-x-0 border-t-0 border-solid border-b-gray-200 flex justify-between">
    <div class="col-span-1 flex items-center">
      <AppSpace :size="16">
        <div id="logo" class="h-[44px]"><img class="h-full" src="../../assets/images/logos/Atelli.svg" alt="" /></div>
        <AppBreadcrumb class="hidden md:block"/>
      </AppSpace>
    </div>

    <div class="col-span-1 flex items-center justify-end">
      <AppSpace :size="16">
        <el-icon v-if="currentEnv === 'development'"><router-link :to="{name:'style-book'}"><Brush /></router-link></el-icon>
        <AppDropdown @command="onChangeLang">
          <div class="el-dropdown-link cursor-pointer">
            <span class="text-nowrap">Language / {{ t(currentLang) }}</span>
            <AppSVG :iconName="'bb-icon-arrow-down'" class="el-icon--right" size="14px" />
          </div>
          <template #dropdown>
            <el-dropdown-item v-for="lang in languages" :key="lang" :command="lang">{{ t(lang) }}</el-dropdown-item>
          </template>
        </AppDropdown>
        <div>
          <AppDropdown @command="onChangeLang">
            <span class="cursor-pointer">
              <el-avatar :size="36" :src="avatarImg" />
            </span>
            <template #dropdown>
              <el-dropdown-item
                ><a role="button" class="dropdown-item bb-pointer" @click="onClickedLogout">
                  {{ t('logout') }}
                </a></el-dropdown-item
              >
            </template>
          </AppDropdown>
        </div>
      </AppSpace>
    </div>
  </el-header>
</template>
