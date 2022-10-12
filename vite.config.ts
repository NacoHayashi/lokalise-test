import { defineConfig } from 'vite';
import { resolve } from 'path';

import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import DefineOptions from 'unplugin-vue-define-options/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    vueJsx(),
    vueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      // include: [pathResolve('locales/**')],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass', directives: true, version: '2.1.5' })],
    }),
  ],
  server: {
    port: 8080,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/scss/main.scss" as *;',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
    },
  },
});
function pathResolve(arg0: string): string {
  throw new Error('Function not implemented.');
}
