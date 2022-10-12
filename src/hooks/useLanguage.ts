import { ref, onBeforeMount } from 'vue';
import { useI18n } from 'vue-i18n';

const useLanguage = () => {
  const { locale:i18n } = useI18n();
  const currentLang = ref(localStorage.getItem('lang') ?? i18n.value);

  onBeforeMount(()=>{
    if(i18n.value !== currentLang.value){
      i18n.value = currentLang.value
    }
  })

  const toggleLang = (lang?: string) => {
    let newLang;
    if (lang) {
      newLang = lang;
    } else if (currentLang.value === 'en') {
      newLang = 'zh-TW';
    } else {
      newLang = 'en';
    }
    currentLang.value = newLang;
    i18n.value = newLang;
    localStorage.setItem('lang',newLang);
  };

  return { currentLang: currentLang.value, toggleLang };
};

export default useLanguage;