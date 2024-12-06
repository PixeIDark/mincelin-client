import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/app/providers/SessionProvider';
import QueryProvider from '@/app/providers/QueryProvider';
import { authOptions } from '@/lib/next-auth';
import { getThemeConfig } from '@/utils/getThemeConfig';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Minchelin',
  description: 'The Great',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  const { themeName, theme } = await getThemeConfig();

  return (
    <html lang='en' data-panda-theme={themeName} suppressHydrationWarning>
      <head>
        <style type='text/css' id={theme.id} dangerouslySetInnerHTML={{ __html: theme.css }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryProvider>
          <SessionProvider session={session}>{children}</SessionProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
