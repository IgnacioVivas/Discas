// app/(admin)/animales/nuevo/page.tsx
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import {
// 	ArrowLeft,
// 	Save,
// 	Upload,
// 	X,
// 	Image as ImageIcon,
// 	Plus,
// 	Minus,
// 	Sparkles,
// 	Heart,
// 	Shield,
// 	AlertCircle,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Label } from '@/components/ui/label';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Badge } from '@/components/ui/badge';
// import { motion } from 'framer-motion';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// export default function NuevoAnimalPage() {
// 	const router = useRouter();
// 	const [loading, setLoading] = useState(false);

// 	// Estado del formulario
// 	const [formData, setFormData] = useState({
// 		nombre: '',
// 		descripcion: '',
// 		edad: 1,
// 		genero: 'macho',
// 		tamaño: 'mediano',
// 		tipo: 'perro',
// 		discapacidad: '',
// 		castrado: false,
// 		vacunado: false,
// 		desparasitado: false,
// 		ubicacion: 'Córdoba Capital',
// 		personalidad: [] as string[],
// 		requisitosDeAdopcion: [] as string[],
// 		imagenCard: '',
// 		fotos: [] as string[],
// 		publicado: false,
// 		destacado: false,
// 	});

// 	const [nuevaPersonalidad, setNuevaPersonalidad] = useState('');
// 	const [nuevoRequisito, setNuevoRequisito] = useState('');

// 	// Opciones predefinidas
// 	const opcionesPersonalidad = [
// 		'cariñoso/a',
// 		'juguetón/a',
// 		'tranquilo/a',
// 		'energético/a',
// 		'tímido/a',
// 		'sociable',
// 		'independiente',
// 		'curioso/a',
// 		'protector/a',
// 		'dócil',
// 	];

// 	const opcionesRequisitos = [
// 		'patio cercado',
// 		'otras mascotas',
// 		'hogar tranquilo',
// 		'sin escaleras',
// 		'interior',
// 		'experiencia previa',
// 		'paciencia',
// 		'tiempo para paseos',
// 		'familia sin niños pequeños',
// 		'familia con niños',
// 	];

// 	const handleSubmit = async (e: React.FormEvent) => {
// 		e.preventDefault();
// 		setLoading(true);

// 		// Aquí iría la lógica para guardar en la base de datos
// 		console.log('Guardando animal:', formData);

// 		// Simular guardado
// 		setTimeout(() => {
// 			setLoading(false);
// 			router.push('/admin/dashboard');
// 		}, 1500);
// 	};

// 	const agregarPersonalidad = () => {
// 		if (nuevaPersonalidad.trim() && !formData.personalidad.includes(nuevaPersonalidad.trim())) {
// 			setFormData({
// 				...formData,
// 				personalidad: [...formData.personalidad, nuevaPersonalidad.trim()],
// 			});
// 			setNuevaPersonalidad('');
// 		}
// 	};

// 	const agregarRequisito = () => {
// 		if (nuevoRequisito.trim() && !formData.requisitosDeAdopcion.includes(nuevoRequisito.trim())) {
// 			setFormData({
// 				...formData,
// 				requisitosDeAdopcion: [...formData.requisitosDeAdopcion, nuevoRequisito.trim()],
// 			});
// 			setNuevoRequisito('');
// 		}
// 	};

// 	const removerPersonalidad = (item: string) => {
// 		setFormData({
// 			...formData,
// 			personalidad: formData.personalidad.filter((p) => p !== item),
// 		});
// 	};

// 	const removerRequisito = (item: string) => {
// 		setFormData({
// 			...formData,
// 			requisitosDeAdopcion: formData.requisitosDeAdopcion.filter((r) => r !== item),
// 		});
// 	};

// 	return (
// 		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50/30">
// 			{/* Header */}
// 			<header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-200">
// 				<div className="px-6 py-4 flex items-center justify-between">
// 					<div className="flex items-center gap-4">
// 						<Button variant="ghost" size="sm" onClick={() => router.back()} className="flex items-center gap-2">
// 							<ArrowLeft className="w-4 h-4" />
// 							Volver
// 						</Button>
// 						<div>
// 							<h1 className="text-xl font-bold text-gray-800">Nuevo Animal</h1>
// 							<p className="text-sm text-gray-500">Agrega un nuevo peludito a la fundación</p>
// 						</div>
// 					</div>

// 					<div className="flex items-center gap-3">
// 						<Button
// 							variant="outline"
// 							onClick={() => setFormData({ ...formData, publicado: !formData.publicado })}
// 							className={formData.publicado ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : ''}
// 						>
// 							{formData.publicado ? 'Publicado' : 'Guardar como borrador'}
// 						</Button>

// 						<Button
// 							onClick={handleSubmit}
// 							disabled={loading}
// 							className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
// 						>
// 							{loading ? (
// 								<>
// 									<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
// 									Guardando...
// 								</>
// 							) : (
// 								<>
// 									<Save className="w-4 h-4 mr-2" />
// 									Guardar Animal
// 								</>
// 							)}
// 						</Button>
// 					</div>
// 				</div>
// 			</header>

// 			<div className="px-4 sm:px-6 py-6 max-w-6xl mx-auto">
// 				<form onSubmit={handleSubmit}>
// 					<div className="grid lg:grid-cols-3 gap-8">
// 						{/* Columna izquierda - Información básica */}
// 						<div className="lg:col-span-2 space-y-6">
// 							{/* Información básica */}
// 							<Card className="border-0 shadow-lg">
// 								<CardHeader>
// 									<CardTitle className="flex items-center gap-2">
// 										<Sparkles className="w-5 h-5 text-teal-600" />
// 										Información Básica
// 									</CardTitle>
// 									<CardDescription>Datos principales del animal</CardDescription>
// 								</CardHeader>
// 								<CardContent className="space-y-6">
// 									<div className="grid md:grid-cols-2 gap-4">
// 										<div className="space-y-2">
// 											<Label htmlFor="nombre">Nombre *</Label>
// 											<Input
// 												id="nombre"
// 												value={formData.nombre}
// 												onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
// 												placeholder="Ej: Luna, Toby, Rocky"
// 												required
// 											/>
// 										</div>

// 										<div className="space-y-2">
// 											<Label htmlFor="edad">Edad (años) *</Label>
// 											<div className="flex items-center gap-2">
// 												<Button
// 													type="button"
// 													variant="outline"
// 													size="icon"
// 													onClick={() => setFormData({ ...formData, edad: Math.max(1, formData.edad - 1) })}
// 												>
// 													<Minus className="w-4 h-4" />
// 												</Button>
// 												<Input
// 													id="edad"
// 													type="number"
// 													min="0"
// 													value={formData.edad}
// 													onChange={(e) => setFormData({ ...formData, edad: parseInt(e.target.value) || 0 })}
// 													className="text-center"
// 												/>
// 												<Button
// 													type="button"
// 													variant="outline"
// 													size="icon"
// 													onClick={() => setFormData({ ...formData, edad: formData.edad + 1 })}
// 												>
// 													<Plus className="w-4 h-4" />
// 												</Button>
// 											</div>
// 										</div>
// 									</div>

// 									<div className="space-y-2">
// 										<Label>Descripción *</Label>
// 										<Textarea
// 											value={formData.descripcion}
// 											onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
// 											placeholder="Cuenta la historia del animal, su personalidad, necesidades especiales..."
// 											rows={4}
// 											className="resize-none"
// 											required
// 										/>
// 									</div>

// 									<div className="grid md:grid-cols-3 gap-4">
// 										<div className="space-y-2">
// 											<Label>Género *</Label>
// 											<RadioGroup
// 												value={formData.genero}
// 												onValueChange={(value) => setFormData({ ...formData, genero: value })}
// 												className="flex gap-4"
// 											>
// 												<div className="flex items-center space-x-2">
// 													<RadioGroupItem value="macho" id="macho" />
// 													<Label htmlFor="macho">Macho</Label>
// 												</div>
// 												<div className="flex items-center space-x-2">
// 													<RadioGroupItem value="hembra" id="hembra" />
// 													<Label htmlFor="hembra">Hembra</Label>
// 												</div>
// 											</RadioGroup>
// 										</div>

// 										<div className="space-y-2">
// 											<Label>Tipo *</Label>
// 											<Select
// 												value={formData.tipo}
// 												onValueChange={(value) => setFormData({ ...formData, tipo: value })}
// 											>
// 												<SelectTrigger>
// 													<SelectValue placeholder="Seleccionar tipo" />
// 												</SelectTrigger>
// 												<SelectContent>
// 													<SelectItem value="perro">🐕 Perro</SelectItem>
// 													<SelectItem value="gato">🐈 Gato</SelectItem>
// 												</SelectContent>
// 											</Select>
// 										</div>

// 										<div className="space-y-2">
// 											<Label>Tamaño *</Label>
// 											<Select
// 												value={formData.tamaño}
// 												onValueChange={(value) => setFormData({ ...formData, tamaño: value })}
// 											>
// 												<SelectTrigger>
// 													<SelectValue placeholder="Seleccionar tamaño" />
// 												</SelectTrigger>
// 												<SelectContent>
// 													<SelectItem value="chico">Chico</SelectItem>
// 													<SelectItem value="mediano">Mediano</SelectItem>
// 													<SelectItem value="grande">Grande</SelectItem>
// 												</SelectContent>
// 											</Select>
// 										</div>
// 									</div>

// 									<div className="space-y-2">
// 										<Label htmlFor="discapacidad">Discapacidad / Condición especial</Label>
// 										<Input
// 											id="discapacidad"
// 											value={formData.discapacidad}
// 											onChange={(e) => setFormData({ ...formData, discapacidad: e.target.value })}
// 											placeholder="Ej: tres patas, ciego, sordo, artritis..."
// 										/>
// 									</div>
// 								</CardContent>
// 							</Card>

// 							{/* Salud y cuidados */}
// 							<Card className="border-0 shadow-lg">
// 								<CardHeader>
// 									<CardTitle className="flex items-center gap-2">
// 										<Shield className="w-5 h-5 text-teal-600" />
// 										Salud y Cuidados
// 									</CardTitle>
// 									<CardDescription>Estado de salud del animal</CardDescription>
// 								</CardHeader>
// 								<CardContent className="space-y-4">
// 									<div className="flex flex-wrap gap-6">
// 										<div className="flex items-center space-x-2">
// 											<Checkbox
// 												id="castrado"
// 												checked={formData.castrado}
// 												onCheckedChange={(checked) => setFormData({ ...formData, castrado: checked as boolean })}
// 											/>
// 											<Label htmlFor="castrado" className="font-medium">
// 												Castrado/Esterilizado
// 											</Label>
// 										</div>

// 										<div className="flex items-center space-x-2">
// 											<Checkbox
// 												id="vacunado"
// 												checked={formData.vacunado}
// 												onCheckedChange={(checked) => setFormData({ ...formData, vacunado: checked as boolean })}
// 											/>
// 											<Label htmlFor="vacunado" className="font-medium">
// 												Vacunado al día
// 											</Label>
// 										</div>

// 										<div className="flex items-center space-x-2">
// 											<Checkbox
// 												id="desparasitado"
// 												checked={formData.desparasitado}
// 												onCheckedChange={(checked) => setFormData({ ...formData, desparasitado: checked as boolean })}
// 											/>
// 											<Label htmlFor="desparasitado" className="font-medium">
// 												Desparasitado
// 											</Label>
// 										</div>
// 									</div>

// 									<div className="space-y-2">
// 										<Label>Ubicación</Label>
// 										<Select
// 											value={formData.ubicacion}
// 											onValueChange={(value) => setFormData({ ...formData, ubicacion: value })}
// 										>
// 											<SelectTrigger>
// 												<SelectValue placeholder="Seleccionar ubicación" />
// 											</SelectTrigger>
// 											<SelectContent>
// 												<SelectItem value="Córdoba Capital">Córdoba Capital</SelectItem>
// 												<SelectItem value="Interior">Interior de Córdoba</SelectItem>
// 												<SelectItem value="Refugio">En refugio</SelectItem>
// 												<SelectItem value="Hogar Temporal">Hogar temporal</SelectItem>
// 											</SelectContent>
// 										</Select>
// 									</div>
// 								</CardContent>
// 							</Card>

// 							{/* Personalidad */}
// 							<Card className="border-0 shadow-lg">
// 								<CardHeader>
// 									<CardTitle className="flex items-center gap-2">
// 										<Heart className="w-5 h-5 text-pink-600" />
// 										Personalidad
// 									</CardTitle>
// 									<CardDescription>¿Cómo es el animal? Selecciona o agrega características</CardDescription>
// 								</CardHeader>
// 								<CardContent className="space-y-4">
// 									{/* Badges seleccionados */}
// 									<div className="flex flex-wrap gap-2">
// 										{formData.personalidad.map((item) => (
// 											<Badge key={item} className="pl-3 pr-2 py-1.5 bg-pink-100 text-pink-800 border-pink-200">
// 												{item}
// 												<button
// 													type="button"
// 													onClick={() => removerPersonalidad(item)}
// 													className="ml-2 hover:text-pink-900"
// 												>
// 													<X className="w-3 h-3" />
// 												</button>
// 											</Badge>
// 										))}
// 									</div>

// 									{/* Opciones rápidas */}
// 									<div className="flex flex-wrap gap-2">
// 										{opcionesPersonalidad.map((opcion) => (
// 											<Button
// 												key={opcion}
// 												type="button"
// 												variant="outline"
// 												size="sm"
// 												onClick={() => {
// 													if (!formData.personalidad.includes(opcion)) {
// 														setFormData({
// 															...formData,
// 															personalidad: [...formData.personalidad, opcion],
// 														});
// 													}
// 												}}
// 												disabled={formData.personalidad.includes(opcion)}
// 												className={
// 													formData.personalidad.includes(opcion) ? 'bg-pink-50 border-pink-200 text-pink-700' : ''
// 												}
// 											>
// 												{opcion}
// 											</Button>
// 										))}
// 									</div>

// 									{/* Agregar personalidad personalizada */}
// 									<div className="flex gap-2">
// 										<Input
// 											value={nuevaPersonalidad}
// 											onChange={(e) => setNuevaPersonalidad(e.target.value)}
// 											placeholder="Agregar característica personalizada"
// 											onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), agregarPersonalidad())}
// 										/>
// 										<Button type="button" onClick={agregarPersonalidad} variant="outline">
// 											<Plus className="w-4 h-4" />
// 										</Button>
// 									</div>
// 								</CardContent>
// 							</Card>

// 							{/* Requisitos de adopción */}
// 							<Card className="border-0 shadow-lg">
// 								<CardHeader>
// 									<CardTitle className="flex items-center gap-2">
// 										<AlertCircle className="w-5 h-5 text-amber-600" />
// 										Requisitos de Adopción
// 									</CardTitle>
// 									<CardDescription>Condiciones que debe cumplir el hogar adoptante</CardDescription>
// 								</CardHeader>
// 								<CardContent className="space-y-4">
// 									{/* Badges seleccionados */}
// 									<div className="flex flex-wrap gap-2">
// 										{formData.requisitosDeAdopcion.map((item) => (
// 											<Badge key={item} className="pl-3 pr-2 py-1.5 bg-amber-100 text-amber-800 border-amber-200">
// 												{item}
// 												<button
// 													type="button"
// 													onClick={() => removerRequisito(item)}
// 													className="ml-2 hover:text-amber-900"
// 												>
// 													<X className="w-3 h-3" />
// 												</button>
// 											</Badge>
// 										))}
// 									</div>

// 									{/* Opciones rápidas */}
// 									<div className="flex flex-wrap gap-2">
// 										{opcionesRequisitos.map((opcion) => (
// 											<Button
// 												key={opcion}
// 												type="button"
// 												variant="outline"
// 												size="sm"
// 												onClick={() => {
// 													if (!formData.requisitosDeAdopcion.includes(opcion)) {
// 														setFormData({
// 															...formData,
// 															requisitosDeAdopcion: [...formData.requisitosDeAdopcion, opcion],
// 														});
// 													}
// 												}}
// 												disabled={formData.requisitosDeAdopcion.includes(opcion)}
// 												className={
// 													formData.requisitosDeAdopcion.includes(opcion)
// 														? 'bg-amber-50 border-amber-200 text-amber-700'
// 														: ''
// 												}
// 											>
// 												{opcion}
// 											</Button>
// 										))}
// 									</div>

// 									{/* Agregar requisito personalizado */}
// 									<div className="flex gap-2">
// 										<Input
// 											value={nuevoRequisito}
// 											onChange={(e) => setNuevoRequisito(e.target.value)}
// 											placeholder="Agregar requisito personalizado"
// 											onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), agregarRequisito())}
// 										/>
// 										<Button type="button" onClick={agregarRequisito} variant="outline">
// 											<Plus className="w-4 h-4" />
// 										</Button>
// 									</div>
// 								</CardContent>
// 							</Card>
// 						</div>

// 						{/* Columna derecha - Imágenes y publicación */}
// 						<div className="space-y-6">
// 							{/* Imágenes */}
// 							<Card className="border-0 shadow-lg sticky top-24">
// 								<CardHeader>
// 									<CardTitle className="flex items-center gap-2">
// 										<ImageIcon className="w-5 h-5 text-teal-600" />
// 										Imágenes
// 									</CardTitle>
// 									<CardDescription>Sube fotos del animal (la primera será la principal)</CardDescription>
// 								</CardHeader>
// 								<CardContent className="space-y-4">
// 									{/* Imagen principal */}
// 									<div className="space-y-2">
// 										<Label>Imagen Principal *</Label>
// 										<div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-teal-400 transition-colors cursor-pointer">
// 											<Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
// 											<p className="text-gray-600 font-medium">Subir imagen principal</p>
// 											<p className="text-sm text-gray-500 mt-1">JPG, PNG, máximo 5MB</p>
// 										</div>
// 									</div>

// 									{/* Imágenes adicionales */}
// 									<div className="space-y-2">
// 										<Label>Imágenes Adicionales</Label>
// 										<div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-teal-400 transition-colors cursor-pointer">
// 											<div className="grid grid-cols-3 gap-2 mb-4">
// 												{[1, 2, 3, 4, 5, 6].map((i) => (
// 													<div
// 														key={i}
// 														className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center"
// 													>
// 														<ImageIcon className="w-6 h-6 text-gray-400" />
// 													</div>
// 												))}
// 											</div>
// 											<p className="text-gray-600">Arrastra o haz clic para subir más fotos</p>
// 											<p className="text-sm text-gray-500 mt-1">Máximo 10 imágenes</p>
// 										</div>
// 									</div>
// 								</CardContent>
// 							</Card>

// 							{/* Configuración de publicación */}
// 							<Card className="border-0 shadow-lg">
// 								<CardHeader>
// 									<CardTitle>Configuración de Publicación</CardTitle>
// 								</CardHeader>
// 								<CardContent className="space-y-4">
// 									<div className="flex items-center space-x-2">
// 										<Checkbox
// 											id="destacado"
// 											checked={formData.destacado}
// 											onCheckedChange={(checked) => setFormData({ ...formData, destacado: checked as boolean })}
// 										/>
// 										<div>
// 											<Label htmlFor="destacado" className="font-medium cursor-pointer">
// 												Destacar este animal
// 											</Label>
// 											<p className="text-sm text-gray-500">Aparecerá en la sección destacada del sitio</p>
// 										</div>
// 									</div>

// 									<div className="flex items-center space-x-2">
// 										<Checkbox
// 											id="publicado"
// 											checked={formData.publicado}
// 											onCheckedChange={(checked) => setFormData({ ...formData, publicado: checked as boolean })}
// 										/>
// 										<div>
// 											<Label htmlFor="publicado" className="font-medium cursor-pointer">
// 												Publicar inmediatamente
// 											</Label>
// 											<p className="text-sm text-gray-500">El animal será visible en el sitio público</p>
// 										</div>
// 									</div>

// 									<div className="pt-4 border-t">
// 										<p className="text-sm text-gray-600">
// 											<strong>Nota:</strong> Todos los campos marcados con * son obligatorios.
// 										</p>
// 									</div>
// 								</CardContent>
// 							</Card>
// 						</div>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// }

// app/(admin)/animales/nuevo/page.tsx
// app/(admin)/animales/nuevo/page.tsx
// app/(admin)/animales/nuevo/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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

// Esquema de validación con Zod - Especificar tipos de manera más explícita
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
};

// Tipo para los valores por defecto
const defaultValues: AnimalFormData = {
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
};

export default function NuevoAnimalPage() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
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
		trigger,
	} = useForm<AnimalFormData>({
		resolver: zodResolver(animalSchema),
		defaultValues,
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

	// Función para enviar el formulario
	const onSubmit = async (data: AnimalFormData) => {
		setLoading(true);

		try {
			// Preparar datos para enviar - asegurar que los arrays siempre existan
			const dataToSend = {
				...data,
				discapacidad: data.discapacidad?.trim() || null,
				ubicacion: data.ubicacion?.trim() || null,
				imagenCard: data.imagenCard || '/placeholder.jpg',
			};

			console.log('Enviando datos:', dataToSend);

			const response = await fetch('/api/animals', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataToSend),
			});

			if (!response.ok) {
				const error = await response.json().catch(() => ({ error: 'Error desconocido' }));
				throw new Error(error.error || 'Error al crear el animal');
			}

			const createdAnimal = await response.json();

			toast.success('¡Animal creado con éxito!', {
				description: `${createdAnimal.nombre} ha sido agregado al sistema.`,
			});

			// Redirigir al dashboard después de 1.5 segundos
			setTimeout(() => {
				router.push('/dashboard');
			}, 1500);
		} catch (error: any) {
			console.error('Error creando animal:', error);
			toast.error('Error al crear el animal', {
				description: error.message || 'Por favor, intenta nuevamente.',
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
		}
	};

	const agregarRequisito = () => {
		if (nuevoRequisito.trim() && !requisitosDeAdopcion.includes(nuevoRequisito.trim())) {
			const currentRequisitos = getValues('requisitosDeAdopcion');
			setValue('requisitosDeAdopcion', [...currentRequisitos, nuevoRequisito.trim()], {
				shouldValidate: true,
			});
			setNuevoRequisito('');
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

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50/30">
			{/* Header */}
			<header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-200">
				<div className="px-6 py-4 flex items-center justify-between">
					<div className="flex items-center gap-4">
						<Button variant="ghost" size="sm" onClick={() => router.back()} className="flex items-center gap-2">
							<ArrowLeft className="w-4 h-4" />
							Volver
						</Button>
						<div>
							<h1 className="text-xl font-bold text-gray-800">Nuevo Animal</h1>
							<p className="text-sm text-gray-500">Agrega un nuevo peludito a la fundación</p>
						</div>
					</div>

					<div className="flex items-center gap-3">
						<Button
							variant="outline"
							onClick={() => setValue('publicado', !formValues.publicado, { shouldValidate: true })}
							className={formValues.publicado ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : ''}
						>
							{formValues.publicado ? 'Publicado' : 'Guardar como borrador'}
						</Button>

						<Button
							onClick={handleSubmit(onSubmit)}
							disabled={loading}
							className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 cursor-pointer text-white"
						>
							{loading ? (
								<>
									<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
									Guardando...
								</>
							) : (
								<>
									<Save className="w-4 h-4 mr-2" />
									Guardar Animal
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
												onValueChange={(value) => setValue('tipo', value as 'perro' | 'gato', { shouldValidate: true })}
											>
												<SelectTrigger>
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
												<SelectTrigger>
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

							{/* Salud y cuidados */}
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

							{/* Personalidad */}
							<Card className="border-0 shadow-lg">
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<Heart className="w-5 h-5 text-pink-600" />
										Personalidad
									</CardTitle>
									<CardDescription>¿Cómo es el animal? Selecciona o agrega características</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									{/* Badges seleccionados */}
									<div className="flex flex-wrap gap-2">
										{personalidad.map((item) => (
											<Badge key={item} className="pl-3 pr-2 py-1.5 bg-pink-100 text-pink-800 border-pink-200">
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

									{/* Opciones rápidas */}
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

									{/* Agregar personalidad personalizada */}
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

							{/* Requisitos de adopción */}
							<Card className="border-0 shadow-lg">
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<AlertCircle className="w-5 h-5 text-amber-600" />
										Requisitos de Adopción
									</CardTitle>
									<CardDescription>Condiciones que debe cumplir el hogar adoptante</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									{/* Badges seleccionados */}
									<div className="flex flex-wrap gap-2">
										{requisitosDeAdopcion.map((item) => (
											<Badge key={item} className="pl-3 pr-2 py-1.5 bg-amber-100 text-amber-800 border-amber-200">
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

									{/* Opciones rápidas */}
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

									{/* Agregar requisito personalizado */}
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
						</div>

						{/* Columna derecha - Imágenes y publicación */}
						<div className="space-y-6">
							{/* Imágenes */}
							<Card className="border-0 shadow-lg sticky top-24">
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<ImageIcon className="w-5 h-5 text-teal-600" />
										Imágenes
									</CardTitle>
									<CardDescription>Sube fotos del animal (la primera será la principal)</CardDescription>
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
											<div className="mt-2">
												<img
													src={imagenCard || '/placeholder.jpg'}
													alt="Vista previa"
													className="w-full h-48 object-cover rounded-lg border"
												/>
											</div>
										)}
										<div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-teal-400 transition-colors cursor-pointer mt-2">
											<Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
											<p className="text-sm text-gray-600">O subir archivo</p>
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
									</div>

									{/* Imágenes adicionales */}
									<div className="space-y-2">
										<Label>Imágenes Adicionales</Label>
										<div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-teal-400 transition-colors cursor-pointer">
											<input
												type="file"
												accept="image/*"
												multiple
												className="hidden"
												id="upload-extra"
												onChange={(e) => {
													const files = Array.from(e.target.files || []);
													files.forEach((file) => {
														// Simular subida
														const fakeUrl = `https://example.com/uploads/${Date.now()}-${file.name}`;
														const currentFotos = getValues('fotos');
														setValue('fotos', [...currentFotos, fakeUrl], { shouldValidate: true });
													});
												}}
											/>
											<Label htmlFor="upload-extra" className="cursor-pointer">
												<Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
												<p className="text-sm text-gray-600">Haz clic para subir más fotos</p>
												<p className="text-xs text-gray-500 mt-1">Máximo 10 imágenes</p>
											</Label>
										</div>
										{watch('fotos')?.length > 0 && (
											<div className="grid grid-cols-3 gap-2 mt-2">
												{watch('fotos')?.map((foto, index) => (
													<div key={index} className="relative">
														<img
															src={foto || '/placeholder.jpg'}
															alt={`Foto ${index + 1}`}
															className="w-full h-20 object-cover rounded"
														/>
														<button
															type="button"
															onClick={() => {
																const currentFotos = getValues('fotos');
																const newFotos = currentFotos.filter((_, i) => i !== index);
																setValue('fotos', newFotos, { shouldValidate: true });
															}}
															className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
														>
															<X className="w-3 h-3" />
														</button>
													</div>
												))}
											</div>
										)}
									</div>
								</CardContent>
							</Card>

							{/* Configuración de publicación */}
							<Card className="border-0 shadow-lg">
								<CardHeader>
									<CardTitle>Configuración de Publicación</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="flex items-center space-x-2">
										<Checkbox
											id="destacado"
											checked={formValues.destacado}
											onCheckedChange={(checked) => setValue('destacado', checked as boolean, { shouldValidate: true })}
										/>
										<div>
											<Label htmlFor="destacado" className="font-medium cursor-pointer">
												Destacar este animal
											</Label>
											<p className="text-sm text-gray-500">Aparecerá en la sección destacada del sitio</p>
										</div>
									</div>

									<div className="flex items-center space-x-2">
										<Checkbox
											id="publicado"
											checked={formValues.publicado}
											onCheckedChange={(checked) => setValue('publicado', checked as boolean, { shouldValidate: true })}
										/>
										<div>
											<Label htmlFor="publicado" className="font-medium cursor-pointer">
												Publicar inmediatamente
											</Label>
											<p className="text-sm text-gray-500">El animal será visible en el sitio público</p>
										</div>
									</div>

									<div className="pt-4 border-t">
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
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
