'use client';

import HeaderDos from '@/components/layout/HeaderDos';
import {
	HeartHandshake,
	Package,
	Banknote,
	MapPin,
	Truck,
	Calendar,
	AlertCircle,
	Sparkles,
	Gift,
	HandHeart,
	ArrowRight,
	ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const Donaciones = () => {
	return (
		<main className="flex flex-col">
			{/* HEADER */}
			<HeaderDos
				title="Tu ayuda transforma vidas"
				description="Cada donación nos permite seguir rescatando, rehabilitando y dando segundas oportunidades a animales con discapacidad."
			/>

			{/* HERO SECTION - LLAMADO A LA ACCIÓN */}
			<section className="pt-16 bg-linear-to-b from-white to-teal-50/30">
				<div className="container mx-auto px-4">
					<div className="max-w-5xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="relative"
						>
							{/* Fondo decorativo */}
							<div className="absolute -inset-4 bg-linear-to-r from-teal-400 to-amber-400 rounded-3xl blur-xl opacity-10" />

							<div className="relative bg-linear-to-r from-teal-600 to-teal-700 text-white rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
								{/* Elementos decorativos */}
								<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
								<div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-20 -translate-x-20" />

								<div className="relative z-10">
									<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
										<Sparkles className="w-4 h-4" />
										<span className="text-sm font-medium">Tu apoyo marca la diferencia</span>
									</div>

									<h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl">
										¿Cómo puedes ayudar hoy a nuestros <span className="text-amber-300">discas especiales</span>?
									</h2>

									<p className="text-lg mb-8 opacity-95 leading-relaxed max-w-3xl">
										En Discas acompañamos a animales con discapacidad que necesitan cuidados constantes, tratamientos
										médicos especializados y mucho amor. Tu contribución puede cambiar completamente el destino de un
										peludito.
									</p>

									<div className="flex flex-wrap gap-4">
										<motion.a href="#economicas" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
											<Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 font-semibold shadow-lg">
												<Banknote className="w-5 h-5 mr-2" />
												Donar ahora
												<ArrowRight className="w-5 h-5 ml-2" />
											</Button>
										</motion.a>

										<motion.a href="#insumos" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
											<Button
												size="lg"
												variant="outline"
												className="border-2 border-white text-white hover:bg-white/10 font-semibold"
											>
												<Package className="w-5 h-5 mr-2" />
												Ver insumos necesarios
												<ChevronRight className="w-5 h-5 ml-2" />
											</Button>
										</motion.a>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* NAVEGACIÓN VISUAL */}
			<section className="py-8 my-32 bg-white border-y">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
						{[
							{ id: 'insumos', icon: Package, label: 'Insumos', color: 'teal' },
							{ id: 'economicas', icon: Banknote, label: 'Donación económica', color: 'amber' },
							{ id: 'entrega', icon: Truck, label: 'Puntos de entrega', color: 'pink' },
						].map((item, index) => {
							const Icon = item.icon;
							return (
								<motion.a
									key={item.id}
									href={`#${item.id}`}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ y: -5 }}
									className={`flex items-center gap-3 bg-white px-6 py-4 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 ${
										item.color === 'teal'
											? 'hover:border-teal-300'
											: item.color === 'amber'
											? 'hover:border-amber-300'
											: 'hover:border-pink-300'
									}`}
								>
									<div
										className={`p-2 rounded-lg ${
											item.color === 'teal'
												? 'bg-teal-100 text-teal-600'
												: item.color === 'amber'
												? 'bg-amber-100 text-amber-600'
												: 'bg-pink-100 text-pink-600'
										}`}
									>
										<Icon className="w-5 h-5" />
									</div>
									<span className="font-semibold text-gray-800">{item.label}</span>
								</motion.a>
							);
						})}
					</div>
				</div>
			</section>

			{/* SECCIÓN DE INSUMOS */}
			<section id="insumos" className="pb-16 scroll-mt-20 bg-linear-to-b from-white to-teal-50/30">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-6xl mx-auto"
					>
						<div className="text-center mb-12">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-4">
								<Package className="w-4 h-4 text-teal-600" />
								<span className="text-sm font-medium text-teal-700">Donaciones en especie</span>
							</div>
							<h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-teal-800 to-teal-600 bg-clip-text text-transparent">
								Insumos que necesitan nuestros rescatados
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Todo lo que nuestros peluditos requieren para su día a día y tratamientos especiales
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							{[
								{
									icon: '🧴',
									title: 'Curación y cuidado',
									items: [
										'Vendas comunes y Coban (5 a 10 cm)',
										'Gasas y algodón',
										'Agua oxigenada, pervinox',
										'Cremas: Adermicina, Hipoglós',
									],
									color: 'teal',
								},
								{
									icon: '💊',
									title: 'Medicación',
									items: ['Cefalexina 500', 'Complejo B, vitamina C', 'Quelantes, Urovier'],
									color: 'amber',
									alert: 'Debe estar vigente y en buen estado',
								},
								{
									icon: '👶',
									title: 'Pañales y absorbentes',
									items: ['Bebé: P, XG, XXG y XXXG', 'Adulto: talle G', 'Juveniles (cualquier marca)'],
									color: 'pink',
								},
								{
									icon: '🐕',
									title: 'Alimentos',
									items: ['Urinary y renal (perro)', 'Urinary (gato)', 'Balanceados +21% proteínas'],
									color: 'emerald',
								},
							].map((categoria, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ y: -10 }}
								>
									<Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
										<CardContent className="p-6">
											<div className="flex items-center gap-3 mb-6">
												<div
													className={`text-2xl p-3 rounded-xl ${
														categoria.color === 'teal'
															? 'bg-teal-100'
															: categoria.color === 'amber'
															? 'bg-amber-100'
															: categoria.color === 'pink'
															? 'bg-pink-100'
															: 'bg-emerald-100'
													}`}
												>
													{categoria.icon}
												</div>
												<h3 className="font-bold text-lg text-gray-800">{categoria.title}</h3>
											</div>

											<ul className="space-y-3">
												{categoria.items.map((item, idx) => (
													<li key={idx} className="flex items-start gap-3">
														<div
															className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
																categoria.color === 'teal'
																	? 'bg-teal-400'
																	: categoria.color === 'amber'
																	? 'bg-amber-400'
																	: categoria.color === 'pink'
																	? 'bg-pink-400'
																	: 'bg-emerald-400'
															}`}
														/>
														<span className="text-gray-700 text-sm leading-relaxed">{item}</span>
													</li>
												))}
											</ul>

											{categoria.alert && (
												<div className="mt-6 p-3 bg-amber-50 border border-amber-200 rounded-lg">
													<div className="flex items-center gap-2">
														<AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
														<span className="text-sm text-amber-700">{categoria.alert}</span>
													</div>
												</div>
											)}
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* SECCIÓN DE DONACIONES ECONÓMICAS */}
			<section id="economicas" className="my-32 pb-16 scroll-mt-20 bg-linear-to-b from-white to-teal-900/5">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-6xl mx-auto"
					>
						<div className="text-center mb-12">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
								<Banknote className="w-4 h-4 text-amber-600" />
								<span className="text-sm font-medium text-amber-700">Apoyo económico</span>
							</div>
							<h2 className="text-4xl font-bold mb-4 text-white bg-linear-to-r from-teal-600 to-teal-800 p-4 rounded-2xl">
								Donaciones económicas
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Tu contribución nos permite cubrir tratamientos, cirugías y cuidados especializados
							</p>
						</div>

						<div className="grid lg:grid-cols-2 gap-8">
							{/* Mercado Pago */}
							<motion.div
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								className="relative"
							>
								<div className="absolute -inset-4 bg-linear-to-r from-teal-400 to-teal-600 rounded-3xl blur-xl opacity-20" />
								<Card className="relative bg-linear-to-br from-teal-50 to-white border-teal-200 shadow-xl">
									<CardContent className="p-8">
										<div className="flex items-center gap-4 mb-6">
											<div className="p-3 bg-teal-100 rounded-xl">
												<div className="text-2xl">💳</div>
											</div>
											<div>
												<h3 className="text-2xl font-bold text-teal-900">Mercado Pago</h3>
												<p className="text-teal-700">La forma más rápida de ayudar</p>
											</div>
										</div>

										<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
											{['$100', '$200', '$500', '$1000', '$2000', 'Otro monto'].map((monto, idx) => (
												<motion.a
													key={idx}
													href={monto !== 'Otro monto' ? `https://mpago.la/...` : '#'}
													whileHover={{ scale: 1.05 }}
													whileTap={{ scale: 0.95 }}
													className={`p-4 rounded-xl text-center font-semibold transition-all ${
														monto === 'Otro monto'
															? 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
															: 'bg-teal-600 text-white hover:bg-teal-700'
													}`}
												>
													{monto}
												</motion.a>
											))}
										</div>

										<div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
											<p className="text-sm text-teal-800 font-medium">
												Buscanos como <span className="font-bold">Discas.cba</span> en Mercado Pago
											</p>
										</div>
									</CardContent>
								</Card>
							</motion.div>

							{/* Transferencia Bancaria */}
							<motion.div
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								className="relative"
							>
								<div className="absolute -inset-4 bg-linear-to-r from-amber-400 to-amber-600 rounded-3xl blur-xl opacity-20" />
								<Card className="relative bg-linear-to-br from-amber-50 to-white border-amber-200 shadow-xl">
									<CardContent className="p-8">
										<div className="flex items-center gap-4 mb-6">
											<div className="p-3 bg-amber-100 rounded-xl">
												<div className="text-2xl">🏦</div>
											</div>
											<div>
												<h3 className="text-2xl font-bold text-amber-900">Transferencia bancaria</h3>
												<p className="text-amber-700">Datos para transferir</p>
											</div>
										</div>

										<div className="space-y-4 mb-6">
											<div>
												<p className="text-sm text-gray-600 mb-2">Alias</p>
												<div className="bg-white border border-gray-300 p-3 rounded-lg font-mono text-gray-800">
													DISCAS.CORDOBA.ARG
												</div>
											</div>
											<div>
												<p className="text-sm text-gray-600 mb-2">CBU</p>
												<div className="bg-white border border-gray-300 p-3 rounded-lg font-mono text-sm text-gray-800 break-all">
													0340070808709868055000
												</div>
											</div>
											<div>
												<p className="text-sm text-gray-600 mb-2">Banco</p>
												<div className="bg-white border border-gray-300 p-3 rounded-lg text-gray-800">
													Banco Patagonia
												</div>
											</div>
										</div>

										<div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
											<div className="flex items-start gap-3">
												<AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
												<p className="text-sm text-amber-800">
													<span className="font-bold">Importante:</span> Enviá el comprobante por WhatsApp para que
													podamos agradecerte personalmente.
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* SECCIÓN DE PUNTOS DE ENTREGA */}
			<section id="entrega" className="mb-32 scroll-mt-20 bg-linear-to-b from-white to-amber-50/30">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-6xl mx-auto"
					>
						<div className="text-center mb-12">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
								<MapPin className="w-4 h-4 text-amber-600" />
								<span className="text-sm font-medium text-amber-700">Puntos de entrega</span>
							</div>
							<h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
								¿Dónde entregar donaciones?
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Puntos de recolección en Córdoba Capital e Interior
							</p>
						</div>

						<div className="grid lg:grid-cols-2 gap-8">
							{/* Córdoba Capital */}
							<motion.div
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								whileHover={{ y: -10 }}
							>
								<Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
									<CardContent className="p-8">
										<div className="flex items-center gap-4 mb-8">
											<div className="p-3 bg-amber-100 rounded-xl">
												<MapPin className="w-6 h-6 text-amber-600" />
											</div>
											<div>
												<h3 className="text-2xl font-bold text-amber-900">Córdoba Capital</h3>
												<p className="text-amber-700">Puntos fijos de recepción</p>
											</div>
										</div>

										<div className="space-y-6">
											<div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
												<h4 className="font-bold text-amber-800 mb-2">Veterinaria Quirós</h4>
												<p className="text-gray-700">Av. Duarte Quirós 3191</p>
												<div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
													<Calendar className="w-4 h-4" />
													<span>Lunes a Viernes 9:00 - 20:00</span>
												</div>
											</div>

											<div className="p-5 bg-white border border-amber-200 rounded-xl">
												<h4 className="font-bold text-amber-800 mb-2">Veterinaria Ánima</h4>
												<p className="text-gray-700">Av. Colón 1034</p>
												<div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
													<Calendar className="w-4 h-4" />
													<span>Lunes a Sábado 8:00 - 21:00</span>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>

							{/* Interior de Córdoba */}
							<motion.div
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								whileHover={{ y: -10 }}
							>
								<Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
									<CardContent className="p-8">
										<div className="flex items-center gap-4 mb-8">
											<div className="p-3 bg-pink-100 rounded-xl">
												<Truck className="w-6 h-6 text-pink-600" />
											</div>
											<div>
												<h3 className="text-2xl font-bold text-pink-900">Interior de Córdoba</h3>
												<p className="text-pink-700">Coordinamos encuentros</p>
											</div>
										</div>

										<div className="space-y-6">
											<div className="p-5 bg-pink-50 rounded-xl border border-pink-200">
												<p className="text-gray-700 mb-4">
													Coordinamos puntos de encuentro según tu ubicación. Contamos con voluntarios en varias
													localidades.
												</p>
												<Button className="bg-pink-600 hover:bg-pink-700 w-full">
													<Calendar className="w-4 h-4 mr-2" />
													Contactar para coordinar
												</Button>
											</div>

											<div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
												<div className="flex items-center gap-3 mb-3">
													<Truck className="w-5 h-5 text-blue-600" />
													<h4 className="font-bold text-blue-800">¿No podés acercarte?</h4>
												</div>
												<p className="text-blue-700 text-sm">
													En algunos casos podemos coordinar retiro a domicilio. Consultanos por WhatsApp.
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* CIERRE EMOCIONAL */}
			<section className="bg-linear-to-b from-white to-teal-50/30">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-3xl mx-auto text-center"
					>
						<div className="relative">
							<div className="absolute -inset-4 bg-linear-to-r from-amber-400 to-pink-400 rounded-3xl blur-xl opacity-10" />

							<div className="relative bg-linear-to-br from-amber-50 to-pink-50 border border-amber-200 rounded-2xl p-10 md:p-12 shadow-xl">
								<div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-amber-400 to-pink-400 rounded-full mb-6">
									<HeartHandshake className="w-8 h-8 text-white" />
								</div>

								<h3 className="text-3xl font-bold text-amber-900 mb-6">Gracias por ser parte de esta comunidad</h3>

								<Separator className="my-6 max-w-xs mx-auto" />

								<p className="text-lg text-gray-700 mb-8 leading-relaxed">
									Cada donación, cada insumo, cada peso cuenta. Gracias a personas como vos, cientos de animales con
									discapacidad encuentran una segunda oportunidad llena de amor, cuidados y dignidad.
								</p>

								<div className="flex flex-wrap gap-4 justify-center">
									<Button
										size="lg"
										className="bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800"
									>
										<Gift className="w-5 h-5 mr-2" />
										Quiero donar ahora
									</Button>

									<Button size="lg" variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-50">
										<HandHeart className="w-5 h-5 mr-2" />
										Compartir en redes
									</Button>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</main>
	);
};

export default Donaciones;
