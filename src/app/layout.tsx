import type { Metadata } from 'next';
import { Poppins, Outfit } from 'next/font/google';
import '@/styles/globals.scss';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import BootstrapClient from '@/components/BootstrapClient/BootstrapClient';
import FontAwesomeClient from '@/components/FontAwesomeClient/FontAwesomeClient';
import FaviconClient from '@/components/FaviconClient/FaviconClient';
import { AuthProvider } from '@/context/AuthContext';
import ReduxProvider from '@/lib/providers/ReduxProvider/ReduxProvider';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit'
});

export const metadata: Metadata = {
  title: 'Trade Bridge',
  description: 'Organization name which need to be created landing page, after complete websit',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${outfit.variable} ${poppins.className}`}>
        <FaviconClient />
        <ToastContainer position="top-center" autoClose={3000} />
        <ReduxProvider>
          <AuthProvider>
            <Navbar />
            <main className="main-content">
              {children}
            </main>
            <Footer />
            <BootstrapClient />
            <FontAwesomeClient />
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

