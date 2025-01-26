// LanguageSwitcher.tsx

'use client';

import Image from 'next/image';
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
      <div
        role="button"
        tabIndex={0}
        className="flex w-32 cursor-pointer items-center justify-between rounded-lg bg-white px-5 py-3 shadow-md shadow-gray-300"
        onClick={() => setBar(!bar)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setBar(!bar);
        }}
      >
        <div className="flex items-center gap-2">
          <Image
            src={language === 'en' ? '/uk.png' : '/sa.png'}
            alt="language flag"
            className="h-5 w-5"
            width={20}
            height={20}
          />
          <p className="text-sm">
            {language === 'en' ? t('english') : t('arabic')}
          </p>
        </div>
      </div>

      <div
        className={`absolute top-12 w-full rounded-lg bg-white shadow-lg ${
          bar ? 'block' : 'hidden'
        }`}
        style={{ zIndex: 100 }}
      >
        <div
          role="button"
          tabIndex={0}
          className="flex cursor-pointer items-center justify-between rounded-t-lg p-3 hover:bg-gray-100"
          onClick={() => changeLanguage('en')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') changeLanguage('en');
          }}
        >
          <div className="flex items-center gap-2">
            <Image
              src="/uk.png"
              alt="english flag"
              className="h-5 w-5"
              width={20}
              height={20}
            />
            <p>{t('english')}</p>
          </div>
        </div>
        <div
          role="button"
          tabIndex={0}
          className="flex cursor-pointer items-center justify-between rounded-b-lg p-3 hover:bg-gray-100"
          onClick={() => changeLanguage('ar')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') changeLanguage('ar');
          }}
        >
          <div className="flex items-center gap-2">
            <Image
              src="/sa.png"
              alt="arabic flag"
              className="h-5 w-5"
              width={20}
              height={20}
            />
            <p>{t('arabic')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
