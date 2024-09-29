import type { Metadata } from 'next';

import localFont from 'next/font/local';
import '../globals.css';
import TopBar from './topBar';
import TopMenu from './topMenu';
import SubContainer from '../components/sub-container';
import { I18nProviderClient } from '@/locales/client';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Wassera Mortgage and Finance',
  description: 'A FinTech company specialised in Mortgage, Investment and Savings Services',
};

export default function RootLayout({
  params: { locale },
  children,
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) {
  return (
    <I18nProviderClient locale={locale}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col bg-transparent `}>
          <SubContainer>
            <TopBar />
            <TopMenu />
          </SubContainer>

          {children}
        </body>
      </html>
    </I18nProviderClient>
  );
}
