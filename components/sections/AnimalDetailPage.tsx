import { notFound } from 'next/navigation';
import { datosDiscas } from '@/data/discas';
import { Heart, Shield, Clock, Home, Users, CheckCircle, ArrowLeft, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
	return datosDiscas.map((animal) => ({
		id: animal.id,
	}));
}

const detectAnimalType = (nombre: string, descripcion: string): 'perro' | 'gato' => {
	const lowerNombre = nombre.toLowerCase();
	const lowerDesc = descripcion.toLowerCase();

	if (
		lowerDesc.includes('perro') ||
		lowerDesc.includes('canino') ||
		lowerDesc.includes('can') ||
		lowerNombre.includes('perro')
	) {
		return 'perro';
	}
	return 'gato';
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

export default async function AnimalDetailPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const animal = datosDiscas.find((a) => a.id === id);

	if (!animal) return notFound();

	const animalType = detectAnimalType(animal.nombre, animal.descripcion);
	const specialNeeds = hasSpecialNeeds(animal.descripcion);

	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
			{/* Header */}
			<div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
				<div className="container mx-auto px-4 py-8">
					<Link
						href="/adopta"
						className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-6"
					>
						<ArrowLeft className="w-4 h-4" />
						Volver a la lista
					</Link>

					<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
						<div>
							<div className="flex items-center gap-3 mb-4">
								<Badge className="bg-white/20 text-white border-0">
									{animalType === 'perro' ? '🐕 Perro' : '🐈 Gato'}
								</Badge>
								{specialNeeds && (
									<Badge className="bg-amber-100 text-amber-800 border-amber-200">
										<Shield className="w-3 h-3 mr-1" />
										Necesidades especiales
									</Badge>
								)}
							</div>
							<h1 className="text-4xl md:text-5xl font-bold mb-2">{animal.nombre}</h1>
							<p className="text-xl text-white/90">
								{animal.edad} {animal.edad === 1 ? 'año' : 'años'} • {animal.genero} • {animal.tamaño}
							</p>
						</div>

						<Button size="lg" className="bg-white text-teal-700 hover:bg-white/90 font-semibold shadow-lg">
							<Heart className="w-5 h-5 mr-2" />
							Quiero adoptar a {animal.nombre}
						</Button>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 py-8">
				<div className="grid lg:grid-cols-3 gap-8">
					{/* Columna izquierda - Galería */}
					<div className="lg:col-span-2 space-y-6">
						{/* Imagen principal */}
						<div className="relative h-96 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
							<Image
								src={animal.imagenCard}
								alt={animal.nombre}
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 66vw"
								priority
							/>
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
								<div className="text-white">
									<div className="flex items-center gap-4 mb-2">
										<div className="flex items-center gap-1">
											<Clock className="w-4 h-4" />
											<span className="text-sm">Busca hogar</span>
										</div>
										{specialNeeds && (
											<div className="flex items-center gap-1">
												<Shield className="w-4 h-4" />
												<span className="text-sm">Cuidados especiales</span>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>

						{/* Mini galería */}
						{animal.fotos && animal.fotos.length > 0 && (
							<div className="grid grid-cols-3 gap-3">
								{animal.fotos.slice(0, 3).map((foto, index) => (
									<div
										key={index}
										className="relative h-32 rounded-xl overflow-hidden border-2 border-white hover:border-teal-300 transition-colors"
									>
										<Image
											src={foto}
											alt={`${animal.nombre} - foto ${index + 1}`}
											fill
											className="object-cover"
											sizes="(max-width: 768px) 33vw, 200px"
										/>
									</div>
								))}
							</div>
						)}

						{/* Información detallada */}
						<div className="bg-white rounded-2xl p-6 shadow-sm border">
							<h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
								<span className="p-2 bg-teal-100 rounded-lg">
									<Heart className="w-5 h-5 text-teal-600" />
								</span>
								La historia de {animal.nombre}
							</h2>

							<p className="text-gray-700 leading-relaxed mb-8 text-lg">{animal.descripcion}</p>

							<Separator className="my-8" />

							{/* Personalidad */}
							{animal.personalidad && animal.personalidad.length > 0 && (
								<div className="mb-8">
									<h3 className="text-xl font-bold text-gray-800 mb-4">Personalidad</h3>
									<div className="flex flex-wrap gap-3">
										{animal.personalidad.map((trait, index) => (
											<Badge
												key={index}
												variant="outline"
												className="px-4 py-2 text-base bg-amber-50 border-amber-200 text-amber-800"
											>
												{trait}
											</Badge>
										))}
									</div>
								</div>
							)}

							{/* Requisitos */}
							{animal.requisitosDeAdopcion && animal.requisitosDeAdopcion.length > 0 && (
								<div>
									<h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
										<span className="p-2 bg-amber-100 rounded-lg">
											<Home className="w-5 h-5 text-amber-600" />
										</span>
										Requisitos de adopción
									</h3>
									<ul className="space-y-3">
										{animal.requisitosDeAdopcion.map((requisito, index) => (
											<li key={index} className="flex items-start gap-3">
												<CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
												<span className="text-gray-700">{requisito}</span>
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</div>

					{/* Columna derecha - Sidebar */}
					<div className="space-y-6">
						{/* Tarjeta de contacto */}
						<div className="bg-white rounded-2xl p-6 shadow-sm border">
							<h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
								<span className="p-2 bg-blue-100 rounded-lg">
									<Users className="w-5 h-5 text-blue-600" />
								</span>
								Contactar sobre {animal.nombre}
							</h3>

							<div className="space-y-4">
								<Button className="w-full bg-teal-600 hover:bg-teal-700 font-semibold">
									<Phone className="w-4 h-4 mr-2" />
									Llamar ahora
								</Button>

								<Button variant="outline" className="w-full">
									<Mail className="w-4 h-4 mr-2" />
									Enviar email
								</Button>
							</div>

							<Separator className="my-6" />

							<div className="space-y-4">
								<div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
									<h4 className="font-bold text-amber-800 mb-2">⚠️ Importante</h4>
									<p className="text-sm text-amber-700">
										Todas las adopciones requieren una entrevista previa y seguimiento post-adopción.
									</p>
								</div>

								<div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
									<h4 className="font-bold text-teal-800 mb-2">📋 Proceso de adopción</h4>
									<ol className="space-y-2 text-sm text-teal-700">
										<li>1. Contacto inicial</li>
										<li>2. Entrevista telefónica</li>
										<li>3. Visita al refugio</li>
										<li>4. Período de adaptación</li>
										<li>5. Seguimiento mensual</li>
									</ol>
								</div>
							</div>
						</div>

						{/* Información médica */}
						<div className="bg-white rounded-2xl p-6 shadow-sm border">
							<h3 className="text-xl font-bold text-gray-800 mb-4">Salud y cuidados</h3>
							<div className="space-y-4">
								<div>
									<h4 className="font-semibold text-gray-700 mb-2">Vacunas</h4>
									<p className="text-green-600">✓ Al día</p>
								</div>

								<div>
									<h4 className="font-semibold text-gray-700 mb-2">Esterilización</h4>
									<p className={animal.castrado ? 'text-green-600' : 'text-amber-600'}>
										{animal.castrado ? '✓ Esterilizado' : 'Programar esterilización'}
									</p>
								</div>

								{specialNeeds && (
									<div>
										<h4 className="font-semibold text-gray-700 mb-2">Cuidados especiales</h4>
										<p className="text-amber-600">Necesita atención específica</p>
									</div>
								)}
							</div>
						</div>

						{/* Compartir */}
						<div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
							<h3 className="text-xl font-bold text-gray-800 mb-4">Ayuda a {animal.nombre}</h3>
							<p className="text-gray-600 mb-4 text-sm">
								Compartí su historia para que más personas puedan conocerlo y ayudarlo a encontrar un hogar.
							</p>
							<div className="flex gap-3">
								<Button variant="outline" size="sm" className="flex-1">
									Facebook
								</Button>
								<Button variant="outline" size="sm" className="flex-1">
									Instagram
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
