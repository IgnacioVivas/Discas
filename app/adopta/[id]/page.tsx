// import { notFound } from 'next/navigation';
// import { datosDiscas } from '@/data/discas';
// import PhotoGallery from '@/components/myComponents/PhotoGallery';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { ChevronLeft } from 'lucide-react';
// import Link from 'next/link';

// export async function generateStaticParams() {
// 	return datosDiscas.map((dog) => ({
// 		id: dog.id,
// 	}));
// }

// export default async function AdoptaItem({ params }: { params: Promise<{ id: string }> }) {
// 	const { id } = await params; // 👈 CLAVE

// 	const dog = datosDiscas.find((d) => d.id === id);
// 	if (!dog) return notFound();

export default async function AdoptaItem() {
	return (
		// <div className="mx-auto px-10 md:px-20 py-20">
		// 	<Link
		// 		href="/adopta"
		// 		className="text-teal-950 hover:underline mb-6 flex gap-1 items-center font-nunito text-sm md:text-base"
		// 	>
		// 		<ChevronLeft size={14} /> volver a la lista
		// 	</Link>
		// 	<Card className="px-3">
		// 		<CardHeader className="px-0">
		// 			<CardTitle>
		// 				<h2 className="font-poppins text-xl">{dog.nombre}</h2>
		// 			</CardTitle>
		// 			<CardDescription className="flex gap-3">
		// 				<span className="text-gray-600">{dog.genero}</span>
		// 				<span className="text-gray-600">{dog.edad} años</span>
		// 				<span className="text-gray-600">{dog.tamaño}</span>
		// 				<span className="text-gray-600">{dog.castrado}</span>
		// 			</CardDescription>
		// 		</CardHeader>
		// 		<CardContent>
		// 			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
		// 				<PhotoGallery photos={dog.fotos} name={dog.nombre} />
		// 				<div className="w-full font-inter">
		// 					<div className="p-2 ">
		// 						<h2 className="text-xl font-semibold mb-2 font-poppins">Sobre {dog.nombre}</h2>
		// 						<p className="text-gray-700">{dog.descripcion}</p>
		// 					</div>
		// 					<div className="p-2 border-t">
		// 						<h2 className="text-lg font-semibold mb-2 font-poppins">Personalidad</h2>
		// 						<ul className="list-disc pl-5">
		// 							{dog.personalidad.map((item, i) => (
		// 								<li key={i}>{item}</li>
		// 							))}
		// 						</ul>
		// 					</div>
		// 					<div className="p-2 border-t">
		// 						<h2 className="text-lg font-semibold mb-2 font-poppins">Requisitos de Adopción</h2>
		// 						<ul className="list-disc pl-5">
		// 							{dog.requisitosDeAdopcion.map((req, i) => (
		// 								<li key={i}>{req}</li>
		// 							))}
		// 						</ul>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</CardContent>
		// 		<CardFooter className="flex justify-center lg:grid lg:grid-cols-2">
		// 			<button className="w-full bg-custom-red text-white px-6 py-3 mt-5 rounded-lg hover:bg-red-700 transition-colors md:max-w-xs font-nunito lg:col-start-2 lg:justify-self-center">
		// 				¡Quiero adoptar a {dog.nombre}!
		// 			</button>
		// 		</CardFooter>
		// 	</Card>
		// </div>

		<div>
			<h1>hola mundo</h1>
		</div>
	);
}
