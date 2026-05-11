import type { Metadata } from 'next';
import HeaderDos from '@/components/layout/HeaderDos';

export const metadata: Metadata = {
	title: 'Adoptá un Animal con Discapacidad | Discas Córdoba',
	description:
		'Conocé a los discas que esperan un hogar en Córdoba. Perros y gatos con discapacidad buscan familia. Completá el formulario de adopción y cambiá una vida para siempre.',
	alternates: { canonical: 'https://discas.com.ar/adopta' },
	openGraph: {
		title: 'Adoptá un Animal con Discapacidad | Discas Córdoba',
		description: 'Perros y gatos con discapacidad esperan un hogar en Córdoba. Adoptá y cambiá una vida para siempre.',
		url: 'https://discas.com.ar/adopta',
	},
};

export default function AdoptaLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-col min-h-screen">
			<HeaderDos title="Conócelos y enamórate" description="Adoptar es cambiar una vida para siempre." />
			<main className="flex-1">{children}</main>
		</div>
	);
}
