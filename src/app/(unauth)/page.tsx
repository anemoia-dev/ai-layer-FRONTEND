'use client';

import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import SubwayForm from '@/components/commons/MultiStepForm_signup/MultiStepForm';

export default function Page() {
  const { i18n } = useTranslation();
  const getLanguage = i18n.language as 'ar' | 'en';

  return (
    <div className="relative" dir={getLanguage === 'ar' ? 'rtl' : 'ltr'}>
      {/* ToastContainer to display toast messages globally */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={getLanguage === 'ar'}
      />

      <SubwayForm language={getLanguage} />
    </div>
  );
}
