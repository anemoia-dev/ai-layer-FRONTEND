/* eslint-disable @next/next/no-img-element */
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { t } from 'i18next';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

function FirstBoxes() {
  useGSAP(() => {
    const boxTimline = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-animate="boxContainer"]',
        start: 'top 40%',
      },
    });

    boxTimline
      .from('[data-animate="firstBox"]', {
        x: '100%',
        opacity: 0,
      })
      .from('[data-animate="firstBoxSecondImg"]', {
        y: '100%',
        stagger: { amount: 0.5 },
        opacity: 0,
      })
      .from('[data-animate="firstBoxImage"]', {
        y: '100%',
        stagger: { amount: 0.5 },
        opacity: 0,
      })
      .from('[data-animate="secondBox"]', {
        x: '-100%',
        opacity: 0,
      })
      .from('[data-animate="secondBoxImage"]', {
        x: '100%',
        opacity: 0,
      });
  });

  return (
    <section className="mt-10 flex w-screen items-center justify-center  px-5 md:px-10 lg:px-20">
      <div
        data-animate="boxContainer"
        className="  mt-32  flex  w-full flex-col gap-8 lg:flex-row lg:flex-wrap lg:justify-between lg:gap-12 xl:px-8"
      >
        {/* First Box */}
        <div
          data-animate="firstBox"
          className="flex min-h-[400px] w-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-[#E8F3FF] via-[#D6EAFE] to-[#C4E0FD] shadow-md  sm:min-h-[450px] md:min-h-[500px] lg:w-[calc(40%+2rem)] xl:min-h-[600px]"
        >
          <div className="flex h-2/5 flex-col justify-center p-6 sm:p-8 md:h-[35%]">
            <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
              {t('LEXBOT')}
            </h1>
            <p className="mt-4 max-w-[90%] text-sm leading-relaxed text-gray-600 sm:text-base md:max-w-[80%]">
              {t(
                'Our AI-powered bot automatically and accurately answers Case questions with zero training required',
              )}
            </p>
          </div>
          <div className="relative  flex  h-3/5 flex-row-reverse items-end  justify-center rounded-2xl  md:h-[65%]">
            <img
              alt="Chatbot interface"
              data-animate="firstBoxImage"
              src="/chatbot.png"
              className="relative left-10 size-[120px] md:size-[150px] lg:size-[120px] xl:size-[140px] 2xl:size-[180px]"
            />
            <img
              alt="Chat bubbles"
              data-animate="firstBoxSecondImg"
              src="/chat.png"
              className="size-[180px] md:size-[270px]  lg:size-[180px] xl:size-[250px] 2xl:size-[300px]"
            />
          </div>
        </div>

        {/* Second Box */}
        <div
          data-animate="secondBox"
          className="flex min-h-[400px] w-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-[#E8F3FF] via-[#D6EAFE] to-[#C4E0FD] shadow-md  sm:min-h-[450px] md:min-h-[500px] lg:w-[calc(40%+2rem)] xl:min-h-[600px]"
        >
          <div className="flex h-2/5 flex-col justify-center p-6 sm:p-8 md:h-[35%]">
            <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
              {t('Workflows')}
            </h1>
            <p className="mt-4 max-w-[90%] text-sm leading-relaxed text-gray-600 sm:text-base md:max-w-[80%]">
              {t(
                'Easily build powerful no-code automation with bots, triggers, conditions and rules—all in one place',
              )}
            </p>
          </div>
          <div className="relative flex h-3/5 flex-col items-end justify-end overflow-hidden   p-1 md:h-[65%]">
            <img
              alt="Workflow interface"
              data-animate="secondBoxImage"
              src="/Messenger.png"
              className="w-[90%] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstBoxes;
