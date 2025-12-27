'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, PawPrint, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Disca } from '@/interface/interfaces';

interface AnimalCardProps {
	animal: Disca;
	index: number;
	animalType: 'perro' | 'gato';
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal, index, animalType }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [isLiked, setIsLiked] = useState(false);

	const getTypeColor = (type: 'perro' | 'gato') => {
		return type === 'perro'
			? 'bg-amber-100 text-amber-800 border-amber-200'
			: 'bg-teal-100 text-teal-800 border-teal-200';
	};

	const getSizeBadge = (size: string = 'mediano') => {
		const lowerSize = size.toLowerCase();
		if (lowerSize.includes('pequeño') || lowerSize.includes('pequeña') || lowerSize.includes('chico')) {
			return 'bg-green-100 text-green-800 border-green-200';
		} else if (lowerSize.includes('grande')) {
			return 'bg-purple-100 text-purple-800 border-purple-200';
		}
		return 'bg-blue-100 text-blue-800 border-blue-200';
	};

	const hasSpecialNeeds = (descripcion: string): boolean => {
		const lowerDesc = descripcion.toLowerCase();
		return (
			lowerDesc.includes('discapacidad') ||
			lowerDesc.includes('especial') ||
			lowerDesc.includes('cuidado') ||
			lowerDesc.includes('silla') ||
			lowerDesc.includes('rueda') ||
			lowerDesc.includes('movilidad')
		);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 30, scale: 0.9 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
			whileHover={{ y: -8 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			className="relative"
		>
			{/* Efecto de fondo en hover */}
			<div
				className={cn(
					'absolute -inset-4 bg-gradient-to-r from-amber-200/0 via-orange-200/0 to-pink-200/0 rounded-3xl blur-xl transition-all duration-500',
					isHovered && 'from-amber-200/20 via-orange-200/20 to-pink-200/20',
				)}
			/>

			<Link href={`/adopta/${animal.id}`} className="block">
				<Card className="relative overflow-hidden border-2 border-gray-100 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full">
					{/* Header con imagen */}
					<div className="relative h-64 overflow-hidden">
						<Image
							src={animal.imagenCard}
							alt={animal.nombre}
							fill
							className={cn('object-cover transition-transform duration-700', isHovered && 'scale-110')}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
						/>

						{/* Overlay gradiente */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

						{/* Badges superiores */}
						<div className="absolute top-4 left-4 flex flex-wrap gap-2">
							<Badge variant="outline" className={cn('font-semibold', getTypeColor(animalType))}>
								{animalType === 'perro' ? '🐕 Perro' : '🐈 Gato'}
							</Badge>
							{hasSpecialNeeds(animal.descripcion) && (
								<Badge
									variant="outline"
									className="bg-gradient-to-r from-teal-500 to-teal-600 text-white border-teal-600"
								>
									💝 Especial
								</Badge>
							)}
						</div>

						{/* Botón like */}
						<button
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								setIsLiked(!isLiked);
							}}
							className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors z-10"
						>
							<Heart
								className={cn('w-5 h-5 transition-colors', isLiked ? 'fill-pink-500 text-pink-500' : 'text-gray-400')}
							/>
						</button>

						{/* Nombre en la imagen */}
						<div className="absolute bottom-4 left-4">
							<h3 className="text-2xl font-bold text-white drop-shadow-lg">{animal.nombre}</h3>
							<div className="flex items-center gap-2 text-white/90 text-sm mt-1">
								<Calendar className="w-3 h-3" />
								{animal.edad} {animal.edad === 1 ? 'año' : 'años'}
								{animal.tamaño && (
									<>
										<span className="mx-1">•</span>
										<Badge variant="outline" className={cn('text-xs', getSizeBadge(animal.tamaño))}>
											{animal.tamaño}
										</Badge>
									</>
								)}
							</div>
						</div>
					</div>

					{/* Contenido */}
					<CardContent className="p-6">
						<div className="space-y-4">
							{/* Información básica */}
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div className="p-2 bg-amber-50 rounded-lg">
										<PawPrint className="w-4 h-4 text-amber-600" />
									</div>
									<div>
										<p className="font-medium text-gray-800">{animal.genero}</p>
										<p className="text-sm text-gray-500">Sexo</p>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<div className="p-2 bg-teal-50 rounded-lg">
										<span className="w-4 h-4 block text-teal-600">✓</span>
									</div>
									<div>
										<p className="font-medium text-gray-800">{animal.castrado ? 'Sí' : 'No'}</p>
										<p className="text-sm text-gray-500">Castrado</p>
									</div>
								</div>
							</div>

							{/* Descripción */}
							<p className="text-gray-600 line-clamp-2 text-sm leading-relaxed min-h-[40px]">
								{animal.descripcion.length > 100 ? animal.descripcion.substring(0, 100) + '...' : animal.descripcion}
							</p>

							{/* Personalidad tags */}
							{animal.personalidad && animal.personalidad.length > 0 && (
								<div className="flex flex-wrap gap-2">
									{animal.personalidad.slice(0, 2).map((trait, idx) => (
										<span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
											{trait}
										</span>
									))}
									{animal.personalidad.length > 2 && (
										<span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
											+{animal.personalidad.length - 2} más
										</span>
									)}
								</div>
							)}
						</div>

						{/* Footer */}
						<motion.div
							className="mt-6 pt-6 border-t border-gray-100"
							animate={isHovered ? { opacity: 1 } : { opacity: 0.9 }}
						>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2 text-sm text-gray-500">
									<MapPin className="w-3 h-3" />
									<span>Córdoba</span>
								</div>

								<span className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 inline-block">
									Conocer más
								</span>
							</div>
						</motion.div>
					</CardContent>
				</Card>
			</Link>
		</motion.div>
	);
};

export default AnimalCard;
