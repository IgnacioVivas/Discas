import Apadrina from '@/components/sections/Apadrina';
import SeVoluntario from '@/components/sections/SeVoluntario';
import NuestrosPadrinos from '@/components/sections/NuestrosPadrinos';
import HeaderDos from '@/components/layout/HeaderDos';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

const Participa = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<HeaderDos
				title="Sumate a Discas"
				description="Tu ayuda hace posible que sigamos rescatando y cuidando de mas discas."
			/>
			<section className="flex-1 pt-20 px-10 md:px-28 flex flex-col gap-28">
				<Apadrina />
			</section>
			<div className="my-32 relative w-full h-[400px] md:h-[500px] overflow-hidden">
				<Image
					src="/image/varias/varias-2.jpg"
					alt="dos discas juntos, uno en carro"
					fill
					className="object-cover object-left md:object-center brightness-50"
				/>

				<div className="absolute inset-0 bg-black/40"></div>

				<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 gap-4">
					<h2 className="uppercase text-3xl md:text-4xl tracking-widest text-white font-bold drop-shadow-lg font-dancing">
						¡Cada ayuda cuenta!
					</h2>

					<p className="text-lg md:text-xl leading-relaxed text-stone-100 max-w-2xl drop-shadow">
						Ya sea como madrina, padrino o voluntario, tu apoyo transforma la vida de nuestros peluditos en recuperación
						y les da la oportunidad de un futuro mejor.
					</p>
				</div>
			</div>

			<section className="px-10 md:px-28 flex flex-col">
				<SeVoluntario />
			</section>

			<div className="w-full px-10 md:px-28 my-20 md:my-28 lg:my-32">
				<Separator className="bg-slate-300" />
			</div>

			<NuestrosPadrinos />
		</div>
	);
};

export default Participa;
