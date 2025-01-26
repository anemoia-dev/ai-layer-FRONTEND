import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';

interface MultiStepFormProps {
  language: string;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ language }) => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex min-h-screen flex-col bg-white text-black lg:flex-row">
      <div className="custom-bg sticky top-0 hidden max-h-[100vh] w-full rounded-r-3xl bg-gray-100 p-4 lg:flex lg:w-[35%] lg:flex-col lg:items-center lg:justify-center">
        <div
          className={`flex items-center ${
            language === 'ar' && 'flex-row-reverse'
          } mb-10 w-full justify-center gap-5`}
        >
          <div className="h-12 w-12 rounded-bl-md rounded-tr-md border-2 border-black" />
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-[400]">LEXTFUTURE</h1>
            <p className="text-xs">FUTURE OF LAYERS</p>
          </div>
        </div>

        <div className="relative flex flex-row items-center justify-between space-y-10 lg:flex-col">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`flex items-center ${
                language === 'ar' && 'flex-row-reverse'
              } relative z-[20] flex-wrap items-center justify-center`}
            >
              <div
                className={`flex justify-end ${
                  language === 'en' && 'mr-5'
                } w-[80%] whitespace-nowrap lg:w-[22vw]`}
              >
                <div
                  className={`ml-4 hidden w-full justify-end font-[500] text-black lg:flex lg:text-[9px] xl:text-[0.7rem] 2xl:text-[0.9rem] ${
                    currentStep >= step ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  {step === 1 && t('General information')}
                  {step === 2 && t('Experience and interest')}
                  {step === 3 &&
                    t('Your Opinion on the Ai Legal Traning System')}
                  {step === 4 &&
                    t('Relevant Laws and Judgments in the Application')}
                  {step === 5 && t('Commitment and Collaboration')}
                </div>
              </div>

              <div
                className={`z-[50] mb-2 flex h-12 w-12 items-center justify-center rounded-[50%] border-2 lg:h-8 lg:w-8 lg:rounded-full xl:h-12 xl:w-12 ${
                  currentStep >= step
                    ? 'bg-black text-white'
                    : 'border border-gray-500 text-gray-500'
                }`}
              >
                {step}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-white lg:w-[65%]">
        <form>
          {currentStep === 1 && <Step1 setCurrentStep={setCurrentStep} />}
          {currentStep === 2 && <Step2 setCurrentStep={setCurrentStep} />}
          {currentStep === 3 && <Step3 setCurrentStep={setCurrentStep} />}
          {currentStep === 4 && <Step4 setCurrentStep={setCurrentStep} />}
          {currentStep === 5 && <Step5 setCurrentStep={setCurrentStep} />}
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
