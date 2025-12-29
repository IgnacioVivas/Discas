'use client';

import HeaderDos from '@/components/layout/HeaderDos';
import {
	Phone,
	Mail,
	MapPin,
	Heart,
	MessageCircle,
	Users,
	Dog,
	Cat,
	Calendar,
	Shield,
	Home,
	Sparkles,
	Clock,
	AlertTriangle,
	ChevronRight,
	Send,
	Map,
	ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

const Contacto = () => {
	return (
		<main className="flex flex-col">
			{/* HEADER */}
			<HeaderDos
				title="Estamos aquí para ayudarte"
				description="Contactanos para rescates, adopciones, voluntariado o cualquier consulta. Juntos hacemos la diferencia."
			/>

			{/* HERO SECTION */}
			<section className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50/30">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="relative"
						>
							<div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-amber-400 rounded-3xl blur-xl opacity-10" />

							<div className="relative bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl shadow-2xl overflow-hidden">
								<div className="grid md:grid-cols-2">
									{/* Columna izquierda - Información */}
									<div className="p-8 md:p-12 text-white">
										<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
											<Sparkles className="w-4 h-4" />
											<span className="text-sm font-medium">Contacto directo y rápido</span>
										</div>

										<h2 className="text-3xl md:text-4xl font-bold mb-6">
											¿Cómo podemos <span className="text-amber-300">ayudarte</span> hoy?
										</h2>

										<p className="text-lg mb-8 opacity-95 leading-relaxed">
											Para reportar animales en situación de calle, consultar sobre adopciones, ofrecerte como
											voluntario o coordinar donaciones, estamos disponibles por:
										</p>

										<div className="space-y-6">
											{[
												{
													icon: Phone,
													title: 'Teléfono / WhatsApp',
													description: '+54 351 123-4567',
													color: 'bg-blue-500/20',
													urgent: true,
												},
												{
													icon: Mail,
													title: 'Email directo',
													description: 'discas.cba@gmail.com',
													color: 'bg-teal-500/20',
												},
												{
													icon: MessageCircle,
													title: 'Redes sociales',
													description: '@Discas.cba (Instagram y Facebook)',
													color: 'bg-pink-500/20',
												},
											].map((contacto, index) => {
												const Icon = contacto.icon;
												return (
													<motion.div
														key={index}
														initial={{ opacity: 0, x: -20 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{ delay: index * 0.1 + 0.3 }}
														className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors"
													>
														<div className={`p-3 rounded-lg ${contacto.color}`}>
															<Icon className="w-5 h-5" />
														</div>
														<div className="flex-1">
															<div className="flex items-center gap-2">
																<p className="font-semibold">{contacto.title}</p>
																{contacto.urgent && (
																	<span className="px-2 py-1 bg-red-500/20 text-red-200 text-xs rounded-full">
																		24/7
																	</span>
																)}
															</div>
															<p className="text-teal-100">{contacto.description}</p>
														</div>
													</motion.div>
												);
											})}
										</div>
									</div>

									{/* Columna derecha - Ilustración */}
									<div className="bg-teal-800 p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
										<div className="absolute top-0 right-0 w-32 h-32 bg-teal-700 rounded-full -translate-y-16 translate-x-16" />
										<div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-700 rounded-full translate-y-20 -translate-x-20" />

										<div className="relative z-10 text-center">
											<div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-400 to-pink-400 rounded-full mb-6">
												<Heart className="w-10 h-10 text-white" />
											</div>
											<h3 className="text-2xl font-bold text-white mb-4">Respuesta rápida</h3>
											<div className="space-y-2 text-teal-200">
												<div className="flex items-center justify-center gap-2">
													<Clock className="w-4 h-4" />
													<span>Respuesta en 24-48 horas</span>
												</div>
												<div className="flex items-center justify-center gap-2">
													<Send className="w-4 h-4" />
													<span>Sin formularios complicados</span>
												</div>
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
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
						{/* COLUMNA IZQUIERDA - INFORMACIÓN DE CONTACTO */}
						<div className="space-y-8">
							{/* CONTACTO PRINCIPAL */}
							<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
								<Card className="border-0 shadow-lg">
									<CardContent className="p-8">
										<div className="flex items-center gap-4 mb-8">
											<div className="p-3 bg-teal-100 rounded-xl">
												<Phone className="w-6 h-6 text-teal-700" />
											</div>
											<div>
												<h3 className="text-2xl font-bold text-teal-900">Contacto directo</h3>
												<p className="text-teal-700">Elegí el canal adecuado para tu consulta</p>
											</div>
										</div>

										<div className="space-y-6">
											{/* Emergencias */}
											<div className="p-5 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border border-red-200">
												<div className="flex items-center gap-3 mb-4">
													<Shield className="w-5 h-5 text-red-600" />
													<h4 className="font-bold text-red-800">Para emergencias y rescates</h4>
												</div>
												<div className="space-y-2">
													<p className="text-red-700 font-bold text-xl">+54 351 123-4567</p>
													<p className="text-sm text-red-600">Disponible 24/7 para animales en peligro inmediato</p>
													<Button size="sm" className="mt-2 bg-red-600 hover:bg-red-700">
														<Phone className="w-4 h-4 mr-2" />
														Llamar ahora
													</Button>
												</div>
											</div>

											{/* Consultas generales */}
											<div className="p-5 bg-white border rounded-xl hover:border-teal-300 transition-colors">
												<div className="flex items-center gap-3 mb-4">
													<MessageCircle className="w-5 h-5 text-teal-600" />
													<h4 className="font-bold text-teal-800">Para consultas generales</h4>
												</div>
												<div className="space-y-3">
													<div>
														<p className="text-teal-700 font-bold text-lg">+54 351 987-6543</p>
														<p className="text-sm text-gray-600">Lunes a Viernes de 9:00 a 18:00</p>
													</div>
													<Separator />
													<div>
														<p className="text-teal-700 font-bold text-lg">discas.cba@gmail.com</p>
														<p className="text-sm text-gray-600">Respondemos en 24-48 horas</p>
													</div>
												</div>
											</div>

											{/* Redes sociales */}
											<div className="p-5 bg-white border rounded-xl">
												<div className="flex items-center gap-3 mb-4">
													<Users className="w-5 h-5 text-pink-600" />
													<h4 className="font-bold text-pink-800">Redes sociales</h4>
												</div>
												<div className="flex flex-wrap gap-3">
													{[
														{ name: 'Instagram', color: 'bg-pink-500 hover:bg-pink-600' },
														{ name: 'Facebook', color: 'bg-blue-500 hover:bg-blue-600' },
														{ name: 'Twitter', color: 'bg-sky-500 hover:bg-sky-600' },
													].map((red, index) => (
														<motion.a
															key={index}
															href="#"
															whileHover={{ scale: 1.05 }}
															whileTap={{ scale: 0.95 }}
															className={`text-white px-4 py-2 rounded-lg font-medium transition-colors ${red.color}`}
														>
															{red.name}
														</motion.a>
													))}
												</div>
												<p className="text-sm text-gray-600 mt-3">@Discas.cba en todas las redes</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>

							{/* UBICACIÓN */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 }}
							>
								<Card className="border-0 shadow-lg">
									<CardContent className="p-8">
										<div className="flex items-center gap-4 mb-8">
											<div className="p-3 bg-amber-100 rounded-xl">
												<MapPin className="w-6 h-6 text-amber-700" />
											</div>
											<div>
												<h3 className="text-2xl font-bold text-amber-900">¿Dónde estamos?</h3>
												<p className="text-amber-700">Conocé nuestros espacios físicos</p>
											</div>
										</div>

										<div className="space-y-6">
											<div className="p-5 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl border border-amber-200">
												<div className="flex items-center gap-3 mb-4">
													<Home className="w-5 h-5 text-amber-600" />
													<h4 className="font-bold text-amber-800">Refugio principal</h4>
												</div>
												<div className="space-y-2">
													<p className="font-semibold text-amber-700">Ruta Provincial E55, Km 12.5</p>
													<p className="text-gray-700">Córdoba, Argentina</p>
													<div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
														<Map className="w-4 h-4" />
														<span>Coordenadas: -31.4201, -64.1888</span>
													</div>
												</div>
											</div>

											<div className="p-5 bg-white border rounded-xl">
												<div className="flex items-center gap-3 mb-4">
													<Calendar className="w-5 h-5 text-teal-600" />
													<h4 className="font-bold text-teal-800">Visitas al refugio</h4>
												</div>
												<p className="text-gray-700 mb-3">
													Las visitas son con cita previa coordinada por WhatsApp o teléfono.
												</p>
												<div className="bg-teal-50 p-3 rounded-lg">
													<p className="text-sm text-teal-800 font-medium">
														📅 <span className="font-bold">Horario de visitas:</span> Sábados de 10:00 a 13:00 hs.
													</p>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						</div>

						{/* COLUMNA DERECHA - INFORMACIÓN ADICIONAL */}
						<div className="space-y-8">
							{/* TIPOS DE CONSULTA */}
							<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
								<Card className="border-0 shadow-lg">
									<CardContent className="p-8">
										<h3 className="text-2xl font-bold text-teal-900 mb-8">¿Qué podés consultarnos?</h3>

										<div className="space-y-4">
											{[
												{
													icon: Dog,
													title: 'Reportar animales en situación de calle',
													description:
														'Si ves un animal herido, discapacitado o en peligro, contactanos inmediatamente.',
													color: 'teal',
												},
												{
													icon: Heart,
													title: 'Adopciones responsables',
													description:
														'Conocé nuestros perritos y gatitos especiales que buscan un hogar para siempre.',
													color: 'pink',
												},
												{
													icon: Users,
													title: 'Voluntariado y padrinazgo',
													description: 'Sumate como voluntario o hacete padrino/madrina de uno de nuestros rescatados.',
													color: 'emerald',
												},
												{
													icon: Cat,
													title: 'Donaciones y colaboraciones',
													description:
														'Toda ayuda es bienvenida: alimentos, medicamentos, pañales o donaciones económicas.',
													color: 'blue',
												},
											].map((consulta, index) => {
												const Icon = consulta.icon;
												const colors = {
													teal: { bg: 'bg-teal-100', text: 'text-teal-700', icon: 'text-teal-600' },
													pink: { bg: 'bg-pink-100', text: 'text-pink-700', icon: 'text-pink-600' },
													emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700', icon: 'text-emerald-600' },
													blue: { bg: 'bg-blue-100', text: 'text-blue-700', icon: 'text-blue-600' },
												};

												const color = colors[consulta.color as keyof typeof colors];

												return (
													<motion.div
														key={index}
														initial={{ opacity: 0, x: 20 }}
														whileInView={{ opacity: 1, x: 0 }}
														viewport={{ once: true }}
														transition={{ delay: index * 0.1 }}
														whileHover={{ x: 5 }}
														className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
													>
														<div className={`p-3 rounded-lg ${color.bg} group-hover:scale-110 transition-transform`}>
															<Icon className={`w-5 h-5 ${color.icon}`} />
														</div>
														<div className="flex-1">
															<h4 className={`font-bold mb-1 ${color.text}`}>{consulta.title}</h4>
															<p className="text-sm text-gray-600">{consulta.description}</p>
														</div>
														<ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
													</motion.div>
												);
											})}
										</div>
									</CardContent>
								</Card>
							</motion.div>

							{/* EMERGENCIA DESTACADA */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.2 }}
							>
								<div className="relative overflow-hidden rounded-2xl shadow-xl">
									<div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600" />
									<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />

									<div className="relative p-8 text-white">
										<div className="flex items-center gap-4 mb-8">
											<div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
												<AlertTriangle className="w-8 h-8" />
											</div>
											<div>
												<h3 className="text-2xl font-bold">¿EMERGENCIA?</h3>
												<p className="text-rose-100">Animal herido o en peligro inmediato</p>
											</div>
										</div>

										<div className="space-y-6">
											<div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
												<p className="font-semibold mb-3">Llamar inmediatamente a:</p>
												<div className="flex items-center justify-between">
													<p className="text-3xl font-bold tracking-tight">+54 351 123-4567</p>
													<Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50">
														<Phone className="w-5 h-5 mr-2" />
														Llamar ahora
													</Button>
												</div>
											</div>

											<div className="bg-white/5 rounded-lg p-4">
												<p className="font-semibold mb-3 text-rose-100">Protocolo de emergencia:</p>
												<ul className="space-y-2 text-sm text-rose-100">
													<li className="flex items-start gap-2">
														<div className="w-1.5 h-1.5 bg-rose-300 rounded-full mt-1.5 flex-shrink-0" />
														<span>No enviar mensajes de texto en emergencias</span>
													</li>
													<li className="flex items-start gap-2">
														<div className="w-1.5 h-1.5 bg-rose-300 rounded-full mt-1.5 flex-shrink-0" />
														<span>Contestar todas las preguntas del operador</span>
													</li>
													<li className="flex items-start gap-2">
														<div className="w-1.5 h-1.5 bg-rose-300 rounded-full mt-1.5 flex-shrink-0" />
														<span>Enviar ubicación exacta por WhatsApp si es posible</span>
													</li>
													<li className="flex items-start gap-2">
														<div className="w-1.5 h-1.5 bg-rose-300 rounded-full mt-1.5 flex-shrink-0" />
														<span>Quedarse cerca del animal si es seguro hacerlo</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</motion.div>

							{/* INFO RÁPIDA */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.3 }}
							>
								<Card className="border-0 shadow-lg">
									<CardContent className="p-8">
										<h3 className="font-bold text-teal-800 text-xl mb-6">Información rápida</h3>

										<div className="space-y-4">
											{[
												{ label: 'Respuesta a consultas', value: '24-48 horas', icon: Clock },
												{ label: 'Donaciones en especie', value: 'Con cita previa', icon: Calendar },
												{ label: 'Proceso de adopción', value: 'Entrevista + seguimiento', icon: Heart },
												{ label: 'Voluntariado', value: 'Inducción previa', icon: Users },
												{ label: 'Visitas al refugio', value: 'Sábados 10-13 hs', icon: Home },
											].map((item, index) => {
												const Icon = item.icon;
												return (
													<motion.div
														key={index}
														initial={{ opacity: 0, x: 20 }}
														whileInView={{ opacity: 1, x: 0 }}
														viewport={{ once: true }}
														transition={{ delay: 0.1 * index }}
														className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0 group"
													>
														<div className="flex items-center gap-3">
															<div className="p-2 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors">
																<Icon className="w-4 h-4 text-teal-600" />
															</div>
															<span className="text-gray-600">{item.label}</span>
														</div>
														<span className="font-semibold text-teal-700">{item.value}</span>
													</motion.div>
												);
											})}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ SECTION */}
			<section className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50/30">
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
							<h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-800 to-teal-600 bg-clip-text text-transparent">
								Dudas comunes resueltas
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Respuestas rápidas a las preguntas que más nos hacen
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-6">
							{[
								{
									question: '¿Qué hago si encuentro un animal herido?',
									answer:
										'1. Llamá al número de emergencias\n2. Describí la situación y ubicación exacta\n3. Si es seguro, quedate cerca hasta que lleguemos',
								},
								{
									question: '¿Puedo visitar para conocer los animales?',
									answer:
										'Sí, con cita previa. Coordiná por WhatsApp o teléfono. Los sábados realizamos visitas guiadas de 10:00 a 13:00 hs.',
								},
								{
									question: '¿Qué insumos necesitan con urgencia?',
									answer:
										'Pañales tamaño bebé y adulto, alimentos urinary para perros y gatos, medicamentos y material de curación.',
								},
								{
									question: '¿Cómo puedo ser voluntario?',
									answer:
										'Contactanos por WhatsApp o redes sociales. No necesitás experiencia previa, solo compromiso y amor por los animales.',
								},
							].map((faq, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ y: -5 }}
								>
									<Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
										<CardContent className="p-6">
											<h4 className="font-bold text-teal-800 mb-3">{faq.question}</h4>
											<p className="text-gray-600 text-sm whitespace-pre-line">{faq.answer}</p>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* CIERRE EMOTIVO */}
			<section className="py-16 bg-gradient-to-b from-teal-50/30 to-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-3xl mx-auto text-center"
					>
						<div className="relative">
							<div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-amber-400 rounded-3xl blur-xl opacity-10" />

							<div className="relative bg-gradient-to-br from-teal-50 to-white border border-teal-200 rounded-2xl p-10 md:p-12 shadow-xl">
								<div className="flex justify-center gap-6 mb-8">
									<Dog className="w-12 h-12 text-teal-600" />
									<Cat className="w-12 h-12 text-teal-600" />
									<Heart className="w-12 h-12 text-teal-600" />
								</div>

								<h3 className="text-3xl font-bold text-teal-900 mb-6">Gracias por querer ayudar</h3>

								<Separator className="my-6 max-w-xs mx-auto" />

								<p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
									Cada llamado, cada mensaje, es un paso más hacia un mundo donde todos los animales, sin importar su
									discapacidad o edad, reciban el amor y cuidado que merecen.
								</p>

								<div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full border border-teal-200 shadow-sm">
									<span className="text-teal-700 font-semibold">🐾 El equipo de Discas te espera 🐾</span>
									<ExternalLink className="w-5 h-5 text-teal-600" />
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</main>
	);
};

export default Contacto;
