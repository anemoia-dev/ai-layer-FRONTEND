import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface Step1FormData {
  fullName: string;
  email: string;
  mobileNumber: string;
  institution: string;
  fieldOfStudy: string;
  academicLevel: string;
  legalTraining: string;
}

interface Step1Props {
  next: () => void;
  back: () => void;
}

const Step1: React.FC<Step1Props> = ({ next }) => {
  const { t } = useTranslation();
  const storedData = localStorage.getItem('step-1');
  const initialData = storedData ? JSON.parse(storedData) : {};

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Step1FormData>({
    defaultValues: {
      fullName: initialData.fullName || '',
      email: initialData.email || '',
      mobileNumber: initialData.mobileNumber || '',
      institution: initialData.institution || '',
      fieldOfStudy: initialData.fieldOfStudy || '',
      academicLevel: initialData.academicLevel || '',
      legalTraining: initialData.legalTraining || '',
    },
  });

  const formValues = watch();

  useEffect(() => {
    if (storedData) {
      const parsedData: Step1FormData = JSON.parse(storedData);
      (Object.keys(parsedData) as (keyof Step1FormData)[]).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
  }, [storedData, setValue]);

  const onSubmit = (data: Step1FormData) => {
    localStorage.setItem('step-1', JSON.stringify(data));
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
        <div className="mt-10 flex w-full flex-col gap-2 border-b p-5 md:px-10">
          <h1 className="text-lg font-[500]">{t('General information')}</h1>
          <p className="text-xs text-gray-400">
            {t('Please provide the information required in the below form')}
          </p>
        </div>

        <div className="flex w-[100%] flex-col gap-5 p-5 md:p-10 lg:w-[80%]">
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
              helperText={errors.fullName ? errors.fullName.message : ''}
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
              error={Boolean(errors.email)}
              helperText={errors.email ? errors.email.message : ''}
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
              error={Boolean(errors.mobileNumber)}
              helperText={
                errors.mobileNumber ? errors.mobileNumber.message : ''
              }
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
              error={Boolean(errors.institution)}
              helperText={errors.institution ? errors.institution.message : ''}
            />
          </div>

          <div>
            <TextField
              id="fieldOfStudy"
              placeholder={t('Field of Study')}
              variant="outlined"
              className="w-full"
              {...register('fieldOfStudy', {
                required: t('This field is required'),
                validate: (value) =>
                  value.trim() !== '' ||
                  t('This field cannot contain only spaces'),
              })}
              error={Boolean(errors.fieldOfStudy)}
              helperText={
                errors.fieldOfStudy ? errors.fieldOfStudy.message : ''
              }
            />
          </div>

          <div>
            <TextField
              id="academicLevel"
              placeholder={t('Academic Level')}
              variant="outlined"
              className="w-full"
              {...register('academicLevel', {
                required: t('This field is required'),
                validate: (value) =>
                  value.trim() !== '' ||
                  t('This field cannot contain only spaces'),
              })}
              error={Boolean(errors.academicLevel)}
              helperText={
                errors.academicLevel ? errors.academicLevel.message : ''
              }
            />
          </div>

          <div>
            <h2 className="mb-5 font-[500]">
              {t('Are you currently enrolled in a legal training program?')}
            </h2>
            <RadioGroup
              aria-labelledby="legalTraining-group"
              name="legalTraining"
              value={formValues.legalTraining || ''}
              onChange={(e) => {
                setValue('legalTraining', e.target.value, {
                  shouldValidate: true,
                });
              }}
              className="relative flex flex-col text-gray-600"
            >
              <FormControlLabel
                value="No"
                control={
                  <Radio
                    sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }}
                  />
                }
                label={t('No')}
                className="text-sm sm:text-base"
              />
              <FormControlLabel
                value="Yes"
                control={
                  <Radio
                    sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }}
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
