'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function page() {
  const { t } = useTranslation();
  return <div>{t('Welcome to react')}</div>;
}
