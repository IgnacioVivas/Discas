import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import { inter, nunito, poppins } from '@/components/ui/fonts';

export const metadata: Metadata = {
	title: 'Discas',
	description: 'Rescatamos animales discas y viejitos',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} ${nunito.variable} ${inter.variable} antialiased bg-stone-100`}>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
