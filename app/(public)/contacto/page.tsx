'use client';

import HeaderDos from '@/components/layout/HeaderDos';
import {
	Mail,
	Heart,
	Users,
	Dog,
	Cat,
	Shield,
	Sparkles,
	Clock,
	AlertTriangle,
	ChevronRight,
	MessageCircle,
	Instagram,
	Facebook,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SOCIAL_LINKS = [
	{
		name: 'Instagram',
		handle: '@discascordoba',
		href: 'https://www.instagram.com/discascordoba/',
		icon: Instagram,
		color: 'bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700',
	},
	{
		name: 'Facebook',
		handle: '@discas.rodandoporlavida',
		href: 'https://www.facebook.com/discas.rodandoporlavida',
		icon: Facebook,
		color: 'bg-blue-600 hover:bg-blue-700',
	},
	{
		name: 'TikTok',
		handle: '@discasrodandoporlavida',
		href: 'https://www.tiktok.com/@discasrodandoporlavida',
		icon: null,
		color: 'bg-black hover:bg-gray-800',
	},
];

const CONSULTAS = [
	{
		icon: Dog,
		title: 'Reportar animal en situación de calle',
		description: 'Si ves un animal herido, con discapacidad o en peligro, contactanos de inmediato.',
		color: { bg: 'bg-teal-100', icon: 'text-teal-600', text: 'text-teal-700' },
	},
	{
		icon: Heart,
		title: 'Adopciones responsables',
		description: 'Conocé nuestros discas especiales que buscan un hogar para siempre.',
		color: { bg: 'bg-pink-100', icon: 'text-pink-600', text: 'text-pink-700' },
	},
	{
		icon: Users,
		title: 'Voluntariado y padrinazgo',
		description: 'Sumate como voluntario o hacete padrino/madrina de uno de nuestros rescatados.',
		color: { bg: 'bg-emerald-100', icon: 'text-emerald-600', text: 'text-emerald-700' },
	},
	{
		icon: Cat,
		title: 'Donaciones y colaboraciones',
		description: 'Alimentos, medicamentos, pañales o donaciones económicas. Todo ayuda.',
		color: { bg: 'bg-blue-100', icon: 'text-blue-600', text: 'text-blue-700' },
	},
];

const Contacto = () => {
	return (
		<main className="flex flex-col">
			<HeaderDos
				title="Estamos aquí para ayudarte"
				description="Escribinos por redes o email. Juntos hacemos la diferencia."
			/>

			{/* HERO */}
			<section className="pt-16 bg-linear-to-b from-white to-teal-50/30">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="relative"
						>
							<div className="absolute -inset-4 bg-linear-to-r from-teal-400 to-amber-400 rounded-3xl blur-xl opacity-10" />

							<div className="relative bg-linear-to-r from-teal-600 to-teal-700 rounded-2xl shadow-2xl overflow-hidden">
								<div className="grid md:grid-cols-2">
									{/* Izquierda */}
									<div className="p-8 md:p-12 text-white">
										<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
											<Sparkles className="w-4 h-4" />
											<span className="text-sm font-medium">Contacto directo</span>
										</div>

										<h2 className="text-3xl md:text-4xl font-bold mb-4">
											¿Cómo podemos <span className="text-amber-300">ayudarte</span> hoy?
										</h2>

										<p className="text-lg mb-8 opacity-90 leading-relaxed">
											Podés escribirnos por email o por nuestras redes sociales. Respondemos a todas las consultas.
										</p>

										<div className="space-y-4">
											<motion.a
												href="mailto:discasrodandoporlavida@gmail.com"
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.3 }}
												className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
											>
												<div className="p-3 rounded-lg bg-teal-500/30">
													<Mail className="w-5 h-5" />
												</div>
												<div>
													<p className="font-semibold">Email</p>
													<p className="text-teal-100 text-sm">discasrodandoporlavida@gmail.com</p>
												</div>
											</motion.a>
										</div>
									</div>

									{/* Derecha */}
									<div className="bg-teal-800 p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
										<div className="absolute top-0 right-0 w-32 h-32 bg-teal-700 rounded-full -translate-y-16 translate-x-16" />
										<div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-700 rounded-full translate-y-20 -translate-x-20" />

										<div className="relative z-10 text-center space-y-6">
											<div>
												<h3 className="text-2xl font-bold text-white mb-2">Te respondemos</h3>
												<p className="text-teal-200 flex items-center justify-center gap-2 text-sm">
													<Clock className="w-4 h-4" /> En 24 a 48 horas
												</p>
											</div>
											<div className="flex flex-col gap-3">
												{SOCIAL_LINKS.map((s) => (
													<Link
														key={s.name}
														href={s.href}
														target="_blank"
														rel="noopener noreferrer"
														className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-white text-sm font-medium transition-all ${s.color}`}
													>
														{s.icon ? (
															<s.icon className="w-4 h-4" />
														) : (
															<svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
																<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.87a8.18 8.18 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z" />
															</svg>
														)}
														{s.handle}
													</Link>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* CONTENIDO PRINCIPAL */}
			<section className="my-32 bg-white">
				<div className="container mx-auto px-4 max-w-6xl">
					{/* Fila superior: contacto + qué consultarnos */}
					<div className="grid lg:grid-cols-2 gap-8 mb-8">
						{/* ESCRIBINOS */}
						<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
							<Card className="border-0 shadow-lg h-full">
								<CardContent className="p-8">
									<div className="flex items-center gap-4 mb-8">
										<div className="p-3 bg-teal-100 rounded-xl">
											<Mail className="w-6 h-6 text-teal-700" />
										</div>
										<div>
											<h3 className="text-2xl font-bold text-teal-900">Escribinos</h3>
											<p className="text-teal-700">Por email o por nuestras redes</p>
										</div>
									</div>

									<div className="space-y-5">
										<a
											href="mailto:discasrodandoporlavida@gmail.com"
											className="flex items-center gap-4 p-4 bg-teal-50 rounded-xl border border-teal-100 hover:border-teal-300 transition-colors group"
										>
											<div className="p-3 bg-teal-100 rounded-lg group-hover:bg-teal-200 transition-colors">
												<Mail className="w-5 h-5 text-teal-700" />
											</div>
											<div>
												<p className="font-semibold text-teal-900">Email</p>
												<p className="text-teal-700 text-sm">discasrodandoporlavida@gmail.com</p>
												<p className="text-xs text-gray-500 mt-0.5">Respondemos en 24-48 horas</p>
											</div>
										</a>

										<div className="p-4 bg-white border rounded-xl">
											<div className="flex items-center gap-3 mb-4">
												<Users className="w-5 h-5 text-pink-600" />
												<h4 className="font-bold text-pink-800">Redes sociales</h4>
											</div>
											<div className="flex flex-col gap-3">
												{SOCIAL_LINKS.map((s) => (
													<Link
														key={s.name}
														href={s.href}
														target="_blank"
														rel="noopener noreferrer"
														className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
													>
														<div className={`p-2 rounded-lg text-white ${s.color}`}>
															{s.icon ? (
																<s.icon className="w-4 h-4" />
															) : (
																<svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
																	<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.87a8.18 8.18 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z" />
																</svg>
															)}
														</div>
														<div>
															<p className="font-medium text-gray-800 text-sm">{s.name}</p>
															<p className="text-xs text-gray-500">{s.handle}</p>
														</div>
													</Link>
												))}
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>

						{/* QUÉ PODÉS CONSULTARNOS */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
						>
							<Card className="border-0 shadow-lg h-full">
								<CardContent className="p-8">
									<h3 className="text-2xl font-bold text-teal-900 mb-6">¿Qué podés consultarnos?</h3>

									<div className="space-y-3">
										{CONSULTAS.map((consulta, index) => {
											const Icon = consulta.icon;
											return (
												<motion.div
													key={index}
													initial={{ opacity: 0, x: 20 }}
													whileInView={{ opacity: 1, x: 0 }}
													viewport={{ once: true }}
													transition={{ delay: index * 0.1 }}
													whileHover={{ x: 5 }}
													className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group cursor-default"
												>
													<div
														className={`p-3 rounded-lg ${consulta.color.bg} group-hover:scale-110 transition-transform`}
													>
														<Icon className={`w-5 h-5 ${consulta.color.icon}`} />
													</div>
													<div className="flex-1">
														<h4 className={`font-bold mb-1 ${consulta.color.text}`}>{consulta.title}</h4>
														<p className="text-sm text-gray-600">{consulta.description}</p>
													</div>
													<ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gray-500 transition-colors mt-0.5" />
												</motion.div>
											);
										})}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</div>

					{/* EMERGENCIAS — ancho completo */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						<div className="relative overflow-hidden rounded-2xl shadow-xl">
							<div className="absolute inset-0 bg-linear-to-r from-rose-600 to-pink-600" />
							<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />

							<div className="relative p-8 md:p-10 text-white">
								<div className="flex items-center gap-4 mb-6">
									<div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
										<AlertTriangle className="w-8 h-8" />
									</div>
									<div>
										<h3 className="text-2xl font-bold">¿EMERGENCIA?</h3>
										<p className="text-rose-100">Animal herido o en peligro inmediato</p>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
									{/* TODO: Reemplazar este bloque con el formulario de emergencia cuando esté listo */}
									<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center flex flex-col items-center justify-center">
										<Shield className="w-10 h-10 mx-auto mb-3 opacity-70" />
										<p className="font-semibold text-lg mb-1">Formulario de emergencia</p>
										<p className="text-rose-200 text-sm">
											Próximamente disponible. Mientras tanto, contactanos por las redes sociales.
										</p>
									</div>

									<div className="bg-white/5 rounded-xl p-6">
										<p className="font-semibold mb-4 text-rose-100 text-sm uppercase tracking-wide">Mientras tanto:</p>
										<ul className="space-y-3 text-sm text-rose-100">
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-rose-300 rounded-full mt-1.5 shrink-0" />
												<span>Escribinos por Instagram o Facebook indicando la situación</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-rose-300 rounded-full mt-1.5 shrink-0" />
												<span>Describí la ubicación exacta del animal</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 bg-rose-300 rounded-full mt-1.5 shrink-0" />
												<span>Quedate cerca del animal si es seguro hacerlo</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* FAQ */}
			<section className="mb-32 bg-linear-to-b from-white to-teal-50/30">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-4xl mx-auto"
					>
						<div className="text-center mb-12">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-4">
								<MessageCircle className="w-4 h-4 text-teal-600" />
								<span className="text-sm font-medium text-teal-700">Preguntas frecuentes</span>
							</div>
							<h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-teal-800 to-teal-600 bg-clip-text text-transparent">
								Dudas comunes resueltas
							</h2>
						</div>

						<div className="grid md:grid-cols-2 gap-6">
							{[
								{
									question: '¿Qué hago si encuentro un animal herido?',
									answer:
										'Escribinos por Instagram o Facebook contando la situación y la ubicación exacta. Si podés, quedate cerca del animal hasta recibir respuesta.',
								},
								{
									question: '¿Puedo visitar para conocer a los discas?',
									answer:
										'Sí, pero las visitas se coordinan previamente. Escribinos por email o redes sociales y organizamos el encuentro.',
								},
								{
									question: '¿Qué insumos necesitan con urgencia?',
									answer:
										'Pañales tamaño bebé y adulto, alimentos urinary para perros y gatos, medicamentos y material de curación.',
								},
								{
									question: '¿Cómo puedo ser voluntario?',
									answer:
										'Escribinos por email o redes sociales. No necesitás experiencia previa, solo compromiso y amor por los animales.',
								},
							].map((faq, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ y: -4 }}
								>
									<Card className="border-0 shadow-sm hover:shadow-lg transition-shadow h-full">
										<CardContent className="p-6">
											<h4 className="font-bold text-teal-800 mb-3">{faq.question}</h4>
											<p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* CIERRE */}
			<section className="bg-linear-to-b from-teal-50/30 to-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-3xl mx-auto text-center"
					>
						<div className="relative">
							<div className="absolute -inset-4 bg-linear-to-r from-teal-400 to-amber-400 rounded-3xl blur-xl opacity-10" />

							<div className="relative bg-linear-to-br from-teal-50 to-white border border-teal-200 rounded-2xl p-10 md:p-12 shadow-xl">
								<div className="flex justify-center gap-6 mb-8">
									<Dog className="w-12 h-12 text-teal-600" />
									<Cat className="w-12 h-12 text-teal-600" />
									<Heart className="w-12 h-12 text-teal-600" />
								</div>

								<h3 className="text-3xl font-bold text-teal-900 mb-4">Gracias por querer ayudar</h3>

								<Separator className="my-6 max-w-xs mx-auto" />

								<p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
									Cada mensaje es un paso más hacia un mundo donde todos los animales, sin importar su discapacidad,
									reciban el amor que merecen.
								</p>

								<p className="mt-6 text-teal-700 font-semibold">🐾 El equipo de Discas te espera 🐾</p>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</main>
	);
};

export default Contacto;
