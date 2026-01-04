// app/(admin)/dashboard/page.tsx - VERSIÓN CON TODOS LOS ANIMALES
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
	PawPrint,
	Users,
	Heart,
	Search,
	Filter,
	Plus,
	Edit,
	Trash2,
	Eye,
	EyeOff,
	MoreVertical,
	Home,
	Cat,
	Dog,
	MapPin,
	Clock,
	Star,
	BarChart3,
	Sparkles,
	ExternalLink,
	TrendingUp,
	LogOut,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { motion } from 'framer-motion';
import { DeleteModal } from '@/components/admin/DeleteModal';
import { toast } from 'sonner';
import { signOut } from 'next-auth/react';
import { cn } from '@/lib/utils';

// Tipo Animal basado en tu esquema Prisma
type Animal = {
	id: string;
	nombre: string;
	descripcion: string;
	edad: number;
	genero: string;
	tamaño: string;
	tipo: string;
	discapacidad: string | null;
	castrado: boolean;
	vacunado: boolean;
	desparasitado: boolean;
	ubicacion: string | null;
	personalidad: string[];
	requisitosDeAdopcion: string[];
	imagenCard: string;
	fotos: string[];
	publicado: boolean;
	destacado: boolean;
	createdAt: string;
	updatedAt: string;
	views?: number; // Opcional si no está en el modelo
	adoptionInterest?: number; // Opcional si no está en el modelo
};

export default function Dashboard() {
	const router = useRouter();
	const [animales, setAnimales] = useState<Animal[]>([]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');
	const [filter, setFilter] = useState('todos');
	const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; animalId: string; animalName: string }>({
		isOpen: false,
		animalId: '',
		animalName: '',
	});
	const [deletingId, setDeletingId] = useState<string | null>(null);
	const [user] = useState({
		name: 'User Name',
		email: 'admin@fundaciondiscas.org',
		role: 'Administrador Principal',
		avatar: '/admin-avatar.jpg',
	});

	// 🔹 GET /api/animals - Cargar animales desde la API
	useEffect(() => {
		const fetchAnimales = async () => {
			try {
				const res = await fetch('/api/animals');

				if (!res.ok) {
					throw new Error('Error al cargar animales');
				}

				const data = await res.json();
				setAnimales(data);
			} catch (error) {
				console.error(error);
				toast.error('No se pudieron cargar los discas');
			} finally {
				setLoading(false);
			}
		};

		fetchAnimales();
	}, []);

	// 🔹 DELETE /api/animals/:id - Eliminar animal
	const handleDeleteConfirm = async () => {
		if (!deleteModal.animalId) return;

		setDeletingId(deleteModal.animalId);

		try {
			const res = await fetch(`/api/animals/${deleteModal.animalId}`, {
				method: 'DELETE',
			});

			if (res.status === 401) {
				toast.error('No estás autenticada');
				return;
			}

			if (res.status === 403) {
				toast.error('No tenés permisos para eliminar');
				return;
			}

			if (!res.ok) {
				throw new Error('Error al eliminar');
			}

			// Actualizar estado local
			setAnimales((prev) => prev.filter((animal) => animal.id !== deleteModal.animalId));

			toast.success('Animal eliminado', {
				description: `${deleteModal.animalName} ha sido eliminado del sistema.`,
			});
		} catch (error) {
			console.error(error);
			toast.error('No se pudo eliminar el animal');
		} finally {
			setDeletingId(null);
			setDeleteModal({ isOpen: false, animalId: '', animalName: '' });
		}
	};

	// Calcular stats basadas en datos reales
	const stats = [
		{
			label: 'Animales activos',
			value: animales.filter((a) => a.publicado).length.toString(),
			icon: PawPrint,
			color: 'bg-linear-to-br from-teal-500 to-teal-600',
			change: `+${
				animales.filter((a) => new Date(a.createdAt) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).length
			} este mes`,
			description: 'Disponibles para adopción',
		},
		{
			label: 'Total animales',
			value: animales.length.toString(),
			icon: BarChart3,
			color: 'bg-linear-to-br from-amber-500 to-orange-500',
			change: `${animales.filter((a) => a.destacado).length} destacados`,
			description: 'En el sistema',
		},
		{
			label: 'Solicitudes',
			value: animales.reduce((acc, a) => acc + (a.adoptionInterest || 0), 0).toString(),
			icon: Heart,
			color: 'bg-linear-to-br from-pink-500 to-rose-500',
			change: `${animales.filter((a) => (a.adoptionInterest || 0) > 0).length} con interés`,
			description: 'Adopciones en trámite',
		},
	];

	const filteredAnimales = animales.filter((animal) => {
		const matchesSearch =
			animal.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
			animal.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesFilter =
			filter === 'todos'
				? true
				: filter === 'publicados'
				? animal.publicado
				: filter === 'borradores'
				? !animal.publicado
				: filter === 'destacados'
				? animal.destacado
				: filter === 'perros'
				? animal.tipo === 'perro'
				: filter === 'gatos'
				? animal.tipo === 'gato'
				: true;

		return matchesSearch && matchesFilter;
	});

	const handleDeleteClick = (id: string, name: string) => {
		setDeleteModal({
			isOpen: true,
			animalId: id,
			animalName: name,
		});
	};

	const handleEditClick = (id: string) => {
		router.push(`/animales/editar/${id}`);
	};

	const handleNewAnimalClick = () => {
		router.push('/animales/nuevo');
	};

	const handleTogglePublicado = async (id: string) => {
		const animal = animales.find((a) => a.id === id);
		if (!animal) return;

		try {
			const res = await fetch(`/api/animals/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ publicado: !animal.publicado }),
			});

			if (!res.ok) {
				throw new Error('Error al actualizar');
			}

			// Actualizar estado local
			setAnimales((prev) =>
				prev.map((animal) => (animal.id === id ? { ...animal, publicado: !animal.publicado } : animal)),
			);

			toast.success(animal.publicado ? 'Animal ocultado' : 'Animal publicado', {
				description: `${animal.nombre} ${
					animal.publicado ? 'ya no es visible públicamente' : 'ahora es visible en el sitio'
				}.`,
			});
		} catch (error) {
			console.error(error);
			toast.error('Error al actualizar el animal');
		}
	};

	const handleToggleDestacado = async (id: string) => {
		const animal = animales.find((a) => a.id === id);
		if (!animal) return;

		try {
			const res = await fetch(`/api/animals/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ destacado: !animal.destacado }),
			});

			if (!res.ok) {
				throw new Error('Error al actualizar');
			}

			// Actualizar estado local
			setAnimales((prev) =>
				prev.map((animal) => (animal.id === id ? { ...animal, destacado: !animal.destacado } : animal)),
			);

			toast.success(animal.destacado ? 'Quitado de destacados' : 'Marcado como destacado', {
				description: `${animal.nombre} ${
					animal.destacado ? 'ya no aparece en la sección destacada' : 'ahora aparece como destacado'
				}.`,
			});
		} catch (error) {
			console.error(error);
			toast.error('Error al actualizar el animal');
		}
	};

	const handleViewPublic = (id: string) => {
		toast.info('Ver en sitio público', {
			description: 'Redirigiendo a la página pública del disca...',
		});
		router.push(`/adopta/${id}`);
	};

	// Estado de carga
	if (loading) {
		return (
			<div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100/50 flex items-center justify-center">
				<div className="text-center">
					<div className="w-16 h-16 mx-auto border-4 border-teal-600 border-t-transparent rounded-full animate-spin mb-4"></div>
					<p className="text-gray-600">Cargando discas...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100/50">
			{/* Header superior */}
			<header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
				<div className="px-6 py-4 flex items-center justify-between">
					<div className="flex items-center gap-4">
						<motion.div whileHover={{ rotate: 15 }} className="relative">
							<div className="absolute -inset-4 bg-linear-to-r from-teal-400 to-amber-400 rounded-full blur-xl opacity-20" />
							<div className="relative w-10 h-10 bg-linear-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
								<PawPrint className="w-5 h-5 text-white" />
							</div>
						</motion.div>

						<div>
							<h1 className="text-xl font-bold text-gray-800">Panel de Administración</h1>
							<p className="text-sm text-gray-500">Fundación Discas • Gestión de Animales</p>
						</div>
					</div>

					<div className="flex items-center gap-4">
						<Button
							variant="outline"
							size="sm"
							className="flex items-center gap-2 cursor-pointer"
							onClick={() => router.push('/')}
						>
							<Home className="w-4 h-4" />
							<span className="hidden sm:inline">Ver sitio público</span>
						</Button>

						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
									<Avatar className="w-9 h-9 border-2 border-teal-200">
										<AvatarImage src={user.avatar} />
										<AvatarFallback className="bg-linear-to-br from-teal-500 to-teal-600 text-white">UN</AvatarFallback>
									</Avatar>
									<div className="hidden md:block text-left">
										<p className="text-sm font-medium text-gray-800">{user.name}</p>
										<p className="text-xs text-gray-500">{user.role}</p>
									</div>
									<MoreVertical className="w-4 h-4 text-gray-400" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-56 bg-white">
								<DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
								<DropdownMenuSeparator />

								<DropdownMenuItem
									className="flex items-center gap-2 text-red-600 cursor-pointer"
									onClick={() => signOut()}
								>
									<LogOut className="w-4 h-4" />
									Cerrar Sesión
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</header>

			<div className="px-4 sm:px-6 py-6">
				{/* Stats Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							whileHover={{ y: -5 }}
						>
							<Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
								<div className={`h-2 ${stat.color.split(' ')[0]}`} />
								<CardContent className="p-6">
									<div className="flex items-start justify-between">
										<div>
											<p className="text-sm text-gray-500 mb-1">{stat.label}</p>
											<div className="flex items-end gap-2 mb-2">
												<p className="text-3xl font-bold text-gray-800">{stat.value}</p>
												<span className="text-xs font-medium px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">
													{stat.change}
												</span>
											</div>
											<p className="text-sm text-gray-600">{stat.description}</p>
										</div>
										<div className={`p-3 rounded-xl ${stat.color} shadow-lg`}>
											<stat.icon className="w-6 h-6 text-white" />
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Sección principal - Lista de animales */}
				<Card className="border-0 shadow-xl">
					<CardHeader className="pb-3">
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
							<div>
								<CardTitle className="text-2xl flex items-center gap-2">
									<PawPrint className="w-6 h-6 text-teal-600" />
									Todos los Discas ({filteredAnimales.length})
								</CardTitle>
								<CardDescription>Gestiona todos los animales de la fundación</CardDescription>
							</div>

							<div className="flex items-center gap-3">
								<Button
									className="text-white bg-linear-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 shadow-lg cursor-pointer"
									onClick={handleNewAnimalClick}
								>
									<Plus className="w-4 h-4 mr-2" />
									<span className="hidden sm:inline">Nuevo Disca</span>
									<span className="sm:hidden">Nuevo</span>
								</Button>
							</div>
						</div>
					</CardHeader>

					<CardContent className="p-6">
						{/* Filtros y búsqueda */}
						<div className="flex flex-col sm:flex-row gap-4 mb-6">
							<div className="relative flex-1">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
								<Input
									placeholder="Buscar por nombre o descripción..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="pl-10"
								/>
							</div>

							<div className="flex flex-wrap gap-2">
								<Button
									variant={filter === 'todos' ? 'default' : 'outline'}
									size="sm"
									onClick={() => setFilter('todos')}
									className={cn('cursor-pointer', filter === 'todos' && 'bg-teal-600 hover:bg-teal-700 text-white')}
								>
									Todos
								</Button>

								<Button
									variant={filter === 'publicados' ? 'default' : 'outline'}
									size="sm"
									onClick={() => setFilter('publicados')}
									className={cn(
										'cursor-pointer',
										filter === 'publicados' && 'bg-emerald-600 hover:bg-emerald-700 text-white',
									)}
								>
									<Eye className="w-3 h-3 mr-1" />
									Publicados
								</Button>

								<Button
									variant={filter === 'borradores' ? 'default' : 'outline'}
									size="sm"
									onClick={() => setFilter('borradores')}
									className={cn(
										'cursor-pointer',
										filter === 'borradores' && 'bg-gray-600 hover:bg-gray-700 text-white',
									)}
								>
									<EyeOff className="w-3 h-3 mr-1" />
									Borradores
								</Button>

								<Button
									variant={filter === 'destacados' ? 'default' : 'outline'}
									size="sm"
									onClick={() => setFilter('destacados')}
									className={cn(
										'cursor-pointer',
										filter === 'destacados' && 'bg-amber-600 hover:bg-amber-700 text-white',
									)}
								>
									<Star className="w-3 h-3 mr-1" />
									Destacados
								</Button>

								<Button
									variant={filter === 'perros' ? 'default' : 'outline'}
									size="sm"
									onClick={() => setFilter('perros')}
									className={cn('cursor-pointer', filter === 'perros' && 'bg-blue-600 hover:bg-blue-700 text-white')}
								>
									<Dog className="w-3 h-3 mr-1" />
									Perros
								</Button>

								<Button
									variant={filter === 'gatos' ? 'default' : 'outline'}
									size="sm"
									onClick={() => setFilter('gatos')}
									className={cn('cursor-pointer', filter === 'gatos' && 'bg-yellow-600 hover:bg-yellow-700 text-white')}
								>
									<Cat className="w-3 h-3 mr-1" />
									Gatos
								</Button>
							</div>
						</div>

						{/* Lista de animales - TODOS */}
						<div className="space-y-4">
							{filteredAnimales.map((animal, index) => (
								<motion.div
									key={animal.id}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.05 }}
									whileHover={{ x: 5 }}
								>
									<Card className="border hover:border-teal-300 transition-colors overflow-hidden group">
										<div className="p-4">
											<div className="flex flex-col md:flex-row md:items-center gap-4">
												{/* Imagen */}
												<div className="relative w-24 h-24 shrink-0">
													<img
														src={animal.imagenCard || '/placeholder.jpg'}
														alt={animal.nombre}
														className="w-full h-full object-cover rounded-lg"
													/>
													<div className="absolute top-1 left-1">
														{animal.tipo === 'perro' ? (
															<Dog className="w-5 h-5 text-white drop-shadow" />
														) : (
															<Cat className="w-5 h-5 text-white drop-shadow" />
														)}
													</div>
													<div className="absolute bottom-1 right-1">
														<Button
															size="icon"
															variant="ghost"
															className="w-6 h-6 bg-white/90 hover:bg-white cursor-pointer"
															onClick={() => handleViewPublic(animal.id)}
														>
															<ExternalLink className="w-3 h-3" />
														</Button>
													</div>
												</div>

												{/* Información */}
												<div className="flex-1 min-w-0">
													<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
														<div>
															<div className="flex items-center gap-2 mb-1">
																<h3 className="font-bold text-lg text-gray-800 group-hover:text-teal-700 transition-colors">
																	{animal.nombre}
																</h3>
																<div className="flex gap-1">
																	{animal.destacado && (
																		<Badge className="bg-linear-to-r from-amber-100 to-amber-50 text-amber-800 border-amber-200">
																			<Star className="w-3 h-3 mr-1" />
																			Destacado
																		</Badge>
																	)}
																	{animal.publicado ? (
																		<Badge className="bg-linear-to-r from-emerald-100 to-emerald-50 text-emerald-800 border-emerald-200">
																			<Eye className="w-3 h-3 mr-1" />
																			Publicado
																		</Badge>
																	) : (
																		<Badge variant="outline" className="text-gray-500">
																			<EyeOff className="w-3 h-3 mr-1" />
																			Borrador
																		</Badge>
																	)}
																</div>
															</div>

															<p className="text-gray-600 text-sm mb-2 line-clamp-1">{animal.descripcion}</p>

															<div className="flex flex-wrap gap-2 mb-3">
																<Badge variant="outline" className="text-xs">
																	{animal.edad} años
																</Badge>
																<Badge variant="outline" className="text-xs">
																	{animal.genero}
																</Badge>
																<Badge variant="outline" className="text-xs">
																	{animal.tamaño}
																</Badge>
																<Badge className="bg-linear-to-r from-teal-100 to-teal-50 text-teal-800 border-teal-200 text-xs">
																	{animal.discapacidad || 'Sin discapacidad'}
																</Badge>
																<Badge variant="outline" className="text-xs">
																	{animal.tipo}
																</Badge>
															</div>
														</div>

														{/* Acciones */}
														<div className="flex items-center gap-2 self-start">
															<Button
																size="sm"
																variant="outline"
																onClick={() => handleTogglePublicado(animal.id)}
																className={cn('cursor-pointer', animal.publicado ? 'text-emerald-600' : '')}
															>
																{animal.publicado ? (
																	<>
																		<Eye className="w-3 h-3 mr-1" />
																		Publicado
																	</>
																) : (
																	<>
																		<EyeOff className="w-3 h-3 mr-1" />
																		Oculto
																	</>
																)}
															</Button>

															<DropdownMenu>
																<DropdownMenuTrigger asChild>
																	<Button size="sm" variant="ghost" className="cursor-pointer">
																		<MoreVertical className="w-4 h-4" />
																	</Button>
																</DropdownMenuTrigger>
																<DropdownMenuContent align="end" className="z-50 bg-white">
																	<DropdownMenuItem
																		className="flex items-center gap-2 cursor-pointer"
																		onClick={() => handleEditClick(animal.id)}
																	>
																		<Edit className="w-4 h-4" />
																		Editar
																	</DropdownMenuItem>
																	<DropdownMenuItem
																		className="flex items-center gap-2 cursor-pointer"
																		onClick={() => handleToggleDestacado(animal.id)}
																	>
																		<Star className="w-4 h-4" />
																		{animal.destacado ? 'Quitar destacado' : 'Destacar'}
																	</DropdownMenuItem>
																	<DropdownMenuItem
																		className="flex items-center gap-2 cursor-pointer"
																		onClick={() => handleViewPublic(animal.id)}
																	>
																		<ExternalLink className="w-4 h-4" />
																		Ver público
																	</DropdownMenuItem>
																	<DropdownMenuSeparator />
																	<DropdownMenuItem
																		className="flex items-center gap-2 cursor-pointer text-red-600"
																		onClick={() => handleDeleteClick(animal.id, animal.nombre)}
																		disabled={deletingId === animal.id}
																	>
																		{deletingId === animal.id ? (
																			<>
																				<div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin mr-2" />
																				Eliminando...
																			</>
																		) : (
																			<>
																				<Trash2 className="w-4 h-4" />
																				Eliminar
																			</>
																		)}
																	</DropdownMenuItem>
																</DropdownMenuContent>
															</DropdownMenu>
														</div>
													</div>

													{/* Stats adicionales */}
													<div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-500 mt-3 pt-3 border-t">
														<div className="flex items-center gap-4 mb-2 sm:mb-0">
															<div className="flex items-center gap-1">
																<MapPin className="w-3 h-3" />
																{animal.ubicacion || 'Sin ubicación'}
															</div>
															<div className="flex items-center gap-1">
																<Clock className="w-3 h-3" />
																{new Date(animal.createdAt).toLocaleDateString()}
															</div>
														</div>

														<div className="flex items-center gap-4">
															<div className="flex items-center gap-1">
																<Sparkles className="w-3 h-3 text-purple-500" />
																{animal.personalidad.length} características
															</div>
															<div className="flex items-center gap-1">
																<Heart className="w-3 h-3 text-pink-500" />
																{animal.adoptionInterest || 0} interesados
															</div>
															<div className="flex items-center gap-1">
																<TrendingUp className="w-3 h-3 text-teal-500" />
																{animal.castrado ? 'Castrado' : 'Sin castrar'}
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</Card>
								</motion.div>
							))}
						</div>

						{/* Si no hay resultados */}
						{filteredAnimales.length === 0 && (
							<div className="text-center py-12">
								<div className="w-24 h-24 mx-auto bg-linear-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4">
									<Sparkles className="w-12 h-12 text-gray-400" />
								</div>
								<h3 className="text-xl font-semibold text-gray-700 mb-2">
									{animales.length === 0 ? 'No hay animales cargados' : 'No se encontraron animales'}
								</h3>
								<p className="text-gray-500 mb-6">
									{searchTerm ? 'Intenta con otros términos de búsqueda' : 'Crea tu primer animal para comenzar'}
								</p>
								<Button onClick={handleNewAnimalClick}>
									<Plus className="w-4 h-4 mr-2" />
									Crear primer animal
								</Button>
							</div>
						)}
					</CardContent>
				</Card>
			</div>

			{/* Footer */}
			<footer className="px-6 py-4 border-t border-gray-200 bg-white/50 mt-8">
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<div className="text-sm text-gray-600">
						<p>© 2024 Fundación Discas. Todos los derechos reservados.</p>
						<p className="text-xs mt-1">
							Sistema de gestión v1.0 • {animales.length} discas • {new Date().toLocaleDateString('es-AR')}
						</p>
					</div>

					<div className="flex items-center gap-2 text-sm text-gray-500">
						<div className="flex items-center gap-1">
							<Dog className="w-4 h-4" />
							<span>{animales.filter((a) => a.tipo === 'perro').length} perros</span>
						</div>
						<div className="w-1 h-1 bg-gray-300 rounded-full"></div>
						<div className="flex items-center gap-1">
							<Cat className="w-4 h-4" />
							<span>{animales.filter((a) => a.tipo === 'gato').length} gatos</span>
						</div>
					</div>
				</div>
			</footer>

			{/* Modal de eliminación */}
			<DeleteModal
				isOpen={deleteModal.isOpen}
				onClose={() => setDeleteModal({ isOpen: false, animalId: '', animalName: '' })}
				onConfirm={handleDeleteConfirm}
				animalName={deleteModal.animalName}
				isLoading={deletingId === deleteModal.animalId}
			/>
		</div>
	);
}
