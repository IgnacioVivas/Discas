import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Doná a Discas | Ayudá a Animales con Discapacidad en Córdoba',
	description:
		'Tu donación ayuda a rescatar y rehabilitar animales con discapacidad en Córdoba. Donaciones económicas, insumos o convirtiéndote en padrino/madrina de un disca.',
	alternates: { canonical: 'https://discas.com.ar/donaciones' },
	openGraph: {
		title: 'Doná a Discas | Ayudá a Animales con Discapacidad',
		description: 'Hacé una donación y ayudá a rescatar animales con discapacidad en Córdoba. Cada peso hace la diferencia.',
		url: 'https://discas.com.ar/donaciones',
	},
};

export default function DonacionesLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
