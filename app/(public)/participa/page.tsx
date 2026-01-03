import Apadrina from '@/components/sections/Apadrina';
import SeVoluntario from '@/components/sections/SeVoluntario';
import NuestrosPadrinos from '@/components/sections/NuestrosPadrinos';
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

				{/* Nuestros Padrinos */}
				<NuestrosPadrinos />
			</main>
		</>
	);
};

export default Participa;
