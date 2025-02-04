/* eslint-disable @next/next/no-img-element */
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

function SecondBoxes() {
  const { t } = useTranslation();

  useGSAP(() => {
    const boxTimline2 = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-animate="boxContainer2"]',
        start: 'top 40%',
      },
    });

    boxTimline2
      .from('[data-animate="firstBox2"]', {
        y: '100%',
        opacity: 0,
      })
      .from('[data-animate="firstImg"]', {
        y: '100%',
        stagger: {
          amount: 0.5,
        },
        opacity: 0,
      })
      .from('[data-animate="secondBox2"]', {
        y: '-100%',
        opacity: 0,
      })
      .from('[data-animate="secondImg"]', {
        x: '-100%',
        opacity: 0,
      });
  });

  return (
    <section>
      <div
        data-animate="boxContainer2"
        className="mt-32 flex flex-col justify-between gap-5 px-5 md:gap-10 md:px-10 lg:flex-row lg:flex-wrap lg:px-20"
      >
        <div
          data-animate="firstBox2"
          className="flex h-[35vh] min-h-[400px] w-full flex-col   justify-end overflow-hidden rounded-2xl bg-gradient-to-r from-[#E8F3FF] via-[#D6EAFE] to-[#C4E0FD] shadow-md  sm:min-h-[450px] md:min-h-[500px] lg:w-[calc(40%+2rem)] xl:min-h-[600px]"
        >
          <div className="flex h-[30%] flex-col gap-5 p-5">
            <h1 className="text-2xl font-[600] lg:text-3xl">
              {t('Fast Customer Support')}
            </h1>
            <p className="w-[85%] text-xs font-[400] md:w-3/4 md:text-sm">
              {t(
                'Proactively address common issues and manage support requests efficiently',
              )}
            </p>
          </div>
          <div className="relative m-5 flex h-4/5  flex-col  items-end justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#e9ecec83] to-[#1111] ">
            <img
              alt="nextImage"
              data-animate="firstImg"
              src="/sideImg.png"
              className=" relative   top-4 z-10 h-3/4 w-4/5 object-contain md:h-4/5 xl:h-[90%]"
            />
          </div>
        </div>
        <div
          data-animate="secondBox2"
          className="flex h-[35vh] min-h-[400px] w-full flex-col-reverse justify-end overflow-hidden rounded-2xl bg-gradient-to-r from-[#E8F3FF] via-[#D6EAFE] to-[#C4E0FD] shadow-md  sm:min-h-[450px] md:min-h-[500px] lg:w-[calc(40%+2rem)] xl:min-h-[600px]"
        >
          <div className="flex h-[30%] flex-col gap-5 p-5">
            <h1 className="text-2xl font-[600] lg:text-3xl">
              {t('Workflows')}
            </h1>
            <p className="w-[85%] text-xs font-[400] md:w-3/4 md:text-sm">
              {t(
                'Easily build powerful no-code automation with bots, triggers, conditions, and rules - all in one place',
              )}
            </p>
          </div>
          <div className="relative flex h-[70%] flex-col items-end  ">
            <img
              alt="nextImage"
              data-animate="secondImg"
              src="/translator.png"
              className=" relative   top-4 z-10  h-3/4 w-4/5 object-contain md:h-4/5 xl:h-[90%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondBoxes;
