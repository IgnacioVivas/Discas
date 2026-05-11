import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contacto | Fundación Discas Córdoba',
	description:
		'Contactate con Fundación Discas Córdoba. ¿Encontraste un animal que necesita ayuda? ¿Querés adoptar, donar o ser voluntario? Escribinos, estamos para ayudarte.',
	alternates: { canonical: 'https://discas.com.ar/contacto' },
	openGraph: {
		title: 'Contacto | Fundación Discas Córdoba',
		description: 'Contactate con Fundación Discas. ¿Animal en peligro? ¿Querés adoptar o donar? Escribinos.',
		url: 'https://discas.com.ar/contacto',
	},
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
