import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Step1 from '@/components/steps/signup/Step1_signupForm';
import Step2 from '@/components/steps/signup/Step2_signupForm';
import Step3 from '@/components/steps/signup/Step3_signupForm';
import Step4 from '@/components/steps/signup/Step4_signupForm';
import type { StepType } from '@/hooks/useMultiStepForm';
import useMultistepForm from '@/hooks/useMultiStepForm';

interface MultiStepFormProps {
  language: string;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ language }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(0);

  const steps: StepType[] = [
    { type: Step1, props: {} },
    { type: Step2, props: {} },
    { type: Step3, props: {} },
    { type: Step4, props: {} },
  ];

  const { step: StepComponent, next, back } = useMultistepForm(steps);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
      next?.();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
      back?.();
    }
  };

  return (
    <div
      className="flex min-h-screen flex-col bg-white text-black lg:flex-row"
      dir="rtl"
    >
      {/* Large Screen View */}
      <div className="custom-bg sticky top-0 hidden max-h-screen w-full rounded-r-3xl bg-gray-100 p-4 shadow-2xl shadow-gray-400 lg:flex lg:w-[35%] lg:flex-col lg:items-center lg:justify-center">
        <div
          className={`flex cursor-pointer items-center ${
            language === 'ar' && 'flex-row-reverse'
          } mb-10 w-full justify-center gap-5`}
        >
          <Image
            src="/Arabic.png"
            onClick={() => {
              router.push('/');
            }}
            alt="arabic-img"
            width={250}
            height={250}
          />
        </div>

        <div className="relative flex flex-row items-center justify-between space-y-10 lg:flex-col">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div
              key={stepNumber}
              className={`flex items-center ${
                language === 'ar' && 'flex-row-reverse'
              } relative z-20 flex-wrap items-center justify-center gap-5`}
            >
              <div
                className={`flex justify-end ${
                  language === 'en' && 'mr-5'
                } w-4/5 whitespace-nowrap lg:w-[22vw]`}
              >
                <div
                  className={`ml-4 hidden w-full justify-end font-[500] text-black lg:flex lg:justify-start lg:text-[9px] xl:text-[0.7rem] 2xl:text-[0.9rem] ${
                    currentStep >= stepNumber - 1
                      ? 'text-black '
                      : 'text-gray-500'
                  }`}
                >
                  {stepNumber === 1 && t('General information')}
                  {stepNumber === 2 &&
                    t('Relevant Laws and Judgments in the Application')}
                  {stepNumber === 3 &&
                    t('Relevant Laws and Judgments in the Application')}
                  {stepNumber === 4 && t('Commitment and Collaboration')}
                </div>
              </div>
              <motion.div
                className={`z-50 mb-2 flex size-12 items-center justify-center rounded-[50%] border-2 lg:size-8 lg:rounded-full xl:size-12 ${
                  currentStep >= stepNumber - 1
                    ? 'bg-black text-white'
                    : 'border border-gray-500 bg-white text-gray-500'
                }`}
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: currentStep >= stepNumber - 1 ? 1 : 0.8,
                  opacity: currentStep >= stepNumber - 1 ? 1 : 0.5,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {t(`${stepNumber}`)}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      {/* //////////////// MOBILE  */}
      <div className="custom-bg  max-h-screen w-full rounded-r-3xl bg-gray-100 p-5 pt-20 lg:hidden">
        <div
          className={`flex cursor-pointer items-center justify-start ${
            language === 'ar' && 'flex-row-reverse '
          } mb-10 w-full gap-5`}
        >
          <Image
            src="/Arabic.png"
            onClick={() => {
              router.push('/');
            }}
            alt="arabic-img"
            width={200}
            height={200}
          />
        </div>

        <div className="relative flex items-center justify-between space-y-10 ">
          <div className="flex w-full flex-row items-center justify-between gap-5 ">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`flex items-center ${
                  language === 'ar' && 'flex-row-reverse'
                } relative z-20 flex-wrap items-center justify-center `}
              >
                <div
                  className={`flex justify-end ${
                    language === 'en' && 'mr-5'
                  } w-4/5 whitespace-nowrap lg:w-[22vw]`}
                >
                  <div
                    className={`ml-4 hidden w-full font-[500] text-black lg:flex lg:text-[9px] xl:text-[0.7rem] 2xl:text-[0.9rem] ${
                      currentStep >= stepNumber - 1
                        ? 'text-black'
                        : 'text-gray-500'
                    }`}
                  >
                    {stepNumber === 1 && t('General information')}
                    {stepNumber === 2 &&
                      t('Relevant Laws and Judgments in the Application')}
                    {stepNumber === 3 &&
                      t('Relevant Laws and Judgments in the Application')}
                    {stepNumber === 4 && t('Commitment and Collaboration')}
                  </div>
                </div>
                <motion.div
                  className={`z-50 mb-2 flex size-12 items-center justify-center rounded-[50%] border-2 lg:size-8 lg:rounded-full xl:size-12 ${
                    currentStep >= stepNumber - 1
                      ? 'bg-black text-white'
                      : 'border border-gray-500 text-gray-500'
                  }`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: currentStep >= stepNumber - 1 ? 1 : 0.8,
                    opacity: currentStep >= stepNumber - 1 ? 1 : 0.5,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  {t(`${stepNumber}`)}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="w-full lg:w-[65%]">
        {StepComponent &&
          React.cloneElement(StepComponent, {
            next: handleNext,
            back: handleBack,
          })}
      </div>
    </div>
  );
};

export default MultiStepForm;
