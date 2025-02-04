/* eslint-disable @next/next/no-img-element */
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
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
        x: '-100%',
        opacity: 0,
      })
      .from('[data-animate="firstBoxImage "]', {
        y: '100%',
        stagger: {
          amount: 0.5,
        },
        opacity: 0,
      })
      .from('[data-animate="secondBox"]', {
        x: '100%',
        opacity: 0,
      })
      .from('[data-animate="secondBoxImage "]', {
        x: '-100%',
        opacity: 0,
      });
  });
  return (
    <section className="mt-10 ">
      <div
        data-animate="boxContainer"
        className=" mt-32 flex flex-col justify-between gap-5 px-5 md:gap-0 md:px-10 lg:flex-row lg:flex-wrap lg:px-20"
      >
        <div
          data-animate="firstBox"
          className=" flex h-[40vh] w-full flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-r from-[#E8F3FF] via-[#D6EAFE] to-[#C4E0FD] shadow-md md:h-[45vh] lg:h-[50vh]  lg:w-[47%] xl:h-[60vh]"
        >
          <div className="flex h-[30%]  flex-col gap-5 p-5">
            <h1 className="text-2xl font-[600] lg:text-3xl">LEXBOT</h1>
            <p className="w-[85%] text-xs font-[400] md:w-3/4 md:text-sm">
              Our AI-powered bot automatically and accurately answers Case
              questions with zero training required
            </p>
          </div>
          <div className="relative flex h-[70%]   items-end justify-center">
            <img
              alt="justImage "
              data-animate="firstBoxImage "
              src="/chatbot.png"
              className="relative left-10 z-0 h-[45%] lg:h-[70%]"
            />

            <img
              alt="justImage "
              src="/chat.png"
              className="z-10 h-[70%] lg:h-[90%] "
            />
          </div>
        </div>
        <div
          data-animate="secondBox"
          className=" flex h-[40vh] w-full flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-r from-[#E8F3FF] via-[#D6EAFE] to-[#C4E0FD] shadow-md md:h-[45vh] lg:h-[50vh] lg:w-[47%] xl:h-[60vh]"
        >
          <div className="flex h-[30%]  flex-col gap-5 p-5">
            <h1 className="text-2xl font-[600] lg:text-3xl">Workflows</h1>
            <p className="w-[85%] text-xs font-[400] md:w-3/4 md:text-sm">
              Easily build powerful no-code automation with bots,trigges
              conditions and rules-all in one place
            </p>
          </div>
          <div className="relative flex h-[70%]   items-end justify-start px-1">
            <img
              alt="justImage "
              data-animate="secondBoxImage "
              src="/Messenger.png"
              className="h-[95%]  w-[90%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstBoxes;
