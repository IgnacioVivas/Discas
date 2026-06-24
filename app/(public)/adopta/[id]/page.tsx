import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import PhotoGallery from '@/components/myComponents/PhotoGallery';
import {
	ArrowLeft, MapPin, Calendar, Ruler, User,
	Syringe, Bug, Scissors, HeartHandshake, Star, ClipboardList, AlertCircle, Clock,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// TODO: eliminar este mock cuando ya no se necesite
const MOCK_ANIMAL = {
	id: 'mock',
	nombre: 'Luna',
	tipo: 'perro' as const,
	descripcion: 'Luna llegó a la fundación siendo muy pequeña, con apenas 2 meses, después de ser rescatada de la calle. Es una perra súper cariñosa y juguetona que adora estar con personas. Se lleva bien con otros perros y le encanta el exterior. Busca una familia que le dé todo el amor que merece.',
	imagenCard: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
	fotos: [
		'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80',
		'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&q=80',
		'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&q=80',
	],
	edad: 2,
	genero: 'Hembra',
	tamaño: 'Mediano',
	ubicacion: 'Córdoba, Argentina',
	discapacidad: 'Cojea de la pata trasera derecha' as string | null,
	castrado: true,
	vacunado: true,
	desparasitado: false,
	personalidad: ['Juguetona', 'Cariñosa', 'Activa', 'Sociable', 'Inteligente'],
	requisitosDeAdopcion: [
		'Tener espacio al aire libre o salir a pasear al menos 2 veces por día',
		'No dejarla sola más de 6 horas seguidas',
		'Comprometerse con visitas veterinarias periódicas',
	],
	publicado: true,
	adoptado: false,
	fallecido: false,
	fechaIngreso: null,
	createdAt: new Date().toISOString(),
	updatedAt: new Date().toISOString(),
};

export default async function AnimalDetailPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	// TODO: eliminar el bloque mock cuando ya no se necesite
	const animal = id === 'mock'
		? MOCK_ANIMAL
		: await prisma.animal.findUnique({
				where: { id, publicado: true, fallecido: false, adoptado: false },
		  });

	if (!animal) return notFound();

	const tipoBadge =
		animal.tipo === 'perro' ? { label: '🐕 Perro', cls: 'bg-amber-100 text-amber-800' }
		: animal.tipo === 'gato' ? { label: '🐈 Gato', cls: 'bg-teal-100 text-teal-800' }
		: { label: '🐾 Otro', cls: 'bg-gray-100 text-gray-700' };

	const diasEsperando = animal.fechaIngreso
		? Math.floor((Date.now() - new Date(animal.fechaIngreso).getTime()) / 86_400_000)
		: null;

	return (
		<div className="min-h-screen bg-gray-50">

			{/* Header */}
			<div className="bg-gradient-to-r from-teal-600 to-teal-700">
				<div className="container mx-auto max-w-5xl px-4 pt-6 pb-8">
					<Link
						href="/adopta"
						className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-5 transition-colors"
					>
						<ArrowLeft className="w-4 h-4" />
						Volver a adoptar
					</Link>

					<div className="flex flex-wrap gap-2 mb-3">
						<Badge className={cn('border-0 font-medium text-xs', tipoBadge.cls)}>{tipoBadge.label}</Badge>
					</div>

					<h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">{animal.nombre}</h1>

					{diasEsperando !== null && (
						<div className="mt-4 mb-1 inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4">
							<div className="text-center min-w-[60px]">
								<div className="text-4xl sm:text-5xl font-black text-amber-300 leading-none">
									{diasEsperando.toLocaleString('es-AR')}
								</div>
								<div className="text-[11px] text-white/60 uppercase tracking-widest mt-1">
									{diasEsperando === 1 ? 'día' : 'días'}
								</div>
							</div>
							<div className="w-px h-12 bg-white/20 shrink-0" />
							<div className="text-left">
								<p className="text-white font-bold text-base leading-tight">{animal.nombre} lleva</p>
								<p className="text-white/80 text-sm leading-snug">esperando una familia</p>
								<p className="text-amber-300 text-xs font-semibold mt-1">Podés ser vos quien cambie eso 💛</p>
							</div>
						</div>
					)}

					<div className="flex flex-wrap gap-3 text-white/80 text-sm">
						<span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{animal.edad} {animal.edad === 1 ? 'año' : 'años'}</span>
						<span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{animal.genero}</span>
						{animal.tamaño && <span className="flex items-center gap-1.5"><Ruler className="w-3.5 h-3.5" />{animal.tamaño}</span>}
						{animal.ubicacion && <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{animal.ubicacion}</span>}
					</div>
				</div>
			</div>

			{/* Contenido */}
			<div className="container mx-auto max-w-5xl px-4 py-8">
				<div className="grid lg:grid-cols-3 gap-6">

					{/* Columna principal */}
					<div className="lg:col-span-2 space-y-5">

						{/* Descripción */}
						<div className="bg-white rounded-2xl p-5 shadow-sm">
							<p className="text-gray-700 leading-relaxed">{animal.descripcion}</p>
						</div>

						{/* Galería */}
						{animal.fotos.length > 0 && (
							<div className="bg-white rounded-2xl p-5 shadow-sm">
								<h2 className="text-base font-bold text-gray-800 mb-4">Más fotos</h2>
								<PhotoGallery photos={animal.fotos} name={animal.nombre} />
							</div>
						)}

						{/* Personalidad */}
						{animal.personalidad.length > 0 && (
							<div className="bg-white rounded-2xl p-5 shadow-sm">
								<h2 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
									<Star className="w-4 h-4 text-amber-500" />
									Personalidad
								</h2>
								<div className="flex flex-wrap gap-2">
									{animal.personalidad.map((trait, i) => (
										<span key={i} className="px-3 py-1.5 bg-amber-50 text-amber-800 rounded-full text-sm font-medium border border-amber-200">
											{trait}
										</span>
									))}
								</div>
							</div>
						)}

						{/* Requisitos */}
						{animal.requisitosDeAdopcion.length > 0 && (
							<div className="bg-white rounded-2xl p-5 shadow-sm">
								<h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
									<ClipboardList className="w-4 h-4 text-teal-600" />
									Requisitos de adopción
								</h2>
								<ol className="space-y-3">
									{animal.requisitosDeAdopcion.map((req, i) => (
										<li key={i} className="flex items-start gap-3">
											<span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-bold text-xs flex items-center justify-center mt-0.5">
												{i + 1}
											</span>
											<p className="text-gray-700 text-sm leading-relaxed pt-0.5">{req}</p>
										</li>
									))}
								</ol>
							</div>
						)}
					</div>

					{/* Sidebar */}
					<div className="space-y-4">

						{/* Info básica */}
						<div className="bg-white rounded-2xl p-5 shadow-sm">
							<h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">Información</h3>
							<div className="space-y-2">
								{[
									{ label: 'Edad', value: `${animal.edad} ${animal.edad === 1 ? 'año' : 'años'}` },
									{ label: 'Género', value: animal.genero },
									{ label: 'Tamaño', value: animal.tamaño },
									{ label: 'Ubicación', value: animal.ubicacion || 'Córdoba, Argentina' },
								].map(({ label, value }) => value && (
									<div key={label} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
										<span className="text-sm text-gray-500">{label}</span>
										<span className="text-sm font-semibold text-gray-800">{value}</span>
									</div>
								))}
							</div>
						</div>

						{/* Salud */}
						<div className="bg-white rounded-2xl p-5 shadow-sm">
							<h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">Salud</h3>
							<div className="space-y-2">
								<HealthItem icon={Syringe} label="Vacunado" ok={animal.vacunado} />
								<HealthItem icon={Bug} label="Desparasitado" ok={animal.desparasitado} />
								<HealthItem icon={Scissors} label="Castrado" ok={animal.castrado} />
								{animal.discapacidad && (
									<div className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl bg-amber-50 mt-1">
										<AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
										<div>
											<p className="text-xs font-semibold text-amber-700 mb-0.5">Necesidades especiales</p>
											<p className="text-xs text-amber-700">{animal.discapacidad}</p>
										</div>
									</div>
								)}
							</div>
						</div>

						{/* CTA */}
						<div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-5 text-white shadow-md">
							<HeartHandshake className="w-7 h-7 mb-2 opacity-90" />
							<h3 className="text-base font-bold mb-1">¿Querés adoptar a {animal.nombre}?</h3>
							<p className="text-white/75 text-xs mb-4 leading-relaxed">
								Contactanos y comenzá el proceso. ¡{animal.nombre} te está esperando!
							</p>
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSebGiJ32_soPpFQRk-VFLzpS72P1rAuqu5z-18diHp03eJBZw/viewform"
								target="_blank"
								rel="noopener noreferrer"
								className="block w-full text-center bg-white text-teal-700 font-semibold py-2.5 rounded-xl hover:bg-white/90 transition-colors text-sm cursor-pointer"
							>
								Quiero adoptarlo
							</a>
						</div>
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
