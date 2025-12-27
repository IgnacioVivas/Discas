// import { Button } from '../ui/button';
// import Image from 'next/image';

// const SeVoluntario = () => {
// 	return (
// 		<div className="flex flex-col xl:flex-row items-center justify-center gap-10">
// 			<div className="w-auto xl:w-1/2">
// 				<Image
// 					src="/image/varias/voluntarios-1.jpg"
// 					alt="perro disca de festejo"
// 					width={1600}
// 					height={1066}
// 					className="w-full h-auto object-cover"
// 				/>
// 			</div>

// 			<div className="w-auto xl:w-1/2 flex flex-col gap-4">
// 				<h2 className="font-nunito uppercase text-3xl md:text-[2.5rem] tracking-widest text-teal-dark font-bold">
// 					Sumate como voluntario/a
// 				</h2>
// 				<p className="text-lg leading-relaxed text-stone-700 font-inter">
// 					Ser voluntario en Discas es acompañar, sostener y darle voz a quienes más lo necesitan. Nuestro equipo
// 					necesita personas con ganas de ayudar desde distintos lugares: en redes sociales, diseño, edición,
// 					organización de eventos, traslados solidarios, seguimiento de nuevos rescatados, hogares provisorios y paseos
// 					para nuestros peluditos discas.
// 				</p>
// 				<p className="text-lg leading-relaxed text-stone-700 font-inter">
// 					Cada tarea, por pequeña que parezca, hace una diferencia enorme en su bienestar y en su oportunidad de
// 					encontrar un hogar definitivo.
// 				</p>
// 				<p className="text-lg leading-relaxed text-stone-700 font-inter">
// 					El trabajo es completamente solidario y los horarios se coordinan según las necesidades de la fundación y tu
// 					disponibilidad.
// 				</p>
// 				<Button
// 					className="w-fit px-9 py-5 uppercase text-white text-sm bg-teal-500
// 											shadow hover:bg-teal-600 tracking-widest font-medium rounded-md
// 											transition-all duration-200 hover:shadow-md cursor-pointer"
// 				>
// 					Quiero ser voluntario
// 				</Button>

// 				<span className="text-xl leading-relaxed text-orange font-medium font-quicksand">
// 					¡Gracias por sumar tu corazón a esta causa!
// 				</span>
// 			</div>
// 		</div>
// 	);
// };

// export default SeVoluntario;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Calendar, MapPin, Video, Globe, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const SeVoluntario = () => {
	const volunteerRoles = [
		{ icon: Globe, title: 'Redes sociales', description: 'Crear contenido y gestionar comunidades' },
		{ icon: Video, title: 'Diseño y edición', description: 'Videos, fotos y material gráfico' },
		{ icon: Calendar, title: 'Eventos', description: 'Organización de actividades solidarias' },
		{ icon: MapPin, title: 'Traslados', description: 'Transporte de animales y donaciones' },
		{ icon: Users, title: 'Hogares provisorios', description: 'Cuidado temporal de animales' },
		{ icon: Heart, title: 'Paseos y cuidado', description: 'Tiempo de calidad con nuestros peluditos' },
	];

	return (
		<section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50/30">
			<div className="container mx-auto px-4">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Columna de imagen */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative order-2 lg:order-1"
					>
						{/* Marco decorativo */}
						<div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-amber-400 rounded-3xl blur-xl opacity-20" />

						<div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
							<Image
								src="/image/varias/voluntarios-1.jpg"
								alt="Voluntarios de Discas ayudando a animales"
								width={800}
								height={600}
								className="w-full h-auto object-cover"
							/>

							{/* Overlay informativo */}
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
								<div className="text-white">
									<h4 className="text-xl font-bold mb-2">Nuestro equipo te espera</h4>
									<p className="text-white/90">
										Personas reales, corazones grandes, haciendo la diferencia todos los días.
									</p>
								</div>
							</div>
						</div>

						{/* Elementos decorativos */}
						<div className="absolute -top-4 -right-4">
							<div className="p-3 bg-amber-100 rounded-xl shadow-lg">
								<Heart className="w-6 h-6 text-amber-600" />
							</div>
						</div>

						<div className="absolute -bottom-4 -left-4">
							<div className="p-3 bg-teal-100 rounded-xl shadow-lg">
								<Users className="w-6 h-6 text-teal-600" />
							</div>
						</div>
					</motion.div>

					{/* Columna de texto */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-8 order-1 lg:order-2"
					>
						{/* Encabezado */}
						<div>
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-100 to-amber-100 rounded-full mb-4">
								<Sparkles className="w-4 h-4 text-teal-600" />
								<span className="text-sm font-medium text-teal-700">Sumá tu tiempo y corazón</span>
							</div>

							<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-800 via-amber-700 to-teal-800 bg-clip-text text-transparent">
								Sumate como voluntario/a
							</h2>

							<p className="text-lg text-gray-700 leading-relaxed">
								Ser voluntario en Discas es acompañar, sostener y darle voz a quienes más lo necesitan.
							</p>
						</div>

						{/* Descripción */}
						<Card className="bg-gradient-to-br from-white to-teal-50 border-teal-100 shadow-sm">
							<CardContent className="p-6">
								<div className="space-y-4">
									<p className="text-gray-700 leading-relaxed">
										Nuestro equipo necesita personas con ganas de ayudar desde distintos lugares. Cada tarea, por
										pequeña que parezca, hace una diferencia enorme en su bienestar y en su oportunidad de encontrar un
										hogar definitivo.
									</p>

									<div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200">
										<p className="text-amber-800 font-medium">
											El trabajo es completamente solidario y los horarios se coordinan según las necesidades de la
											fundación y tu disponibilidad.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Roles disponibles */}
						<div>
							<h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
								<Users className="w-5 h-5 text-teal-600" />
								¿En qué podés ayudar?
							</h3>
							<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
								{volunteerRoles.map((role, index) => {
									const Icon = role.icon;
									return (
										<motion.div
											key={index}
											whileHover={{ y: -5 }}
											className="p-3 bg-white border border-gray-200 rounded-xl hover:border-teal-300 hover:bg-teal-50 transition-colors"
										>
											<div className="flex items-center gap-2 mb-2">
												<div className="p-1.5 bg-teal-100 rounded-lg">
													<Icon className="w-4 h-4 text-teal-600" />
												</div>
												<span className="font-medium text-gray-800 text-sm">{role.title}</span>
											</div>
											<p className="text-xs text-gray-600">{role.description}</p>
										</motion.div>
									);
								})}
							</div>
						</div>

						{/* Botón de acción */}
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								size="lg"
								className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 font-semibold shadow-lg px-8 py-6 text-lg w-full md:w-auto"
							>
								<Mail className="w-5 h-5 mr-2" />
								Quiero ser voluntario
							</Button>
						</motion.div>

						{/* Mensaje final */}
						<div className="pt-4">
							<p className="text-lg text-amber-700 font-medium flex items-center gap-2">
								<Heart className="w-5 h-5" />
								¡Gracias por sumar tu corazón a esta causa!
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default SeVoluntario;
