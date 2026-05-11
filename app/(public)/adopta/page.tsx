'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Dog, Cat, Sparkles, Heart, ArrowRight, ClipboardList } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import AnimalCard from '@/components/myComponents/AnimalCard';
import { useAnimalFilter } from '@/hooks/useAnimalFilter';

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
		<div className="min-h-screen bg-linear-to-b from-white to-amber-50 pt-24 pb-16 px-4 md:px-10 xl:px-20">
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

			{/* Formulario de adopción */}
			<div className="container mx-auto mt-16">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="relative"
				>
					<div className="absolute -inset-4 bg-linear-to-r from-amber-400 to-orange-400 rounded-3xl blur-xl opacity-20" />
					<div className="relative bg-linear-to-r from-amber-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white shadow-2xl overflow-hidden">
						<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
						<div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-20 -translate-x-20" />
						<div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
							<div className="flex-1 text-center md:text-left">
								<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-4">
									<Heart className="w-4 h-4" />
									<span className="text-sm font-medium">¿Ya encontraste a tu compañero?</span>
								</div>
								<h2 className="text-3xl md:text-4xl font-bold mb-4">Postulate para adoptar</h2>
								<p className="text-white/90 text-lg leading-relaxed">
									Completá el formulario y nuestro equipo se pondrá en contacto para acompañarte en todo el proceso de
									adopción.
								</p>
							</div>
							<motion.a
								href="https://docs.google.com/forms/d/e/1FAIpQLSebGiJ32_soPpFQRk-VFLzpS72P1rAuqu5z-18diHp03eJBZw/viewform"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="shrink-0"
							>
								<Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 font-bold shadow-lg cursor-pointer text-lg px-8 py-6">
									<ClipboardList className="w-5 h-5 mr-2" />
									Quiero adoptar
									<ArrowRight className="w-5 h-5 ml-2" />
								</Button>
							</motion.a>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
