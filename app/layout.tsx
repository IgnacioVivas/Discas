import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import { inter, nunito, poppins } from '@/components/ui/fonts';
import WhatsAppButton from '@/components/myComponents/WhatsAppButton';

export const metadata: Metadata = {
	title: 'Discas',
	description: 'Rescatamos animales discas y viejitos',
	icons: {
		icon: '/favicon.ico',
	},
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
				<WhatsAppButton />
				<Footer />
			</body>
		</html>
	);
}
