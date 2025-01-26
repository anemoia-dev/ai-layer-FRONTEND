'use client';

import Error from 'next/error';

export default function GlobalError({
  error,
  params: { locale },
}: {
  error: { statusCode?: number; message?: string };
  params: { locale: string };
}) {
  const statusCode = error?.statusCode || 500;

  return (
    <html lang={locale}>
      <body>
        <Error statusCode={statusCode} />
      </body>
    </html>
  );
}
