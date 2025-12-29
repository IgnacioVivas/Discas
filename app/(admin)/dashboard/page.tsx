// app/(admin)/dashboard/page.tsx - VERSIÓN CON TODOS LOS ANIMALES
'use client';

import { useState } from 'react';
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

// Datos de ejemplo - MÁS animales para mostrar
const animalesEjemplo = [
	{
		id: '1',
		nombre: 'Luna',
		descripcion: 'Perrita muy cariñosa con tres patas, ama los paseos y jugar con pelotas.',
		edad: 3,
		genero: 'hembra',
		tamaño: 'mediano',
		tipo: 'perro',
		discapacidad: 'tres patas',
		castrado: true,
		vacunado: true,
		desparasitado: true,
		ubicacion: 'Córdoba Capital',
		personalidad: ['cariñosa', 'juguetona', 'tranquila'],
		requisitosDeAdopcion: ['patio cercado', 'otras mascotas'],
		imagenCard: '/uploads/animales/luna.jpg',
		fotos: ['/uploads/animales/luna1.jpg', '/uploads/animales/luna2.jpg'],
		publicado: true,
		destacado: true,
		createdAt: '2024-01-15',
		views: 1245,
		adoptionInterest: 8,
	},
	{
		id: '2',
		nombre: 'Toby',
		descripcion: 'Gato ciego pero muy independiente y curioso. Se adapta perfectamente a espacios pequeños.',
		edad: 2,
		genero: 'macho',
		tamaño: 'chico',
		tipo: 'gato',
		discapacidad: 'ciego',
		castrado: true,
		vacunado: true,
		desparasitado: false,
		ubicacion: 'Interior',
		personalidad: ['independiente', 'curioso', 'afectuoso'],
		requisitosDeAdopcion: ['interior', 'paciencia'],
		imagenCard: '/uploads/animales/toby.jpg',
		fotos: ['/uploads/animales/toby1.jpg'],
		publicado: true,
		destacado: false,
		createdAt: '2024-02-20',
		views: 876,
		adoptionInterest: 3,
	},
	{
		id: '3',
		nombre: 'Rocky',
		descripcion: 'Perro mayor con artritis, necesita hogar tranquilo y amoroso para sus últimos años.',
		edad: 10,
		genero: 'macho',
		tamaño: 'grande',
		tipo: 'perro',
		discapacidad: 'artritis',
		castrado: true,
		vacunado: true,
		desparasitado: true,
		ubicacion: 'Córdoba Capital',
		personalidad: ['tranquilo', 'dócil', 'amoroso'],
		requisitosDeAdopcion: ['hogar tranquilo', 'sin escaleras'],
		imagenCard: '/uploads/animales/rocky.jpg',
		fotos: ['/uploads/animales/rocky1.jpg', '/uploads/animales/rocky2.jpg'],
		publicado: false,
		destacado: false,
		createdAt: '2024-03-10',
		views: 0,
		adoptionInterest: 0,
	},
	{
		id: '4',
		nombre: 'Mía',
		descripcion: 'Gatita sorda que se comunica con vibraciones. Muy cariñosa y hogareña.',
		edad: 4,
		genero: 'hembra',
		tamaño: 'chico',
		tipo: 'gato',
		discapacidad: 'sorda',
		castrado: true,
		vacunado: true,
		desparasitado: true,
		ubicacion: 'Córdoba Capital',
		personalidad: ['hogareña', 'cariñosa', 'tranquila'],
		requisitosDeAdopcion: ['interior', 'otros gatos'],
		imagenCard: '/uploads/animales/mia.jpg',
		fotos: ['/uploads/animales/mia1.jpg'],
		publicado: true,
		destacado: true,
		createdAt: '2024-02-05',
		views: 954,
		adoptionInterest: 5,
	},
	{
		id: '5',
		nombre: 'Max',
		descripcion: 'Perro con silla de ruedas para sus patas traseras. Lleno de energía y amor.',
		edad: 5,
		genero: 'macho',
		tamaño: 'grande',
		tipo: 'perro',
		discapacidad: 'silla de ruedas',
		castrado: true,
		vacunado: false,
		desparasitado: true,
		ubicacion: 'Refugio',
		personalidad: ['energético', 'juguetón', 'amigable'],
		requisitosDeAdopcion: ['espacio grande', 'rampas', 'amor'],
		imagenCard: '/uploads/animales/max.jpg',
		fotos: ['/uploads/animales/max1.jpg', '/uploads/animales/max2.jpg'],
		publicado: true,
		destacado: false,
		createdAt: '2024-01-30',
		views: 1200,
		adoptionInterest: 6,
	},
	{
		id: '6',
		nombre: 'Nala',
		descripcion: 'Perrita con una sola oreja, rescatada de maltrato. Necesita paciencia y mucho amor.',
		edad: 2,
		genero: 'hembra',
		tamaño: 'mediano',
		tipo: 'perro',
		discapacidad: 'una oreja',
		castrado: true,
		vacunado: true,
		desparasitado: true,
		ubicacion: 'Hogar Temporal',
		personalidad: ['tímida', 'dócil', 'leal'],
		requisitosDeAdopcion: ['paciencia', 'hogar tranquilo', 'sin niños'],
		imagenCard: '/uploads/animales/nala.jpg',
		fotos: ['/uploads/animales/nala1.jpg'],
		publicado: false,
		destacado: false,
		createdAt: '2024-03-15',
		views: 0,
		adoptionInterest: 0,
	},
];

export default function Dashboard() {
	const router = useRouter();
	const [animales, setAnimales] = useState(animalesEjemplo);
	const [searchTerm, setSearchTerm] = useState('');
	const [filter, setFilter] = useState('todos');
	const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; animalId: string; animalName: string }>({
		isOpen: false,
		animalId: '',
		animalName: '',
	});
	const [user] = useState({
		name: 'María González',
		email: 'admin@fundaciondiscas.org',
		role: 'Administradora Principal',
		avatar: '/admin-avatar.jpg',
	});

	// Solo 3 stats cards como pediste, con datos reales
	const stats = [
		{
			label: 'Animales activos',
			value: animales.filter((a) => a.publicado).length.toString(),
			icon: PawPrint,
			color: 'bg-gradient-to-br from-teal-500 to-teal-600',
			change: `+${
				animales.filter((a) => new Date(a.createdAt) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).length
			} este mes`,
			description: 'Disponibles para adopción',
		},
		{
			label: 'En proceso',
			value: animales.reduce((acc, a) => acc + a.adoptionInterest, 0).toString(),
			icon: Heart,
			color: 'bg-gradient-to-br from-pink-500 to-rose-500',
			change: `${animales.filter((a) => a.adoptionInterest > 0).length} con interés`,
			description: 'Adopciones en trámite',
		},
		{
			label: 'Total animales',
			value: animales.length.toString(),
			icon: BarChart3,
			color: 'bg-gradient-to-br from-amber-500 to-orange-500',
			change: `${animales.filter((a) => a.destacado).length} destacados`,
			description: 'En el sistema',
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

	const handleDeleteConfirm = () => {
		setAnimales((prev) => prev.filter((animal) => animal.id !== deleteModal.animalId));
		setDeleteModal({ isOpen: false, animalId: '', animalName: '' });
		toast.success('Animal eliminado', {
			description: `${deleteModal.animalName} ha sido eliminado del sistema.`,
		});
	};

	const handleEditClick = (id: string) => {
		router.push(`/animales/editar/${id}`);
	};

	const handleNewAnimalClick = () => {
		router.push('/animales/nuevo');
	};

	const handleTogglePublicado = (id: string) => {
		setAnimales((prev) =>
			prev.map((animal) => (animal.id === id ? { ...animal, publicado: !animal.publicado } : animal)),
		);

		const animal = animales.find((a) => a.id === id);
		if (animal) {
			toast.success(animal.publicado ? 'Animal ocultado' : 'Animal publicado', {
				description: `${animal.nombre} ${
					animal.publicado ? 'ya no es visible públicamente' : 'ahora es visible en el sitio'
				}.`,
			});
		}
	};

	const handleToggleDestacado = (id: string) => {
		setAnimales((prev) =>
			prev.map((animal) => (animal.id === id ? { ...animal, destacado: !animal.destacado } : animal)),
		);

		const animal = animales.find((a) => a.id === id);
		if (animal) {
			toast.success(animal.destacado ? 'Quitado de destacados' : 'Marcado como destacado', {
				description: `${animal.nombre} ${
					animal.destacado ? 'ya no aparece en la sección destacada' : 'ahora aparece como destacado'
				}.`,
			});
		}
	};

	const handleViewPublic = (id: string) => {
		toast.info('Ver en sitio público', {
			description: 'Redirigiendo a la página pública del disca...',
		});
		// router.push(`/adopcion/${id}`); // En un caso real
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100/50">
			{/* Header superior */}
			<header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
				<div className="px-6 py-4 flex items-center justify-between">
					<div className="flex items-center gap-4">
						<motion.div whileHover={{ rotate: 15 }} className="relative">
							<div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-amber-400 rounded-full blur-xl opacity-20" />
							<div className="relative w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
								<PawPrint className="w-5 h-5 text-white" />
							</div>
						</motion.div>

						<div>
							<h1 className="text-xl font-bold text-gray-800">Panel de Administración</h1>
							<p className="text-sm text-gray-500">Fundación Discas • Gestión de Animales</p>
						</div>
					</div>

					<div className="flex items-center gap-4">
						<Button variant="outline" size="sm" className="flex items-center gap-2" onClick={() => router.push('/')}>
							<Home className="w-4 h-4" />
							<span className="hidden sm:inline">Ver sitio público</span>
						</Button>

						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="flex items-center gap-3 hover:bg-gray-100">
									<Avatar className="w-9 h-9 border-2 border-teal-200">
										<AvatarImage src={user.avatar} />
										<AvatarFallback className="bg-gradient-to-br from-teal-500 to-teal-600 text-white">
											MG
										</AvatarFallback>
									</Avatar>
									<div className="hidden md:block text-left">
										<p className="text-sm font-medium text-gray-800">{user.name}</p>
										<p className="text-xs text-gray-500">{user.role}</p>
									</div>
									<MoreVertical className="w-4 h-4 text-gray-400" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-56">
								<DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem className="flex items-center gap-2" onClick={() => router.push('/admin/perfil')}>
									<Avatar className="w-4 h-4">
										<AvatarFallback className="text-xs">MG</AvatarFallback>
									</Avatar>
									Perfil
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem className="flex items-center gap-2 text-red-600">
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
									className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 shadow-lg"
									onClick={handleNewAnimalClick}
								>
									<Plus className="w-4 h-4 mr-2" />
									<span className="hidden sm:inline">Nuevo Disca</span>
									<span className="sm:hidden">Nuevo</span>
								</Button>
							</div>
						</div>
					</CardHeader>

					<CardContent>
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
									className={filter === 'todos' ? 'bg-teal-600 hover:bg-teal-700' : ''}
								>
									Todos
								</Button>
								<Button
									variant={filter === 'publicados' ? 'default' : 'outline'}
									size="sm"
									onClick={() => setFilter('publicados')}
									className={filter === 'publicados' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
								>
									<Eye className="w-3 h-3 mr-1" />
									Publicados
								</Button>
								<Button
									variant={filter === 'borradores' ? 'default' : 'outline'}
									size="sm"
									onClick={() => setFilter('borradores')}
									className={filter === 'borradores' ? 'bg-gray-600 hover:bg-gray-700' : ''}
								>
									<EyeOff className="w-3 h-3 mr-1" />
									Borradores
								</Button>
								<Button
									variant={filter === 'destacados' ? 'default' : 'outline'}
									size="sm"
									onClick={() => setFilter('destacados')}
									className={filter === 'destacados' ? 'bg-amber-600 hover:bg-amber-700' : ''}
								>
									<Star className="w-3 h-3 mr-1" />
									Destacados
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
												<div className="relative w-24 h-24 flex-shrink-0">
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
															className="w-6 h-6 bg-white/90 hover:bg-white"
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
																		<Badge className="bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 border-amber-200">
																			<Star className="w-3 h-3 mr-1" />
																			Destacado
																		</Badge>
																	)}
																	{animal.publicado ? (
																		<Badge className="bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-800 border-emerald-200">
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
																<Badge className="bg-gradient-to-r from-teal-100 to-teal-50 text-teal-800 border-teal-200 text-xs">
																	{animal.discapacidad}
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
																className={animal.publicado ? 'text-emerald-600' : ''}
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
																	<Button size="sm" variant="ghost">
																		<MoreVertical className="w-4 h-4" />
																	</Button>
																</DropdownMenuTrigger>
																<DropdownMenuContent align="end" className="z-50">
																	<DropdownMenuItem
																		className="flex items-center gap-2"
																		onClick={() => handleEditClick(animal.id)}
																	>
																		<Edit className="w-4 h-4" />
																		Editar
																	</DropdownMenuItem>
																	<DropdownMenuItem
																		className="flex items-center gap-2"
																		onClick={() => handleToggleDestacado(animal.id)}
																	>
																		<Star className="w-4 h-4" />
																		{animal.destacado ? 'Quitar destacado' : 'Destacar'}
																	</DropdownMenuItem>
																	<DropdownMenuItem
																		className="flex items-center gap-2"
																		onClick={() => handleViewPublic(animal.id)}
																	>
																		<ExternalLink className="w-4 h-4" />
																		Ver público
																	</DropdownMenuItem>
																	<DropdownMenuSeparator />
																	<DropdownMenuItem
																		className="flex items-center gap-2 text-red-600"
																		onClick={() => handleDeleteClick(animal.id, animal.nombre)}
																	>
																		<Trash2 className="w-4 h-4" />
																		Eliminar
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
																{animal.ubicacion}
															</div>
															<div className="flex items-center gap-1">
																<Clock className="w-3 h-3" />
																{new Date(animal.createdAt).toLocaleDateString()}
															</div>
														</div>

														<div className="flex items-center gap-4">
															<div className="flex items-center gap-1">
																<Eye className="w-3 h-3" />
																{animal.views} vistas
															</div>
															<div className="flex items-center gap-1">
																<Heart className="w-3 h-3 text-pink-500" />
																{animal.adoptionInterest} interesados
															</div>
															<div className="flex items-center gap-1">
																<TrendingUp className="w-3 h-3 text-teal-500" />
																{Math.round((animal.adoptionInterest / Math.max(animal.views, 1)) * 100)}% tasa
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
								<div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4">
									<Sparkles className="w-12 h-12 text-gray-400" />
								</div>
								<h3 className="text-xl font-semibold text-gray-700 mb-2">No se encontraron animales</h3>
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
			/>
		</div>
	);
}
