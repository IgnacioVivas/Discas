import React from 'react';
import MyCard from '../myComponents/MyCard';
import { Button } from '../ui/button';
import { inter, nunito, poppins } from '../ui/fonts';
import { datosDiscas } from '@/data/discas';

const CardSection = () => {
	return (
		<div className="w-full px-10 md:px-20 grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-4 mt-10">
			<div className="flex flex-col gap-2 md:col-span-2 xl:col-span-4 mb-8">
				<h2 className={`text-4xl text-center text-stone-900 font-semibold ${poppins.className}`}>
					Descubre a los compañeros que esperan por ti.
				</h2>
				<h3 className={`text-lg text-center text-stone-400 font-normal ${inter.className}`}>
					Haz clic en &#39;Ver más&#39; para conocer a todos nuestros peluditos disponibles para adopción.
				</h3>
			</div>
			{datosDiscas.map((dog) => (
				<MyCard
					key={dog.id}
					nombre={dog.nombre}
					descripcion={dog.descripcion}
					imagen={dog.imagenCard}
					edad={dog.edad}
					genero={dog.genero}
				/>
			))}

			<Button
				className={`md:col-span-2 xl:col-span-4 bg-teal-950 hover:bg-teal-900/80 w-full sm:max-w-sm mt-6 md:mt-7 ${nunito.className}`}
			>
				Ver más
			</Button>
		</div>
	);
};

export default CardSection;
