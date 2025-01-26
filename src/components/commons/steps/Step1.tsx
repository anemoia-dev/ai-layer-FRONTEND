import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

// Define props type
interface Step1Props {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const Step1: React.FC<Step1Props> = ({ setCurrentStep }) => {
  const { t } = useTranslation();

  // react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const formValues = watch();

  // Submit function for my next button
  const onSubmit = () => {
    console.log(formValues);
    localStorage.setItem('step-1', JSON.stringify(formValues));
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
        {/* TITLE AND DESCRIPTION */}
        <div className="mt-10 flex w-full flex-col gap-2 border-b p-5 md:px-10">
          <h1 className="text-lg font-[500]">{t('General information')}</h1>
          <p className="text-xs text-gray-400">
            {t('Please provide the information required in the below form')}
          </p>
        </div>

        {/* INPUTS USER IS GOING TO FILL */}
        <div className="flex w-[100%] flex-col gap-5 p-5 md:p-10 lg:w-[80%]">
          {/* NAME AND EMAIL MOBILE NUMBER AND EDUCATIONAL INSTITUTES */}
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <TextField
              id="fullName"
              placeholder={t('Full Name')}
              variant="outlined"
              className="w-[45%]"
              {...register('fullName', {
                required: t('This field is required'),
                validate: (value) =>
                  value.trim() !== '' ||
                  t('This field cannot contain only spaces'),
              })}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName?.message}
            />
            <TextField
              id="email"
              placeholder={t('Email Address')}
              variant="outlined"
              className="w-[45%]"
              {...register('email', {
                required: t('This field is required'),
                validate: (value) =>
                  value.trim() !== '' ||
                  t('This field cannot contain only spaces'),
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              id="mobileNumber"
              placeholder={t('Mobile Number')}
              variant="outlined"
              className="w-[45%]"
              {...register('mobileNumber', {
                required: t('This field is required'),
                validate: (value) =>
                  value.trim() !== '' ||
                  t('This field cannot contain only spaces'),
              })}
              error={!!errors.mobileNumber}
              helperText={errors.mobileNumber?.message}
            />
            <TextField
              id="institution"
              placeholder={t('University Or Educational Institution')}
              variant="outlined"
              className="w-[45%]"
              {...register('institution', {
                required: t('This field is required'),
                validate: (value) =>
                  value.trim() !== '' ||
                  t('This field cannot contain only spaces'),
              })}
              error={!!errors.institution}
              helperText={errors.institution?.message}
            />
          </div>

          {/* FIELD OF STUDY */}
          <div>
            <TextField
              id="fieldOfStudy"
              placeholder={t('Field of Study')}
              variant="outlined"
              className="w-full "
              {...register('fieldOfStudy', {
                required: t('This field is required'),
                validate: (value) =>
                  value.trim() !== '' ||
                  t('This field cannot contain only spaces'),
              })}
              error={!!errors.fieldOfStudy}
              helperText={errors.fieldOfStudy?.message}
            />
          </div>

          {/* ACADEMIC LEVEL */}
          <div>
            <TextField
              id="academicLevel"
              placeholder={t('Academic Level')}
              variant="outlined"
              className="w-full "
              {...register('academicLevel', {
                required: t('This field is required'),
                validate: (value) =>
                  value.trim() !== '' ||
                  t('This field cannot contain only spaces'),
              })}
              error={!!errors.academicLevel}
              helperText={errors.academicLevel?.message}
            />
          </div>

          {/* RADIO BUTTONS FOR ASKING LEGAL TRAINING */}
          <div>
            <h2 className="mb-5 font-[500]">
              {t('Do you currently enrolled in a legal training program?')}
            </h2>
            <RadioGroup
              aria-labelledby="legalTraining-group"
              name="legalTraining"
              value={formValues.legalTraining || ''} // Ensure controlled component
              onChange={(e) => {
                setValue('legalTraining', e.target.value); // Update react-hook-form value
              }}
              className="relative flex flex-col text-gray-600"
            >
              <FormControlLabel
                value="No"
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
                label={t('No')}
                className="text-sm sm:text-base"
              />
              <FormControlLabel
                value="Yes"
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
                label={t('Yes')}
                className="text-xs sm:text-base"
              />
            </RadioGroup>

            {errors.legalTraining && (
              <p className="text-xs text-red-500 sm:text-sm">
                {errors.legalTraining.message}
              </p>
            )}
          </div>
        </div>
      </motion.div>
      <div className="my-10 w-full px-5 md:px-10">
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

export default Step1;
