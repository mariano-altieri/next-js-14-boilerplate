import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import AuthProvider from './(auth)/providers/AuthProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next JS 14 Boilerplate',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-h-screen h-full">
      <body className={inter.className + 'min-h-screen h-full flex flex-col'}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
