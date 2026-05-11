import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Participá y Voluntariado | Discas Córdoba',
	description:
		'Sumate como voluntario, hogar de tránsito o padrino/madrina de Discas. Hay muchas formas de ayudar a los animales con discapacidad de Córdoba. ¡Tu ayuda hace la diferencia!',
	alternates: { canonical: 'https://discas.com.ar/participa' },
	openGraph: {
		title: 'Participá y Voluntariado | Discas Córdoba',
		description: 'Sumate como voluntario, hogar de tránsito o padrino/madrina. Ayudá a los animales con discapacidad de Córdoba.',
		url: 'https://discas.com.ar/participa',
	},
};

import Apadrina from '@/components/sections/Apadrina';
import SeVoluntario from '@/components/sections/SeVoluntario';
import NuestrosPadrinos from '@/components/sections/NuestrosPadrinos';
import HogarTransito from '@/components/sections/HogarTransito';
import HeaderDos from '@/components/layout/HeaderDos';
import CadaAyudaCuentaBanner from '@/components/sections/CadaAyudaCuentaBanner';

const Participa = () => {
	return (
		<>
			<HeaderDos
				title="Sumate a Discas"
				description="Tu ayuda hace posible que sigamos rescatando y cuidando de más discas."
			/>

			<main className="flex flex-col gap-32">
				{/* Sección Apadrina */}
				<Apadrina />

				{/* Banner "Cada ayuda cuenta" */}
				<CadaAyudaCuentaBanner />

				{/* Sección SeVoluntario */}
				<SeVoluntario />

				{/* Hogar de Tránsito */}
				<HogarTransito />

				{/* Nuestros Padrinos */}
				<NuestrosPadrinos />
			</main>
		</>
	);
};

export default Participa;
