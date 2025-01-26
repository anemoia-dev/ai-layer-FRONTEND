import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface Step4Props {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

interface FormData {
  lawName: '';
  articleNumber: '';
  articleText: '';
  issuingAuthority: '';
  judgmentSummary: '';
  keyHighlights: '';
  practicalExamples: '';
  priorityLegalAreas: '';
}

const Step4: React.FC<Step4Props> = ({ setCurrentStep }) => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    localStorage.setItem('step-4', JSON.stringify(data));
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
        <div className="mt-10 flex flex-col gap-2 border-b p-5 md:px-10">
          <h1 className="text-lg font-[500]">
            {t('Relevant Laws and Judgments in the Application')}
          </h1>
          <p className="text-xs text-gray-400">
            {t('Please provide the information required in the below form')}
          </p>
        </div>

        <div className="flex w-full flex-col justify-between gap-5 p-5 text-sm md:p-10 lg:w-[80%] lg:gap-10">
          <div className="flex flex-wrap justify-between">
            <Controller
              name="lawName"
              control={control}
              rules={{ required: t('Law name is required') }}
              render={({ field }) => (
                <FormControl
                  className="w-[45%]"
                  error={Boolean(errors.lawName)}
                >
                  <TextField
                    {...field}
                    placeholder={t('Law Name')}
                    variant="outlined"
                  />
                  {errors.lawName && (
                    <FormHelperText>{errors.lawName.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />

            <Controller
              name="articleNumber"
              control={control}
              rules={{ required: t('Article number is required') }}
              render={({ field }) => (
                <FormControl
                  className="w-[45%]"
                  error={Boolean(errors.articleNumber)}
                >
                  <TextField
                    {...field}
                    placeholder={t('Article Number')}
                    variant="outlined"
                  />
                  {errors.articleNumber && (
                    <FormHelperText>
                      {errors.articleNumber.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </div>

          <Controller
            name="articleText"
            control={control}
            rules={{ required: t('Article or judgment text is required') }}
            render={({ field }) => (
              <FormControl
                error={Boolean(errors.articleText)}
                className="w-full"
              >
                <TextField
                  {...field}
                  placeholder={t('Text of the Article or Judgment')}
                  variant="outlined"
                />
                {errors.articleText && (
                  <FormHelperText>{errors.articleText.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />

          <Controller
            name="issuingAuthority"
            control={control}
            rules={{ required: t('Issuing authority is required') }}
            render={({ field }) => (
              <FormControl
                error={Boolean(errors.issuingAuthority)}
                className="w-full"
              >
                <TextField
                  {...field}
                  placeholder={t('Issuing Authority')}
                  variant="outlined"
                />
                {errors.issuingAuthority && (
                  <FormHelperText>
                    {errors.issuingAuthority.message}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-[500]">{t('Judgment Summary')}</h1>
              <Controller
                name="judgmentSummary"
                control={control}
                rules={{ required: t('Judgment summary is required') }}
                render={({ field }) => (
                  <FormControl
                    error={Boolean(errors.judgmentSummary)}
                    className="w-full"
                  >
                    <TextField
                      {...field}
                      variant="outlined"
                      placeholder={t('Judgment summary is required')}
                    />
                    {errors.judgmentSummary && (
                      <FormHelperText>
                        {errors.judgmentSummary.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="mt-5 text-black">{t('Key Highlights')}</h1>
              <Controller
                name="keyHighlights"
                control={control}
                rules={{ required: t('Key highlights are required') }}
                render={({ field }) => (
                  <FormControl
                    error={Boolean(errors.keyHighlights)}
                    className="w-full"
                  >
                    <TextField
                      {...field}
                      variant="outlined"
                      placeholder={t('Key highlights are required')}
                    />
                    {errors.keyHighlights && (
                      <FormHelperText>
                        {errors.keyHighlights.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="mt-5 text-black">
                {t('Practical Examples of the Judgment')}
              </h1>
              <Controller
                name="practicalExamples"
                control={control}
                rules={{ required: t('Practical examples are required') }}
                render={({ field }) => (
                  <FormControl
                    error={Boolean(errors.practicalExamples)}
                    className="w-full"
                  >
                    <TextField
                      {...field}
                      variant="outlined"
                      placeholder={t('Practical examples are required')}
                    />
                    {errors.practicalExamples && (
                      <FormHelperText>
                        {errors.practicalExamples.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="mt-5 text-black">
                {t('Priority Legal Areas for the Application')}
              </h1>
              <Controller
                name="priorityLegalAreas"
                control={control}
                rules={{ required: t('Priority legal areas are required') }}
                render={({ field }) => (
                  <FormControl
                    error={Boolean(errors.priorityLegalAreas)}
                    className="w-full"
                  >
                    <RadioGroup {...field} className="text-gray-700">
                      <FormControlLabel
                        value="Labor and Corporate Laws"
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
                        label={t('Labor and Corporate Laws')}
                      />
                      <FormControlLabel
                        value="Family Laws (Marriage, Divorce, Custody)"
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
                        label={t('Family Laws (Marriage, Divorce, Custody)')}
                      />
                      <FormControlLabel
                        value="International Laws"
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
                        label={t('International Laws')}
                      />
                      <FormControlLabel
                        value="Commercial Laws (Contracts, Intellectual Property)"
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
                        label={t(
                          'Commercial Laws (Contracts, Intellectual Property)',
                        )}
                      />
                      <FormControlLabel
                        value="Other"
                        control={<Radio />}
                        label={t('Other (please specify)')}
                      />
                    </RadioGroup>
                  </FormControl>
                )}
              />
            </div>
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

export default Step4;
