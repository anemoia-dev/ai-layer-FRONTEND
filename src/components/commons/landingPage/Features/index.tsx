import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowRight } from 'lucide-react';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);
function Features() {
  useGSAP(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-animate="titleContainer"]',
        start: 'top 40%',
      },
    });
    tl2.from('[data-animate ="titleContainer"] h1', {
      opacity: 0,
      y: '-50%',
      stagger: {
        amount: 0.5,
      },
    });
  });
  return (
    <section className="bg-[#0d042b]">
      <div className="h-32 rounded-t-[65%]   bg-white md:h-40" />
      <div
        data-animate="titleContainer"
        className=" flex flex-col items-center justify-center bg-white bg-[radial-gradient(ellipse_90%_60%_at_center,#2fe0e030,#a2a51300)] pt-10 text-center capitalize"
      >
        <div className="flex flex-col items-center justify-center gap-2 ">
          <p className=" mb-5 w-40 rounded-2xl bg-gradient-to-r from-[#C4E0FD]  to-[#5EADFF] px-4 py-1 text-xs font-[600] md:text-lg">
            AUTOMATION
          </p>
          <h1 className="text-[5vw] leading-none md:text-[4vw]">
            Automate solutions with
          </h1>
          <h1 className="text-[5vw] leading-none md:text-[4vw]">
            the power of ai
          </h1>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center text-sm font-medium text-gray-600 md:flex-row md:gap-2 md:text-lg">
          <p>Lawyers can automate their solutions</p>
          <p>for their cases by their trainees</p>
        </div>
        <div className="mt-5 flex w-full items-center justify-center  gap-3 ">
          <p className="text-xs font-semibold text-blue-600 md:text-sm">
            Learn more about automation
          </p>
          <ArrowRight className="font-semibold text-blue-600" />
        </div>
      </div>
    </section>
  );
}

export default Features;
