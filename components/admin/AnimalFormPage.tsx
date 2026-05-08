'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, Save, Sparkles, Heart, Shield, AlertCircle, Images, Loader2, Plus, Minus, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import GalleryUploader from '@/components/admin/GalleryUploader';
import {
	animalSchema,
	AnimalFormData,
	ANIMAL_FORM_DEFAULTS,
	OPCIONES_PERSONALIDAD,
	OPCIONES_REQUISITOS,
} from '@/types/animal';

interface Props {
	title: string;
	subtitle: string;
	initialValues?: Partial<AnimalFormData>;
	onSubmit: (data: AnimalFormData) => Promise<void>;
	isLoading: boolean;
}

export default function AnimalFormPage({ title, subtitle, initialValues, onSubmit, isLoading }: Props) {
	const router = useRouter();
	const [inputPersonalidad, setInputPersonalidad] = useState('');
	const [inputRequisito, setInputRequisito] = useState('');

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		getValues,
	} = useForm<AnimalFormData>({
		resolver: zodResolver(animalSchema),
		defaultValues: { ...ANIMAL_FORM_DEFAULTS, ...initialValues },
		mode: 'onChange',
	});

	const values = watch();

	const toggleArray = (field: 'personalidad' | 'requisitosDeAdopcion', item: string) => {
		const current = getValues(field);
		setValue(field, current.includes(item) ? current.filter((i) => i !== item) : [...current, item], {
			shouldValidate: true,
		});
	};

	const addCustom = (field: 'personalidad' | 'requisitosDeAdopcion', value: string, clear: () => void) => {
		const trimmed = value.trim();
		if (!trimmed) return;
		const current = getValues(field);
		if (!current.includes(trimmed)) {
			setValue(field, [...current, trimmed], { shouldValidate: true });
		}
		clear();
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50/30">
			<header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
				<div className="px-6 py-4 flex items-center justify-between">
					<div className="flex items-center gap-4">
						<Button
							variant="ghost"
							size="sm"
							onClick={() => router.back()}
							className="flex items-center gap-2 cursor-pointer"
						>
							<ArrowLeft className="w-4 h-4" />
							Volver
						</Button>
						<div>
							<h1 className="text-xl font-bold text-gray-800">{title}</h1>
							<p className="text-sm text-gray-500">{subtitle}</p>
						</div>
					</div>

					<div className="flex items-center gap-3">
						<Button
							variant="outline"
							type="button"
							onClick={() => setValue('publicado', !values.publicado)}
							className={cn(
								'cursor-pointer',
								values.publicado ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : '',
							)}
						>
							{values.publicado ? 'Publicado' : 'Borrador'}
						</Button>
						<Button
							onClick={handleSubmit(onSubmit)}
							disabled={isLoading}
							className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-md cursor-pointer"
						>
							{isLoading ? (
								<>
									<Loader2 className="w-4 h-4 mr-2 animate-spin" />
									Guardando...
								</>
							) : (
								<>
									<Save className="w-4 h-4 mr-2" />
									Guardar
								</>
							)}
						</Button>
					</div>
				</div>
			</header>

			<div className="px-4 sm:px-8 py-8 w-full mx-auto">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="grid lg:grid-cols-3 gap-8">
						<div className="lg:col-span-2 space-y-6">
							{/* Info básica */}
							<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
								<Card className="border-0 shadow-lg border-l-4 border-l-teal-400">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<Sparkles className="w-5 h-5 text-teal-600" />
											Información Básica
										</CardTitle>
										<CardDescription>Datos principales del animal</CardDescription>
									</CardHeader>
									<CardContent className="space-y-5 p-6">
										<div className="grid md:grid-cols-2 gap-4">
											<div className="space-y-1.5">
												<Label htmlFor="nombre">Nombre *</Label>
												<Input id="nombre" {...register('nombre')} placeholder="Ej: Luna, Toby, Rocky" />
												{errors.nombre && <p className="text-xs text-red-500">{errors.nombre.message}</p>}
											</div>
											<div className="space-y-1.5">
												<Label>Edad (años) *</Label>
												<div className="flex items-center gap-2">
													<Button
														type="button"
														variant="outline"
														size="icon"
														className="cursor-pointer"
														onClick={() => setValue('edad', Math.max(0, values.edad - 1))}
													>
														<Minus className="w-4 h-4" />
													</Button>
													<Input
														type="number"
														min="0"
														max="30"
														{...register('edad', { valueAsNumber: true })}
														className="text-center"
													/>
													<Button
														type="button"
														variant="outline"
														size="icon"
														className="cursor-pointer"
														onClick={() => setValue('edad', values.edad + 1)}
													>
														<Plus className="w-4 h-4" />
													</Button>
												</div>
											</div>
										</div>

										<div className="space-y-1.5">
											<Label>Descripción *</Label>
											<Textarea
												{...register('descripcion')}
												placeholder="Contá la historia del animal..."
												rows={4}
												className="resize-none"
											/>
											{errors.descripcion && <p className="text-xs text-red-500">{errors.descripcion.message}</p>}
										</div>

										<div className="grid md:grid-cols-3 gap-4">
											<div className="space-y-1.5">
												<Label>Género *</Label>
												<RadioGroup
													value={values.genero}
													onValueChange={(v) => setValue('genero', v as 'macho' | 'hembra')}
													className="flex gap-4 pt-1"
												>
													<div className="flex items-center gap-2">
														<RadioGroupItem value="macho" id="macho" />
														<Label htmlFor="macho">Macho</Label>
													</div>
													<div className="flex items-center gap-2">
														<RadioGroupItem value="hembra" id="hembra" />
														<Label htmlFor="hembra">Hembra</Label>
													</div>
												</RadioGroup>
											</div>
											<div className="space-y-1.5">
												<Label>Tipo *</Label>
												<Select
													value={values.tipo}
													onValueChange={(v) => setValue('tipo', v as 'perro' | 'gato' | 'otro')}
												>
													<SelectTrigger>
														<SelectValue />
													</SelectTrigger>
													<SelectContent className="bg-white">
														<SelectItem value="perro">🐕 Perro</SelectItem>
														<SelectItem value="gato">🐈 Gato</SelectItem>
														<SelectItem value="otro">🐾 Otro</SelectItem>
													</SelectContent>
												</Select>
											</div>
											<div className="space-y-1.5">
												<Label>Tamaño *</Label>
												<Select
													value={values.tamaño}
													onValueChange={(v) => setValue('tamaño', v as 'chico' | 'mediano' | 'grande')}
												>
													<SelectTrigger>
														<SelectValue />
													</SelectTrigger>
													<SelectContent className="bg-white">
														<SelectItem value="chico">Chico</SelectItem>
														<SelectItem value="mediano">Mediano</SelectItem>
														<SelectItem value="grande">Grande</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>

										<div className="space-y-1.5">
											<Label htmlFor="discapacidad">Discapacidad / Condición especial</Label>
											<Input
												id="discapacidad"
												{...register('discapacidad')}
												placeholder="Ej: tres patas, ciego, sordo, artritis..."
											/>
										</div>
									</CardContent>
								</Card>
							</motion.div>

							{/* Salud */}
							<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
								<Card className="border-0 shadow-lg border-l-4 border-l-emerald-400">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<Shield className="w-5 h-5 text-teal-600" />
											Salud y Cuidados
										</CardTitle>
										<CardDescription>Estado sanitario del animal</CardDescription>
									</CardHeader>
									<CardContent className="space-y-4 p-6">
										<div className="flex flex-wrap gap-6">
											{(['castrado', 'vacunado', 'desparasitado'] as const).map((field) => (
												<div key={field} className="flex items-center gap-2">
													<Checkbox
														id={field}
														checked={values[field]}
														onCheckedChange={(c) => setValue(field, c as boolean)}
													/>
													<Label htmlFor={field} className="font-medium cursor-pointer capitalize">
														{field === 'castrado'
															? 'Castrado/Esterilizado'
															: field === 'vacunado'
																? 'Vacunado al día'
																: 'Desparasitado'}
													</Label>
												</div>
											))}
										</div>
										<div className="space-y-1.5">
											<Label>Ubicación</Label>
											<Select value={values.ubicacion ?? ''} onValueChange={(v) => setValue('ubicacion', v)}>
												<SelectTrigger>
													<SelectValue placeholder="Seleccionar ubicación" />
												</SelectTrigger>
												<SelectContent className="bg-white">
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
							<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
								<Card className="border-0 shadow-lg border-l-4 border-l-pink-400">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<Heart className="w-5 h-5 text-pink-500" />
											Personalidad
										</CardTitle>
										<CardDescription>Características del animal</CardDescription>
									</CardHeader>
									<CardContent className="space-y-4 p-6">
										<div className="flex flex-wrap gap-2">
											{values.personalidad.map((item) => (
												<Badge key={item} className="pl-3 pr-2 py-1 bg-pink-100 text-pink-800 border-pink-200">
													{item}
													<button
														type="button"
														onClick={() => toggleArray('personalidad', item)}
														className="ml-1.5 hover:text-pink-900"
													>
														<X className="w-3 h-3" />
													</button>
												</Badge>
											))}
										</div>
										<div className="flex flex-wrap gap-2">
											{OPCIONES_PERSONALIDAD.map((op) => (
												<Button
													key={op}
													type="button"
													variant="outline"
													size="sm"
													onClick={() => toggleArray('personalidad', op)}
													className={cn(
														'cursor-pointer',
														values.personalidad.includes(op) ? 'bg-pink-50 border-pink-200 text-pink-700' : '',
													)}
												>
													{op}
												</Button>
											))}
										</div>
										<div className="flex gap-2">
											<Input
												value={inputPersonalidad}
												onChange={(e) => setInputPersonalidad(e.target.value)}
												placeholder="Agregar personalizada"
												onKeyDown={(e) => {
													if (e.key === 'Enter') {
														e.preventDefault();
														addCustom('personalidad', inputPersonalidad, () => setInputPersonalidad(''));
													}
												}}
											/>
											<Button
												type="button"
												variant="outline"
												className="cursor-pointer"
												onClick={() => addCustom('personalidad', inputPersonalidad, () => setInputPersonalidad(''))}
											>
												<Plus className="w-4 h-4" />
											</Button>
										</div>
									</CardContent>
								</Card>
							</motion.div>

							{/* Requisitos */}
							<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
								<Card className="border-0 shadow-lg border-l-4 border-l-amber-400">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<AlertCircle className="w-5 h-5 text-amber-500" />
											Requisitos de Adopción
										</CardTitle>
										<CardDescription>Condiciones para el hogar adoptante</CardDescription>
									</CardHeader>
									<CardContent className="space-y-4 p-6">
										<div className="flex flex-wrap gap-2">
											{values.requisitosDeAdopcion.map((item) => (
												<Badge key={item} className="pl-3 pr-2 py-1 bg-amber-100 text-amber-800 border-amber-200">
													{item}
													<button
														type="button"
														onClick={() => toggleArray('requisitosDeAdopcion', item)}
														className="ml-1.5"
													>
														<X className="w-3 h-3" />
													</button>
												</Badge>
											))}
										</div>
										<div className="flex flex-wrap gap-2">
											{OPCIONES_REQUISITOS.map((op) => (
												<Button
													key={op}
													type="button"
													variant="outline"
													size="sm"
													onClick={() => toggleArray('requisitosDeAdopcion', op)}
													className={cn(
														'cursor-pointer',
														values.requisitosDeAdopcion.includes(op)
															? 'bg-amber-50 border-amber-200 text-amber-700'
															: '',
													)}
												>
													{op}
												</Button>
											))}
										</div>
										<div className="flex gap-2">
											<Input
												value={inputRequisito}
												onChange={(e) => setInputRequisito(e.target.value)}
												placeholder="Agregar personalizado"
												onKeyDown={(e) => {
													if (e.key === 'Enter') {
														e.preventDefault();
														addCustom('requisitosDeAdopcion', inputRequisito, () => setInputRequisito(''));
													}
												}}
											/>
											<Button
												type="button"
												variant="outline"
												className="cursor-pointer"
												onClick={() => addCustom('requisitosDeAdopcion', inputRequisito, () => setInputRequisito(''))}
											>
												<Plus className="w-4 h-4" />
											</Button>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						</div>

						{/* Columna derecha */}
						<div className="space-y-6">
							<motion.div
								initial={{ opacity: 0, x: 16 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.1 }}
								className="sticky top-24"
							>
								<Card className="border-0 shadow-lg">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<Images className="w-5 h-5 text-teal-600" />
											Galería de fotos
										</CardTitle>
										<CardDescription>La primera foto se usa como portada en el listado</CardDescription>
									</CardHeader>
									<CardContent className="p-6">
										<GalleryUploader
											value={values.fotos}
											onChange={(urls) => {
												setValue('fotos', urls);
												setValue('imagenCard', urls[0] ?? '', { shouldValidate: true });
											}}
										/>
										{errors.imagenCard && (
											<p className="text-xs text-red-500 mt-2">{errors.imagenCard.message}</p>
										)}
									</CardContent>
								</Card>

								<Card className="border-0 shadow-lg mt-6">
									<CardHeader className="pb-3">
										<div className="flex items-center justify-between">
											<CardTitle className="text-base">Publicación</CardTitle>
											<span
												className={cn(
													'text-xs font-medium px-2 py-0.5 rounded-full',
													values.fallecido
														? 'bg-purple-100 text-purple-700'
														: values.adoptado
															? 'bg-green-100 text-green-700'
															: values.publicado
																? 'bg-emerald-100 text-emerald-700'
																: 'bg-gray-100 text-gray-600',
												)}
											>
												{values.fallecido
													? 'Fallecido'
													: values.adoptado
														? 'Adoptado'
														: values.publicado
															? 'Publicado'
															: 'Borrador'}
											</span>
										</div>
									</CardHeader>
									<CardContent className="space-y-4 p-6">
										<div className="flex items-start gap-3">
											<Checkbox
												id="publicado"
												checked={values.publicado}
												onCheckedChange={(c) => setValue('publicado', c as boolean)}
											/>
											<div>
												<Label htmlFor="publicado" className="font-medium cursor-pointer">
													Publicar
												</Label>
												<p className="text-xs text-gray-500">Visible en el sitio público</p>
											</div>
										</div>
										<div className="flex items-start gap-3 pt-2 border-t border-gray-100">
											<Checkbox
												id="adoptado"
												checked={values.adoptado}
												onCheckedChange={(c) => setValue('adoptado', c as boolean)}
											/>
											<div>
												<Label htmlFor="adoptado" className="font-medium cursor-pointer text-green-700">
													Adoptado
												</Label>
												<p className="text-xs text-gray-500">Encontró hogar, se oculta del listado</p>
											</div>
										</div>
										<div className="flex items-start gap-3 pt-2 border-t border-gray-100">
											<Checkbox
												id="fallecido"
												checked={values.fallecido}
												onCheckedChange={(c) => setValue('fallecido', c as boolean)}
											/>
											<div>
												<Label htmlFor="fallecido" className="font-medium cursor-pointer text-gray-700">
													Fallecido
												</Label>
												<p className="text-xs text-gray-500">Se oculta del sitio pero queda en el sistema</p>
											</div>
										</div>
										{Object.keys(errors).length > 0 && (
											<p className="text-xs text-red-500 pt-2 border-t">
												Hay errores en el formulario. Revisalos antes de guardar.
											</p>
										)}
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
