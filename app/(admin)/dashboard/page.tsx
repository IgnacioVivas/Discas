'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PawPrint, Search, Plus, Dog, Cat, Eye, EyeOff, MoreVertical, LogOut, Home, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { signOut } from 'next-auth/react';
import { cn } from '@/lib/utils';
import { useAnimals, usePatchAnimal, useDeleteAnimal } from '@/hooks/useAnimals';
import DashboardStats from '@/components/admin/DashboardStats';
import AnimalListItem from '@/components/admin/AnimalListItem';
import { DeleteModal } from '@/components/admin/DeleteModal';

type Filter = 'todos' | 'publicados' | 'borradores' | 'adoptados' | 'fallecidos' | 'perros' | 'gatos' | 'otros';

const FILTERS: { value: Filter; label: string; icon?: React.ElementType }[] = [
	{ value: 'todos', label: 'Todos' },
	{ value: 'publicados', label: 'Publicados', icon: Eye },
	{ value: 'borradores', label: 'Borradores', icon: EyeOff },
	{ value: 'adoptados', label: 'Adoptados' },
	{ value: 'fallecidos', label: 'Fallecidos', icon: Moon },
	{ value: 'perros', label: 'Perros', icon: Dog },
	{ value: 'gatos', label: 'Gatos', icon: Cat },
	{ value: 'otros', label: 'Otros' },
];

const FILTER_ACTIVE_CLASSES: Record<Filter, string> = {
	todos: 'bg-gray-700 text-white',
	publicados: 'bg-emerald-600 text-white',
	borradores: 'bg-gray-600 text-white',
	adoptados: 'bg-green-600 text-white',
	fallecidos: 'bg-purple-600 text-white',
	perros: 'bg-blue-600 text-white',
	gatos: 'bg-yellow-600 text-white',
	otros: 'bg-gray-600 text-white',
};

export default function Dashboard() {
	const router = useRouter();
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState<Filter>('todos');
	const [deleteModal, setDeleteModal] = useState<{ open: boolean; id: string; name: string }>({ open: false, id: '', name: '' });

	const { data: animales = [], isLoading } = useAnimals();
	const { mutate: patch, isPending: patching } = usePatchAnimal();
	const { mutate: remove, isPending: deleting } = useDeleteAnimal();

	const filtered = animales.filter((a) => {
		const matchSearch = a.nombre.toLowerCase().includes(search.toLowerCase()) || a.descripcion.toLowerCase().includes(search.toLowerCase());
		const matchFilter =
			filter === 'todos' ? true :
			filter === 'publicados' ? a.publicado :
			filter === 'borradores' ? !a.publicado :
			filter === 'adoptados' ? a.adoptado :
			filter === 'fallecidos' ? a.fallecido :
			filter === 'perros' ? a.tipo === 'perro' :
			filter === 'gatos' ? a.tipo === 'gato' :
			filter === 'otros' ? a.tipo === 'otro' : true;
		return matchSearch && matchFilter;
	});

	const handleTogglePublicado = (id: string) => {
		const animal = animales.find((a) => a.id === id);
		if (!animal) return;
		patch(
			{ id, data: { publicado: !animal.publicado } },
			{ onSuccess: () => toast.success(animal.publicado ? `${animal.nombre} ocultado` : `${animal.nombre} publicado`),
			  onError: () => toast.error('Error al actualizar') },
		);
	};

	const handleToggleAdoptado = (id: string) => {
		const animal = animales.find((a) => a.id === id);
		if (!animal) return;
		patch(
			{ id, data: { adoptado: !animal.adoptado } },
			{ onSuccess: () => toast.success(animal.adoptado ? `${animal.nombre} marcado disponible` : `${animal.nombre} marcado como adoptado`),
			  onError: () => toast.error('Error al actualizar') },
		);
	};

	const handleToggleFallecido = (id: string) => {
		const animal = animales.find((a) => a.id === id);
		if (!animal) return;
		patch(
			{ id, data: { fallecido: !animal.fallecido } },
			{ onSuccess: () => toast.success(animal.fallecido ? `${animal.nombre} marcado activo` : `Se registró el fallecimiento de ${animal.nombre}`),
			  onError: () => toast.error('Error al actualizar') },
		);
	};

	const handleDeleteConfirm = () => {
		remove(deleteModal.id, {
			onSuccess: () => { toast.success(`${deleteModal.name} eliminado`); setDeleteModal({ open: false, id: '', name: '' }); },
			onError: () => toast.error('Error al eliminar'),
		});
	};

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
				<div className="text-center">
					<div className="w-14 h-14 mx-auto border-4 border-teal-600 border-t-transparent rounded-full animate-spin mb-4" />
					<p className="text-gray-500">Cargando discas...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100/50">
			<header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
				<div className="px-6 py-4 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<motion.div whileHover={{ rotate: 15 }} className="w-9 h-9 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
							<PawPrint className="w-5 h-5 text-white" />
						</motion.div>
						<div>
							<h1 className="text-lg font-bold text-gray-800">Panel de Administración</h1>
							<p className="text-xs text-gray-500">Fundación Discas</p>
						</div>
					</div>

					<div className="flex items-center gap-3">
						<Button variant="outline" size="sm" onClick={() => router.push('/')} className="hidden sm:flex items-center gap-2 cursor-pointer">
							<Home className="w-4 h-4" />Ver sitio
						</Button>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="flex items-center gap-2 cursor-pointer">
									<Avatar className="w-8 h-8 border-2 border-teal-200">
										<AvatarFallback className="bg-teal-500 text-white text-xs">AD</AvatarFallback>
									</Avatar>
									<MoreVertical className="w-4 h-4 text-gray-400" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="bg-white w-48">
								<DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem className="text-red-600 cursor-pointer" onClick={() => signOut()}>
									<LogOut className="w-4 h-4 mr-2" />Cerrar Sesión
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</header>

			<div className="px-4 sm:px-6 py-6">
				<DashboardStats animales={animales} />

				<Card className="border-0 shadow-xl">
					<CardHeader className="pb-3">
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
							<div>
								<CardTitle className="text-xl flex items-center gap-2">
									<PawPrint className="w-5 h-5 text-teal-600" />
									Todos los Discas
									<span className="text-sm font-normal text-gray-400">({filtered.length})</span>
								</CardTitle>
								<CardDescription>Gestión de animales de la fundación</CardDescription>
							</div>
							<Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-md cursor-pointer" onClick={() => router.push('/animales/nuevo')}>
								<Plus className="w-4 h-4 mr-2" />Nuevo Disca
							</Button>
						</div>
					</CardHeader>

					<CardContent className="p-6">
						<div className="flex flex-col sm:flex-row gap-4 mb-6">
							<div className="relative flex-1">
								<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
								<Input placeholder="Buscar por nombre o descripción..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
							</div>
							<div className="flex flex-wrap gap-2">
								{FILTERS.map(({ value, label, icon: Icon }) => (
									<Button key={value} variant={filter === value ? 'default' : 'outline'} size="sm"
										onClick={() => setFilter(value)}
										className={cn('cursor-pointer text-xs', filter === value && FILTER_ACTIVE_CLASSES[value])}
									>
										{Icon && <Icon className="w-3 h-3 mr-1" />}{label}
									</Button>
								))}
							</div>
						</div>

						<div className="space-y-3">
							{filtered.map((animal, i) => (
								<AnimalListItem
									key={animal.id}
									animal={animal}
									index={i}
									isPatching={patching}
									onTogglePublicado={handleTogglePublicado}
									onToggleAdoptado={handleToggleAdoptado}
									onToggleFallecido={handleToggleFallecido}
									onEdit={(id) => router.push(`/animales/${id}`)}
									onDelete={(id, name) => setDeleteModal({ open: true, id, name })}
									onViewPublic={(id) => router.push(`/adopta/${id}`)}
								/>
							))}

							{filtered.length === 0 && (
								<div className="text-center py-16 text-gray-400">
									<PawPrint className="w-12 h-12 mx-auto mb-3 opacity-30" />
									<p className="font-medium">{animales.length === 0 ? 'No hay animales cargados' : 'Sin resultados para este filtro'}</p>
									{animales.length === 0 && (
										<Button className="mt-4 bg-teal-600 hover:bg-teal-700 text-white" onClick={() => router.push('/animales/nuevo')}>
											<Plus className="w-4 h-4 mr-2" />Crear el primero
										</Button>
									)}
								</div>
							)}
						</div>
					</CardContent>
				</Card>

				<footer className="mt-8 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
					<p>© {new Date().getFullYear()} Fundación Discas</p>
					<div className="flex items-center gap-3">
						<span className="flex items-center gap-1"><Dog className="w-3.5 h-3.5" />{animales.filter((a) => a.tipo === 'perro').length} perros</span>
						<span className="text-gray-300">•</span>
						<span className="flex items-center gap-1"><Cat className="w-3.5 h-3.5" />{animales.filter((a) => a.tipo === 'gato').length} gatos</span>
						{animales.filter((a) => a.tipo === 'otro').length > 0 && (
							<>
								<span className="text-gray-300">•</span>
								<span className="flex items-center gap-1"><PawPrint className="w-3.5 h-3.5" />{animales.filter((a) => a.tipo === 'otro').length} otros</span>
							</>
						)}
					</div>
				</footer>
			</div>

			<DeleteModal
				isOpen={deleteModal.open}
				onClose={() => setDeleteModal({ open: false, id: '', name: '' })}
				onConfirm={handleDeleteConfirm}
				animalName={deleteModal.name}
				isLoading={deleting}
			/>
		</div>
	);
}
