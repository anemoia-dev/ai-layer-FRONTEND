import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="mb-10 mt-32 px-5 text-4xl text-black md:px-10 lg:px-20">
      <div className="relative flex min-h-[20vh] w-full flex-col overflow-hidden rounded-2xl bg-gradient-to-r from-[#0F1F3D] to-[#020b1c] text-white shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,_31,_61,_0.5)]">
        <div className="absolute inset-0 animate-pulse opacity-10">
          <div className="absolute -right-20 -top-20 size-60 rounded-full bg-[#1d4ed8] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 size-60 rounded-full bg-[#3b82f6] blur-3xl" />
        </div>

        <div className="relative z-10 p-5 md:p-10 lg:p-20">
          <div className="mt-10 flex flex-col gap-5 border-t border-gray-700 py-2 text-xs text-gray-600 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <p>{t('© 2025 ailexfuture.com')}</p>
            </div>
            <div className="flex items-center gap-2">
              <p>{t('powered by anemoia.dev')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
