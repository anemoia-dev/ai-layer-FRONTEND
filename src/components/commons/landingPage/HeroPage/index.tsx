import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

function HeroPage() {
  const { t } = useTranslation();
  const container = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
      });

      tl.from('[data-animate="firstdiv"]', {
        y: '-100%',
        opacity: 0,
        stagger: 0.1,
      })
        .from('[data-animate="logo"]', { y: '-100%', opacity: 0 })
        .from('[data-animate="first"]', { y: '-50%', opacity: 0, scale: 0.7 })
        .from('[data-animate="second"]', { y: '-50%', opacity: 0, scale: 0.7 })
        .from('[data-animate="description"]', { y: '-50%', opacity: 0 })
        .from('[data-animate="button"]', { y: '50%', opacity: 0 })
        .from('[data-animate="mouse"]', { y: '-50%', opacity: 0 });

      gsap.from('[data-animate="shadow"]', {
        x: '-100%',
        opacity: 0,
        scale: 0.6,
        scrollTrigger: {
          trigger: '[data-animate="shadow"]',
          start: 'top 40%',
        },
      });
    },
    { scope: container },
  );

  return (
    <section ref={container}>
      <div className="hero-bg px-5 pb-10 text-white md:h-3/4 md:px-10 md:pb-10">
        <div
          data-animate="firstdiv"
          className="flex items-center justify-around border-b border-gray-500 bg-transparent py-5 text-white"
        >
          <div>
            <Image
              src="/webLogo.png"
              alt={t('Company Logo')}
              width={32}
              height={32}
              className="w-8"
              priority
            />
          </div>
          <div className="flex gap-3" />
        </div>
        <div className="mt-32 flex flex-col items-center justify-center gap-5 text-[5vw] md:text-[4vw]">
          <Image
            src="/fullLogo.png"
            alt={t('Full Logo')}
            width={160}
            height={80}
            className="w-40"
            data-animate="logo"
            priority
          />
          <div className="flex flex-col gap-2 text-center">
            <h1 className="leading-none" data-animate="first">
              {t('Your right and your peace of mind')}
            </h1>
            <h1 className="leading-none" data-animate="second">
              {t('Legal is our Mission')}
            </h1>
          </div>
          <div className="flex w-full flex-col items-center justify-center text-xs text-[#D9D9D9] md:text-lg">
            <p className="mt-3" data-animate="description">
              {t('Talk to one of our lawyers')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              className="mt-3 flex items-center gap-3 rounded-3xl border border-white px-5 py-2 text-xs md:text-lg"
              type="button"
              data-animate="button"
              onClick={() => {
                router.push('/register');
              }}
            >
              <p>{t('Enroll now')}</p>
              <ArrowLeft size={20} />
            </motion.button>
          </div>
          <div
            className="mt-4 flex h-8 w-6 flex-col items-center justify-end rounded-3xl border-2 text-white"
            data-animate="mouse"
          >
            <p className="text-lg">.</p>
          </div>
        </div>
      </div>

      {/* SHADOW BG */}
      <div className="relative z-10 bg-[#0c172b] pb-10">
        <div
          className="relative bottom-5 flex min-h-[20%] w-full items-start justify-center bg-[#0c182c] px-5 md:h-1/2 md:px-40"
          data-animate="shadow"
        >
          <Image
            src="/mac-screen.png"
            alt={t('Mac Screen')}
            width={1200}
            height={800}
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute left-0 top-0 size-full bg-[radial-gradient(ellipse_300%_100%_at_bottom,#080830,transparent)]" />
      </div>
    </section>
  );
}

export default HeroPage;
