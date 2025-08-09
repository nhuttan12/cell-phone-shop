import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Đăng nhập',
  description: 'Đăng nhập',
};

export default function LogInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={'flex items-center justify-center min-h-screen'}>
      {children}
    </div>
  );
}
