import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sign up',
  description: 'Sign up',
};

export default function SignUpLayout({
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
