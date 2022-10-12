<script setup lang="ts">
// plugins
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t } = useI18n();
const router = useRouter();
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-5 text-center text-aiopt-dark text-lg">
    <div>
      <div class="text-xl font-bold text-aiopt-primary">{{ t('14 -Days Free Trial') }}</div>
      {{ t('During the trial you will pay for ads directly to Facebook, however, A.I. optimization service will be free.') }}
    </div>
    <div class="font-bold">{{ t('Connect your Business Manager to A.I. optimization') }}</div>
    <div>
      {{ t('A.I. optimization will create a new Ad Account inside your Business Manager.') }}<br />
      {{ t(`To proceed, confirm the Business Manager you'd like us to use.`) }}<br />
      {{ t(`All Business managers that you have no admin rights for, are pointed in grey,`) }}<br />
      {{ t(`if you want to continue with them please receive admin rights for them.`) }}<br />
      {{ t(`If you have additional questions please contact our Support.`) }}
    </div>
    <div class="flex justify-center gap-2">
      <el-button size="large" type="primary" plain>
        <i class="ri-add-fill ri-lg mr-1"></i>
        {{ t('Media authorization') }}
      </el-button>

      <el-button size="large" type="info" plain @click="router.push({ name: 'step-two' })">
        <i class="ri-settings-5-line ri-lg mr-2"></i>
        {{ t('Advertising Goal') }}
      </el-button>
    </div>
  </div>
</template>
