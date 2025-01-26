'use client';

import 'react-toastify/dist/ReactToastify.css'; // Import the styles

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer

import SubwayForm from '@/components/commons/MultiStepForm';
import LanguageSwitcher from '@/components/globals/dropdown/LanguageSwitcher';

export default function Page() {
  const { i18n } = useTranslation();
  const getLanguage = i18n.language as 'ar' | 'en'; // Type assertion to restrict getLanguage to 'ar' or 'en'

  return (
    <div className="relative" dir={getLanguage === 'ar' ? 'rtl' : 'ltr'}>
      <div className="fixed top-0 z-[60] flex w-full justify-end">
        <LanguageSwitcher language={getLanguage} />
      </div>

      {/* ToastContainer to display toast messages globally */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={getLanguage === 'ar'} // Make toast container RTL if Arabic is selected
      />

      <SubwayForm language={getLanguage} />
    </div>
  );
}
