// 'use client';

// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useEffect, useRef } from 'react';
// import { useTranslation } from 'react-i18next';

// gsap.registerPlugin(ScrollTrigger);
// function HeroPage() {
//   const { t } = useTranslation();
//   const tl = gsap.timeline();
//   const divContainer = useRef<HTMLDivElement>();
//   useEffect(() => {
//     if (!divContainer.current) return;
//     tl.from(divContainer.current.querySelectorAll('div'), {
//       y: '-10%',
//       opacity: 0,
//       duration: 1.2,
//       ease: 'power3.out',
//       scrollTrigger: {
//         trigger: divContainer.current,
//         scrub: 1,
//         markers: true,
//       },
//     });
//   }, []);

//   return (
//     <div className="relative flex h-[100vh] max-w-[100vw] flex-col   overflow-x-hidden">
//       {/* Hero section with radial gradient */}
//       <div className="hero-bg px-5 pb-10 text-white  md:h-[75%]  md:px-10 md:pb-10">
//         <div className="flex justify-around   border-b border-gray-500 py-5 text-white">
//           <div>helo</div>
//           <div>Contact Us</div>
//         </div>
//         <div className="mt-32 flex flex-col items-center justify-center text-[5vw] md:text-[4vw]">
//           <h1 className="">{t('Your right and your peace of mind ')}</h1>
//           <h1>{t('Legal is our Mission')}</h1>
//           <div className="flex w-full flex-col items-center justify-center">
//             <p className="mt-5 text-sm text-gray-300 md:text-lg">
//               {t('Talk to one of our lawyers')}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Bottom section with black background */}
//       <div className="relative z-10 bg-[#0c172b] pb-10">
//         <div className="relative bottom-5 flex min-h-[20%] w-full items-start justify-start   bg-[#041128] px-5 md:h-[50%] md:px-40">
//           <img src="mac-screen.png" className="object-cover" />
//         </div>
//         <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_300%_100%_at_bottom,#080830,transparent)]" />
//       </div>
//       {/* ////// the second page */}
//       <div className="flex flex-col items-center bg-[#01112f] ">
//         <div className="z-0 h-[25vw] w-[120vw] rounded-t-[50%] bg-white">
//           helo
//         </div>
//       </div>
//       {/* the second section */}
//       <div className="">
//         <div className="relative bottom-10 z-[100000] bg-white   md:bottom-32 lg:bottom-48 ">
//           {/* //title/ */}
//           <div className=" flex flex-col items-center justify-center gap-3">
//             <p className="rounded-3xl bg-gradient-to-r from-[#dce1e7] to-[#2c67a5] px-5  py-1 text-xs text-blue-700  md:text-lg ">
//               {t('AUTOMATION')}
//             </p>
//             <h1 className="text-[5vw] leading-none md:text-[4vw]">
//               {t('Automate Solutions with')}
//             </h1>
//             <h1 className="text-[5vw] leading-none md:text-[4vw]">
//               {t('the power of AI')}
//             </h1>
//             <div className="flex flex-col items-center justify-center text-xs text-gray-700 md:text-lg xl:flex-row">
//               <p className="">
//                 {t('Lawyers can automate their solutions provided ')}
//               </p>
//               <p className="">{t('for their cases by their trainees')}</p>
//             </div>
//           </div>
//           <div className="px-5 md:px-10 lg:px-20 ">
//             <div
//               className=" mt-10  flex h-[50vw] w-full flex-col items-center justify-end rounded-b-3xl bg-[#bad7e4]"
//               ref={divContainer}
//             >
//               <div className="h-[90%] w-[50%] overflow-hidden rounded-t-xl bg-white">
//                 <div className="flex h-[15%] w-full items-center  border-b border-black px-5">
//                   <p>HELELELo</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FEATURES */}
//       {/* <Features/> */}
//       <div className="bg-[radial-gradient(ellipse_100%_50%_at_bottom,#ccd6625c,transparent)] px-5 pb-36 md:px-10 lg:px-20">
//         <img src="/boxes.png" />
//       </div>
//       {/* ////// TITLES  */}
//       <div className=" bg-[radial-gradient(ellipse_100%_70%_at_top,#ccd6625c,transparent)]">
//         <div className=" flex flex-col items-center justify-center gap-2">
//           <p className="rounded-3xl bg-gradient-to-r  from-[#d6d587] to-[#e7d34d] px-5  py-1 text-xs text-black  md:text-lg ">
//             {t('PROACTIVE SUPPORT')}
//           </p>
//           <h1 className="text-[5vw] leading-none md:text-[4vw]">
//             {t('Maximize team productivity ')}
//           </h1>
//           <h1 className="text-[5vw] leading-none md:text-[4vw]">
//             {t('with the worlds fastest shared ')}
//           </h1>
//           <h1 className="text-[5vw] leading-none md:text-[4vw]">
//             {t('Inbox')}
//           </h1>
//           <div className="flex flex-col items-center justify-center text-xs text-gray-700 md:text-lg xl:flex-row">
//             <p className="">
//               {t('Our AI-enhanced Inbox is lightning fast, easy-to-use')}
//             </p>
//             <p className="">
//               {t('and optimized for efficieny with everyhting')}
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="mt-10 flex flex-col items-center justify-center px-5 md:px-10 lg:px-20">
//         <img src="/yellow-mockup.png" />
//       </div>
//       <div className="mt-20 flex flex-col items-center justify-center px-5 pb-20 md:px-10 lg:mt-40 lg:px-20">
//         <div className="flex flex-col items-center justify-center gap-1 text-[5vw] leading-none md:text-[4vw]">
//           <h1>{t('Combine automation and ')}</h1>
//           <h1>{t('human support roday')}</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroPage;

import React from 'react';

function index() {
  return <div>HOME</div>;
}

export default index;
