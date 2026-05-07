import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import PhotoGallery from '@/components/myComponents/PhotoGallery';
import { Heart, Shield, Clock, Home, Users, CheckCircle, ArrowLeft, Phone, Mail, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import Image from 'next/image';

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
	const animal = await prisma.animal.findUnique({
		where: { id, publicado: true },
	});

	if (!animal) return notFound();

	const animalType = detectAnimalType(animal.nombre, animal.descripcion);
	const specialNeeds = hasSpecialNeeds(animal.descripcion);

	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
			{/* Header Mejorado */}
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
								<Badge className="bg-white/20 text-white border-0">
									<Calendar className="w-3 h-3 mr-1" />
									{animal.edad} {animal.edad === 1 ? 'año' : 'años'}
								</Badge>
							</div>
							<h1 className="text-4xl md:text-5xl font-bold mb-2">{animal.nombre}</h1>
							<p className="text-xl text-white/90 flex items-center gap-4 flex-wrap">
								<span className="flex items-center gap-1">
									<MapPin className="w-4 h-4" />
									Córdoba, Argentina
								</span>
								<span className="text-white/70">•</span>
								<span>{animal.genero}</span>
								<span className="text-white/70">•</span>
								<span>{animal.tamaño}</span>
							</p>
						</div>

						<Button
							size="lg"
							className="bg-white text-teal-700 hover:bg-white/90 font-semibold shadow-lg transition-all hover:scale-105"
						>
							<Heart className="w-5 h-5 mr-2" />
							Quiero adoptar a {animal.nombre}
						</Button>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 py-8">
				<div className="grid lg:grid-cols-3 gap-8">
					{/* Columna izquierda - Galería y Descripción */}
					<div className="lg:col-span-2 space-y-6">
						{/* Galería de Fotos - Usando tu componente PhotoGallery */}
						<div className="bg-white rounded-2xl p-6 shadow-sm border">
							<h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
								<span className="p-2 bg-teal-100 rounded-lg">
									<Heart className="w-5 h-5 text-teal-600" />
								</span>
								Galería de {animal.nombre}
							</h2>
							<PhotoGallery photos={animal.fotos} name={animal.nombre} />
						</div>

						{/* Información detallada - Estilo mejorado */}
						<div className="bg-white rounded-2xl p-6 shadow-sm border">
							<h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
								<span className="p-2 bg-amber-100 rounded-lg">
									<Shield className="w-5 h-5 text-amber-600" />
								</span>
								La historia de {animal.nombre}
							</h2>

							<p className="text-gray-700 leading-relaxed mb-8 text-lg bg-amber-50/50 p-6 rounded-xl border border-amber-100">
								{animal.descripcion}
							</p>

							<Separator className="my-8" />

							{/* Personalidad - Estilo mejorado */}
							{animal.personalidad && animal.personalidad.length > 0 && (
								<div className="mb-8">
									<h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
										<span className="p-2 bg-blue-100 rounded-lg">
											<Users className="w-5 h-5 text-blue-600" />
										</span>
										Personalidad
									</h3>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										{animal.personalidad.map((trait, index) => (
											<div
												key={index}
												className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-teal-300 transition-colors"
											>
												<CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
												<span className="text-gray-700 font-medium">{trait}</span>
											</div>
										))}
									</div>
								</div>
							)}

							{/* Requisitos de Adopción - Estilo mejorado */}
							{animal.requisitosDeAdopcion && animal.requisitosDeAdopcion.length > 0 && (
								<div>
									<h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
										<span className="p-2 bg-green-100 rounded-lg">
											<Home className="w-5 h-5 text-green-600" />
										</span>
										Requisitos de Adopción
									</h3>
									<div className="space-y-4">
										{animal.requisitosDeAdopcion.map((requisito, index) => (
											<div
												key={index}
												className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50/50 to-teal-50/50 rounded-xl border border-green-200"
											>
												<div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full flex-shrink-0">
													<span className="text-green-700 font-bold">{index + 1}</span>
												</div>
												<div>
													<p className="text-gray-800 font-medium">{requisito}</p>
												</div>
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Columna derecha - Sidebar Mejorado */}
					<div className="space-y-6">
						{/* Tarjeta de Información Básica */}
						<div className="bg-white rounded-2xl p-6 shadow-sm border">
							<h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
								<span className="p-2 bg-teal-100 rounded-lg">
									<Calendar className="w-5 h-5 text-teal-600" />
								</span>
								Información Básica
							</h3>

							<div className="space-y-4">
								<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
									<span className="text-gray-600">Edad</span>
									<span className="font-semibold text-gray-800">
										{animal.edad} {animal.edad === 1 ? 'año' : 'años'}
									</span>
								</div>

								<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
									<span className="text-gray-600">Género</span>
									<span className="font-semibold text-gray-800">{animal.genero}</span>
								</div>

								<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
									<span className="text-gray-600">Tamaño</span>
									<Badge
										className={
											animal.tamaño?.toLowerCase().includes('pequeño')
												? 'bg-green-100 text-green-800'
												: animal.tamaño?.toLowerCase().includes('grande')
												? 'bg-purple-100 text-purple-800'
												: 'bg-blue-100 text-blue-800'
										}
									>
										{animal.tamaño}
									</Badge>
								</div>

								<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
									<span className="text-gray-600">Esterilizado</span>
									<Badge className={animal.castrado ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}>
										{animal.castrado ? 'Sí' : 'No'}
									</Badge>
								</div>
							</div>
						</div>

						{/* Tarjeta de Contacto Mejorada */}
						<div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm">
							<h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
								<span className="p-2 bg-teal-200 rounded-lg">
									<Phone className="w-5 h-5 text-teal-700" />
								</span>
								Contactar sobre {animal.nombre}
							</h3>

							<div className="space-y-4">
								<Button className="w-full bg-teal-600 hover:bg-teal-700 font-semibold shadow-md">
									<Phone className="w-4 h-4 mr-2" />
									Llamar ahora
								</Button>

								<Button variant="outline" className="w-full border-teal-300 hover:bg-teal-50">
									<Mail className="w-4 h-4 mr-2" />
									Enviar email
								</Button>
							</div>

							<Separator className="my-6" />

							<div className="space-y-4">
								<div className="p-4 bg-white/70 rounded-xl border border-teal-200">
									<h4 className="font-bold text-teal-800 mb-2 flex items-center gap-2">
										<Clock className="w-4 h-4" />
										Proceso de adopción
									</h4>
									<ol className="space-y-2 text-sm text-teal-700">
										<li className="flex items-center gap-2">
											<span className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center text-xs">
												1
											</span>
											<span>Contacto inicial</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center text-xs">
												2
											</span>
											<span>Entrevista telefónica</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center text-xs">
												3
											</span>
											<span>Visita al refugio</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center text-xs">
												4
											</span>
											<span>Período de adaptación</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center text-xs">
												5
											</span>
											<span>Seguimiento mensual</span>
										</li>
									</ol>
								</div>
							</div>
						</div>

						{/* Tarjeta de Salud y Cuidados */}
						<div className="bg-white rounded-2xl p-6 shadow-sm border">
							<h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
								<span className="p-2 bg-green-100 rounded-lg">
									<Shield className="w-5 h-5 text-green-600" />
								</span>
								Salud y cuidados
							</h3>
							<div className="space-y-4">
								<div className="p-3 bg-green-50 rounded-lg border border-green-200">
									<h4 className="font-semibold text-green-800 mb-1">Vacunas</h4>
									<p className="text-green-700">✓ Completas y al día</p>
								</div>

								<div
									className={`p-3 rounded-lg border ${
										animal.castrado ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'
									}`}
								>
									<h4 className="font-semibold mb-1">Esterilización</h4>
									<p className={animal.castrado ? 'text-green-700' : 'text-amber-700'}>
										{animal.castrado ? '✓ Esterilizado' : '● Programar esterilización'}
									</p>
								</div>

								{specialNeeds && (
									<div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
										<h4 className="font-semibold text-amber-800 mb-1">Cuidados especiales</h4>
										<p className="text-amber-700">Requiere atención específica y amor extra</p>
									</div>
								)}
							</div>
						</div>

						{/* Tarjeta de Compartir */}
						<div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
							<h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
								<span className="p-2 bg-amber-100 rounded-lg">
									<Heart className="w-5 h-5 text-amber-600" />
								</span>
								Ayuda a {animal.nombre}
							</h3>
							<p className="text-gray-600 mb-4 text-sm">
								Compartí su historia para que más personas puedan conocerlo y ayudarlo a encontrar un hogar para
								siempre.
							</p>
							<div className="flex gap-3">
								<Button variant="outline" size="sm" className="flex-1 border-amber-300 hover:bg-amber-50">
									Facebook
								</Button>
								<Button variant="outline" size="sm" className="flex-1 border-amber-300 hover:bg-amber-50">
									Instagram
								</Button>
							</div>
						</div>
					</div>
				</div>

				{/* Botón de acción final */}
				<div className="mt-12 text-center">
					<div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-teal-50 to-amber-50 rounded-2xl border border-teal-200 max-w-3xl mx-auto shadow-lg">
						<div className="flex-1 text-center sm:text-left">
							<h3 className="text-2xl font-bold text-gray-800 mb-2">¿Listo para darle un hogar a {animal.nombre}?</h3>
							<p className="text-gray-600">
								Este guerrero merece una familia llena de amor. Contactanos hoy mismo para empezar el proceso de
								adopción.
							</p>
						</div>

						<Button
							size="lg"
							className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 font-semibold shadow-lg px-8"
						>
							<Heart className="w-5 h-5 mr-2" />
							Adoptar a {animal.nombre}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
