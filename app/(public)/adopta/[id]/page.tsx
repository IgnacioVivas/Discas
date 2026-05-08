import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import PhotoGallery from '@/components/myComponents/PhotoGallery';
import {
	ArrowLeft, MapPin, Calendar, Ruler, User,
	Syringe, Bug, Scissors, HeartHandshake, Star, ClipboardList,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default async function AnimalDetailPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const animal = await prisma.animal.findUnique({
		where: { id, publicado: true, fallecido: false, adoptado: false },
	});

	if (!animal) return notFound();

	const tipoBadge =
		animal.tipo === 'perro' ? { label: '🐕 Perro', cls: 'bg-amber-100 text-amber-800' }
		: animal.tipo === 'gato' ? { label: '🐈 Gato', cls: 'bg-teal-100 text-teal-800' }
		: { label: '🐾 Otro', cls: 'bg-gray-100 text-gray-700' };

	return (
		<div className="min-h-screen bg-gray-50">

			{/* Hero */}
			<div className="relative h-[55vh] min-h-80 w-full overflow-hidden">
				<Image
					src={animal.imagenCard}
					alt={animal.nombre}
					fill
					className="object-cover"
					priority
					sizes="100vw"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

				{/* Back button */}
				<Link
					href="/adopta"
					className="absolute top-6 left-6 flex items-center gap-2 text-white/90 hover:text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium transition-all"
				>
					<ArrowLeft className="w-4 h-4" />
					Volver
				</Link>

				{/* Name + meta */}
				<div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
					<div className="container mx-auto max-w-5xl">
						<div className="flex flex-wrap gap-2 mb-3">
							<Badge className={cn('border-0 font-medium', tipoBadge.cls)}>{tipoBadge.label}</Badge>
							{animal.discapacidad && (
								<Badge className="bg-amber-500/90 text-white border-0">💝 {animal.discapacidad}</Badge>
							)}
						</div>
						<h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
							{animal.nombre}
						</h1>
						<div className="flex flex-wrap gap-4 text-white/85 text-sm">
							<span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{animal.edad} {animal.edad === 1 ? 'año' : 'años'}</span>
							<span className="flex items-center gap-1.5"><User className="w-4 h-4" />{animal.genero}</span>
							{animal.tamaño && <span className="flex items-center gap-1.5"><Ruler className="w-4 h-4" />{animal.tamaño}</span>}
							{animal.ubicacion && <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{animal.ubicacion}</span>}
						</div>
					</div>
				</div>
			</div>

			{/* Contenido */}
			<div className="container mx-auto max-w-5xl px-4 py-10 grid lg:grid-cols-3 gap-8">

				{/* Columna principal */}
				<div className="lg:col-span-2 space-y-6">

					{/* Descripción */}
					<section className="bg-white rounded-2xl p-6 shadow-sm">
						<p className="text-gray-700 leading-relaxed text-[1.05rem]">{animal.descripcion}</p>
					</section>

					{/* Galería */}
					{animal.fotos.length > 0 && (
						<section className="bg-white rounded-2xl p-6 shadow-sm">
							<h2 className="text-lg font-bold text-gray-800 mb-4">Galería de fotos</h2>
							<PhotoGallery photos={animal.fotos} name={animal.nombre} />
						</section>
					)}

					{/* Personalidad */}
					{animal.personalidad.length > 0 && (
						<section className="bg-white rounded-2xl p-6 shadow-sm">
							<h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
								<Star className="w-5 h-5 text-amber-500" />
								Personalidad
							</h2>
							<div className="flex flex-wrap gap-2">
								{animal.personalidad.map((trait, i) => (
									<span key={i} className="px-3 py-1.5 bg-amber-50 text-amber-800 rounded-full text-sm font-medium border border-amber-200">
										{trait}
									</span>
								))}
							</div>
						</section>
					)}

					{/* Requisitos de adopción */}
					{animal.requisitosDeAdopcion.length > 0 && (
						<section className="bg-white rounded-2xl p-6 shadow-sm">
							<h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
								<ClipboardList className="w-5 h-5 text-teal-600" />
								Requisitos de adopción
							</h2>
							<ol className="space-y-3">
								{animal.requisitosDeAdopcion.map((req, i) => (
									<li key={i} className="flex items-start gap-3">
										<span className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-100 text-teal-700 font-bold text-sm flex items-center justify-center mt-0.5">
											{i + 1}
										</span>
										<p className="text-gray-700 pt-1">{req}</p>
									</li>
								))}
							</ol>
						</section>
					)}
				</div>

				{/* Sidebar */}
				<div className="space-y-5">

					{/* Info básica */}
					<div className="bg-white rounded-2xl p-5 shadow-sm">
						<h3 className="text-base font-bold text-gray-800 mb-4">Información</h3>
						<div className="space-y-3">
							{[
								{ label: 'Edad', value: `${animal.edad} ${animal.edad === 1 ? 'año' : 'años'}` },
								{ label: 'Género', value: animal.genero },
								{ label: 'Tamaño', value: animal.tamaño },
								{ label: 'Ubicación', value: animal.ubicacion || 'Córdoba, Argentina' },
							].map(({ label, value }) => (
								<div key={label} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
									<span className="text-sm text-gray-500">{label}</span>
									<span className="text-sm font-semibold text-gray-800">{value}</span>
								</div>
							))}
						</div>
					</div>

					{/* Salud */}
					<div className="bg-white rounded-2xl p-5 shadow-sm">
						<h3 className="text-base font-bold text-gray-800 mb-4">Salud</h3>
						<div className="space-y-2">
							<HealthItem icon={Syringe} label="Vacunado" ok={animal.vacunado} />
							<HealthItem icon={Bug} label="Desparasitado" ok={animal.desparasitado} />
							<HealthItem icon={Scissors} label="Castrado" ok={animal.castrado} />
						</div>
					</div>

					{/* CTA adopción */}
					<div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-6 text-white shadow-md">
						<HeartHandshake className="w-8 h-8 mb-3 opacity-90" />
						<h3 className="text-lg font-bold mb-1">¿Querés adoptar a {animal.nombre}?</h3>
						<p className="text-white/80 text-sm mb-5">
							Contactanos y comenzá el proceso de adopción. ¡{animal.nombre} te está esperando!
						</p>
						<Link
							href="/contacto"
							className="block w-full text-center bg-white text-teal-700 font-semibold py-2.5 rounded-xl hover:bg-white/90 transition-colors"
						>
							Quiero adoptarlo
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

function HealthItem({ icon: Icon, label, ok }: { icon: React.ElementType; label: string; ok: boolean }) {
	return (
		<div className={cn('flex items-center justify-between px-3 py-2.5 rounded-xl', ok ? 'bg-green-50' : 'bg-gray-50')}>
			<div className="flex items-center gap-2.5">
				<Icon className={cn('w-4 h-4', ok ? 'text-green-600' : 'text-gray-400')} />
				<span className="text-sm text-gray-700">{label}</span>
			</div>
			<span className={cn('text-xs font-semibold px-2 py-0.5 rounded-full', ok ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500')}>
				{ok ? 'Sí' : 'No'}
			</span>
		</div>
	);
}
