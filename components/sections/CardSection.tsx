import React from 'react';
import perro from '@/image/perro.jpg';
import MyCard from '../myComponents/MyCard';
import { Button } from '../ui/button';

const dogsData = [
	{
		nombre: 'Procer',
		descripcion: 'Un amigo fiel y cariñoso, listo para encontrar un nuevo hogar.',
		imagen: perro,
	},
	{
		nombre: 'Rex',
		descripcion: 'Un perro juguetón y activo, ideal para familias con niños.',
		imagen: perro,
	},
	{
		nombre: 'Luna',
		descripcion: 'Tierna y tranquila, perfecta para compañía en casa.',
		imagen: perro,
	},
	{
		nombre: 'Max',
		descripcion: 'Un espíritu aventurero que ama las largas caminatas.',
		imagen: perro,
	},
];

const CardSection = () => {
	return (
		// <div className="w-full flex flex-col justify-center items-center gap-5 ">
		<div className="w-full grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-4 mt-10">
			<div className="flex flex-col gap-2 md:col-span-2 xl:col-span-4 mb-8">
				<h2 className="text-3xl text-center text-stone-900 font-bold">Descubre a los compañeros que esperan por ti.</h2>
				<h3 className="text-lg text-center text-stone-400 font-normal">
					Haz clic en 'Ver más' para conocer a todos nuestros peluditos disponibles para adopción.
				</h3>
			</div>
			{dogsData.map((dog, index) => (
				<MyCard
					key={index}
					nombre={dog.nombre}
					descripcion={dog.descripcion}
					imagen={dog.imagen.src} // Pasar la ruta de la imagen
				/>
			))}

			<Button className="md:col-span-2 xl:col-span-4 bg-teal-900 hover:bg-teal-900/80">Ver más</Button>
		</div>
	);
};

export default CardSection;
