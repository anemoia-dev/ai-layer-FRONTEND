// 'use client';

// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import React from 'react';
// import { useTranslation } from 'react-i18next';

// import HighLightedButton from '@/components/globals/HighlightedButton';

// gsap.registerPlugin(ScrollTrigger);
// function HeroPage() {
//   const { t } = useTranslation();

//   useGSAP(() => {
//     const tl = gsap.timeline();

//     tl.from('.firstdiv div', {
//       y: '-100%',
//       opacity: 0,
//       stagger: {
//         amount: 0.5,
//       },
//     })
//       .from('.first', {
//         y: '-50%',
//         opacity: 0,
//         scale: 0.7,
//       })
//       .from('.second', {
//         y: '50%',
//         opacity: 0,
//         scale: 0.7,
//       })
//       .from('.heroDesciption', {
//         x: '-50%',
//         opacity: 0,
//       })
//       .from('.heroButton', {
//         x: '50%',
//         opacity: 0,
//       });

//     gsap.from('.shadowContainer', {
//       x: '-100%',
//       opacity: 0,
//       scale: 0.6,
//       scrollTrigger: {
//         trigger: '.shadowContainer',
//         scrub: true,
//         start: 'top 30%',
//       },
//     });

//     const tl2 = gsap.timeline();

//     tl2.from('.titleContainer', {
//       x: '-100%',
//       opacity: 0,
//       scrollTrigger: {
//         trigger: '.titleContainer',
//         scrub: true,
//         markers: true,
//         start: 'top 10%',
//       },
//     });
//   });
//   return (
//     <div>
//       {/* ///// HEROPAGE SECTION */}
//       <section>
//         <div className="hero-bg  px-5 pb-10  text-white  md:h-[75%] md:px-10 md:pb-10">
//           <div className="firstdiv  flex justify-around  border-b border-gray-500 bg-transparent py-5 text-white">
//             <div>Logo</div>
//             <div>Contact Us</div>
//           </div>
//           <div className="heroContainer mt-32  flex flex-col items-center justify-center text-[5vw] md:text-[4vw]">
//             <h1 className="first">{t('Your right and your peace of mind ')}</h1>
//             <h1 className="second">{t('Legal is our Mission')}</h1>
//             <div className="flex w-full flex-col items-center justify-center text-xs text-[#D9D9D9] md:text-lg">
//               <p className=" heroDesciption mt-3">
//                 {t('Talk to one of our lawyers')}
//               </p>
//               <button
//                 className="heroButton mt-3 rounded-sm border border-white px-5 py-2 text-xs"
//                 type="button"
//               >
//                 {t('Enroll now')}
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* ////// SHADOW BG */}
//         <div className="relative z-10 bg-[#0c172b] pb-10">
//           <div className="shadowContainer relative bottom-5 flex min-h-[20%] w-full items-start justify-start   bg-[#0c182c] px-5 md:h-[50%] md:px-40">
//             <img src="mac-screen.png" className="gradientImage object-cover" />
//           </div>
//           <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_300%_100%_at_bottom,#080830,transparent)]" />
//         </div>
//       </section>

//       {/* ////// SECOND PAGE FEATURES */}
//       <div className="titleContainer mt-10 bg-red-900 text-center capitalize">
//         <HighLightedButton text="AUTOMATION" classes="bg-blue-700 text-white" />
//         <h1 className="text-[5vw] md:text-[4vw]">
//           {t('Automate solutions with')}
//         </h1>
//         <h1 className="text-[5vw] md:text-[4vw]">{t('the power of ai')}</h1>
//         <div className="mt-5 flex flex-col items-center justify-center text-sm md:flex-row md:gap-2 md:text-lg">
//           <p>{t('Lawyers can automate their solutions')}</p>
//           <p>{t('for their cases by their trainees')}</p>
//         </div>
//         <div className="mt-5">
//           <p className="text-xs font-semibold text-blue-600 md:text-sm">
//             {t('Learn more about automation')}
//           </p>
//         </div>
//       </div>
//       {/* //TESTING SECTION */}
//     </div>
//   );
// }

// export default HeroPage;

import React from 'react';

function HeroPage() {
  return <div>index</div>;
}

export default HeroPage;
