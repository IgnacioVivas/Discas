import Image from 'next/image';
import presidenta from '@/public/image/equipo/pamela-carranza.jpg';
import secretaria from '@/public/image/equipo/natalia-perdiguera.jpg';
import tesorera from '@/public/image/equipo/silvina-capellino.jpg';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import { PawPrint } from 'lucide-react';

const equipo = [
	{
		nombre: 'Pamela Carranza',
		cargo: 'Presidenta',
		image: presidenta,
		// image: '/image/equipo/pamela-carranza.jpg',
	},
	{
		nombre: 'Natalia Perdiguera',
		cargo: 'Secretaria',
		image: secretaria,
		// image: '/image/equipo/natalia-perdiguera.jpg',
	},
	{
		nombre: 'Silvina Capellino',
		cargo: 'Tesorera',
		image: tesorera,
		// image: '/image/equipo/silvina-capellino.jpg',
	},
];

const OurTeam = () => {
	return (
		<div className="w-full flex flex-col justify-center gap-3">
			<div className="px-8 md:px-20 flex flex-col justify-center items-center gap-4">
				<h2 className="text-center font-nunito uppercase text-3xl md:text-[2.5rem] tracking-widest text-teal-dark font-bold">
					Las personas detrás de Discas
				</h2>
				<h3 className="text-center text-lg leading-relaxed text-stone-700 font-inter">
					Un equipo comprometido que trabaja todos los días para acompañar, cuidar y transformar vidas.
				</h3>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 justify-items-center">
				{equipo.map((x, index) => (
					<div key={index} className="flex flex-col items-center text-center w-[280px]">
						<div className={cn('relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg')}>
							<Image
								src={x.image}
								alt={x.nombre}
								fill
								className="object-cover object-top"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
						</div>
						<div className="mt-4 p-5 w-full flex flex-col items-center justify-center bg-white rounded-xl border shadow-sm border-teal-300/40 hover:shadow-md transition-all">
							<h4 className="text-xl text-teal-900 font-bold font-nunito">{x.nombre}</h4>
							<div className="flex items-center gap-3 w-1/2 my-2">
								<Separator className="flex-1 bg-teal-300" />
								<PawPrint className="w-4 h-4 text-teal-500 shrink-0" />
								<Separator className="flex-1 bg-teal-300" />
							</div>
							<p className="text-stone-700 font-inter">{x.cargo}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurTeam;
