import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

const Apadrina = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center justify-center gap-10">
			<div className="w-auto lg:w-1/2 flex flex-col gap-4">
				<h2 className="uppercase text-3xl md:text-[2.5rem] tracking-widest text-teal-900 font-bold">
					Sé Madrina o Padrino
				</h2>
				<h3 className="text-xl leading-relaxed text-teal-600 font-medium">Apadrina a un peludito en guardería</h3>
				<p className="text-lg leading-relaxed text-stone-700">
					Cada uno de nuestros peluditos rescatados —tanto en Córdoba como en las Sierras— recibe atención, contención y
					un techo seguro en guarderías mientras esperan encontrar su hogar definitivo. Pero mantenerlos cuidados tiene
					un costo importante, y por eso necesitamos la ayuda de madrinas y padrinos que quieran acompañarlos en esta
					etapa de recuperación.
				</p>
				<p className="text-lg leading-relaxed text-stone-700">
					El valor de la guardería es de aproximadamente $100.000 por perrito, y se abona cada 15 días por adelantado.
					Podés colaborar a principios, a mitad o a fin de mes, según lo que te sea más cómodo.
				</p>
				<p className="text-lg leading-relaxed text-stone-700">
					Con tu ayuda, aseguramos que un peludito disca siga recibiendo el cuidado que merece mientras espera a su
					familia para siempre.
				</p>
				<Button
					className="w-fit px-9 py-5 uppercase text-white text-sm bg-teal-500 
										shadow hover:bg-teal-600 tracking-widest font-medium rounded-md
										transition-all duration-200 hover:shadow-md"
				>
					Quiero Apadrinar
				</Button>
			</div>

			<div className="w-auto lg:w-1/2">
				<Image
					src="/image/varias/varias-1.jpg"
					alt="perro disca de festejo"
					width={2048}
					height={1366}
					className="w-full h-auto object-cover"
				/>
			</div>
		</div>
	);
};

export default Apadrina;
