import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const inter = Open_Sans({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
	title: 'Мой новый блог на NEXT JS',
	description: 'Блог о web-технологиях',
	authors: [
		{
			name: 'Eduard Andreev',
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
