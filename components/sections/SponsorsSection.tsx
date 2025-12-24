import React from 'react';
import client1 from '@/public/image/client-1.png';
import client2 from '@/public/image/client-2.png';
import client3 from '@/public/image/client-3.png';
import client4 from '@/public/image/client-4.png';
import client5 from '@/public/image/client-5.png';
import Image from 'next/image';

const clientsData = [
	{
		imagen: client1,
		alt: 'Imagen del cliente 1, sonriendo y satisfecho con el servicio.',
	},
	{
		imagen: client2,
		alt: 'Imagen del cliente 2, mostrando un producto con entusiasmo.',
	},
	{
		imagen: client3,
		alt: 'Imagen del cliente 3, disfrutando de una experiencia memorable.',
	},
	{
		imagen: client4,
		alt: 'Imagen del cliente 4, interactuando con el equipo de soporte.',
	},
	// {
	// 	imagen: client5,
	// 	alt: 'Imagen del cliente 5, recomendando el servicio a amigos.',
	// },
];

const SponsorsSection = () => {
	return (
		<div className="px-10 md:px-20 grid grid-cols-4 lg:grid-cols-5 grid-rows-2 md:grid-rows-1 items-center justify-items-center gap-y-6 md:gap-8">
			<h2
				className={`font-dancing text-3xl md:text-[2.5rem] tracking-widest text-teal-dark font-extrabold col-span-6 lg:col-span-1 text-center lg:text-start md:mb-8 lg:mb-0`}
			>
				Nuestros patrocinadores y donantes
			</h2>
			{clientsData.map((client, index) => (
				<div key={index}>
					<Image src={client.imagen} alt={client.alt} />
				</div>
			))}
		</div>
	);
};

export default SponsorsSection;
