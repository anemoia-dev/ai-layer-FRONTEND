'use client';

import {
  CircularProgress,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface Step5Props {
  back: () => void;
}

interface FormData {
  timeDedication: string;
  participateInDevelopment: string;
  suggestionsForTrainees: string;
}

const Step5: React.FC<Step5Props> = ({ back }) => {
  const { t } = useTranslation();
  // const [register] = useRegisterUserMutation();
  const router = useRouter();
  const [isSubmitting] = useState(false);
  // const [formData] = useAtom(multiStepFormAtom);
  const [model, setModel] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const renderRadioGroup = (
    name: keyof FormData,
    labelKey: string,
    options: string[],
  ) => (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm">{t(labelKey)}</h2>
      <Controller
        name={name}
        control={control}
        rules={{ required: t('This field is required') }}
        render={({ field }) => (
          <RadioGroup
            {...field}
            onChange={(e) => {
              field.onChange(e);
              if (
                name === 'suggestionsForTrainees' &&
                e.target.value === 'Yes'
              ) {
                setModel(true);
              } else if (
                name === 'suggestionsForTrainees' &&
                e.target.value === 'No'
              ) {
                setModel(false);
              }
            }}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={
                  <Radio
                    sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }}
                  />
                }
                label={<span className="text-gray-700">{t(option)}</span>}
              />
            ))}
          </RadioGroup>
        )}
      />
      {errors[name] && (
        <p className="text-sm text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );

  const onSubmit = async () => {
    router.push('/home');

    // const updatedFormData = {
    //   ...formData.step1,
    //   ...formData.step2,
    //   ...formData.step3,
    //   ...formData.step4,
    //   ...data,
    // };

    // try {
    //   const response = await register({ userCredentials: updatedFormData });
    //   const error = response.error as APIError;
    //   if (error?.data?.message) {
    //     toast.error(error.data.message);
    //   } else {
    //     toast.success('Form submitted successfully');
    //     router.push('/home');
    //   }
    // } catch (err) {
    //   toast.error(String(err));
    // } finally {
    //   setIsSubmitting(false);
    // }
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
          {renderRadioGroup(
            'timeDedication',
            'How much time can you dedicate daily to using the application?',
            ['Less than an hour', '1-2 hours', 'More than 2 hours'],
          )}
          {renderRadioGroup(
            'participateInDevelopment',
            'Are you willing to participate in the application development phases?',
            ['Yes', 'No'],
          )}
          {renderRadioGroup(
            'suggestionsForTrainees',
            'Do you have suggestions for encouraging students to use the application?',
            ['Yes', 'No'],
          )}
        </div>
        <div>
          {model && (
            <div className=" w-full rounded-lg p-5 shadow-lg shadow-gray-500  md:p-10">
              <p className="font-bold ">{t('Please give us your opinion')}</p>
              <TextField className="w-full" />
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  className="rounded-md border-2 border-black bg-white px-8 py-3 text-black"
                  onClick={() => setModel(false)}
                >
                  {t('Submit')}
                </button>
              </div>
            </div>
          )}
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

export default Step5;
