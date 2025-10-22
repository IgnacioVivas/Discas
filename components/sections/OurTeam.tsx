import Image from 'next/image';
import presidenta from '@/public/image/equipo/pamela-carranza.jpg';
import secretaria from '@/public/image/equipo/natalia-perdiguera.jpg';
import tesorera from '@/public/image/equipo/silvina-capellino.jpg';
import { cn } from '@/lib/utils';

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
			<div className="px-8 md:px-20 bg-opacity-85">
				<h2 className="text-4xl text-center text-black font-semibold mb-5 font-poppins">Nuestro equipo</h2>
				<h3 className="text-lg text-center text-stone-400 font-normal font-inter">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Consectetur totam!
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
						<h4 className="mt-4 text-xl font-semibold text-gray-800 font-inter">{x.nombre}</h4>
						<p className="text-gray-600 font-nunito">{x.cargo}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurTeam;
