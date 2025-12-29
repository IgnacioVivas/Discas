// app/(admin)/animales/editar/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import {
	ArrowLeft,
	Save,
	Upload,
	X,
	Image as ImageIcon,
	Plus,
	Minus,
	Sparkles,
	Heart,
	Shield,
	AlertCircle,
	Loader2,
	Camera,
	Eye,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

// Datos de ejemplo (en un caso real, vendrían de la BD)
const animalEjemplo = {
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
};

export default function EditarAnimalPage() {
	const router = useRouter();
	const params = useParams();
	const animalId = params.id as string;

	const [loading, setLoading] = useState(false);
	const [loadingAnimal, setLoadingAnimal] = useState(true);

	// Estado del formulario
	const [formData, setFormData] = useState({
		nombre: '',
		descripcion: '',
		edad: 1,
		genero: 'macho',
		tamaño: 'mediano',
		tipo: 'perro',
		discapacidad: '',
		castrado: false,
		vacunado: false,
		desparasitado: false,
		ubicacion: 'Córdoba Capital',
		personalidad: [] as string[],
		requisitosDeAdopcion: [] as string[],
		imagenCard: '',
		fotos: [] as string[],
		publicado: false,
		destacado: false,
	});

	const [nuevaPersonalidad, setNuevaPersonalidad] = useState('');
	const [nuevoRequisito, setNuevoRequisito] = useState('');

	// Opciones predefinidas
	const opcionesPersonalidad = [
		'cariñoso/a',
		'juguetón/a',
		'tranquilo/a',
		'energético/a',
		'tímido/a',
		'sociable',
		'independiente',
		'curioso/a',
		'protector/a',
		'dócil',
	];

	const opcionesRequisitos = [
		'patio cercado',
		'otras mascotas',
		'hogar tranquilo',
		'sin escaleras',
		'interior',
		'experiencia previa',
		'paciencia',
		'tiempo para paseos',
		'familia sin niños pequeños',
		'familia con niños',
	];

	// Cargar datos del animal
	useEffect(() => {
		const cargarAnimal = async () => {
			setLoadingAnimal(true);
			try {
				// En un caso real, harías fetch a tu API
				// const response = await fetch(`/api/animales/${animalId}`);
				// const data = await response.json();

				// Por ahora usamos datos de ejemplo
				setTimeout(() => {
					setFormData({
						nombre: animalEjemplo.nombre,
						descripcion: animalEjemplo.descripcion,
						edad: animalEjemplo.edad,
						genero: animalEjemplo.genero,
						tamaño: animalEjemplo.tamaño,
						tipo: animalEjemplo.tipo,
						discapacidad: animalEjemplo.discapacidad,
						castrado: animalEjemplo.castrado,
						vacunado: animalEjemplo.vacunado,
						desparasitado: animalEjemplo.desparasitado,
						ubicacion: animalEjemplo.ubicacion,
						personalidad: animalEjemplo.personalidad,
						requisitosDeAdopcion: animalEjemplo.requisitosDeAdopcion,
						imagenCard: animalEjemplo.imagenCard,
						fotos: animalEjemplo.fotos,
						publicado: animalEjemplo.publicado,
						destacado: animalEjemplo.destacado,
					});
					setLoadingAnimal(false);
				}, 500);
			} catch (error) {
				console.error('Error cargando animal:', error);
				toast.error('Error al cargar el animal');
				setLoadingAnimal(false);
			}
		};

		cargarAnimal();
	}, [animalId]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			// Aquí iría la lógica para actualizar en la base de datos
			console.log('Actualizando animal:', formData);

			// Simular guardado
			await new Promise((resolve) => setTimeout(resolve, 1000));

			toast.success('Animal actualizado exitosamente', {
				description: `Los cambios en ${formData.nombre} se han guardado.`,
			});

			setTimeout(() => {
				router.push('/admin/dashboard');
			}, 1500);
		} catch (error) {
			toast.error('Error al guardar', {
				description: 'No se pudo actualizar el animal. Intenta nuevamente.',
			});
		} finally {
			setLoading(false);
		}
	};

	const agregarPersonalidad = () => {
		if (nuevaPersonalidad.trim() && !formData.personalidad.includes(nuevaPersonalidad.trim())) {
			setFormData({
				...formData,
				personalidad: [...formData.personalidad, nuevaPersonalidad.trim()],
			});
			setNuevaPersonalidad('');
			toast.info('Característica agregada');
		}
	};

	const agregarRequisito = () => {
		if (nuevoRequisito.trim() && !formData.requisitosDeAdopcion.includes(nuevoRequisito.trim())) {
			setFormData({
				...formData,
				requisitosDeAdopcion: [...formData.requisitosDeAdopcion, nuevoRequisito.trim()],
			});
			setNuevoRequisito('');
			toast.info('Requisito agregado');
		}
	};

	const removerPersonalidad = (item: string) => {
		setFormData({
			...formData,
			personalidad: formData.personalidad.filter((p) => p !== item),
		});
		toast.info('Característica removida');
	};

	const removerRequisito = (item: string) => {
		setFormData({
			...formData,
			requisitosDeAdopcion: formData.requisitosDeAdopcion.filter((r) => r !== item),
		});
		toast.info('Requisito removido');
	};

	const handleImageUpload = (type: 'principal' | 'adicional') => {
		toast.info('Subir imagen', {
			description: `Función de subir imagen ${type} (se implementará con Cloudinary/filesystem)`,
		});
	};

	if (loadingAnimal) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50/30 flex items-center justify-center">
				<div className="text-center">
					<Loader2 className="w-12 h-12 animate-spin text-teal-600 mx-auto mb-4" />
					<h2 className="text-xl font-semibold text-gray-800">Cargando animal...</h2>
					<p className="text-gray-600">Buscando la información de tu peludito</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50/30">
			{/* Header */}
			<header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
				<div className="px-6 py-4 flex items-center justify-between">
					<div className="flex items-center gap-4">
						<Button variant="ghost" size="sm" onClick={() => router.back()} className="flex items-center gap-2">
							<ArrowLeft className="w-4 h-4" />
							Volver
						</Button>
						<div>
							<h1 className="text-xl font-bold text-gray-800">Editar Animal</h1>
							<p className="text-sm text-gray-500">Actualizando información de {formData.nombre}</p>
						</div>
					</div>

					<div className="flex items-center gap-3">
						<Button
							variant="outline"
							onClick={() => router.push(`/animal/${animalId}`)}
							className="flex items-center gap-2"
						>
							<Eye className="w-4 h-4" />
							Ver público
						</Button>

						<Button
							onClick={handleSubmit}
							disabled={loading}
							className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 shadow-lg"
						>
							{loading ? (
								<>
									<Loader2 className="w-4 h-4 mr-2 animate-spin" />
									Guardando...
								</>
							) : (
								<>
									<Save className="w-4 h-4 mr-2" />
									Guardar Cambios
								</>
							)}
						</Button>
					</div>
				</div>
			</header>

			<div className="px-4 sm:px-6 py-6 max-w-6xl mx-auto">
				<form onSubmit={handleSubmit}>
					<div className="grid lg:grid-cols-3 gap-8">
						{/* Columna izquierda - Información básica */}
						<div className="lg:col-span-2 space-y-6">
							{/* Información básica */}
							<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
								<Card className="border-0 shadow-lg">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<Sparkles className="w-5 h-5 text-teal-600" />
											Información Básica
										</CardTitle>
										<CardDescription>Datos principales del animal</CardDescription>
									</CardHeader>
									<CardContent className="space-y-6">
										<div className="grid md:grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label htmlFor="nombre">Nombre *</Label>
												<Input
													id="nombre"
													value={formData.nombre}
													onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
													placeholder="Ej: Luna, Toby, Rocky"
													required
												/>
											</div>

											<div className="space-y-2">
												<Label htmlFor="edad">Edad (años) *</Label>
												<div className="flex items-center gap-2">
													<Button
														type="button"
														variant="outline"
														size="icon"
														onClick={() => setFormData({ ...formData, edad: Math.max(1, formData.edad - 1) })}
													>
														<Minus className="w-4 h-4" />
													</Button>
													<Input
														id="edad"
														type="number"
														min="0"
														value={formData.edad}
														onChange={(e) => setFormData({ ...formData, edad: parseInt(e.target.value) || 0 })}
														className="text-center"
													/>
													<Button
														type="button"
														variant="outline"
														size="icon"
														onClick={() => setFormData({ ...formData, edad: formData.edad + 1 })}
													>
														<Plus className="w-4 h-4" />
													</Button>
												</div>
											</div>
										</div>

										<div className="space-y-2">
											<Label>Descripción *</Label>
											<Textarea
												value={formData.descripcion}
												onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
												placeholder="Cuenta la historia del animal, su personalidad, necesidades especiales..."
												rows={4}
												className="resize-none"
												required
											/>
										</div>

										<div className="grid md:grid-cols-3 gap-4">
											<div className="space-y-2">
												<Label>Género *</Label>
												<RadioGroup
													value={formData.genero}
													onValueChange={(value) => setFormData({ ...formData, genero: value })}
													className="flex gap-4"
												>
													<div className="flex items-center space-x-2">
														<RadioGroupItem value="macho" id="macho" />
														<Label htmlFor="macho">Macho</Label>
													</div>
													<div className="flex items-center space-x-2">
														<RadioGroupItem value="hembra" id="hembra" />
														<Label htmlFor="hembra">Hembra</Label>
													</div>
												</RadioGroup>
											</div>

											<div className="space-y-2">
												<Label>Tipo *</Label>
												<Select
													value={formData.tipo}
													onValueChange={(value) => setFormData({ ...formData, tipo: value })}
												>
													<SelectTrigger className="z-50">
														<SelectValue placeholder="Seleccionar tipo" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="perro">🐕 Perro</SelectItem>
														<SelectItem value="gato">🐈 Gato</SelectItem>
													</SelectContent>
												</Select>
											</div>

											<div className="space-y-2">
												<Label>Tamaño *</Label>
												<Select
													value={formData.tamaño}
													onValueChange={(value) => setFormData({ ...formData, tamaño: value })}
												>
													<SelectTrigger className="z-50">
														<SelectValue placeholder="Seleccionar tamaño" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="chico">Chico</SelectItem>
														<SelectItem value="mediano">Mediano</SelectItem>
														<SelectItem value="grande">Grande</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>

										<div className="space-y-2">
											<Label htmlFor="discapacidad">Discapacidad / Condición especial</Label>
											<Input
												id="discapacidad"
												value={formData.discapacidad}
												onChange={(e) => setFormData({ ...formData, discapacidad: e.target.value })}
												placeholder="Ej: tres patas, ciego, sordo, artritis..."
											/>
										</div>
									</CardContent>
								</Card>
							</motion.div>

							{/* Salud y cuidados */}
							<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
								<Card className="border-0 shadow-lg">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<Shield className="w-5 h-5 text-teal-600" />
											Salud y Cuidados
										</CardTitle>
										<CardDescription>Estado de salud del animal</CardDescription>
									</CardHeader>
									<CardContent className="space-y-4">
										<div className="flex flex-wrap gap-6">
											<div className="flex items-center space-x-2">
												<Checkbox
													id="castrado"
													checked={formData.castrado}
													onCheckedChange={(checked) => setFormData({ ...formData, castrado: checked as boolean })}
												/>
												<Label htmlFor="castrado" className="font-medium">
													Castrado/Esterilizado
												</Label>
											</div>

											<div className="flex items-center space-x-2">
												<Checkbox
													id="vacunado"
													checked={formData.vacunado}
													onCheckedChange={(checked) => setFormData({ ...formData, vacunado: checked as boolean })}
												/>
												<Label htmlFor="vacunado" className="font-medium">
													Vacunado al día
												</Label>
											</div>

											<div className="flex items-center space-x-2">
												<Checkbox
													id="desparasitado"
													checked={formData.desparasitado}
													onCheckedChange={(checked) => setFormData({ ...formData, desparasitado: checked as boolean })}
												/>
												<Label htmlFor="desparasitado" className="font-medium">
													Desparasitado
												</Label>
											</div>
										</div>

										<div className="space-y-2">
											<Label>Ubicación</Label>
											<Select
												value={formData.ubicacion}
												onValueChange={(value) => setFormData({ ...formData, ubicacion: value })}
											>
												<SelectTrigger className="z-50">
													<SelectValue placeholder="Seleccionar ubicación" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="Córdoba Capital">Córdoba Capital</SelectItem>
													<SelectItem value="Interior">Interior de Córdoba</SelectItem>
													<SelectItem value="Refugio">En refugio</SelectItem>
													<SelectItem value="Hogar Temporal">Hogar temporal</SelectItem>
												</SelectContent>
											</Select>
										</div>
									</CardContent>
								</Card>
							</motion.div>

							{/* Personalidad */}
							<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
								<Card className="border-0 shadow-lg">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<Heart className="w-5 h-5 text-pink-600" />
											Personalidad
										</CardTitle>
										<CardDescription>¿Cómo es el animal? Selecciona o agrega características</CardDescription>
									</CardHeader>
									<CardContent className="space-y-4">
										<div className="flex flex-wrap gap-2">
											{formData.personalidad.map((item) => (
												<Badge
													key={item}
													className="pl-3 pr-2 py-1.5 bg-pink-100 text-pink-800 border-pink-200 hover:bg-pink-200 transition-colors"
												>
													{item}
													<button
														type="button"
														onClick={() => removerPersonalidad(item)}
														className="ml-2 hover:text-pink-900"
													>
														<X className="w-3 h-3" />
													</button>
												</Badge>
											))}
										</div>

										<div className="flex flex-wrap gap-2">
											{opcionesPersonalidad.map((opcion) => (
												<Button
													key={opcion}
													type="button"
													variant="outline"
													size="sm"
													onClick={() => {
														if (!formData.personalidad.includes(opcion)) {
															setFormData({
																...formData,
																personalidad: [...formData.personalidad, opcion],
															});
														}
													}}
													disabled={formData.personalidad.includes(opcion)}
													className={
														formData.personalidad.includes(opcion) ? 'bg-pink-50 border-pink-200 text-pink-700' : ''
													}
												>
													{opcion}
												</Button>
											))}
										</div>

										<div className="flex gap-2">
											<Input
												value={nuevaPersonalidad}
												onChange={(e) => setNuevaPersonalidad(e.target.value)}
												placeholder="Agregar característica personalizada"
												onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), agregarPersonalidad())}
											/>
											<Button type="button" onClick={agregarPersonalidad} variant="outline">
												<Plus className="w-4 h-4" />
											</Button>
										</div>
									</CardContent>
								</Card>
							</motion.div>

							{/* Requisitos de adopción */}
							<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
								<Card className="border-0 shadow-lg">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<AlertCircle className="w-5 h-5 text-amber-600" />
											Requisitos de Adopción
										</CardTitle>
										<CardDescription>Condiciones que debe cumplir el hogar adoptante</CardDescription>
									</CardHeader>
									<CardContent className="space-y-4">
										<div className="flex flex-wrap gap-2">
											{formData.requisitosDeAdopcion.map((item) => (
												<Badge
													key={item}
													className="pl-3 pr-2 py-1.5 bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200 transition-colors"
												>
													{item}
													<button
														type="button"
														onClick={() => removerRequisito(item)}
														className="ml-2 hover:text-amber-900"
													>
														<X className="w-3 h-3" />
													</button>
												</Badge>
											))}
										</div>

										<div className="flex flex-wrap gap-2">
											{opcionesRequisitos.map((opcion) => (
												<Button
													key={opcion}
													type="button"
													variant="outline"
													size="sm"
													onClick={() => {
														if (!formData.requisitosDeAdopcion.includes(opcion)) {
															setFormData({
																...formData,
																requisitosDeAdopcion: [...formData.requisitosDeAdopcion, opcion],
															});
														}
													}}
													disabled={formData.requisitosDeAdopcion.includes(opcion)}
													className={
														formData.requisitosDeAdopcion.includes(opcion)
															? 'bg-amber-50 border-amber-200 text-amber-700'
															: ''
													}
												>
													{opcion}
												</Button>
											))}
										</div>

										<div className="flex gap-2">
											<Input
												value={nuevoRequisito}
												onChange={(e) => setNuevoRequisito(e.target.value)}
												placeholder="Agregar requisito personalizado"
												onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), agregarRequisito())}
											/>
											<Button type="button" onClick={agregarRequisito} variant="outline">
												<Plus className="w-4 h-4" />
											</Button>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						</div>

						{/* Columna derecha - Imágenes y publicación */}
						<div className="space-y-6">
							{/* Imágenes */}
							<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
								<Card className="border-0 shadow-lg">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<Camera className="w-5 h-5 text-teal-600" />
											Imágenes
										</CardTitle>
										<CardDescription>Gestiona las fotos del animal</CardDescription>
									</CardHeader>
									<CardContent className="space-y-4">
										{/* Imagen principal */}
										<div className="space-y-2">
											<Label>Imagen Principal *</Label>
											<div
												className="relative border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-teal-400 transition-colors cursor-pointer group"
												onClick={() => handleImageUpload('principal')}
											>
												{formData.imagenCard ? (
													<>
														<img
															src={formData.imagenCard}
															alt="Imagen principal"
															className="w-full h-48 object-cover rounded-lg mb-3"
														/>
														<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
															<div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
																<Camera className="w-5 h-5 text-teal-600 inline mr-2" />
																<span className="font-medium">Cambiar imagen</span>
															</div>
														</div>
													</>
												) : (
													<>
														<Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
														<p className="text-gray-600 font-medium">Subir imagen principal</p>
														<p className="text-sm text-gray-500 mt-1">JPG, PNG, máximo 5MB</p>
													</>
												)}
											</div>
										</div>

										{/* Imágenes adicionales */}
										<div className="space-y-2">
											<Label>Imágenes Adicionales</Label>
											<div
												className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-teal-400 transition-colors cursor-pointer"
												onClick={() => handleImageUpload('adicional')}
											>
												{formData.fotos.length > 0 ? (
													<div className="grid grid-cols-3 gap-2 mb-4">
														{formData.fotos.map((foto, index) => (
															<div
																key={index}
																className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden"
															>
																<img src={foto} alt={`Imagen ${index + 1}`} className="w-full h-full object-cover" />
																<button
																	type="button"
																	onClick={(e) => {
																		e.stopPropagation();
																		setFormData({
																			...formData,
																			fotos: formData.fotos.filter((_, i) => i !== index),
																		});
																	}}
																	className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
																>
																	<X className="w-3 h-3" />
																</button>
															</div>
														))}
														{formData.fotos.length < 10 && (
															<div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
																<Plus className="w-6 h-6 text-gray-400" />
															</div>
														)}
													</div>
												) : (
													<>
														<ImageIcon className="w-10 h-10 text-gray-400 mx-auto mb-3" />
														<p className="text-gray-600">Subir fotos adicionales</p>
														<p className="text-sm text-gray-500 mt-1">Máximo 10 imágenes</p>
													</>
												)}
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>

							{/* Configuración de publicación */}
							<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
								<Card className="border-0 shadow-lg">
									<CardHeader>
										<CardTitle>Configuración de Publicación</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4">
										<div className="flex items-start space-x-2">
											<Checkbox
												id="destacado"
												checked={formData.destacado}
												onCheckedChange={(checked) => setFormData({ ...formData, destacado: checked as boolean })}
											/>
											<div>
												<Label htmlFor="destacado" className="font-medium cursor-pointer">
													Destacar este animal
												</Label>
												<p className="text-sm text-gray-500">Aparecerá en la sección destacada del sitio</p>
											</div>
										</div>

										<div className="flex items-start space-x-2">
											<Checkbox
												id="publicado"
												checked={formData.publicado}
												onCheckedChange={(checked) => setFormData({ ...formData, publicado: checked as boolean })}
											/>
											<div>
												<Label htmlFor="publicado" className="font-medium cursor-pointer">
													Publicar inmediatamente
												</Label>
												<p className="text-sm text-gray-500">El animal será visible en el sitio público</p>
											</div>
										</div>

										<div className="pt-4 border-t">
											<div className="flex items-center gap-2 text-sm text-amber-600">
												<AlertCircle className="w-4 h-4" />
												<span className="font-medium">Creado el:</span>
												<span>{new Date(animalEjemplo.createdAt).toLocaleDateString('es-AR')}</span>
											</div>
											<p className="text-sm text-gray-600 mt-2">
												<strong>Nota:</strong> Todos los campos marcados con * son obligatorios.
											</p>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
