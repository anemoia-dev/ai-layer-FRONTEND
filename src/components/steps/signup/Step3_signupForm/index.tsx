import { TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { multiStepFormAtom } from '../state';

interface Step3Props {
  next: () => void;
  back: () => void;
}

interface Step3FormData {
  caseNo1: string;
  caseOverview: string;
  caseType: string;
  courtRuled1: string;
  dated1: string;
  decisionResulting: string;
  futureApplication: string;
  involvedParties: string;
  issuingCourt: string;
  judgementDate: string;
  judgementImpact: string;
  judgementNumber: string;
  keyTakeaways: string;
  legalJurisprudence: string;
  legalPoints: string;
  legalRecommendations: string;
  legalSource: string;
  mainLegalIssue: string;
  relevantLaws: string;
  supportiveDocuments: string;
}

const Step3: React.FC<Step3Props> = ({ next, back }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useAtom(multiStepFormAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3FormData>({
    defaultValues: formData.step3,
  });

  const onSubmit = (data: Step3FormData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      step3: {
        ...prevFormData.step3,
        ...data,
      },
    }));
    next();
  };

  return (
    <motion.div
      className="mb-10 min-h-[80vh] w-full border-b pb-32"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-10 flex flex-col gap-2 border-b p-5 md:px-10">
        <h1 className="text-lg font-[500]">
          {t('Inserting Basic Laws and Legal Provisions')}
        </h1>
        <p className="text-xs text-gray-400">
          {t('Please provide the information required in the below form')}
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 p-5 md:px-10 lg:gap-10"
      >
        <h1 className="font-[500]">{t('Case Data')}</h1>
        <div className="flex flex-wrap justify-between gap-5 lg:w-[75%] lg:gap-7">
          <TextField
            {...register('caseType', { required: 'This field is required' })}
            placeholder={t('Case Type')}
            variant="outlined"
            className="w-[47%]"
            error={!!errors.caseType}
            helperText={errors.caseType ? 'This field is required' : ''}
          />
          <TextField
            {...register('judgementNumber', {
              required: 'This field is required',
            })}
            placeholder={t('Judgement Number')}
            variant="outlined"
            className="w-[47%]"
            error={!!errors.judgementNumber}
            helperText={errors.judgementNumber ? 'This field is required' : ''}
          />
          <TextField
            {...register('issuingCourt', {
              required: 'This field is required',
            })}
            placeholder={t('Issuing Court')}
            variant="outlined"
            className="w-[47%]"
            error={!!errors.issuingCourt}
            helperText={errors.issuingCourt ? 'This field is required' : ''}
          />
          <TextField
            {...register('judgementDate', {
              required: 'This field is required',
            })}
            placeholder={t('Judgement Date')}
            variant="outlined"
            className="w-[47%]"
            error={!!errors.judgementDate}
            helperText={errors.judgementDate ? 'This field is required' : ''}
          />
          <TextField
            {...register('involvedParties', {
              required: 'This field is required',
            })}
            placeholder={t('Involved Parties')}
            variant="outlined"
            className="w-[47%]"
            error={!!errors.involvedParties}
            helperText={errors.involvedParties ? 'This field is required' : ''}
          />
          <TextField
            {...register('supportiveDocuments', {
              required: 'This field is required',
            })}
            placeholder={t('Supportive Documents')}
            variant="outlined"
            className="w-[47%]"
            error={!!errors.supportiveDocuments}
            helperText={
              errors.supportiveDocuments ? 'This field is required' : ''
            }
          />
        </div>

        <h1 className="font-[500]">{t('Analysis and Judgement Summary')}</h1>
        <TextField
          {...register('caseOverview', { required: 'This field is required' })}
          placeholder={t('Case Overview')}
          variant="outlined"
          className="lg:w-[75%]"
          error={!!errors.caseOverview}
          helperText={errors.caseOverview ? 'This field is required' : ''}
        />

        <div className="flex flex-wrap justify-between gap-5 lg:w-[75%] lg:gap-7">
          <TextField
            {...register('mainLegalIssue', {
              required: 'This field is required',
            })}
            placeholder={t('Main Legal Issue')}
            variant="outlined"
            className="w-[47%]"
            error={!!errors.mainLegalIssue}
            helperText={errors.mainLegalIssue ? 'This field is required' : ''}
          />
          <TextField
            {...register('legalPoints', { required: 'This field is required' })}
            placeholder={t('Legal Points')}
            variant="outlined"
            className="w-[47%]"
            error={!!errors.legalPoints}
            helperText={errors.legalPoints ? 'This field is required' : ''}
          />
          <TextField
            {...register('legalJurisprudence', {
              required: 'This field is required',
            })}
            placeholder={t('Legal Jurisprudence')}
            variant="outlined"
            className="w-[47%]"
            error={!!errors.legalJurisprudence}
            helperText={
              errors.legalJurisprudence ? 'This field is required' : ''
            }
          />
          <TextField
            {...register('decisionResulting', {
              required: 'This field is required',
            })}
            placeholder={t('Decision Resulting')}
            variant="outlined"
            className="w-[47%]"
            error={!!errors.decisionResulting}
            helperText={
              errors.decisionResulting ? 'This field is required' : ''
            }
          />
        </div>

        <h1 className="font-[500]">
          {t('Practical Examples and Applications')}
        </h1>
        <TextField
          {...register('judgementImpact', {
            required: 'This field is required',
          })}
          placeholder={t('How does the Judgement Affect Similar Cases')}
          variant="outlined"
          className="lg:w-[75%]"
          error={!!errors.judgementImpact}
          helperText={errors.judgementImpact ? 'This field is required' : ''}
        />

        <h1 className="font-[500]">{t('Comparative Legal Analysis')}</h1>
        <div className="flex flex-wrap justify-between gap-5 lg:w-[75%] lg:gap-7">
          <TextField
            {...register('caseNo1', { required: 'This field is required' })}
            placeholder={t('Case No')}
            variant="outlined"
            className="w-[29%]"
            error={!!errors.caseNo1}
            helperText={errors.caseNo1 ? 'This field is required' : ''}
          />
          <TextField
            {...register('dated1', { required: 'This field is required' })}
            placeholder={t('Dated')}
            variant="outlined"
            className="w-[29%]"
            error={!!errors.dated1}
            helperText={errors.dated1 ? 'This field is required' : ''}
          />
          <TextField
            {...register('courtRuled1', { required: 'This field is required' })}
            placeholder={t('Court Ruled')}
            variant="outlined"
            className="w-[29%]"
            error={!!errors.courtRuled1}
            helperText={errors.courtRuled1 ? 'This field is required' : ''}
          />
        </div>

        <h1 className="font-[500]">
          {t('Recommendations and Lesson Learned')}
        </h1>
        <TextField
          {...register('legalRecommendations', {
            required: 'This field is required',
          })}
          placeholder={t('Legal Recommendations')}
          variant="outlined"
          className="lg:w-[75%]"
          error={!!errors.legalRecommendations}
          helperText={
            errors.legalRecommendations ? 'This field is required' : ''
          }
        />

        <div className="flex flex-wrap justify-between gap-5 lg:w-[75%] lg:gap-7">
          <TextField
            {...register('futureApplication', {
              required: 'This field is required',
            })}
            placeholder={t('How can this judgement be applied in the Future')}
            variant="outlined"
            className="w-[47%]"
            error={!!errors.futureApplication}
            helperText={
              errors.futureApplication ? 'This field is required' : ''
            }
          />
          <TextField
            {...register('keyTakeaways', {
              required: 'This field is required',
            })}
            placeholder={t('Key Takeaways from This Case')}
            variant="outlined"
            className="w-[47%]"
            error={!!errors.keyTakeaways}
            helperText={errors.keyTakeaways ? 'This field is required' : ''}
          />
        </div>

        <h1 className="font-[500]">{t('Sources and References')}</h1>
        <div className="flex flex-wrap justify-between gap-5 lg:w-[75%] lg:gap-7">
          <TextField
            {...register('relevantLaws', {
              required: 'This field is required',
            })}
            placeholder={t('Relevant Laws and Regulation')}
            variant="outlined"
            className="w-[47%]"
            error={!!errors.relevantLaws}
            helperText={errors.relevantLaws ? 'This field is required' : ''}
          />
          <TextField
            {...register('legalSource', { required: 'This field is required' })}
            placeholder={t('Official Legal Source')}
            variant="outlined"
            className="w-[47%]"
            error={!!errors.legalSource}
            helperText={errors.legalSource ? 'This field is required' : ''}
          />
        </div>

        <div className="my-10 flex justify-between px-5 md:px-10">
          <motion.button
            type="button"
            onClick={back}
            className="rounded-md border-2 border-black bg-white px-8 py-3 font-[500] text-black"
          >
            {t('Previous')}
          </motion.button>
          <motion.button
            type="submit"
            className="rounded-md bg-black px-8 py-3 text-white"
          >
            {t('Next')}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default Step3;
