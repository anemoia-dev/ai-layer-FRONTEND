import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Page() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-lg p-10 text-center bg-white shadow-xl rounded-2xl"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mb-4 text-4xl font-extrabold text-gray-800"
        >
          {t(`Thank you!`)}
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="text-lg text-gray-600"
        >
          {t(
            'The form has been submitted successfully! We value your time and participation, and we will use your feedback to improve Future Balance. Stay tuned for updates soon.”',
          )}
          ;
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Page;
