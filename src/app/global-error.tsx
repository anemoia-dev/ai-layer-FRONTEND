'use client';

import Error from 'next/error';

// Test commit
export default function GlobalError({
  params: { locale },
}: {
  error: Error & { digest?: string };
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        {/* This is the default Next.js error component but it doesn't allow omitting the statusCode property yet. */}
        <Error statusCode={undefined as any} />
      </body>
    </html>
  );
}
