'use client';
import React, { useEffect, useState } from 'react';
import MyCard from '../myComponents/MyCard';
import { Button } from '../ui/button';
import { datosDiscas } from '@/data/discas';
import Link from 'next/link';
import { Disca } from '@/interface/interfaces';

const CardSection = () => {
	const [randomDogs, setRandomDogs] = useState<Disca[]>([]);

	useEffect(() => {
		const shuffled = [...datosDiscas].sort(() => 0.5 - Math.random());
		setRandomDogs(shuffled.slice(0, 4));
	}, []);

	return (
		<div className="w-full px-10 md:px-20 grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-4 mt-10">
			<div className="flex flex-col gap-2 md:col-span-2 xl:col-span-4 mb-8">
				<h2 className={`text-4xl text-center text-stone-900 font-semibold font-poppins`}>
					Descubre a los compañeros que esperan por ti.
				</h2>
				<h3 className={`text-lg text-center text-stone-400 font-normal font-inter`}>
					Haz clic en &#39;Ver más&#39; para conocer a todos nuestros peluditos disponibles para adopción.
				</h3>
			</div>
			{randomDogs.map((dog) => (
				<MyCard
					key={dog.id}
					nombre={dog.nombre}
					descripcion={dog.descripcion}
					imagen={dog.imagenCard}
					edad={dog.edad}
					genero={dog.genero}
				/>
			))}

			<Link href="/adopta" className="w-full md:col-span-2 xl:col-span-4 flex justify-center">
				<Button className={`bg-teal-950 hover:bg-teal-900/80 w-full sm:max-w-sm mt-6 md:mt-7 font-nunito`}>
					Ver más
				</Button>
			</Link>
		</div>
	);
};

export default CardSection;
