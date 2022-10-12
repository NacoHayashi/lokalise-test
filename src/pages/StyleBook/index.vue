<script setup lang="ts">
// components
import AppPromise from '@/components/AppPromise/Index.vue';
import AppTagDemo from '@/components/AppTag/Demo.vue';
import AppBadgeDemo from '@/components/AppBadge/Demo.vue';
import AppCardDemo from '@/components/AppCard/Demo.vue';
import AppCarouselDemo from '@/components/AppCarousel/Demo.vue';

// plugins
import { useI18n } from 'vue-i18n';
import useSWRV from 'swrv';

// hooks
import useLanguage from '@/hooks/useLanguage';

// api
import Auth from '@/api/services/auth';
import { ref } from 'vue';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios, { delayResponse: 2000 });

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/users').reply(200, {
  users: [{ id: 1, name: 'John Smith' }],
});

const demoFetch = () => {
  return axios.get('/users').then((res) => res.data);
};
// vue promise
const usersPromise = ref(demoFetch());

//swrv
const canFetch = ref(false);
const { data: swrvData, error, isValidating: loading } = useSWRV('/users', demoFetch);

// console.log('data', swrvData.value,error.value,loading.value);
// const onClickMutate = ()=>{
//   canFetch.value = !canFetch.value;
// }

// language toggle
const { t } = useI18n();
const { currentLang, toggleLang } = useLanguage();
const onChangeLang = () => {
  toggleLang();
};

// Api example
const logoutStatus = ref<boolean | number>(false);
const onClickLogout = async () => {
  const res = await Auth.logout();
  logoutStatus.value = res?.status;
};
</script>
<template>
  <div>
    <div class="text-xl text-aiopt-primary font-extrabold mb-5">Style Book page</div>
    <div class="flex flex-wrap items-start gap-4">
      <div class="mb-5 rounded-md bg-aiopt-primary/30 p-4 w-fit">
        <div class="text-lg text-aiopt-dark font-bold">i18n</div>
        <div class="flex flex-col">
          <span>Current Language : {{ t('current language', { name: '123' }) }}</span> <span>Current locale:{{ currentLang }}</span>
          <button @click="onChangeLang" class="bg-aiopt-primary text-white self-start">{{ t('toggle') }}</button>
        </div>
      </div>
      <div class="mb-5 rounded-md bg-aiopt-primary/30 p-4 w-fit">
        <div class="text-lg text-aiopt-dark font-bold">Api request</div>
        <div class="flex flex-col">
          <span>Example api : Logout</span> <span>Is logout? {{ logoutStatus }}</span> <button @click="onClickLogout" class="bg-aiopt-primary text-white self-start">{{ t('logout') }}</button>
        </div>
      </div>
      <div class="mb-5 rounded-md bg-aiopt-primary/30 p-4 w-fit">
        <div class="text-lg text-aiopt-dark font-bold">Api promise status</div>
        <div class="flex flex-col">
          <AppPromise :dataPromise="usersPromise">
            <template #data="{ data }">
              <ul>
                <li v-for="user in data.users" :key="user">{{ user?.name }}</li>
              </ul>
            </template>
          </AppPromise>
        </div>
      </div>
      <div class="mb-5 rounded-md bg-aiopt-primary/30 p-4 w-fit">
        <div class="text-lg text-aiopt-dark font-bold">Api swrv status</div>
        <div class="flex flex-col">
          <!-- <button @click="onClickMutate">mutate</button> -->
          <AppPromise :data="swrvData" :is-loading="loading" :error="error">
            <template #data>
              <ul>
                <li v-for="user in swrvData.users" :key="user">{{ user?.name }}</li>
              </ul>
            </template>
          </AppPromise>
        </div>
      </div>
      <AppTagDemo />
      <AppBadgeDemo />
      <AppCardDemo />
    </div>
    <AppCarouselDemo />
  </div>
</template>
