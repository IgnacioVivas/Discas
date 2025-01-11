import React from 'react';
import client1 from '@/image/client-1.png';
import client2 from '@/image/client-2.png';
import client3 from '@/image/client-3.png';
import client4 from '@/image/client-4.png';
import client5 from '@/image/client-5.png';
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
	{
		imagen: client5,
		alt: 'Imagen del cliente 5, recomendando el servicio a amigos.',
	},
];

const SponsorsSection = () => {
	return (
		<div className="grid grid-cols-6 justify-items-center">
			<h2 className="text-2xl">Nuestros patrocinadores y donantes</h2>
			{clientsData.map((client, index) => (
				<div key={index}>
					<Image src={client.imagen} alt={client.alt} />
				</div>
			))}
		</div>
	);
};

export default SponsorsSection;
