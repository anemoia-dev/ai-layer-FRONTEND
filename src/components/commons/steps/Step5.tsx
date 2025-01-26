import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify'; 

import { useRegisterUserMutation } from '@/../store/api/auth/auth';

interface Step5Props {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  formData: any;
  currentLanguage: string;
}

interface FormData {
  timeDedication: string;
  participateInDevelopment: string;
  suggestionsForTrainees: string;
}

const Step5: React.FC<Step5Props> = ({ setCurrentStep }) => {
  const { t } = useTranslation();
  const [register] = useRegisterUserMutation();

  // Initialize react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // General function for rendering radio button groups
  const renderRadioGroup = (
    name: keyof FormData,
    label: string,
    options: string[],
  ) => (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm">{t(label)}</h2>
      <Controller
        name={name}
        control={control}
        rules={{ required: t('Please select an option') }}
        render={({ field }) => (
          <RadioGroup {...field}>
            {options.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={
                  <Radio
                    sx={{
                      color: 'black',
                      '&.Mui-checked': {
                        color: 'black',
                      },
                    }}
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

  const onSubmit = async (data: FormData) => {
    console.log('Form Data:', data);

    // Retrieve all previous step data
    const step1 = JSON.parse(localStorage.getItem('step-1') || '{}');
    const step2 = JSON.parse(localStorage.getItem('step-2') || '{}');
    const step3 = JSON.parse(localStorage.getItem('step-3') || '{}');
    const step4 = JSON.parse(localStorage.getItem('step-4') || '{}');

    const mergedData = {
      ...step1,
      ...step2,
      ...step3,
      ...step4,
      ...data,
    };

    localStorage.setItem('step-5', JSON.stringify(mergedData));

    console.log('Merged Data:', mergedData);

    try {
      const response = await register({ userCredentials: mergedData });
      console.log(response);

      if (response?.error) {
        const errorMessages = response?.error?.data?.message;

        if (Array.isArray(errorMessages)) {
          errorMessages.forEach((err: { field: string; message: string }) => {
            if (err?.message) {
              toast.error(`${err.field}: ${err.message}`);
            } else {
              toast.error(t('An unknown error occurred.'));
            }
          });
        } else {
          toast.error(
            response?.error?.message ||
              t('An error occurred, please check the data.'),
          );
        }
      } else if (response?.data?.message) {
        toast.success(response?.data?.message || t('Submission successful!'));
      }
    } catch (error) {
      toast.error(t('An unexpected error occurred.'));
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
          <h1 className="text-lg font-[500]">
            {t('Commitment and Collaboration')}
          </h1>
          <p className="text-xs text-gray-400">
            {t('Please provide the information required in the below form.')}
          </p>
        </div>

        <div className="flex flex-col gap-5 p-5 md:p-10">
          {/* Render each radio group using the renderRadioGroup function */}
          {renderRadioGroup(
            'timeDedication',
            'How much time can you dedicate daily to using the application?',
            ['Less than an hour', '1-2 hours', 'More than 2 hours'],
          )}

          {renderRadioGroup(
            'participateInDevelopment',
            'Are you willing to participate in the application development phases by providing feedback or testing early versions?',
            ['Yes', 'No'],
          )}

          {renderRadioGroup(
            'suggestionsForTrainees',
            'Do you have suggestions on the best ways to encourage students and trainees to use the application?',
            ['Yes', 'No'],
          )}
        </div>
      </motion.div>

      <div className="my-10 flex justify-between px-5 md:px-10">
        <button
          type="button"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          className="rounded-md border-2 border-black bg-white px-8 py-3 font-[500] text-black"
        >
          {t('Previous')}
        </button>
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          className="rounded-md bg-green-500 px-8 py-3 text-white"
        >
          {t('Submit')}
        </button>
      </div>
    </>
  );
};

export default Step5;
