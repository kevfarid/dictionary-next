import type { Metadata } from 'next';
import './globals.css';
import { getCookieServer } from '@/core/utils/cookies-server';
import Header from '@/core/ui/header';

export const metadata: Metadata = {
  title: 'Dictionary',
  description: 'Dictionary app built with Next.js 15 and TypeScript',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = (await getCookieServer('theme')) || '';
  const font = (await getCookieServer('font')) || 'serif';

  return (
    <html lang='en' className={theme} data-font={font}>
      <body className={`antialiased dark:bg-neutral-900 dark:text-gray-200`}>
        <div className='w-full max-w-4xl mx-auto flex flex-col p-8 pb-20 gap-16 sm:p-20'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
