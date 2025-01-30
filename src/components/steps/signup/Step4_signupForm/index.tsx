import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { multiStepFormAtom } from '../signup_state';

interface Step2Data {
  LawFirm: string;
  Mobile_Number: string;
  legalWorkType: string;
  interestArea: string;
  specificSkills: string;
  practicalExperience: string;
}

interface Step2Props {
  next: () => void;
  back: () => void;
}

const Step4: React.FC<Step2Props> = ({ next, back }) => {
  const { t } = useTranslation();
  const [formData] = useAtom(multiStepFormAtom);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2Data>({
    defaultValues: formData.step2,
  });

  const onSubmit = () => {
    // setFormData((prev) => ({
    //   ...prev,
    //   step4: data,
    // }));
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
          <h1 className="text-lg font-[500]">{t('Law firm')}</h1>
          <p className="text-xs text-gray-400">
            {t('Please provide the information required in the below form')}
          </p>
        </div>

        <div className="flex w-full flex-col gap-10 p-5 md:p-10 lg:w-[80%]">
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <Controller
              name="LawFirm"
              control={control}
              rules={{ required: t('This field is required') }}
              render={({ field }) => (
                <TextField
                  placeholder={t('Law firm')}
                  variant="outlined"
                  className="w-[45%]"
                  {...field}
                  error={!!errors.LawFirm}
                  helperText={errors.LawFirm?.message}
                />
              )}
            />
            <Controller
              name="Mobile_Number"
              control={control}
              rules={{ required: t('This field is required') }}
              render={({ field }) => (
                <TextField
                  placeholder={t('Mobile Number')}
                  variant="outlined"
                  className="w-[45%]"
                  {...field}
                  error={!!errors.Mobile_Number}
                  helperText={errors.Mobile_Number?.message}
                />
              )}
            />
          </div>
          <Controller
            name="legalWorkType"
            control={control}
            rules={{ required: t('This field is required') }}
            render={({ field }) => (
              <TextField
                placeholder={t('Type of Legal Work')}
                variant="outlined"
                className="w-full lg:w-[100%]"
                {...field}
                error={!!errors.legalWorkType}
                helperText={errors.legalWorkType?.message}
              />
            )}
          />
          <Controller
            name="interestArea"
            control={control}
            rules={{ required: t('This field is required') }}
            render={({ field }) => (
              <TextField
                placeholder={t('Which area of law interests you the most')}
                variant="outlined"
                className="w-full lg:w-[100%]"
                {...field}
                error={!!errors.interestArea}
                helperText={errors.interestArea?.message}
              />
            )}
          />
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-[500]">
              {t(
                'Do you have specific interests in developing particular skills such as drafting legal memos, case management, or advocacy?',
              )}
            </h2>
            <Controller
              name="specificSkills"
              control={control}
              rules={{ required: t('This field is required') }}
              render={({ field }) => (
                <RadioGroup {...field} className="text-gray-700 ">
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
            {errors.specificSkills && (
              <p className="text-xs text-red-500">
                {errors.specificSkills.message}
              </p>
            )}
          </div>
        </div>
      </motion.div>

      <div className="mb-10 mt-8 flex justify-between px-5 md:px-10">
        <motion.button
          whileHover={{
            scale: 1.05,
            rotate: -1,
            transition: { type: 'spring', stiffness: 400 },
          }}
          whileTap={{
            scale: 0.95,
            rotate: 1,
            transition: { type: 'spring', stiffness: 400 },
          }}
          type="button"
          onClick={back}
          className="rounded-md border-2 border-black bg-white px-8 py-3 font-[500] text-black"
        >
          {t('Previous')}
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.05,
            rotate: -1,
            transition: { type: 'spring', stiffness: 400 },
          }}
          whileTap={{
            scale: 0.95,
            rotate: 1,
            transition: { type: 'spring', stiffness: 400 },
          }}
          type="button"
          onClick={handleSubmit(onSubmit)}
          className="rounded-md bg-black px-8 py-3 text-white"
        >
          {t('Next')}
        </motion.button>
      </div>
    </>
  );
};

export default Step4;
