import Image from 'next/image';
import baner from '@/public/image/baners/baner-1.jpg';
import OurTeam from '@/components/sections/OurTeam';
import SponsorsSection from '@/components/sections/SponsorsSection';
import OurValue from '@/components/sections/OurValue';
import { Separator } from '@/components/ui/separator';
import Counter from '@/components/sections/Counter';

function Conocenos() {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="relative w-full h-[500px] bg-no-repeat bg-cover bg-bottom">
				{/* <Image src={baner} alt="Banner" fill className="object-cover object-center" priority /> */}
				<div className="absolute inset-0 bg-teal-950/30 "></div>
				<div className="px-5 absolute inset-0 flex flex-col items-center justify-center">
					<h1 className={`text-4xl lg:text-6xl font-semibold text-white drop-shadow-md font-poppins text-center px-4`}>
						¿Quiénes somos?
					</h1>
					<p className={`text-center text-lg lg:text-2xl mt-2 drop-shadow-sm font-medium font-inter text-white`}>
						La discapacidad no define, el amor sí.
					</p>
				</div>
			</div>
			<main className="flex-1 pt-20 flex flex-col gap-28">
				<section className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10 md:px-20">
					<div className="flex flex-col gap-5">
						<span className="text-custom-teal font-nunito">Sobre la fundación</span>
						<h2 className="text-black font-bold text-4xl font-poppins">¿QUÉ ES DISCAS?</h2>
						<p className="text-stone-400 text-lg font-inter">
							Discas es el primer y único grupo organizado de Córdoba Capital destinado específicamente al rescate,
							rehabilitación y adopción de animales con discapacidad. <br />
							También nos ocupamos de las llamadas “adopciones dificiles” , es decir, promovemos la adopcion de peludos
							de edad avanzada.
						</p>
					</div>
					<div>
						<img
							src="https://media.istockphoto.com/id/2148674008/es/foto/equipo-exitoso-de-personas-de-negocios-sonriendo-a-la-c%C3%A1mara-en-una-oficina-de-inicio.jpg?s=612x612&w=0&k=20&c=q8HxuJcJrVOPRM63_IZxs719g0pYcd8yhH-bjUdNpnA="
							alt="Banner"
							className="w-full"
						/>
					</div>
				</section>

				<section className="px-10 md:px-20">
					<Counter />
				</section>

				<section className="px-10 md:px-20">
					<OurValue />
				</section>

				<section className="px-10 md:px-20">
					<OurTeam />
				</section>

				<div className="w-full px-10 md:px-20">
					<Separator className="bg-slate-300" />
				</div>

				<SponsorsSection />
			</main>
		</div>
	);
}

export default Conocenos;
