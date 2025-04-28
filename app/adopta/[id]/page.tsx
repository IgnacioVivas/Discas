import { datosDiscas } from '@/data/discas';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
	params: {
		id: string;
	};
}

const InfoDisca = ({ params }: PageProps) => {
	const dog = datosDiscas.find((d) => d.id === params.id);

	if (!dog) return notFound();

	return (
		<div className="mx-auto px-20 py-20">
			<Link href="/adopta" className="text-custom-red hover:underline mb-6 inline-block">
				← Volver a la lista
			</Link>

			<div className="bg-white rounded-lg shadow-lg overflow-hidden">
				{/* Header con info básica */}
				<div className="p-6 border-b">
					<h1 className="text-3xl font-bold">{dog.nombre}</h1>
					<div className="flex gap-4 mt-2">
						<span className="text-gray-600">{dog.raza}</span>
						<span className="text-gray-600">{dog.edad} años</span>
						<span className="text-gray-600">{dog.genero}</span>
						<span className="text-gray-600">{dog.tamaño}</span>
					</div>
				</div>

				{/* Galería de fotos */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
					{dog.fotos.map((foto, index) => (
						<div key={index} className="relative h-64 rounded-lg overflow-hidden">
							<Image src={foto} alt={`${dog.nombre} - Foto ${index + 1}`} fill className="object-cover" />
						</div>
					))}
				</div>

				{/* Descripción */}
				<div className="p-6 border-t">
					<h2 className="text-xl font-semibold mb-2">Sobre {dog.nombre}</h2>
					<p className="text-gray-700">{dog.descripcion}</p>
				</div>

				{/* Personalidad */}
				<div className="p-6 border-t">
					<h2 className="text-xl font-semibold mb-2">Personalidad</h2>
					<ul className="list-disc pl-5">
						{dog.personalidad.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</div>

				{/* Requisitos */}
				<div className="p-6 border-t">
					<h2 className="text-xl font-semibold mb-2">Requisitos de Adopción</h2>
					<ul className="list-disc pl-5">
						{dog.requisitosDeAdopcion.map((req, i) => (
							<li key={i}>{req}</li>
						))}
					</ul>
				</div>

				{/* Botón de adopción */}
				<div className="p-6 border-t text-center">
					<button className="bg-custom-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
						¡Quiero adoptar a {dog.nombre}!
					</button>
				</div>
			</div>
		</div>
	);
};

export default InfoDisca;
