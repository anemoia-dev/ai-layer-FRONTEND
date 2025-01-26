'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  language: 'en' | 'ar';
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language }) => {
  const [bar, setBar] = useState<boolean>(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng: 'en' | 'ar') => {
    i18n.changeLanguage(lng);
    setBar(false);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Language selector button */}
      <div
        className="flex w-32 cursor-pointer items-center justify-between rounded-lg bg-white px-5 py-3 shadow-md shadow-gray-300"
        onClick={() => setBar(!bar)}
      >
        {/* Display the selected language with flag */}
        <div className="flex items-center gap-2">
          <img
            src={language === 'en' ? '/uk.png' : '/sa.png'}
            alt="language flag"
            className="h-5 w-5"
          />
          <p className="text-sm">
            {language === 'en' ? t('english') : t('arabic')}
          </p>
        </div>

        {/* Dropdown indicator */}
      </div>

      {/* Language options dropdown */}
      <div
        className={`absolute top-12 w-full rounded-lg bg-white shadow-lg ${
          bar ? 'block' : 'hidden'
        }`}
        style={{ zIndex: 100 }}
      >
        <div
          className="flex cursor-pointer items-center justify-between rounded-t-lg p-3 hover:bg-gray-100"
          onClick={() => changeLanguage('en')}
        >
          <div className="flex items-center gap-2">
            <img src="/uk.png" alt="english flag" className="h-5 w-5" />
            <p>{t('english')}</p>
          </div>
        </div>
        <div
          className="flex cursor-pointer items-center justify-between rounded-b-lg p-3 hover:bg-gray-100"
          onClick={() => changeLanguage('ar')}
        >
          <div className="flex items-center gap-2">
            <img src="/sa.png" alt="arabic flag" className="h-5 w-5" />
            <p>{t('arabic')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
