import { TextField } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Step3Props {
  next: () => void;
  back: () => void;
}

const Step3: React.FC<Step3Props> = ({ next, back }) => {
  const { t } = useTranslation();

  return (
    <>
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

        {/* ////// FEILDS SECTION */}
        <div className="flex flex-col gap-5 p-5 md:px-10 lg:gap-10">
          <h1 className=" font-[500] ">{t('Case Data')}</h1>
          <div className="flex flex-wrap justify-between gap-5 lg:w-[75%] lg:gap-10">
            <TextField
              placeholder={t('Case Type')}
              variant="outlined"
              className="w-[47%]"
            />
            <TextField
              placeholder={t('Judgement Number')}
              variant="outlined"
              className="w-[47%]"
            />
            <TextField
              placeholder={t('Issuing Court')}
              variant="outlined"
              className="w-[47%]"
            />
            <TextField
              placeholder={t('Judgement Data')}
              variant="outlined"
              className="w-[47%]"
            />
            <TextField
              placeholder={t('Involved Parties')}
              variant="outlined"
              className="w-[47%]"
            />
            <TextField
              placeholder={t('Supportive Documents ')}
              variant="outlined"
              className="w-[47%]"
            />
          </div>
          <h1 className=" font-[500] ">
            {t('Analysis and Judgement Summary')}
          </h1>

          <TextField
            placeholder={t('Case overview ')}
            variant="outlined"
            className=" lg:w-[75%]"
          />
          <div className="flex flex-wrap justify-between gap-5 lg:w-[75%] lg:gap-10">
            <TextField
              placeholder={t('Main Legal Issue')}
              variant="outlined"
              className="w-[47%]"
            />
            <TextField
              placeholder={t('Legal Points ')}
              variant="outlined"
              className="w-[47%]"
            />
            <TextField
              placeholder={t('Legal Jurisprudence')}
              variant="outlined"
              className="w-[47%]"
            />
            <TextField
              placeholder={t('Decision Resulting')}
              variant="outlined"
              className="w-[47%]"
            />
          </div>
          <h1 className="font-[500]">
            {t('Practical Examples and Applications')}
          </h1>
          <TextField
            placeholder={t('How does the Judgement Affect Similar Cases')}
            variant="outlined"
            className=" lg:w-[75%]"
          />
          <h1 className="font-[500]">{t('Comporative Legal Analysis')}</h1>
          <div className="flex flex-wrap justify-between gap-5 lg:w-[75%] lg:gap-10">
            <TextField
              placeholder={t('Case No')}
              variant="outlined"
              className="w-[29%]"
            />
            <TextField
              placeholder={t('Dated')}
              variant="outlined"
              className="w-[29%]"
            />
            <TextField
              placeholder={t('Court Ruled')}
              variant="outlined"
              className="w-[29%]"
            />
            <TextField
              placeholder={t('Case No')}
              variant="outlined"
              className="w-[29%]"
            />
            <TextField
              placeholder={t('Dated')}
              variant="outlined"
              className="w-[29%]"
            />
            <TextField
              placeholder={t('Judgement Implemented')}
              variant="outlined"
              className="w-[29%]"
            />
          </div>
          <h1 className="font-[500]">
            {t('Recommendations and Lesson Learned')}
          </h1>
          <TextField
            placeholder={t('Legal Recommendations')}
            variant="outlined"
            className=" lg:w-[75%]"
          />
          <div className="flex flex-wrap justify-between gap-5 lg:w-[75%] lg:gap-10">
            <TextField
              placeholder={t('How can this judgement  applied in the Future')}
              variant="outlined"
              className="w-[47%]"
            />
            <TextField
              placeholder={t('Key Takeaways from This case')}
              variant="outlined"
              className="w-[47%]"
            />
          </div>
          <h1 className="font-[500]">{t('Sources and references')}</h1>
          <div className="flex flex-wrap justify-between gap-5 lg:w-[75%] lg:gap-10">
            <TextField
              placeholder={t('Relevant Laws and regulation')}
              variant="outlined"
              className="w-[47%]"
            />
            <TextField
              placeholder={t('Official Legal Source')}
              variant="outlined"
              className="w-[47%]"
            />
          </div>
        </div>
      </motion.div>
      <div className="my-10 flex justify-between px-5 md:px-10">
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
          onClick={() => {
            next();
          }}
          type="button"
          className="rounded-md bg-black px-8 py-3 text-white"
        >
          {t('Next')}
        </motion.button>
      </div>
    </>
  );
};

export default Step3;
