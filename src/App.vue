<script setup lang="ts">
// import '@/assets/scss/main.scss';
import pkg from '../package.json';
const host = import.meta.env.BASE_URL;
const currentEnv = import.meta.env.MODE;
console.log(
  `%c A.I. Optimization %c ${currentEnv} v${pkg.version} `,
  'color: #fff;background:#000;border-radius:3px 0px 0px 3px;font-size:12px;padding:1px',
  'color: #fff;background:#4e61ff;border-radius:0px 3px 3px 0px;font-size:12px;padding:1px'
);
</script>
<template>
  <router-view></router-view>
</template>
