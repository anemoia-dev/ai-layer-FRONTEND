// 'use client';

// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useRef } from 'react';
// import { useTranslation } from 'react-i18next';

// import Testimonial from '@/components/globals/Testimonial/page';

// import Features from '../Features';

// gsap.registerPlugin(ScrollTrigger);
// function HeroPage() {
//   const { t } = useTranslation();
//   const heroPage = useRef<HTMLDivElement>(null);
//   const heroTitle = useRef<HTMLDivElement>(null);
//   const secondPage = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     const tl = gsap.timeline();

//     tl.from('.heroPage .first', {
//       y: '-70%',
//       opacity: 0,
//       rotateY: '45',
//     })
//       .from('.heroPage .second', {
//         y: '50%',
//         opacity: 0,
//         rotateY: '45',
//       })
//       .from('.heroPage .heroPara', {
//         x: '50%',
//         opacity: 0,
//       })
//       .from('.heroPage button', {
//         x: '-50%',
//         opacity: 0,
//       })
//       .from('.gradientImage', {
//         scale: 1.2,
//         opacity: 0,
//         y: '50%',
//         ease: 'power4.inOut',
//       });

//     gsap.from('.secondPage .first', {
//       opacity: 0,
//       y: '-10%',
//       stagger: 1,
//       scrollTrigger: {
//         trigger: '.secondPage',
//       },
//     });
//   }, []);

//   return (
//     <div className="relative flex  max-w-[100vw] flex-col   overflow-x-hidden ">
//       {/* Hero section with radial gradient */}
//       <div
//         className="hero-bg heroPage md:h-[75%] md:px-10  md:pb-10  px-5 pb-10 text-white"
//         ref={heroPage}
//       >
//         <div className="flex justify-around   border-b border-gray-500 py-5 text-white">
//           <div>Logo</div>
//           <div>Contact Us</div>
//         </div>
//         <div
//           className="md:text-[4vw] mt-32 flex flex-col items-center justify-center text-[5vw]"
//           ref={heroTitle}
//         >
//           <h1 className="first">{t('Your right and your peace of mind ')}</h1>
//           <h1 className="second">{t('Legal is our Mission')}</h1>
//           <div className="md:text-lg flex w-full flex-col items-center justify-center text-xs text-[#D9D9D9]">
//             <p className="heroPara mt-3">{t('Talk to one of our lawyers')}</p>
//             <button
//               className="mt-3  rounded-sm border border-white px-5 py-2 text-xs"
//               type="button"
//             >
//               {t('Enroll now')}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom section with black background */}
//       <div className="relative z-10 bg-[#0c172b] pb-10">
//         <div className="md:h-[50%] md:px-40 relative bottom-5 flex min-h-[20%] w-full   items-start justify-start bg-[#0c182c] px-5">
//           <img src="mac-screen.png" className="gradientImage object-cover" />
//         </div>
//         <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_300%_100%_at_bottom,#080830,transparent)]" />
//       </div>

//       {/* CIRCLE PART */}
//       <div className="flex max-w-[100vw] items-center justify-center overflow-hidden bg-[#0c182c]">
//         <div className="md:h-[30vh] h-[10vh] w-[100vw] rounded-t-[45%] bg-white" />
//       </div>
//       {/*  the second page */}

//       <div
//         className="secondPage md:text-[4vw] mt-10 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_90%_60%_at_center,#2fe0e030,#a2a51300)] text-[5vw]"
//         ref={secondPage}
//       >
//         <p className="automation md:text-lg rounded-2xl bg-gradient-to-r from-[#C4E0FD] to-[#5EADFF] px-4 py-1 text-xs font-[600]">
//           {t('AUTOMATION')}
//         </p>
//         <h1 className="first">{t('Auotmate Solutions with ')}</h1>
//         <h1 className="second">{t('the power of AI')}</h1>
//         <div className="md:text-lg lg:flex-row lg:gap-2 mt-6 flex w-full flex-col items-center  justify-center text-[2.3vw]">
//           <p className=" heroPara">
//             {t('Lawyers can automate their solutions provided')}
//           </p>
//           <p>{t('for their cases by their trainees')}</p>
//         </div>
//         <p className="md:text-lg mt-6 text-[2.3vw] font-[600] text-[#1749c6]">
//           {t('Learn more about automation')}
//         </p>
//       </div>
//       <div className="md:mt-32 md:h-[50vw] lg:h-[30vw] mt-20 flex h-[60vw]  flex-col  items-center justify-end ">
//         <div className=" lg:w-[80%] flex h-full w-[90%] flex-col items-center justify-end  rounded-b-3xl bg-gradient-to-t from-[#7fb6d2] to-[#96cad96e] shadow-lg shadow-gray-200">
//           <div className="h-[90%] w-[50%] rounded-t-xl  bg-white shadow-lg ">
//             <div className="flex h-[15%] items-center gap-2 border-b border-gray-500 px-3">
//               <div className="md:w-[10%] h-[55%]  w-[15%] bg-black " />
//               <p className="md:text-lg text-xs font-[500]">{t('Chat')}</p>
//             </div>
//             <div className="md:gap-5 flex h-[85%] flex-col gap-2 p-3">
//               <div className="lg:py-3 w-[50%] rounded-md bg-[#D9D9D9] px-2 py-1 ">
//                 <p className="md:text-lg text-xs">{t('helo ?')}</p>
//               </div>
//               <div className="flex  h-[40%] w-full items-end justify-end ">
//                 <div className="md:p-5 flex h-full w-[70%] flex-col justify-between rounded-md bg-[#2356F6] p-3">
//                   <div className="md:px-5 flex h-[60%] w-full items-center justify-between rounded-md bg-white px-2 text-xs">
//                     <div className="rounded-[50%]:border-gray-600 md:w-[10%] md:border-2 flex h-[60%] w-[20%] items-center  justify-center rounded-[50%] border border-gray-600 bg-[#D9D9D9] text-[10px]">
//                       {t('X')}
//                     </div>
//                     <p className="md:hidden">{t('......')}</p>
//                     <div className="flex flex-col items-end">
//                       <p className="md:flex hidden">{t('Civil avcase.Pdf')}</p>
//                       <p className="text-gray-700">{t('5.4 MB')}</p>
//                     </div>
//                   </div>
//                   <div className="flex justify-end">
//                     <p className="md:text-sm text-[5px] text-white">
//                       {t('helo hey there how am i working')}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="lg:py-3 w-[50%] rounded-md bg-[#D9D9D9] px-2 py-1 ">
//                 <p className="md:text-lg text-xs">{t('hey ?')}</p>
//               </div>
//               <div className="flex  h-[20%] w-full items-center justify-between rounded-md">
//                 <div className="md:w-[10%] h-[80%]  w-[20%] bg-black" />
//                 <div className="md:w-[85%] md:text-sm flex h-full w-[75%] items-center justify-between rounded-md bg-[#D9D9D9] px-5 text-xs">
//                   <p>{t('hey')}</p>
//                   <div className="md:w-[5%] md:border-2 flex h-[40%] w-[15%] items-center justify-center rounded-[50%] border border-gray-600 bg-[#D9D9D9] text-[10px]">
//                     {t('!')}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* /// FEATURES */}
//       <div className="md:mt-32 mt-20">
//         <Features />
//       </div>
//       <div className="md:mt-32 md:flex-row md:gap-0 md:px-10 lg:px-20 mt-20 flex  flex-col justify-between gap-10 px-5">
//         <div className="md:h-96 md:w-[47%]  h-60 w-full overflow-hidden rounded-2xl bg-gradient-to-t from-[#94c8e2] to-[#76c5da15] shadow-lg shadow-gray-500">
//           <div className="flex h-[40%] flex-col gap-3 p-5">
//             <h1 className="md:text-2xl text-xl  font-[600] uppercase">
//               {t('Lexbot')}
//             </h1>
//             <p className="md:w-[75%] md:text-sm w-full text-[10px]  font-[500] text-gray-900">
//               {t(
//                 'Our AI-powered bot automatically and accurately answers Case questions with zero training required.',
//               )}
//             </p>
//           </div>
//           <div className="relative flex items-center justify-center">
//             <div className="chatbot absolute bottom-8 left-10 flex w-[30%] items-center justify-center">
//               <img src="/chatbot.png" />
//             </div>
//             <div className="chat relative left-10 flex w-[60%] items-center justify-center">
//               <img src="/chat.png" />
//             </div>
//           </div>
//         </div>
//         <div className="md:h-96 md:w-[47%] h-60 w-full overflow-hidden rounded-2xl bg-gradient-to-t from-[#94c8e2] to-[#76c5da15] shadow-lg shadow-gray-500">
//           <div className="md:h-[35%] flex h-[40%] flex-col gap-2 p-5">
//             <h1 className="md:text-2xl text-xl   font-[600]">
//               {t('Workflows')}
//             </h1>
//             <p className="md:w-[75%] md:text-sm w-full text-[10px]  font-[500] text-gray-900">
//               {t(
//                 'Easy build powerful no code automation with bots , truggers,conditions , and rules-all in one place',
//               )}
//             </p>
//           </div>
//           <div className=" md:h-[65%] h-[60%] w-[75%] overflow-hidden ">
//             <img src="/Messenger.png" className="relative right-5" />
//           </div>
//         </div>
//       </div>
//       <Testimonial />

//       {/* ANOTHER BOXESS */}
//       <div className="md:mt-32 md:flex-row md:gap-0 md:px-10 lg:px-20 mt-20 flex  flex-col justify-between gap-10 px-5">
//         <div className="md:h-96 md:w-[47%]  h-60 w-full  overflow-hidden rounded-2xl bg-gradient-to-t from-[#94c8e2] to-[#76c5da15] shadow-lg shadow-gray-500">
//           <div className="md:h-[30%] flex h-[40%] flex-col gap-5 p-5">
//             <h1 className="md:text-2xl text-xl  font-[600] uppercase">
//               {t('Fast Customer Support')}
//             </h1>
//             <p className="md:w-[75%] md:text-sm w-full text-[10px] font-[500] ">
//               {t(
//                 'Our AI-powered bot automatically and accurately answers Case questions with zero training required.',
//               )}
//             </p>
//           </div>
//           <div className="md:h-[70%] md:w-[80%] relative flex h-[60%] w-[70%] flex-col justify-end overflow-hidden rounded-tr-2xl ">
//             <img src="/sideImg.png" className="h-full w-full" />
//           </div>
//         </div>
//         <div className="md:h-96 md:w-[47%] flex h-60 w-full flex-col-reverse overflow-hidden rounded-2xl bg-gradient-to-b from-[#94c8e2] to-[#76c5da15] shadow-lg shadow-gray-500">
//           <div className="flex h-[40%] flex-col gap-3 p-5">
//             <h1 className="md:text-2xl text-xl  font-[500] uppercase">
//               {t('Workflows')}
//             </h1>
//             <p className="md:w-[75%] md:text-sm w-full text-[10px] font-[500]">
//               {t(
//                 'Easy build powerful no code automation with bots , truggers,conditions , and rules-all in one place',
//               )}
//             </p>
//           </div>
//           <div className="md:h-[70%] flex h-[60%] w-full  justify-end">
//             <div className="relative flex h-full w-[50%] flex-col justify-end overflow-hidden rounded-bl-2xl  rounded-tr-2xl  bg-[#83b8d1] p-10 shadow-lg shadow-gray-600">
//               <img src="/translator.png" className="" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ///////////////// TITLE PAGE # 4 */}
//       <div className="secondPage md:mt-52 md:text-[4vw] mt-32 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_90%_60%_at_center,#c7b92930,#a2a51300)] text-[5vw]">
//         <p className="md:text-lg rounded-2xl bg-gradient-to-r  from-[#faf7ef] to-[#FBD482] px-4 py-1 text-xs font-[600]">
//           {t('PROACTIVE SUPPORT')}
//         </p>
//         <h1 className="first">{t('Maxixmize team productivity')}</h1>
//         <h1 className="second">{t('with the worlds fastest shared')}</h1>
//         <h1 className="second">{t('Inbox')}</h1>

//         <div className="md:text-lg lg:gap-2 mt-6 flex w-full flex-col items-center justify-center   text-[2.3vw]">
//           <p className=" heroPara">
//             {t(
//               'Our enhanced ai can handle you all these solutions for you by prociding',
//             )}
//           </p>
//           <p className=" heroPara">{t(' you the best resources out there')}</p>
//         </div>
//       </div>
//       {/* //////// IMAGE SECTION */}
//       <div className="md:px-10 lg:px-20 mt-10 px-5">
//         <img
//           src="/mac-screen.png"
//           className="bg-[radial-gradient(ellipse_90%_60%_at_center,#black,#ffff)]"
//         />
//       </div>

//       {/* ///////////// TITLE AND CONTACT */}
//       <div className="secondPage md:mt-52   md:text-[4vw] mt-32 flex flex-col items-center justify-center text-[5vw]">
//         <h1 className="first">{t('Combine automation and')}</h1>
//         <h1 className="second">{t('human support today')}</h1>
//         <div className="md:text-lg mt-5 flex items-center justify-center gap-5 text-xs ">
//           <button
//             className="md:px-7 md:py-3 rounded-3xl bg-[#0057FF] px-5 py-2 text-white"
//             type="button"
//           >
//             {t('About us')}
//           </button>
//           <button
//             className="md:px-7 md:py-3 rounded-3xl border border-[#0057FF] px-5 py-2 text-[#0057FF]"
//             type="button"
//           >
//             {t('Conatct us ')}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroPage;

import React from 'react';

function page() {
  return <div>page</div>;
}

export default page;
