<script setup lang="ts">
import { defineComponent, useAttrs } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

defineComponent({
  name: 'AppBreadcrumb',
});

const attrs = useAttrs();
</script>
<template>
  <el-breadcrumb separator="/" v-bind="attrs">
    <el-breadcrumb-item class="text-aiopt-dark" :to="{ path: '/' }">{{t("廣告帳戶列表")}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{t("新增廣告帳戶授權")}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
