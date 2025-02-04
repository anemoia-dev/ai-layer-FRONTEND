'use client';

import 'react-toastify/dist/ReactToastify.css';

import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import Chatbox from '@/components/commons/landingPage/Chatbox';
import SecondChatBox from '@/components/commons/landingPage/ChatDashboard';
import Features from '@/components/commons/landingPage/Features';
import FirstBoxes from '@/components/commons/landingPage/FirstBoxesAnimation';
import HeroPage from '@/components/commons/landingPage/HeroPage';
import SecondBoxes from '@/components/commons/landingPage/SecondBoxes';
import Footer from '@/components/globals/Footer';
import Testimonial from '@/components/globals/Testimonial/page';

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const { i18n } = useTranslation();
  const getLanguage = i18n.language as 'ar' | 'en';
  const { t } = useTranslation();
  useGSAP(() => {
    const secondlastTitle = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-animate="secondLastTitle"]',
        start: 'top 30%',
      },
    });

    secondlastTitle.from('[data-animate="secondLastTitle"] div', {
      y: '10%',
      opacity: 0,
      stagger: {
        amount: 0.6,
      },
    });
    const lt = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-animate="lastSection"]',
      },
    });
    lt.from('[data-animate="lastSection"] h1 ', {
      y: '-10%',
      opacity: 0,
      stagger: {
        amount: 0.6,
      },
    }).from('[data-animate="lastSection"] button', {
      x: '-10%',
      opacity: 0,
      stagger: {
        amount: 0.5,
      },
    });
  });
  return (
    <div className="relative" dir={getLanguage === 'ar' ? 'rtl' : 'ltr'}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={getLanguage === 'ar'}
      />
      <div className="max-w-[100vw] overflow-hidden ">
        <HeroPage />
        <Features />
        <Chatbox />
        <FirstBoxes />
        <Testimonial />
        <SecondBoxes />
        <section>
          <div
            data-animate="secondLastTitle"
            className="mt-32 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_90%_60%_at_center,#c7b92930,#a2a51300)] text-[5vw] md:text-[4vw]"
          >
            <p className="mb-3 rounded-2xl bg-gradient-to-r from-[#faf7ef]  to-[#FBD482] px-4 py-1 text-xs font-[600] md:text-lg">
              {t('PROACTIVE SUPPORT')}
            </p>
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="leading-none">
                {t('Maximize team productivity')}
              </h1>
              <h1 className="leading-none">
                {t('with the worlds fastest shared')}
              </h1>
              <h1 className="leading-none">{t('inbox')}</h1>
            </div>

            <div className="flex w-full flex-col items-center justify-center text-xs font-medium md:text-lg">
              <p className="mt-3 font-medium text-gray-700">
                {t(
                  'Our Ai-enhanced Inbox is lightning fast, easy to use, and optimized for efficiency',
                )}
              </p>
              <p className="mt-3 text-gray-700">
                {t('everything a modern support team needs')}
              </p>
            </div>
          </div>
        </section>
        <SecondChatBox />
        <section
          data-animate=""
          className="mt-32 flex flex-col items-center justify-center gap-10 text-[5vw] md:text-[4vw] lg:mt-44"
        >
          <div data-animate="" className="flex flex-col gap-2 text-center">
            <h1 className="leading-none">{t('Combine automation and')}</h1>
            <h1 className="leading-none">{t('human support today')}</h1>
          </div>
          <div className="flex gap-3 text-sm font-semibold md:text-lg">
            <motion.button
              className="flex items-center gap-3 rounded-3xl border-2 border-[#0057FF] px-5 py-2 text-[#0057FF]"
              whileHover={{
                scale: 1.05,
                backgroundColor: '#EFF4FF',
                transition: { type: 'spring', stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 250, damping: 12 }}
            >
              <p>{t('Get Started')}</p>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 600 }}
              >
                <ArrowLeft />
              </motion.span>
            </motion.button>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
