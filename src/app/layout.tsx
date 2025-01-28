'use client';

import '@/styles/global.css';

import { Poppins } from 'next/font/google';
import Head from 'next/head';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import i18n from '../../i18/i18n.ts';
import { persistor, store } from '../../store/store';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Head>
          <link rel="icon" href="/favicon-32x32.png" />
          <meta name="description" content="Your site description" />
        </Head>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
