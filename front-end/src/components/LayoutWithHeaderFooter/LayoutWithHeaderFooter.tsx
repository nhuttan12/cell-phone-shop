'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { usePathname } from 'next/navigation';

export default function LayoutWithHeaderFooter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName: string = usePathname();
  const pathNameWithoutQuery: string[] = [
    '/not-found',
    '/login',
    '/register',
    '/reset-password',
  ];
  const hideLayout: boolean = pathNameWithoutQuery.includes(pathName);

  return (
    <>
      {!hideLayout && <Header />}
      <main className='w-[1200px] mx-auto min-h-screen'>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
