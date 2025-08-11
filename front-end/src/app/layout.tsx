import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Roboto } from 'next/font/google';
import KeycloakInitialize from '@/components/keycloak/KeycloakInitialize';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Điện thoại Nông Lâm',
  description: 'Ứng dụng bán điện thoại Nông Lâm',
  icons: {
    icon: '/icons/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.variable} antialiased`}>
        <KeycloakInitialize />
        {children}
      </body>
    </html>
  );
}
