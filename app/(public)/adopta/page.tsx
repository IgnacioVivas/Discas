'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Dog, Cat, Sparkles } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnimalCard from '@/components/myComponents/AnimalCard';
import { useAnimalFilter } from '@/hooks/useAnimalFilter';
import SponsorsSection from '@/components/sections/SponsorsSection';

export default function Adopta() {
	const { filter, setFilter, displayedAnimals, isLoading, detectAnimalType, totalPerros, totalGatos, totalAnimals } =
		useAnimalFilter();

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1 },
		},
	};

	return (
		<div className="min-h-screen bg-linear-to-b from-white to-amber-50 pt-24 pb-16 px-4">
			{/* Header */}
			<div className="container mx-auto mb-10 flex flex-col justify-center items-center">
				<div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-amber-100 to-pink-100 rounded-full mb-4">
					<Sparkles className="w-4 h-4 text-amber-600" />
					<span className="text-sm font-bold text-amber-700">Conoce a todos nuestros amigos</span>
				</div>

				<h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-teal-800 via-amber-700 to-teal-800 bg-clip-text text-transparent">
					Adopta un compañero
				</h1>

				<p className="text-center text-lg text-gray-600 max-w-2xl">
					Cada uno tiene una historia única y mucho amor para dar. <br /> Encontrá a tu compañero ideal.
				</p>
			</div>

			{/* Filtros */}
			<div className="container mx-auto mb-8 flex justify-center items-center">
				<Tabs
					defaultValue="todos"
					value={filter}
					onValueChange={(v: string) => {
						if (v === 'todos' || v === 'perros' || v === 'gatos') {
							setFilter(v);
						}
					}}
				>
					<TabsList className="bg-gray-100 p-1 rounded-2xl">
						<TabsTrigger
							value="todos"
							className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm"
						>
							<div className="flex items-center gap-2">
								<Filter className="w-4 h-4" />
								Todos ({totalAnimals})
							</div>
						</TabsTrigger>
						<TabsTrigger
							value="perros"
							className="rounded-xl data-[state=active]:bg-amber-50 data-[state=active]:shadow-sm"
						>
							<div className="flex items-center gap-2">
								<Dog className="w-4 h-4" />
								Perritos ({totalPerros})
							</div>
						</TabsTrigger>
						<TabsTrigger
							value="gatos"
							className="rounded-xl data-[state=active]:bg-teal-50 data-[state=active]:shadow-sm"
						>
							<div className="flex items-center gap-2">
								<Cat className="w-4 h-4" />
								Gatitos ({totalGatos})
							</div>
						</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>

			{/* Loading State */}
			{isLoading ? (
				<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{[...Array(8)].map((_, index) => (
						<div key={index} className="h-125 bg-gray-100 rounded-2xl animate-pulse" />
					))}
				</div>
			) : (
				<>
					{/* Contador */}
					<div className="container mx-auto mb-6 text-center text-gray-600">
						Mostrando {displayedAnimals.length} animales
					</div>

					{/* Grid de AnimalCard */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
					>
						<AnimatePresence mode="wait">
							{displayedAnimals.map((animal, index) => (
								<AnimalCard key={animal.id} animal={animal} index={index} animalType={detectAnimalType(animal)} />
							))}
						</AnimatePresence>
					</motion.div>

					{/* <SponsorsSection /> */}
				</>
			)}

			{/* Mensaje si no hay resultados */}
			{!isLoading && displayedAnimals.length === 0 && (
				<div className="container mx-auto text-center py-12">
					<p className="text-gray-500 text-lg">No hay animales disponibles con este filtro.</p>
				</div>
			)}
		</div>
	);
}
