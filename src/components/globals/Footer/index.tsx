'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="mb-10 mt-32 px-5 text-4xl text-black md:px-10 lg:px-20">
      <div className="flex min-h-[20vh] w-full flex-col  rounded-2xl bg-gradient-to-r from-[#0F1F3D] to-[#020b1c] text-white ">
        <div className="flex flex-col md:flex-row">
          <div className="w-full p-5 md:w-[50%] md:p-10">
            <h3 className="text-xl ">{t('relate')}</h3>
            <p className="mt-3 text-sm text-gray-400">
              {t('The Collobrative Sales CRM')}
            </p>
            <div className="mt-10 flex w-full justify-between gap-5 md:justify-normal">
              <input
                className="w-[75%] rounded-xl bg-[#0F1F3D] px-5 py-3  text-xs outline-none md:py-5"
                placeholder="work@email.com"
              />
              <button
                className="rounded-xl bg-white px-5 text-xs font-bold text-[#0F1F3D]"
                type="button"
              >
                {t('Sign Up')}
              </button>
            </div>
          </div>
          <div className=" flex w-full  justify-between   p-5 md:w-[50%] md:p-10 lg:p-20 ">
            <div className="flex flex-col gap-3 text-xs text-gray-400">
              <h3 className="text-sm text-white">{t('Product')}</h3>
              <p>{t('Product')}</p>
              <p>{t('Changelog')}</p>
              <p>{t('Guide')}</p>
            </div>
            <div className="flex flex-col gap-3 text-xs text-gray-400">
              <h3 className="text-sm text-white">{t('Learn')}</h3>
              <p>{t('blog')}</p>
            </div>
            <div className="flex flex-col gap-3 text-xs text-gray-400">
              <h3 className="text-sm text-white">{t('Company')}</h3>
              <p>{t('Terms of Services')}</p>
              <p>{t('Privacy Policy')}</p>
              <p>{t('About us')}</p>
            </div>
          </div>
        </div>
        {/* <div className="p-5 md:p-10 lg:p-20">
          <div className="mt-10 flex flex-col gap-5 border-t border-gray-700  py-2  text-xs text-gray-600">
            <div>
              <p>{t('@ 2023 Pixelic ,ind, dba Relate')}</p>
            </div>
            <div>
              <p>{t('Backed by Y Combinator')}</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
