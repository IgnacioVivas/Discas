import { HeartHandshake, Megaphone } from 'lucide-react';
import { cn } from '@/lib/utils';

const valores = [
	{
		titulo: 'Nuestro Objetivo',
		texto:
			'Decimos NO a la eutanasia por discapacidad, porque la vida es vida sin importar su condición. Queremos mostrarles cómo los animales discapacitados se desarrollan sin límites, son felices y dan amor, adaptándose física y socialmente a su entorno.',
		icono: HeartHandshake,
	},
	{
		titulo: 'Nuestra Accionar',
		texto:
			'Buscamos HOGARES RESPONSABLES que los adopten y realizamos distintas actividades de concientización, como Charlas Escolares, Emprendimientos y Acompañamiento en Casos Similares.',
		icono: Megaphone,
	},
];

const OurValue = () => {
	return (
		<div
			className={cn(
				'flex flex-col gap-5 md:flex-row px-4 md:px-16 py-20 justify-center items-center rounded-xl relative',
				'bg-[url(/image/baners/baner-3.jpg)] bg-cover bg-no-repeat bg-center bg-zinc-800',
			)}
		>
			<div className="absolute w-full h-full bg-zinc-900/50 rounded-xl"></div>
			<div className="w-full md:w-1/2 flex flex-col gap-4 z-10">
				<span className="text-custom-yellow font-nunito text-sm">Nuestros Valores</span>
				<h2 className="text-4xl font-nunito text-white font-bold">
					Lorem ipsum dolor sit amet consectetur adipisicing
				</h2>
				<p className="text-base font-inter text-white">
					Magna curabitur laoreet mattis dignissim senectus purus finibus gravida. Nec rutrum conubia aliquet accumsan
					curabitur orci mollis consectetur nostra diam fames. Convallis adipiscing sociosqu porta vulputate ullamcorper
					platea imperdiet dolor fames eleifend nostra.
				</p>

				<div className="w-56 h-3">
					<svg viewBox="0 0 100 10" className="h-full">
						<path
							d="M0 5 Q5 0 10 5 T20 5 T30 5 T40 5 T50 5 T60 5 T70 5 T80 5 T90 5 T100 5"
							fill="none"
							stroke="#4fd1c5"
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
						<div className={`p-5 rounded-xl ${index === 0 ? 'bg-custom-red' : 'bg-custom-teal'}`}>
							<v.icono className="w-9 h-9 text-white" />
						</div>
						<div className="text-white">
							<h5 className="font-nunito text-xl mb-3">{v.titulo}</h5>
							<p className="font-inter text-base">{v.texto}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurValue;
