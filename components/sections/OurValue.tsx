import { HeartHandshake, Megaphone } from 'lucide-react';
import { cn } from '@/lib/utils';

const valores = [
	{
		titulo: 'Nuestro Objetivo',
		texto:
			'Decimos NO a la eutanasia por discapacidad, porque toda vida merece ser respetada. Nuestro objetivo es visibilizar que los animales con discapacidad pueden desarrollarse plenamente, ser felices y dar amor, adaptándose física y emocionalmente a su entorno cuando reciben acompañamiento y cuidados adecuados.',
		icono: HeartHandshake,
	},
	{
		titulo: 'Nuestra Accionar',
		texto:
			'Promovemos adopciones responsables y acompañadas, buscando hogares comprometidos con cada proceso. Además, realizamos acciones de concientización a través de charlas educativas, iniciativas solidarias y acompañamiento a familias que atraviesan situaciones similares.',
		icono: Megaphone,
	},
];

const OurValue = () => {
	return (
		<div
			className={cn(
				'flex flex-col gap-5 md:flex-row px-4 md:px-16 py-20 justify-center items-center rounded-xl relative',
				'bg-[url(/image/varias/varias-7.jpg)] lg:bg-[url(/image/baners/baner-3.jpg)] bg-cover bg-no-repeat bg-center bg-zinc-800',
			)}
		>
			<div className="absolute w-full h-full bg-zinc-900/50 rounded-xl"></div>
			<div className="w-full md:w-1/2 flex flex-col gap-4 z-10">
				<span className="text-orange font-medium font-quicksand">Nuestros Valores</span>
				<h2 className="font-nunito text-3xl md:text-[2.5rem] tracking-wider text-white font-bold">
					El corazón de Discas
				</h2>
				<p className="leading-relaxed font-inter text-white">
					En Discas trabajamos desde el respeto, la empatía y la responsabilidad. Cada acción que llevamos adelante está
					impulsada por la convicción de que todos los animales merecen vivir con dignidad, amor y oportunidades, sin
					que la discapacidad sea un límite para su bienestar ni para su felicidad.
				</p>

				<div className="w-56 h-3">
					<svg viewBox="0 0 100 10" className="h-full">
						<path
							d="M0 5 Q5 0 10 5 T20 5 T30 5 T40 5 T50 5 T60 5 T70 5 T80 5 T90 5 T100 5"
							fill="none"
							stroke="#2dd4bf"
							stroke-width="2"
						/>
					</svg>
				</div>
			</div>
			<div className="flex flex-col gap-5 w-full md:w-1/2 z-10">
				{valores.map((v, index) => (
					<div
						key={index}
						className="bg-slate-100/50 flex flex-col md:flex-row gap-6 items-start md:items-center py-7 px-6 rounded-xl"
					>
						<div className={`p-5 rounded-xl ${index === 0 ? 'bg-red-400' : 'bg-teal-400'}`}>
							<v.icono className="w-9 h-9 text-white" />
						</div>
						<div className="text-white">
							<h5 className="font-quicksand font-bold text-xl mb-3">{v.titulo}</h5>
							<p className="font-inter text-base leading-relaxed">{v.texto}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurValue;
