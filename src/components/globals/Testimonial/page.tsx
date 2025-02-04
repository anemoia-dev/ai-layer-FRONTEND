import Image from 'next/image';
import React from 'react';

function Testimonial() {
  return (
    <section className="mt-10 flex flex-col  items-center justify-center gap-5 px-10 text-center text-[2.5vw] md:mt-32 md:px-20 md:text-[1.5vw] lg:px-32">
      <div className="flex flex-col items-center justify-center ">
        <Image alt="nextImage" src="zilch.png" className="h-8  " />
        <h2>Our bot deflection rate with our previous customer service</h2>
        <h2 className="flex gap-2">
          solution was 5-10% .With intercom , we acheived{' '}
          <span className="font-semibold">65% bot</span>
        </h2>
        <h2 className="flex gap-2">
          <span className="font-semibold">
            deflection withing just one week
          </span>
          of going life
        </h2>
      </div>
      <div className="flex items-center gap-5">
        <Image alt="nextImage" src="picture.png" className="w-12" />
        <div className="flex flex-col items-start text-sm ">
          <h4 className="font-bold">Stuart skyes</h4>
          <p>Founder of LEXFUTURE</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
