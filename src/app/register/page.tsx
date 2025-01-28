'use client';

import { motion } from 'framer-motion';

function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-100 p-5">
      <motion.div
        className="w-full max-w-lg rounded-xl bg-white p-10 text-center shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl font-semibold text-gray-700"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Register Page
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Pending
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Page;
