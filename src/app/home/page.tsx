'use client';

import { motion } from 'framer-motion';
import React from 'react';

function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-lg rounded-2xl bg-white p-10 text-center shadow-xl"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mb-4 text-4xl font-extrabold text-gray-800"
        >
          Thanks
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="text-lg text-gray-600"
        >
          Form submitted succesfully
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Page;
