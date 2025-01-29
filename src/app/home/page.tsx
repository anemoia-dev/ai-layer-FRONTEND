'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

function Page() {
  const { t } = useTranslation();
  return (
    <div className="h-[100vh]">
      {/* Hero section with radial gradient */}
      <div className="hero-bg min-h-[50%]  px-5 text-white md:h-[75%] md:px-10">
        <div className="flex justify-around   border-b border-gray-500 py-5 text-white">
          <div>helo</div>
          <div>Contact Us</div>
        </div>
        <div className="mt-32 flex flex-col items-center justify-center text-[5vw] md:text-[4vw]">
          <h1 className="">{t('Your right and your peace of mind ')}</h1>
          <h1>{t('Legal is our Mission')}</h1>
          <div className="flex w-full flex-col items-center justify-center">
            <p className="mt-5 text-sm text-gray-300 md:text-lg">
              {t('Talk to one of our lawyers')}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom section with black background */}
      <div className="flex h-[50%] min-h-[50%] items-center justify-center bg-black">
        <div className="flex h-full justify-start">
          <img
            src="mac-screen.png"
            alt=""
            className=" w-[80%]  bg-red-900 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
