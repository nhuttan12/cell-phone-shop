import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Log in',
  description: 'Log in',
};

export default function LogInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={'login-layout flex items-center justify-center min-h-screen'}>
      {children}
    </div>
  );
}
