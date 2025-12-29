// 'use client';
// import React, { useEffect, useState } from 'react';
// import MyCard from '../myComponents/MyCard';
// import { Button } from '../ui/button';
// import { datosDiscas } from '@/data/discas';
// import Link from 'next/link';
// import { Disca } from '@/interface/interfaces';

// const CardSection = () => {
// 	const [randomDogs, setRandomDogs] = useState<Disca[]>([]);

// 	useEffect(() => {
// 		const shuffled = [...datosDiscas].sort(() => 0.5 - Math.random());
// 		setRandomDogs(shuffled.slice(0, 4));
// 	}, []);

// 	return (
// 		<div className="w-full px-10 md:px-20 grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-4 mt-10">
// 			<div className="flex flex-col gap-2 md:col-span-2 xl:col-span-4 mb-8">
// 				<h2 className={`text-4xl text-center text-stone-900 font-semibold font-poppins`}>
// 					Descubre a los compañeros que esperan por ti.
// 				</h2>
// 				<h3 className={`text-lg text-center text-stone-400 font-normal font-inter`}>
// 					Haz clic en &#39;Ver más&#39; para conocer a todos nuestros peluditos disponibles para adopción.
// 				</h3>
// 			</div>
// 			{randomDogs.map((dog) => (
// 				<Link key={dog.id} href={`/adopta/${dog.id}`} passHref>
// 					<div className="hover:scale-[1.02] transition-transform duration-200">
// 						<MyCard
// 							nombre={dog.nombre}
// 							descripcion={dog.descripcion}
// 							imagen={dog.imagenCard}
// 							edad={dog.edad}
// 							genero={dog.genero}
// 						/>
// 					</div>
// 				</Link>
// 			))}

// 			<Link href="/adopta" className="w-full md:col-span-2 xl:col-span-4 flex justify-center">
// 				<Button className={`bg-teal-950 hover:bg-teal-900/80 w-full sm:max-w-sm mt-6 md:mt-7 font-nunito`}>
// 					Ver más
// 				</Button>
// 			</Link>
// 		</div>
// 	);
// };

// export default CardSection;

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, PawPrint, Filter, Sparkles, ArrowRight, Dog, Cat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Disca } from '@/interface/interfaces';
import Link from 'next/link';
import AnimalCard from '../myComponents/AnimalCard';
import { datosDiscas } from '@/data/discas'; // Importa tus datos

const CardSection = () => {
	const [filter, setFilter] = useState<'todos' | 'perros' | 'gatos'>('todos');
	const [displayedAnimals, setDisplayedAnimals] = useState<Disca[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	// Función para detectar tipo basado en nombre/descripción
	const detectAnimalType = (animal: Disca): 'perro' | 'gato' => {
		const lowerNombre = animal.nombre.toLowerCase();
		const lowerDesc = animal.descripcion.toLowerCase();

		// Si ya tiene la propiedad tipo, úsala
		if (animal.tipo) {
			return animal.tipo;
		}

		// Si no, detecta por texto
		if (
			lowerDesc.includes('perro') ||
			lowerDesc.includes('canino') ||
			lowerDesc.includes('can') ||
			lowerNombre.includes('perro')
		) {
			return 'perro';
		}
		return 'gato'; // Default a gato
	};

	useEffect(() => {
		setIsLoading(true);

		// Usa datosDiscas directamente
		const allData = datosDiscas || [];

		let filtered = [...allData];

		if (filter === 'perros') {
			filtered = allData.filter((animal) => detectAnimalType(animal) === 'perro');
		} else if (filter === 'gatos') {
			filtered = allData.filter((animal) => detectAnimalType(animal) === 'gato');
		}

		// Mezclar y tomar máximo 4
		const shuffled = [...filtered].sort(() => 0.5 - Math.random());
		setDisplayedAnimals(shuffled.slice(0, 4));

		const timer = setTimeout(() => setIsLoading(false), 500);
		return () => clearTimeout(timer);
	}, [filter]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1 },
		},
	};

	return (
		<section className="relative py-16 md:py-24 xl:px-20 bg-linear-to-b from-white to-amber-50 overflow-hidden">
			{/* Elementos decorativos */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30 -translate-y-48 translate-x-48" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30 -translate-x-48 translate-y-48" />

			<div className="absolute inset-0 opacity-5">
				<PawPrint className="absolute top-1/4 left-10 w-40 h-40" />
				<PawPrint className="absolute bottom-1/4 right-10 w-32 h-32" />
			</div>

			<div className="container mx-auto px-4 relative z-10">
				{/* Encabezado */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-amber-100 to-pink-100 rounded-full mb-4">
						<Sparkles className="w-4 h-4 text-amber-600" />
						<span className="text-sm font-bold font-quicksand text-amber-700">Historias de amor esperando por ti</span>
					</div>

					<h2 className="text-4xl md:text-5xl font-extrabold font-nunito mb-4 bg-linear-to-r from-teal-800 via-amber-700 to-teal-800 bg-clip-text text-transparent">
						Ellos esperan un hogar
					</h2>

					<p className="text-lg font-inter md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Cada uno tiene una historia única y mucho amor para dar. Conocé a nuestros guerreros que buscan una segunda
						oportunidad llena de amor y cuidados.
					</p>
				</motion.div>

				{/* Filtros */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="flex justify-center mb-10"
				>
					<Tabs defaultValue="todos" value={filter} onValueChange={(v: any) => setFilter(v)}>
						<TabsList className="bg-gray-100 p-1 rounded-2xl">
							<TabsTrigger
								value="todos"
								className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm"
							>
								<div className="flex items-center gap-2">
									<Filter className="w-4 h-4" />
									Todos
								</div>
							</TabsTrigger>
							<TabsTrigger
								value="perros"
								className="rounded-xl data-[state=active]:bg-amber-50 data-[state=active]:shadow-sm"
							>
								<div className="flex items-center gap-2">
									<Dog className="w-4 h-4" />
									Perritos
								</div>
							</TabsTrigger>
							<TabsTrigger
								value="gatos"
								className="rounded-xl data-[state=active]:bg-teal-50 data-[state=active]:shadow-sm"
							>
								<div className="flex items-center gap-2">
									<Cat className="w-4 h-4" />
									Gatitos
								</div>
							</TabsTrigger>
						</TabsList>
					</Tabs>
				</motion.div>

				{/* Cards Grid */}
				{isLoading ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
						{[...Array(4)].map((_, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								className="h-[400px] bg-gray-100 rounded-2xl animate-pulse"
							/>
						))}
					</div>
				) : (
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
					>
						<AnimatePresence mode="wait">
							{displayedAnimals.map((animal, index) => (
								<AnimalCard key={animal.id} animal={animal} index={index} animalType={detectAnimalType(animal)} />
							))}
						</AnimatePresence>
					</motion.div>
				)}

				{/* Ver más */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="mt-12 text-center"
				>
					<div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-linear-to-r from-white to-amber-50 rounded-2xl border border-amber-200 max-w-2xl mx-auto shadow-lg">
						<div className="flex-1 text-center sm:text-left">
							<h3 className="text-2xl font-bold text-gray-800 mb-2">¿Listo para conocer a todos?</h3>
							<p className="text-gray-600 mb-4">
								Hay muchos más amigos esperando por un hogar. Conocé todas sus historias.
							</p>
						</div>

						<Button
							asChild
							size="lg"
							className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 font-semibold shadow-lg"
						>
							<Link href="/adopta" className="group">
								Ver todos los animales
								<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
							</Link>
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default CardSection;
