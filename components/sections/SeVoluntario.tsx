import { Button } from '../ui/button';
import Image from 'next/image';

const SeVoluntario = () => {
	return (
		<div className="flex flex-col xl:flex-row items-center justify-center gap-10">
			<div className="w-auto xl:w-1/2">
				<Image
					src="/image/varias/voluntarios-1.jpg"
					alt="perro disca de festejo"
					width={1600}
					height={1066}
					className="w-full h-auto object-cover"
				/>
			</div>

			<div className="w-auto xl:w-1/2 flex flex-col gap-4">
				<h2 className="font-nunito uppercase text-3xl md:text-[2.5rem] tracking-widest text-teal-dark font-bold">
					Sumate como voluntario/a
				</h2>
				<p className="text-lg leading-relaxed text-stone-700 font-inter">
					Ser voluntario en Discas es acompañar, sostener y darle voz a quienes más lo necesitan. Nuestro equipo
					necesita personas con ganas de ayudar desde distintos lugares: en redes sociales, diseño, edición,
					organización de eventos, traslados solidarios, seguimiento de nuevos rescatados, hogares provisorios y paseos
					para nuestros peluditos discas.
				</p>
				<p className="text-lg leading-relaxed text-stone-700 font-inter">
					Cada tarea, por pequeña que parezca, hace una diferencia enorme en su bienestar y en su oportunidad de
					encontrar un hogar definitivo.
				</p>
				<p className="text-lg leading-relaxed text-stone-700 font-inter">
					El trabajo es completamente solidario y los horarios se coordinan según las necesidades de la fundación y tu
					disponibilidad.
				</p>
				<Button
					className="w-fit px-9 py-5 uppercase text-white text-sm bg-teal-500 
											shadow hover:bg-teal-600 tracking-widest font-medium rounded-md
											transition-all duration-200 hover:shadow-md cursor-pointer"
				>
					Quiero ser voluntario
				</Button>

				<span className="text-xl leading-relaxed text-orange font-medium font-quicksand">
					¡Gracias por sumar tu corazón a esta causa!
				</span>
			</div>
		</div>
	);
};

export default SeVoluntario;
