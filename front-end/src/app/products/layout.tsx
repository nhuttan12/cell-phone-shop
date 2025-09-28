import type { Metadata } from 'next';
import { JSX } from 'react';

export const metadata: Metadata = {
	title: 'Danh sách sản phẩm',
	description: 'Danh sách sản phẩm',
};

export default function ProductsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): JSX.Element {
	return <>{children}</>;
}
