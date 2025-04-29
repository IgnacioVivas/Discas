import { Poppins, Nunito, Inter } from 'next/font/google';

export const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-poppins',
	display: 'swap',
});

export const nunito = Nunito({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-nunito',
	display: 'swap',
});

export const inter = Inter({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

// Exporta también los className por si los necesitas
export const fontPoppins = poppins.className;
export const fontNunito = nunito.className;
export const fontInter = inter.className;
