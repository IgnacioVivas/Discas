'use client';

import { Edit, Trash2, Eye, EyeOff, ExternalLink, MoreVertical, Dog, Cat, MapPin, Clock, Sparkles, Heart, TrendingUp, Moon, PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Disca } from '@/interface/interfaces';

interface Props {
	animal: Disca;
	index: number;
	onTogglePublicado: (id: string) => void;
	onToggleAdoptado: (id: string) => void;
	onToggleFallecido: (id: string) => void;
	onEdit: (id: string) => void;
	onDelete: (id: string, name: string) => void;
	onViewPublic: (id: string) => void;
	isPatching: boolean;
}

export default function AnimalListItem({ animal, index, onTogglePublicado, onToggleAdoptado, onToggleFallecido, onEdit, onDelete, onViewPublic, isPatching }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ delay: index * 0.04 }}
			whileHover={{ x: 4 }}
		>
			<Card className={cn(
			'border transition-colors overflow-hidden group',
			animal.fallecido
				? 'border-l-4 border-l-purple-400 bg-purple-50/20 opacity-70 grayscale-[20%]'
				: animal.adoptado
				? 'border-l-4 border-l-green-400 bg-green-50/30 hover:border-l-green-500'
				: 'hover:border-teal-300',
		)}>
				<div className="p-3 md:p-4">
					<div className="flex flex-row items-start gap-3 md:gap-4">
						<div className="relative w-16 h-16 md:w-24 md:h-24 shrink-0">
							<img src={animal.imagenCard || '/placeholder.jpg'} alt={animal.nombre} className="w-full h-full object-cover rounded-lg" />
							<div className="absolute top-1 left-1">
								{animal.tipo === 'perro' ? (
									<Dog className="w-4 h-4 text-white drop-shadow" />
								) : animal.tipo === 'gato' ? (
									<Cat className="w-4 h-4 text-white drop-shadow" />
								) : (
									<PawPrint className="w-4 h-4 text-white drop-shadow" />
								)}
							</div>
						</div>

						<div className="flex-1 min-w-0">
							<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
								<div className="flex-1">
									<div className="flex items-center gap-2 mb-1 flex-wrap">
										<h3 className="font-bold text-base md:text-lg text-gray-800 group-hover:text-teal-700 transition-colors">
											{animal.nombre}
										</h3>
										{animal.adoptado && (
											<Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
												<Heart className="w-3 h-3 mr-1" />Adoptado
											</Badge>
										)}
										{animal.fallecido && (
											<Badge className="bg-purple-100 text-purple-800 border-purple-200 text-xs">
												<Moon className="w-3 h-3 mr-1" />En el cielo
											</Badge>
										)}
										{animal.publicado ? (
											<Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs">
												<Eye className="w-3 h-3 mr-1" />Publicado
											</Badge>
										) : (
											<Badge variant="outline" className="text-gray-500 text-xs">
												<EyeOff className="w-3 h-3 mr-1" />Borrador
											</Badge>
										)}
									</div>

									<p className="text-gray-500 text-sm mb-2 line-clamp-1">{animal.descripcion}</p>

									<div className="flex flex-wrap gap-1.5">
										<Badge variant="outline" className="text-xs">{animal.edad} {animal.edad === 1 ? 'año' : 'años'}</Badge>
										<Badge variant="outline" className="text-xs">{animal.genero}</Badge>
										<Badge variant="outline" className="text-xs">{animal.tamaño}</Badge>
										{animal.discapacidad && (
											<Badge className="bg-teal-100 text-teal-800 border-teal-200 text-xs">{animal.discapacidad}</Badge>
										)}
									</div>
								</div>

								<div className="flex items-center gap-2 self-start shrink-0">
									<Button
										size="sm"
										variant="outline"
										disabled={isPatching}
										onClick={() => onTogglePublicado(animal.id)}
										className={cn('cursor-pointer text-xs', animal.publicado ? 'text-emerald-600 border-emerald-200' : '')}
									>
										{animal.publicado ? <><Eye className="w-3 h-3 mr-1" />Publicado</> : <><EyeOff className="w-3 h-3 mr-1" />Oculto</>}
									</Button>

									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button size="sm" variant="ghost" className="cursor-pointer">
												<MoreVertical className="w-4 h-4" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end" className="bg-white z-50">
											<DropdownMenuItem className="cursor-pointer" onClick={() => onEdit(animal.id)}>
												<Edit className="w-4 h-4 mr-2" />Editar
											</DropdownMenuItem>
											<DropdownMenuItem className="cursor-pointer" onClick={() => onViewPublic(animal.id)}>
												<ExternalLink className="w-4 h-4 mr-2" />Ver público
											</DropdownMenuItem>
											<DropdownMenuItem className="cursor-pointer" onClick={() => onToggleAdoptado(animal.id)}>
												<Heart className="w-4 h-4 mr-2" />{animal.adoptado ? 'Marcar disponible' : 'Marcar adoptado'}
											</DropdownMenuItem>
											<DropdownMenuItem className="cursor-pointer" onClick={() => onToggleFallecido(animal.id)}>
												<Moon className="w-4 h-4 mr-2" />{animal.fallecido ? 'Marcar activo' : 'Registrar fallecimiento'}
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem className="cursor-pointer text-red-600" onClick={() => onDelete(animal.id, animal.nombre)}>
												<Trash2 className="w-4 h-4 mr-2" />Eliminar
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							</div>

							<div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mt-3 pt-3 border-t">
								<span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{animal.ubicacion || 'Sin ubicación'}</span>
								<span className="flex items-center gap-1"><Clock className="w-3 h-3" />{new Date(animal.createdAt).toLocaleDateString('es-AR')}</span>
								<span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-purple-400" />{animal.personalidad.length} características</span>
								<span className="flex items-center gap-1"><TrendingUp className="w-3 h-3 text-teal-400" />{animal.castrado ? 'Castrado' : 'Sin castrar'}</span>
							</div>
						</div>
					</div>
				</div>
			</Card>
		</motion.div>
	);
}
