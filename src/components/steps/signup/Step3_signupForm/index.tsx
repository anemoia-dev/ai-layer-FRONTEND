import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { multiStepFormAtom } from '../signup_state';

const options = [
  { value: 'Analyzing legal texts', label: 'Analyzing legal texts' },
  {
    value: 'Providing realistic simulation exercises',
    label: 'Providing realistic simulation exercises',
  },
  { value: 'Periodic progress reports', label: 'Periodic progress reports' },
  {
    value: 'Managing training tasks between lawyers and trainees',
    label: 'Managing training tasks between lawyers and trainees',
  },
  { value: 'Other', label: 'Other' },
];

interface Step3Props {
  next: () => void;
  back: () => void;
}

const Step3: React.FC<Step3Props> = ({ next, back }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useAtom(multiStepFormAtom);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData.step3 || {
      familiarityLevel: '',
      usefulFeatures: [],
      trackTrainingHours: '',
      careerGoals: '',
    },
  });

  const onSubmit = (data: any) => {
    setFormData((prev) => ({ ...prev, step3: data }));
    next();
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
            {t('Your Opinion on the AI Legal Training System')}
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
                <RadioGroup {...field} className="text-gray-700">
                  {['Very Good', 'Moderate', 'Limited'].map((level) => (
                    <FormControlLabel
                      key={level}
                      value={level}
                      control={
                        <Radio
                          sx={{
                            color: 'black',
                            '&.Mui-checked': { color: 'black' },
                          }}
                        />
                      }
                      label={t(level)}
                    />
                  ))}
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
              rules={{
                validate: (value: string[]) =>
                  value && value.length > 0
                    ? true
                    : t('This field is required'),
              }}
              render={({ field }) => (
                <FormGroup>
                  {options.map(({ value, label }) => (
                    <FormControlLabel
                      key={value}
                      control={
                        <Checkbox
                          {...field}
                          checked={
                            Array.isArray(field.value) &&
                            field.value.includes(value)
                          }
                          onChange={(e) => {
                            const currentValue = Array.isArray(field.value)
                              ? field.value
                              : [];
                            const newValue = e.target.checked
                              ? [...currentValue, value]
                              : currentValue.filter((item) => item !== value);
                            field.onChange(newValue);
                          }}
                          sx={{
                            color: 'black',
                            '&.Mui-checked': { color: 'black' },
                          }}
                        />
                      }
                      label={t(label)}
                    />
                  ))}
                </FormGroup>
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
                <RadioGroup {...field} className="text-gray-700">
                  {['Yes', 'No'].map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={
                        <Radio
                          sx={{
                            color: 'black',
                            '&.Mui-checked': { color: 'black' },
                          }}
                        />
                      }
                      label={t(option)}
                    />
                  ))}
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
          onClick={back}
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
