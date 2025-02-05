/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useTranslation } from 'react-i18next';

function Testimonial() {
  const { t } = useTranslation();
  return (
    <section className="mt-10 flex flex-col items-center justify-center gap-5 px-10 text-center text-[2.5vw] md:mt-32 md:px-20 md:text-[1.5vw] lg:px-32">
      <div className="flex flex-col items-center justify-center">
        <img alt="nextImage" src="/zilch.png" className="h-8" />
        <h2>
          {t('Our bot deflection rate with our previous customer service')}
        </h2>
        <h2 className="flex gap-2">
          {t('solution was 5-10% .With intercom , we acheived')}{' '}
          <span className="font-semibold">{t('65% bot')}</span>
        </h2>
        <h2 className="flex gap-2">
          <span className="font-semibold">
            {t('deflection within just one week')}
          </span>{' '}
          {t('of going life')}
        </h2>
      </div>
      <div className="flex items-center gap-5">
        <img
          alt="nextImage"
          src="/Picture.png"
          className="w-12 rounded-[50%]"
        />
        <div className="flex flex-col items-start text-sm">
          <h4 className="font-bold">{t('Ibrahim Aldhari')}</h4>
          <p>{t('Founder of LEXFUTURE')}</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
