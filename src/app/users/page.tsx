// 'use client';

// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { t } from 'i18next';
// import React, { useRef } from 'react';
// import { FaArrowRightLong } from 'react-icons/fa6';

// gsap.registerPlugin(ScrollTrigger);
// function Page() {
//   const firstSection = useRef<HTMLDivElement>(null);
//   const imageContainer = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     const tl = gsap.timeline();
//     tl.from('.first', {
//       y: '-10%',
//       opacity: 0,
//     });
//     gsap.from(imageContainer.current?.querySelector('img'), {
//       x: '-100%',
//       opacity: 0,
//       scrollTrigger: {
//         trigger: imageContainer.current,
//         markers: true,
//         start: 'top 30%',
//         scrub: true,
//       },
//     });
//   });

//   return (
//     <>
//       <div className="hero-bg   px-5 pb-10  text-white   md:px-10 md:pb-10">
//         <div className="flex justify-around   border-b border-gray-500 py-5 text-white">
//           <div>Logo</div>
//           <div>Contact Us</div>
//         </div>
//         <div
//           className="HeroPage mt-32 flex flex-col items-center justify-center text-[5vw] md:text-[4vw]"
//           ref={firstSection}
//         >
//           <h1 className="first">{t('Your right and your peace of mind ')}</h1>
//           <h1 className="second">{t('Legal is our Mission')}</h1>
//           <div className="flex w-full flex-col items-center justify-center text-xs text-[#D9D9D9] md:text-lg">
//             <p className=" mt-3">{t('Talk to one of our lawyers')}</p>
//             <div className="mt-3 flex cursor-pointer items-center gap-2 rounded-sm border border-white px-5 py-2 text-xs transition-all duration-300 hover:scale-[1.1] hover:bg-white hover:font-[500]  hover:text-black">
//               <button type="button">{t('Enroll Now')}</button>
//               <FaArrowRightLong />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* THE SAHDOW AND IMAGE */}
//       <div className="relative z-10 bg-[#0c172b] pb-10" ref={imageContainer}>
//         <div className="relative bottom-5 flex min-h-[20%] w-full items-start justify-start   bg-[#0c182c] px-5 md:h-[50%] md:px-40">
//           <img src="mac-screen.png" className="gradientImage object-cover" />
//         </div>
//         <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_300%_100%_at_bottom,#080830,transparent)]" />
//       </div>
//     </>
//   );
// }

// export default Page;

import React from 'react';

function page() {
  return <div>page</div>;
}

export default page;
