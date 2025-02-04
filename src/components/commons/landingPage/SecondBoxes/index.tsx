/* eslint-disable @next/next/no-img-element */
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);
function SecondBoxes() {
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
        x: '100%',
        opacity: 0,
      });
  });
  return (
    <section>
      <div
        data-animate="boxContainer2"
        className=" mt-32 flex flex-col justify-between gap-5 px-5 md:gap-0 md:px-10 lg:flex-row lg:flex-wrap lg:px-20"
      >
        <div className=" flex h-[40vh] w-full flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-r from-[#E8F3FF] via-[#D6EAFE] to-[#C4E0FD] shadow-md md:h-[45vh] lg:h-[50vh]  lg:w-[47%] xl:h-[60vh]">
          <div className="flex h-[30%]  flex-col gap-5 p-5">
            <h1 className="text-2xl font-[600] lg:text-3xl">
              Fast Customer Support
            </h1>
            <p className="w-[85%] text-xs font-[400] md:w-3/4 md:text-sm">
              Proactively address common issues and manage support requests
              efficiently
            </p>
          </div>
          <div className="relative flex    h-4/5  flex-col items-start justify-end overflow-hidden">
            <img
              alt="nextImage "
              data-animate="firstImg"
              src="/sideImg.png"
              className="h-[85%] w-4/5 md:h-full md:w-3/4 "
            />
          </div>
        </div>
        <div
          data-animate="secondBox2"
          className=" flex h-[40vh] w-full flex-col-reverse  justify-end overflow-hidden  rounded-2xl bg-gradient-to-r from-[#E8F3FF] via-[#D6EAFE] to-[#C4E0FD] shadow-md md:h-[45vh] lg:h-[50vh] lg:w-[47%] xl:h-[60vh]"
        >
          <div className="flex h-[30%]  flex-col gap-5 p-5">
            <h1 className="text-2xl font-[600] lg:text-3xl">Workflows</h1>
            <p className="w-[85%] text-xs font-[400] md:w-3/4 md:text-sm">
              Easily build powerful no-code automation with bots,trigges
              conditions and rules-all in one place
            </p>
          </div>
          <div className="relative flex    h-[70%]   items-end justify-end">
            <img
              alt="nextImage "
              data-animate="secondImg"
              src="/translator.png"
              className="w-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondBoxes;
