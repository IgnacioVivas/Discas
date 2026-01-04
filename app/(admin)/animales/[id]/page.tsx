// app/(admin)/animales/editar/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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

// Esquema de validación con Zod - Mismo que en crear
const animalSchema = z.object({
	nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(50, 'El nombre es demasiado largo'),
	descripcion: z
		.string()
		.min(10, 'La descripción debe tener al menos 10 caracteres')
		.max(1000, 'Descripción demasiado larga'),
	edad: z.number().min(0, 'La edad no puede ser negativa').max(30, 'Edad no válida'),
	genero: z.enum(['macho', 'hembra']),
	tamaño: z.enum(['chico', 'mediano', 'grande']),
	tipo: z.enum(['perro', 'gato']),
	discapacidad: z.string(),
	castrado: z.boolean(),
	vacunado: z.boolean(),
	desparasitado: z.boolean(),
	ubicacion: z.string(),
	personalidad: z.array(z.string()),
	requisitosDeAdopcion: z.array(z.string()),
	imagenCard: z.string(),
	fotos: z.array(z.string()),
	publicado: z.boolean(),
	destacado: z.boolean(),
});

// Tipo inferido del esquema
type AnimalFormData = {
	nombre: string;
	descripcion: string;
	edad: number;
	genero: 'macho' | 'hembra';
	tamaño: 'chico' | 'mediano' | 'grande';
	tipo: 'perro' | 'gato';
	discapacidad: string;
	castrado: boolean;
	vacunado: boolean;
	desparasitado: boolean;
	ubicacion: string;
	personalidad: string[];
	requisitosDeAdopcion: string[];
	imagenCard: string;
	fotos: string[];
	publicado: boolean;
	destacado: boolean;
	createdAt?: string;
};

export default function EditarAnimalPage() {
	const router = useRouter();
	const params = useParams();
	const animalId = params.id as string;

	const [loading, setLoading] = useState(false);
	const [loadingAnimal, setLoadingAnimal] = useState(true);
	const [animalData, setAnimalData] = useState<AnimalFormData | null>(null);

	const [nuevaPersonalidad, setNuevaPersonalidad] = useState('');
	const [nuevoRequisito, setNuevoRequisito] = useState('');

	// Inicializar React Hook Form con Zod
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		getValues,
		reset,
	} = useForm<AnimalFormData>({
		resolver: zodResolver(animalSchema),
		defaultValues: {
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
			personalidad: [],
			requisitosDeAdopcion: [],
			imagenCard: '',
			fotos: [],
			publicado: false,
			destacado: false,
		},
		mode: 'onChange',
	});

	// Observar valores para actualizar UI
	const formValues = watch();
	const personalidad = watch('personalidad');
	const requisitosDeAdopcion = watch('requisitosDeAdopcion');
	const imagenCard = watch('imagenCard');

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
				const response = await fetch(`/api/animals/${animalId}`);

				if (!response.ok) {
					throw new Error('Error al cargar el animal');
				}

				const data = await response.json();
				setAnimalData(data);

				// Llenar el formulario con los datos del animal
				reset({
					nombre: data.nombre || '',
					descripcion: data.descripcion || '',
					edad: data.edad || 1,
					genero: data.genero || 'macho',
					tamaño: data.tamaño || 'mediano',
					tipo: data.tipo || 'perro',
					discapacidad: data.discapacidad || '',
					castrado: data.castrado || false,
					vacunado: data.vacunado || false,
					desparasitado: data.desparasitado || false,
					ubicacion: data.ubicacion || 'Córdoba Capital',
					personalidad: data.personalidad || [],
					requisitosDeAdopcion: data.requisitosDeAdopcion || [],
					imagenCard: data.imagenCard || '',
					fotos: data.fotos || [],
					publicado: data.publicado || false,
					destacado: data.destacado || false,
				});

				setLoadingAnimal(false);
			} catch (error) {
				console.error('Error cargando animal:', error);
				toast.error('Error al cargar el animal');
				setLoadingAnimal(false);
			}
		};

		if (animalId) {
			cargarAnimal();
		}
	}, [animalId, reset]);

	// Función para enviar el formulario (UPDATE)
	const onSubmit = async (data: AnimalFormData) => {
		setLoading(true);

		try {
			// Preparar datos para enviar
			const dataToSend = {
				...data,
				discapacidad: data.discapacidad?.trim() || null,
				ubicacion: data.ubicacion?.trim() || null,
			};

			console.log('Actualizando animal:', dataToSend);

			const response = await fetch(`/api/animals/${animalId}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataToSend),
			});

			if (!response.ok) {
				const error = await response.json().catch(() => ({ error: 'Error desconocido' }));
				throw new Error(error.error || 'Error al actualizar el animal');
			}

			const updatedAnimal = await response.json();

			toast.success('¡Animal actualizado exitosamente!', {
				description: `Los cambios en ${updatedAnimal.nombre} se han guardado.`,
			});

			// Redirigir al dashboard después de 1.5 segundos
			setTimeout(() => {
				router.push('/dashboard');
			}, 1500);
		} catch (error: unknown) {
			console.error('Error actualizando animal:', error);

			const message = error instanceof Error ? error.message : 'No se pudo actualizar el animal. Intenta nuevamente.';

			toast.error('Error al guardar', {
				description: message,
			});
		} finally {
			setLoading(false);
		}
	};

	// Funciones para manejar arrays
	const agregarPersonalidad = () => {
		if (nuevaPersonalidad.trim() && !personalidad.includes(nuevaPersonalidad.trim())) {
			const currentPersonalidad = getValues('personalidad');
			setValue('personalidad', [...currentPersonalidad, nuevaPersonalidad.trim()], {
				shouldValidate: true,
			});
			setNuevaPersonalidad('');
			toast.info('Característica agregada');
		}
	};

	const agregarRequisito = () => {
		if (nuevoRequisito.trim() && !requisitosDeAdopcion.includes(nuevoRequisito.trim())) {
			const currentRequisitos = getValues('requisitosDeAdopcion');
			setValue('requisitosDeAdopcion', [...currentRequisitos, nuevoRequisito.trim()], {
				shouldValidate: true,
			});
			setNuevoRequisito('');
			toast.info('Requisito agregado');
		}
	};

	const removerPersonalidad = (item: string) => {
		const currentPersonalidad = getValues('personalidad');
		setValue(
			'personalidad',
			currentPersonalidad.filter((p) => p !== item),
			{
				shouldValidate: true,
			},
		);
		toast.info('Característica removida');
	};

	const removerRequisito = (item: string) => {
		const currentRequisitos = getValues('requisitosDeAdopcion');
		setValue(
			'requisitosDeAdopcion',
			currentRequisitos.filter((r) => r !== item),
			{
				shouldValidate: true,
			},
		);
		toast.info('Requisito removido');
	};

	// Manejo de tecla Enter en inputs
	const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			action();
		}
	};

	// Manejo de edad
	const incrementarEdad = () => {
		const current = getValues('edad');
		setValue('edad', current + 1, { shouldValidate: true });
	};

	const decrementarEdad = () => {
		const current = getValues('edad');
		if (current > 0) {
			setValue('edad', current - 1, { shouldValidate: true });
		}
	};

	// Manejo de imágenes (placeholder)
	const handleImageUpload = (type: 'principal' | 'adicional') => {
		toast.info('Subir imagen', {
			description: `Función de subir imagen ${type} (se implementará con Cloudinary/filesystem)`,
		});
	};

	if (loadingAnimal) {
		return (
			<div className="min-h-screen bg-linear-to-br from-gray-50 to-teal-50/30 flex items-center justify-center">
				<div className="text-center">
					<Loader2 className="w-12 h-12 animate-spin text-teal-600 mx-auto mb-4" />
					<h2 className="text-xl font-semibold text-gray-800">Cargando animal...</h2>
					<p className="text-gray-600">Buscando la información de tu peludito</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-linear-to-br from-gray-50 to-teal-50/30">
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
							<p className="text-sm text-gray-500">Actualizando información de {formValues.nombre || 'tu peludito'}</p>
						</div>
					</div>

					<div className="flex items-center gap-3">
						<Button
							variant="outline"
							onClick={() => router.push(`/adopcion/${animalId}`)}
							className="flex items-center gap-2"
						>
							<Eye className="w-4 h-4" />
							Ver público
						</Button>

						<Button
							onClick={handleSubmit(onSubmit)}
							disabled={loading}
							className="bg-linear-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 shadow-lg"
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
				<form onSubmit={handleSubmit(onSubmit)}>
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
												<Input id="nombre" {...register('nombre')} placeholder="Ej: Luna, Toby, Rocky" />
												{errors.nombre && <p className="text-sm text-red-600">{errors.nombre.message}</p>}
											</div>

											<div className="space-y-2">
												<Label htmlFor="edad">Edad (años) *</Label>
												<div className="flex items-center gap-2">
													<Button type="button" variant="outline" size="icon" onClick={decrementarEdad}>
														<Minus className="w-4 h-4" />
													</Button>
													<Input
														id="edad"
														type="number"
														min="0"
														max="30"
														{...register('edad', { valueAsNumber: true })}
														className="text-center"
														onChange={(e) => {
															const value = parseInt(e.target.value) || 0;
															setValue('edad', value, { shouldValidate: true });
														}}
													/>
													<Button type="button" variant="outline" size="icon" onClick={incrementarEdad}>
														<Plus className="w-4 h-4" />
													</Button>
												</div>
												{errors.edad && <p className="text-sm text-red-600">{errors.edad.message}</p>}
											</div>
										</div>

										<div className="space-y-2">
											<Label>Descripción *</Label>
											<Textarea
												{...register('descripcion')}
												placeholder="Cuenta la historia del animal, su personalidad, necesidades especiales..."
												rows={4}
												className="resize-none"
											/>
											{errors.descripcion && <p className="text-sm text-red-600">{errors.descripcion.message}</p>}
										</div>

										<div className="grid md:grid-cols-3 gap-4">
											<div className="space-y-2">
												<Label>Género *</Label>
												<RadioGroup
													value={formValues.genero}
													onValueChange={(value) =>
														setValue('genero', value as 'macho' | 'hembra', { shouldValidate: true })
													}
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
													value={formValues.tipo}
													onValueChange={(value) =>
														setValue('tipo', value as 'perro' | 'gato', { shouldValidate: true })
													}
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
													value={formValues.tamaño}
													onValueChange={(value) =>
														setValue('tamaño', value as 'chico' | 'mediano' | 'grande', { shouldValidate: true })
													}
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
												{...register('discapacidad')}
												placeholder="Ej: tres patas, ciego, sordo, artritis..."
											/>
											{errors.discapacidad && <p className="text-sm text-red-600">{errors.discapacidad.message}</p>}
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
													checked={formValues.castrado}
													onCheckedChange={(checked) =>
														setValue('castrado', checked as boolean, { shouldValidate: true })
													}
												/>
												<Label htmlFor="castrado" className="font-medium">
													Castrado/Esterilizado
												</Label>
											</div>

											<div className="flex items-center space-x-2">
												<Checkbox
													id="vacunado"
													checked={formValues.vacunado}
													onCheckedChange={(checked) =>
														setValue('vacunado', checked as boolean, { shouldValidate: true })
													}
												/>
												<Label htmlFor="vacunado" className="font-medium">
													Vacunado al día
												</Label>
											</div>

											<div className="flex items-center space-x-2">
												<Checkbox
													id="desparasitado"
													checked={formValues.desparasitado}
													onCheckedChange={(checked) =>
														setValue('desparasitado', checked as boolean, { shouldValidate: true })
													}
												/>
												<Label htmlFor="desparasitado" className="font-medium">
													Desparasitado
												</Label>
											</div>
										</div>

										<div className="space-y-2">
											<Label>Ubicación</Label>
											<Select
												value={formValues.ubicacion}
												onValueChange={(value) => setValue('ubicacion', value, { shouldValidate: true })}
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
											{personalidad.map((item) => (
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
														if (!personalidad.includes(opcion)) {
															setValue('personalidad', [...personalidad, opcion], { shouldValidate: true });
														}
													}}
													disabled={personalidad.includes(opcion)}
													className={personalidad.includes(opcion) ? 'bg-pink-50 border-pink-200 text-pink-700' : ''}
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
												onKeyPress={(e) => handleKeyPress(e, agregarPersonalidad)}
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
											{requisitosDeAdopcion.map((item) => (
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
														if (!requisitosDeAdopcion.includes(opcion)) {
															setValue('requisitosDeAdopcion', [...requisitosDeAdopcion, opcion], {
																shouldValidate: true,
															});
														}
													}}
													disabled={requisitosDeAdopcion.includes(opcion)}
													className={
														requisitosDeAdopcion.includes(opcion) ? 'bg-amber-50 border-amber-200 text-amber-700' : ''
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
												onKeyPress={(e) => handleKeyPress(e, agregarRequisito)}
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
											<div className="space-y-2">
												<Input
													{...register('imagenCard')}
													placeholder="https://ejemplo.com/imagen.jpg"
													type="url"
													onChange={(e) => setValue('imagenCard', e.target.value, { shouldValidate: true })}
												/>
												{errors.imagenCard && <p className="text-sm text-red-600">{errors.imagenCard.message}</p>}
											</div>
											{imagenCard && (
												<div className="mt-2 relative">
													<img
														src={imagenCard || '/placeholder.jpg'}
														alt="Imagen principal"
														className="w-full h-48 object-cover rounded-lg mb-3"
													/>
													<div
														className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer"
														onClick={() => handleImageUpload('principal')}
													>
														<div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
															<Camera className="w-5 h-5 text-teal-600 inline mr-2" />
															<span className="font-medium">Cambiar imagen</span>
														</div>
													</div>
												</div>
											)}
											{!imagenCard && (
												<div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-teal-400 transition-colors cursor-pointer mt-2">
													<Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
													<p className="text-sm text-gray-600">Subir archivo</p>
													<input
														type="file"
														accept="image/*"
														className="hidden"
														id="upload-main"
														onChange={(e) => {
															const file = e.target.files?.[0];
															if (file) {
																// Simular subida
																const fakeUrl = `https://example.com/uploads/${Date.now()}-${file.name}`;
																setValue('imagenCard', fakeUrl, { shouldValidate: true });
															}
														}}
													/>
													<Label
														htmlFor="upload-main"
														className="text-sm text-teal-600 cursor-pointer hover:text-teal-700 mt-1 inline-block"
													>
														Seleccionar archivo
													</Label>
												</div>
											)}
										</div>

										{/* Imágenes adicionales */}
										<div className="space-y-2">
											<Label>Imágenes Adicionales</Label>
											<div
												className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-teal-400 transition-colors cursor-pointer"
												onClick={() => handleImageUpload('adicional')}
											>
												{watch('fotos')?.length > 0 ? (
													<div className="grid grid-cols-3 gap-2 mb-4">
														{watch('fotos')?.map((foto, index) => (
															<div
																key={index}
																className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden"
															>
																<img
																	src={foto || '/placeholder.jpg'}
																	alt={`Imagen ${index + 1}`}
																	className="w-full h-full object-cover"
																/>
																<button
																	type="button"
																	onClick={(e) => {
																		e.stopPropagation();
																		const currentFotos = getValues('fotos');
																		const newFotos = currentFotos.filter((_, i) => i !== index);
																		setValue('fotos', newFotos, { shouldValidate: true });
																	}}
																	className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
																>
																	<X className="w-3 h-3" />
																</button>
															</div>
														))}
														{watch('fotos')?.length < 10 && (
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
												checked={formValues.destacado}
												onCheckedChange={(checked) =>
													setValue('destacado', checked as boolean, { shouldValidate: true })
												}
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
												checked={formValues.publicado}
												onCheckedChange={(checked) =>
													setValue('publicado', checked as boolean, { shouldValidate: true })
												}
											/>
											<div>
												<Label htmlFor="publicado" className="font-medium cursor-pointer">
													Publicar inmediatamente
												</Label>
												<p className="text-sm text-gray-500">El animal será visible en el sitio público</p>
											</div>
										</div>

										<div className="pt-4 border-t">
											{animalData?.createdAt && (
												<div className="flex items-center gap-2 text-sm text-amber-600 mb-4">
													<AlertCircle className="w-4 h-4" />
													<span className="font-medium">Creado el:</span>
													<span>{new Date(animalData.createdAt).toLocaleDateString('es-AR')}</span>
												</div>
											)}
											<p className="text-sm text-gray-600">
												<strong>Nota:</strong> Todos los campos marcados con * son obligatorios.
											</p>
											{Object.keys(errors).length > 0 && (
												<p className="text-sm text-red-600 mt-2">
													Por favor, corrige los errores en el formulario antes de enviar.
												</p>
											)}
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
