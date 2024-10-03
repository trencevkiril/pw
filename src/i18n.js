import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './translations/en.json';
import translationMK from './translations/mk.json';

const resources = {
    en: {
        translation: translationEN
    },
    mk: {
        translation: translationMK
    }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    keySeparator: false, 
    interpolation: {
        escapeValue: false 
    }
  });

export default i18n;