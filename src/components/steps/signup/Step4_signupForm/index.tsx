'use client';

import 'react-toastify/dist/ReactToastify.css';

import {
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useRegisterUserMutation } from 'store/api/auth/auth';

import { multiStepFormAtom } from '../state';

interface Step4Props {
  back: () => void;
}

interface Step4FormData {
  timeDedication: string;
  participateInDevelopment: string;
}

const Step4: React.FC<Step4Props> = ({ back }) => {
  const { t } = useTranslation();
  const [register] = useRegisterUserMutation();
  const [formData, setFormData] = useAtom(multiStepFormAtom);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Step4FormData>({
    defaultValues: formData.step4,
  });

  const onSubmit = async (data: Step4FormData) => {
    setIsSubmitting(true);

    setFormData((prevFormData) => ({
      ...prevFormData,
      step4: { ...data },
    }));

    try {
      setTimeout(async () => {
        await register({ userCredentials: formData }).unwrap();
      }, 1000);
      toast.success('Form submitted successfully!');
      router.push('/home');
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div
        className="min-h-[80vh] w-full border-b"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-10 flex w-full flex-col gap-2 border-b p-5 md:px-10">
          <h1 className="text-lg font-medium">
            {t('Commitment and Collaboration')}
          </h1>
          <p className="text-xs text-gray-400">
            {t('Please provide the information required in the below form')}
          </p>
        </div>

        <div className="flex flex-col gap-5 p-5 font-[500] md:p-10">
          <FormControl component="fieldset" error={!!errors.timeDedication}>
            <FormLabel component="legend">
              {t(
                'How much time can you dedicate daily to using the application?',
              )}
            </FormLabel>
            <Controller
              name="timeDedication"
              control={control}
              rules={{ required: t('This field is required') }}
              render={({ field }) => (
                <RadioGroup {...field}>
                  {['Less than an hour', '1-2 hours', 'More than 2 hours'].map(
                    (option) => (
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
                        label={
                          <span className="text-gray-700">{t(option)}</span>
                        }
                      />
                    ),
                  )}
                </RadioGroup>
              )}
            />
            {errors.timeDedication && (
              <p className="text-sm text-red-500">
                {errors.timeDedication?.message}
              </p>
            )}
          </FormControl>

          <FormControl
            component="fieldset"
            error={!!errors.participateInDevelopment}
          >
            <FormLabel component="legend">
              {t(
                'Are you willing to participate in the application development phases?',
              )}
            </FormLabel>
            <Controller
              name="participateInDevelopment"
              control={control}
              rules={{ required: t('This field is required') }}
              render={({ field }) => (
                <RadioGroup {...field}>
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
                      label={<span className="text-gray-700">{t(option)}</span>}
                    />
                  ))}
                </RadioGroup>
              )}
            />
            {errors.participateInDevelopment && (
              <p className="text-sm text-red-500">
                {errors.participateInDevelopment?.message}
              </p>
            )}
          </FormControl>
        </div>
      </motion.div>

      <div className="my-10 flex justify-between px-5 md:px-10">
        <motion.button
          type="button"
          onClick={back}
          className="rounded-md border-2 border-black bg-white px-8 py-3 text-black"
        >
          {t('Previous')}
        </motion.button>
        <motion.button
          type="button"
          onClick={handleSubmit(onSubmit)}
          className="flex items-center justify-center rounded-md bg-green-500 px-8 py-3 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <CircularProgress size={24} sx={{ color: 'white' }} />
          ) : (
            t('Submit')
          )}
        </motion.button>
      </div>
    </>
  );
};

export default Step4;
