import { createI18n } from 'vue-i18n';

const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../../locales/*.json')).map(([key, value]: [string, any]) => {
    const yaml = key.endsWith('.json');
    return [key.slice(14, yaml ? -5 : -4), value.default];
  })
);

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API,
  locale: 'zh-TW', // set locale
  fallbackLocale: 'en', // set fallback locale
  interpolation: {
    escapeValue: false,
  },
  missingWarn: false,
  fallbackWarn: false,
  messages,
});

export default i18n;
