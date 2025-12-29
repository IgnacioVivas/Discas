import Apadrina from '@/components/sections/Apadrina';
import SeVoluntario from '@/components/sections/SeVoluntario';
import NuestrosPadrinos from '@/components/sections/NuestrosPadrinos';
import HeaderDos from '@/components/layout/HeaderDos';
import Image from 'next/image';
import CadaAyudaCuentaBanner from '@/components/sections/CadaAyudaCuentaBanner';

const Participa = () => {
	return (
		<main className="flex flex-col min-h-screen">
			<HeaderDos
				title="Sumate a Discas"
				description="Tu ayuda hace posible que sigamos rescatando y cuidando de más discas."
			/>

			{/* Sección Apadrina */}
			<Apadrina />

			{/* Banner "Cada ayuda cuenta" - Rediseñado */}
			<CadaAyudaCuentaBanner />

			{/* Sección SeVoluntario */}
			<SeVoluntario />

			{/* Nuestros Padrinos */}
			<NuestrosPadrinos />
		</main>
	);
};

export default Participa;
