import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface Step3Props {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const Step3: React.FC<Step3Props> = ({ setCurrentStep }) => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      familiarityLevel: '',
      usefulFeatures: '',
      trackTrainingHours: '',
      careerGoals: '',
    },
  });

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const onSubmit = (data: any) => {
    localStorage.setItem('step-3', JSON.stringify(data));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <motion.div
        className="min-h-[80vh] w-full border-b"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-10 flex w-full flex-col gap-2 border-b px-5 md:px-10">
          <h1 className="text-lg font-[500]">
            {t('Your Opinion on the Ai Legal Traning System')}
          </h1>
          <p className="text-xs text-gray-400">
            {t('Please provide the information required in the below form')}
          </p>
        </div>

        <div className="flex w-full flex-col gap-5 p-5 md:p-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-[500]">
              {t(
                'What is your level of familiarity with AI technologies in the legal field?',
              )}
            </h2>
            <Controller
              name="familiarityLevel"
              control={control}
              rules={{ required: t('This field is required') }}
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  value={field.value || ''}
                  className="text-gray-700"
                >
                  <FormControlLabel
                    value="Very Good"
                    control={
                      <Radio
                        sx={{
                          color: 'black',
                          '&.Mui-checked': { color: 'black' },
                        }}
                      />
                    }
                    label={t('Very Good')}
                  />
                  <FormControlLabel
                    value="Moderate"
                    control={
                      <Radio
                        sx={{
                          color: 'black',
                          '&.Mui-checked': { color: 'black' },
                        }}
                      />
                    }
                    label={t('Moderate')}
                  />
                  <FormControlLabel
                    value="Limited"
                    control={
                      <Radio
                        sx={{
                          color: 'black',
                          '&.Mui-checked': { color: 'black' },
                        }}
                      />
                    }
                    label={t('Limited')}
                  />
                </RadioGroup>
              )}
            />
            {errors.familiarityLevel && (
              <p className="text-sm text-red-500">
                {errors.familiarityLevel.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-[500]">
              {t(
                'Which features do you think would be most useful in the application?',
              )}
            </h2>
            <Controller
              name="usefulFeatures"
              control={control}
              rules={{ required: t('This field is required') }}
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  value={field.value || ''}
                  className="text-gray-700"
                >
                  <FormControlLabel
                    value="Analyzing legal texts"
                    control={
                      <Radio
                        sx={{
                          color: 'black',
                          '&.Mui-checked': { color: 'black' },
                        }}
                      />
                    }
                    label={t('Analyzing legal texts')}
                  />
                  <FormControlLabel
                    value="Providing realistic simulation exercises"
                    control={
                      <Radio
                        sx={{
                          color: 'black',
                          '&.Mui-checked': { color: 'black' },
                        }}
                      />
                    }
                    label={t('Providing realistic simulation exercises')}
                  />
                  <FormControlLabel
                    value="Periodic progress reports"
                    control={
                      <Radio
                        sx={{
                          color: 'black',
                          '&.Mui-checked': { color: 'black' },
                        }}
                      />
                    }
                    label={t('Periodic progress reports')}
                  />
                  <FormControlLabel
                    value="Managing training tasks between layers and trainees"
                    control={
                      <Radio
                        sx={{
                          color: 'black',
                          '&.Mui-checked': { color: 'black' },
                        }}
                      />
                    }
                    label={t(
                      'Managing training tasks between layers and trainees',
                    )}
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label={t('Other (please specify)')}
                  />
                </RadioGroup>
              )}
            />
            {errors.usefulFeatures && (
              <p className="text-sm text-red-500">
                {errors.usefulFeatures.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-[500]">
              {t(
                'Do you see the importance of having a system to track practical training hours?',
              )}
            </h2>
            <Controller
              name="trackTrainingHours"
              control={control}
              rules={{ required: t('This field is required') }}
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  value={field.value || ''}
                  className="text-gray-700"
                >
                  <FormControlLabel
                    value="Yes"
                    control={
                      <Radio
                        sx={{
                          color: 'black',
                          '&.Mui-checked': { color: 'black' },
                        }}
                      />
                    }
                    label={t('Yes')}
                  />
                  <FormControlLabel
                    value="No"
                    control={
                      <Radio
                        sx={{
                          color: 'black',
                          '&.Mui-checked': { color: 'black' },
                        }}
                      />
                    }
                    label={t('No')}
                  />
                </RadioGroup>
              )}
            />
            {errors.trackTrainingHours && (
              <p className="text-sm text-red-500">
                {errors.trackTrainingHours.message}
              </p>
            )}
          </div>

          <div className="flex w-full flex-col gap-3">
            <h2 className="text-sm font-[500]">
              {t(
                'How do you think this application can help you achieve your career goals?',
              )}
            </h2>
            <Controller
              name="careerGoals"
              control={control}
              rules={{ required: t('This field is required') }}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="w-full lg:w-[75%]"
                  placeholder={t('Please describe your career goals')}
                />
              )}
            />
            {errors.careerGoals && (
              <p className="text-sm text-red-500">
                {errors.careerGoals.message}
              </p>
            )}
          </div>
        </div>
      </motion.div>
      <div className="my-10 flex justify-between px-5 md:px-10">
        <button
          type="button"
          onClick={handlePrevious}
          className="rounded-md border-2 border-black bg-white px-8 py-3 font-[500] text-black"
        >
          {t('Previous')}
        </button>
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          className="rounded-md bg-black px-8 py-3 text-white"
        >
          {t('Next')}
        </button>
      </div>
    </>
  );
};

export default Step3;
