import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import AR_translation from '../localization/ar/ar.json';
import EN_translation from '../localization/en/en.json';

const resources = {
  en: {
    translation: EN_translation,
  },
  ar: {
    translation: AR_translation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'ar',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
