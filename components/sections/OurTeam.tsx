'use client';

import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { PawPrint, Users, Heart, Star, Sparkles, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Importa tus imágenes locales
import presidenta from '@/public/image/equipo/pamela-carranza.jpg';
import secretaria from '@/public/image/equipo/natalia-perdiguera.jpg';
import tesorera from '@/public/image/equipo/silvina-capellino.jpg';

const equipo = [
	{
		nombre: 'Pamela Carranza',
		cargo: 'Presidenta',
		image: presidenta,
		descripcion: 'Lidera con pasión y compromiso el camino de Discas desde sus inicios.',
		rol: 'Fundadora y líder',
		color: 'teal',
	},
	{
		nombre: 'Natalia Perdiguera',
		cargo: 'Secretaria',
		image: secretaria,
		descripcion: 'Coordina la comunicación y gestión administrativa con dedicación absoluta.',
		rol: 'Coordinadora general',
		color: 'amber',
	},
	{
		nombre: 'Silvina Capellino',
		cargo: 'Tesorera',
		image: tesorera,
		descripcion: 'Administra los recursos con transparencia y responsabilidad.',
		rol: 'Gestión financiera',
		color: 'pink',
	},
];

const OurTeam = () => {
	return (
		<section className="bg-linear-to-b from-white to-teal-50/30">
			<div className="container mx-auto px-4">
				{/* Encabezado */}
				<div className="text-center mb-12">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-teal-100 to-amber-100 rounded-full mb-4"
					>
						<Sparkles className="w-4 h-4 text-teal-600" />
						<span className="text-sm font-medium text-teal-700">Conocé a nuestro equipo</span>
					</motion.div>

					<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-teal-800 via-amber-700 to-teal-800 bg-clip-text text-transparent">
						Las personas detrás de Discas
					</h2>

					<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
						Un equipo comprometido que trabaja todos los días para acompañar, cuidar y transformar vidas.
					</p>
				</div>

				{/* Grid del equipo */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{equipo.map((persona, index) => {
						const colors = {
							teal: {
								bg: 'bg-teal-100',
								text: 'text-teal-700',
								border: 'border-teal-200',
								dark: 'bg-teal-600',
							},
							amber: {
								bg: 'bg-amber-100',
								text: 'text-amber-700',
								border: 'border-amber-200',
								dark: 'bg-amber-600',
							},
							pink: {
								bg: 'bg-pink-100',
								text: 'text-pink-700',
								border: 'border-pink-200',
								dark: 'bg-pink-600',
							},
						};

						const currentColor = colors[persona.color as keyof typeof colors] || colors.teal;

						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ y: -10 }}
								className="relative"
							>
								{/* Fondo decorativo */}
								<div className={`absolute -inset-4 ${currentColor.bg} rounded-3xl blur-xl opacity-30`} />

								<Card className="relative border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
									{/* Imagen del miembro */}
									<div className="relative h-96 overflow-hidden">
										<Image
											src={persona.image}
											alt={persona.nombre}
											fill
											className="object-cover object-top transition-transform duration-500 hover:scale-105"
											sizes="(max-width: 768px) 100vw, 33vw"
										/>

										{/* Overlay */}
										<div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

										{/* Badge del cargo */}
										<div className="absolute top-4 left-4">
											<div className={`px-3 py-1 ${currentColor.dark} text-white text-xs font-semibold rounded-full`}>
												{persona.rol}
											</div>
										</div>
									</div>

									<CardContent className="p-6">
										{/* Nombre y cargo */}
										<div className="text-center mb-4">
											<h3 className="text-xl font-bold text-gray-800 mb-1">{persona.nombre}</h3>
											<div className="flex items-center justify-center gap-2">
												<Separator className="flex-1 max-w-16" />
												<PawPrint className="w-4 h-4 text-gray-400" />
												<Separator className="flex-1 max-w-16" />
											</div>
											<p className={`text-sm font-semibold mt-2 ${currentColor.text}`}>{persona.cargo}</p>
										</div>

										{/* Descripción */}
										<p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">{persona.descripcion}</p>

										{/* Separador */}
										<Separator className="my-4" />

										{/* Botones de contacto */}
										<div className="flex gap-2">
											<Button
												variant="outline"
												size="sm"
												className={`flex-1 border ${currentColor.border} hover:${currentColor.bg}`}
											>
												<Mail className="w-3 h-3 mr-1" />
												Email
											</Button>
											<Button
												variant="outline"
												size="sm"
												className={`flex-1 border ${currentColor.border} hover:${currentColor.bg}`}
											>
												<Phone className="w-3 h-3 mr-1" />
												Llamar
											</Button>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>

				{/* Llamado a la acción */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
					className="mt-16 text-center"
				>
					<div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 bg-linear-to-r from-white to-teal-50 rounded-2xl border border-teal-200 max-w-3xl mx-auto shadow-lg">
						<div className="flex-1 text-center md:text-left">
							<h3 className="text-2xl font-bold text-gray-800 mb-2">¿Querés contactar a nuestro equipo?</h3>
							<p className="text-gray-600 mb-4">
								Estamos aquí para responder tus dudas, escuchar tus ideas y trabajar juntos.
							</p>
						</div>

						<Button
							size="lg"
							className="bg-linear-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 font-semibold shadow-lg"
						>
							<Users className="w-5 h-5 mr-2" />
							Contactar equipo
						</Button>
					</div>
				</motion.div>

				{/* Equipo extendido */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6 }}
					className="mt-16"
				>
					<Card className="bg-linear-to-r from-amber-50 to-pink-50 border-amber-200">
						<CardContent className="p-8">
							<div className="flex flex-col md:flex-row items-center gap-6">
								<div className="p-4 bg-white rounded-xl shadow-sm">
									<Heart className="w-8 h-8 text-pink-500" />
								</div>
								<div className="flex-1">
									<h4 className="font-bold text-center md:text-start text-gray-800 mb-2">
										Más allá del equipo directivo
									</h4>
									<p className="text-gray-700 text-center md:text-start">
										Detrás de Discas hay decenas de voluntarios, veterinarios, hogares temporales y colaboradores que
										hacen posible nuestro trabajo cada día. Cada persona que aporta su tiempo, conocimiento o recursos
										es parte fundamental de esta gran familia.
									</p>
								</div>
								<div className="flex items-center gap-2">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
									))}
								</div>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</section>
	);
};

export default OurTeam;
