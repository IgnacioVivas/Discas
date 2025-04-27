import MyCard from '@/components/myComponents/MyCard';
import { datosDiscas } from '@/data/discas';
import React from 'react';

function page() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4  mt-48 px-10 md:px-20 gap-4">
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
		</div>
	);
}

export default page;
