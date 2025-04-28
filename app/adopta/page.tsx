import MyCard from '@/components/myComponents/MyCard';
import { datosDiscas } from '@/data/discas';
import Link from 'next/link';
import React from 'react';

function Adopta() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4  mt-28 px-10 md:px-20 gap-4">
			{datosDiscas.map((dog) => (
				<Link key={dog.id} href={`/adopta/${dog.id}`} passHref legacyBehavior>
					<div className="hover:scale-[1.02] transition-transform duration-200">
						<MyCard
							nombre={dog.nombre}
							descripcion={dog.descripcion}
							imagen={dog.imagenCard}
							edad={dog.edad}
							genero={dog.genero}
						/>
					</div>
				</Link>
			))}
		</div>
	);
}

export default Adopta;
