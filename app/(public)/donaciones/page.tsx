// import HeaderDos from '@/components/layout/HeaderDos';
// import { HeartHandshake, Package, Banknote, MapPin, Truck, Calendar, AlertCircle } from 'lucide-react';

// const Donaciones = () => {
// 	return (
// 		<div className="">
// 			{/* HEADER */}
// 			<HeaderDos
// 				title="Ayudanos a seguir ayudando"
// 				description="Tu ayuda nos permite seguir rescatando, cuidando y acompañando a más animales."
// 			/>

// 			{/* LLAMADO A LA ACCIÓN */}
// 			<section className="px-6 md:px-28 mb-20">
// 				<div className="max-w-4xl mx-auto bg-linear-to-r from-teal-600 to-teal-700 text-white rounded-2xl p-8 md:p-12 shadow-lg">
// 					<h2 className="font-nunito uppercase text-2xl md:text-[2.5rem] font-bold">¿Cómo puedes ayudar hoy?</h2>
// 					<p className="text-lg mb-6 opacity-95 leading-relaxed font-inter">
// 						En Discas acompañamos a animales con discapacidad que necesitan cuidados constantes, tratamientos médicos y
// 						mucho amor. Cada donación marca la diferencia entre un animal que sufre y uno que recupera su calidad de
// 						vida.
// 					</p>
// 					<div className="flex flex-wrap gap-4">
// 						<a href="#economicas">
// 							<button className="bg-white text-teal-700 px-6 py-3 rounded-xl font-semibold hover:bg-teal-50 transition flex items-center gap-2">
// 								<Banknote className="w-5 h-5" />
// 								Donar ahora
// 							</button>
// 						</a>
// 						<a href="#insumos">
// 							<button className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition flex items-center gap-2">
// 								<Package className="w-5 h-5" />
// 								Ver insumos necesarios
// 							</button>
// 						</a>
// 					</div>
// 				</div>
// 			</section>

// 			{/* CONTENIDO PRINCIPAL EN PESTAÑAS VISUALES */}
// 			<section className="px-6 md:px-28 mb-32">
// 				<div className="max-w-6xl mx-auto">
// 					{/* NAVEGACIÓN VISUAL */}
// 					<div className="flex flex-wrap gap-4 mb-12 justify-center">
// 						<a
// 							href="#insumos"
// 							className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border shadow-sm hover:shadow-md transition hover:border-teal-300"
// 						>
// 							<Package className="w-5 h-5 text-teal-600" />
// 							<span className="font-semibold text-teal-900">Insumos</span>
// 						</a>
// 						<a
// 							href="#economicas"
// 							className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border shadow-sm hover:shadow-md transition hover:border-teal-300"
// 						>
// 							<Banknote className="w-5 h-5 text-teal-600" />
// 							<span className="font-semibold text-teal-900">Donación económica</span>
// 						</a>
// 						<a
// 							href="#entrega"
// 							className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border shadow-sm hover:shadow-md transition hover:border-teal-300"
// 						>
// 							<Truck className="w-5 h-5 text-teal-600" />
// 							<span className="font-semibold text-teal-900">Entrega</span>
// 						</a>
// 					</div>

// 					{/* INSUMOS - MEJOR ESTRUCTURA */}
// 					<div id="insumos" className="mb-16 scroll-mt-20">
// 						<div className="bg-white rounded-2xl border shadow-lg overflow-hidden">
// 							<div className="bg-linear-to-r from-teal-50 to-teal-100 p-8">
// 								<div className="flex items-center gap-3">
// 									<Package className="w-8 h-8 text-teal-700" />
// 									<h2 className="text-2xl font-bold text-teal-900 font-nunito">Donaciones de insumos</h2>
// 								</div>
// 								<p className="text-stone-600 mt-2 font-quicksand">
// 									Todo lo que necesitan nuestros rescatados para su día a día
// 								</p>
// 							</div>

// 							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
// 								<div className="space-y-4">
// 									<div className="flex items-center gap-2 text-teal-700">
// 										<div className="bg-teal-100 p-2 rounded-lg">🧴</div>
// 										<h3 className="font-bold text-teal-800 font-nunito">Curación y cuidado</h3>
// 									</div>
// 									<ul className="space-y-2 text-stone-700 font-inter">
// 										<li className="flex items-start gap-2">
// 											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
// 											<span>Vendas comunes y Coban (5 a 10 cm)</span>
// 										</li>
// 										<li className="flex items-start gap-2">
// 											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
// 											<span>Gasas, algodón</span>
// 										</li>
// 										<li className="flex items-start gap-2">
// 											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
// 											<span>Agua oxigenada, pervinox</span>
// 										</li>
// 										<li className="flex items-start gap-2">
// 											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
// 											<span>Cremas: Adermicina, Hipoglós</span>
// 										</li>
// 									</ul>
// 								</div>

// 								<div className="space-y-4">
// 									<div className="flex items-center gap-2 text-teal-700">
// 										<div className="bg-teal-100 p-2 rounded-lg">💊</div>
// 										<h3 className="font-bold text-teal-800 font-nunito">Medicación</h3>
// 									</div>
// 									<ul className="space-y-2 text-stone-700 font-inter">
// 										<li className="flex items-start gap-2">
// 											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
// 											<span>Cefalexina 500</span>
// 										</li>
// 										<li className="flex items-start gap-2">
// 											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
// 											<span>Complejo B, vitamina C</span>
// 										</li>
// 										<li className="flex items-start gap-2">
// 											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
// 											<span>Quelantes, Urovier</span>
// 										</li>
// 									</ul>
// 									<div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm font-nunito">
// 										<AlertCircle className="w-4 h-4 inline mr-1 text-amber-600" />
// 										<span className="text-amber-700">Debe estar vigente y en buen estado</span>
// 									</div>
// 								</div>

// 								<div className="space-y-4">
// 									<div className="flex items-center gap-2 text-teal-700">
// 										<div className="bg-teal-100 p-2 rounded-lg">👶</div>
// 										<h3 className="font-bold text-teal-800 font-nunito">Pañales y absorbentes</h3>
// 									</div>
// 									<ul className="space-y-2 text-stone-700 font-inter">
// 										<li className="flex items-start gap-2">
// 											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
// 											<span>Bebé: P, XG, XXG y XXXG</span>
// 										</li>
// 										<li className="flex items-start gap-2">
// 											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
// 											<span>Adulto: talle G</span>
// 										</li>
// 										<li className="flex items-start gap-2">
// 											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
// 											<span>Juveniles (cualquier marca)</span>
// 										</li>
// 									</ul>
// 								</div>

// 								<div className="space-y-4">
// 									<div className="flex items-center gap-2 text-teal-700">
// 										<div className="bg-teal-100 p-2 rounded-lg">🐕</div>
// 										<h3 className="font-bold text-teal-800 font-nunito">Alimentos</h3>
// 									</div>
// 									<ul className="space-y-2 text-stone-700 font-inter">
// 										<li className="flex items-start gap-2">
// 											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
// 											<span>Urinary y renal (perro)</span>
// 										</li>
// 										<li className="flex items-start gap-2">
// 											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
// 											<span>Urinary (gato)</span>
// 										</li>
// 										<li className="flex items-start gap-2">
// 											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
// 											<span>Balanceados +21% proteínas</span>
// 										</li>
// 									</ul>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					{/* DONACIONES ECONÓMICAS - MÁS VISUAL */}
// 					<div id="economicas" className="mb-16 scroll-mt-20">
// 						<div className="bg-linear-to-r from-teal-900 to-teal-800 text-white rounded-2xl shadow-xl overflow-hidden">
// 							<div className="p-8 md:p-12">
// 								<div className="flex items-center gap-3 mb-8">
// 									<Banknote className="w-8 h-8 text-teal-200" />
// 									<h2 className="text-2xl font-bold font-nunito">Donaciones económicas</h2>
// 								</div>

// 								<div className="grid md:grid-cols-2 gap-10">
// 									<div className="space-y-6">
// 										<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
// 											<h3 className="text-xl font-bold mb-4 flex items-center gap-2 font-nunito">
// 												<div className="bg-teal-700 p-2 rounded-lg">💳</div>
// 												Mercado Pago
// 											</h3>
// 											<p className="mb-6 opacity-90 font-inter">La forma más rápida de ayudar ahora mismo</p>

// 											<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4 font-inter">
// 												{['$100', '$200', '$300', '$500', '$1000', 'Otro monto'].map((monto, idx) => (
// 													<a
// 														key={idx}
// 														href={monto !== 'Otro monto' ? `https://mpago.la/...` : '#'}
// 														className="bg-white/20 hover:bg-white/30 border border-white/30 text-center py-3 rounded-lg font-semibold transition backdrop-blur-sm"
// 													>
// 														{monto}
// 													</a>
// 												))}
// 											</div>
// 											<p className="text-sm opacity-80 font-inter">
// 												Buscanos como <strong>Discas.cba</strong>
// 											</p>
// 										</div>
// 									</div>

// 									<div className="space-y-6">
// 										<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
// 											<h3 className="text-xl font-bold mb-4 flex items-center gap-2 font-nunito">
// 												<div className="bg-teal-700 p-2 rounded-lg">🏦</div>
// 												Transferencia bancaria
// 											</h3>

// 											<div className="space-y-4 mb-6 font-inter">
// 												<div>
// 													<p className="text-sm opacity-80 mb-1">Alias</p>
// 													<div className="bg-white/10 p-3 rounded-lg font-mono">DISCAS.CORDOBA.ARG</div>
// 												</div>
// 												<div>
// 													<p className="text-sm opacity-80 mb-1">CBU</p>
// 													<div className="bg-white/10 p-3 rounded-lg font-mono text-sm">0340070808709868055000</div>
// 												</div>
// 												<div>
// 													<p className="text-sm opacity-80 mb-1">Banco</p>
// 													<div className="bg-white/10 p-3 rounded-lg">Patagonia</div>
// 												</div>
// 											</div>

// 											<div className="bg-amber-900/30 border border-amber-700/50 rounded-lg p-3 text-sm font-nunito">
// 												<AlertCircle className="w-4 h-4 inline mr-1 text-amber-300" />
// 												<span className="opacity-90">Enviá el comprobante por mensaje privado</span>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					{/* ENTREGA - MÁS CLARO */}
// 					<div id="entrega" className="scroll-mt-20">
// 						<div className="bg-white rounded-2xl border shadow-lg overflow-hidden">
// 							<div className="bg-linear-to-r from-amber-50 to-amber-100 p-8">
// 								<div className="flex items-center gap-3">
// 									<MapPin className="w-8 h-8 text-amber-700" />
// 									<h2 className="text-2xl font-bold text-amber-900 font-nunito">¿Dónde entregar donaciones?</h2>
// 								</div>
// 								<p className="text-stone-600 mt-2 font-quicksand">
// 									Puntos de recolección en Córdoba Capital e Interior
// 								</p>
// 							</div>

// 							<div className="grid md:grid-cols-2 gap-8 p-8">
// 								<div className="space-y-6">
// 									<h3 className="text-xl font-bold text-amber-800 flex items-center gap-2 font-nunito">
// 										<div className="bg-amber-100 p-2 rounded-lg">📍</div>
// 										Córdoba Capital
// 									</h3>
// 									<div className="space-y-4">
// 										<div className="border border-amber-200 rounded-xl p-5 hover:border-amber-300 transition">
// 											<h4 className="font-bold text-amber-700 mb-2 font-nunito">Veterinaria Quirós</h4>
// 											<p className="text-stone-600 font-inter">Av. Duarte Quirós 3191</p>
// 											<p className="text-sm text-stone-500 mt-2 font-inter">Lunes a Viernes 9:00 - 20:00</p>
// 										</div>
// 										<div className="border border-amber-200 rounded-xl p-5 hover:border-amber-300 transition">
// 											<h4 className="font-bold text-amber-700 mb-2">Veterinaria Ánima</h4>
// 											<p className="text-stone-600 font-inter">Av. Colón 1034</p>
// 											<p className="text-sm text-stone-500 mt-2 font-inter">Lunes a Sábado 8:00 - 21:00</p>
// 										</div>
// 									</div>
// 								</div>

// 								<div className="space-y-6">
// 									<h3 className="text-xl font-bold text-amber-800 flex items-center gap-2 font-nunito">
// 										<div className="bg-amber-100 p-2 rounded-lg">🚚</div>
// 										Interior de Córdoba
// 									</h3>
// 									<div className="border border-amber-200 rounded-xl p-5">
// 										<p className="text-stone-600 mb-4 font-inter">
// 											Coordinamos puntos de encuentro según tu ubicación.
// 										</p>
// 										<button className="bg-amber-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-amber-700 transition flex items-center gap-2">
// 											<Calendar className="w-4 h-4" />
// 											Contactar para coordinar
// 										</button>
// 									</div>

// 									<div className="bg-blue-50 border border-blue-200 rounded-xl p-5 font-nunito">
// 										<h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
// 											<Truck className="w-5 h-5" />
// 											¿No podés acercarte?
// 										</h4>
// 										<p className="text-stone-600 text-sm">Podemos coordinar retiro a domicilio en algunos casos.</p>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			{/* CIERRE EMOCIONAL */}
// 			<section className="px-6 md:px-28 mb-20">
// 				<div className="max-w-3xl mx-auto text-center">
// 					<div className="bg-linear-to-br from-orange-50 to-amber-50 border border-amber-200 rounded-2xl p-10 shadow-sm">
// 						<HeartHandshake className="w-12 h-12 mx-auto text-amber-600 mb-6" />
// 						<h3 className="text-2xl font-bold text-amber-800 mb-4 font-nunito">
// 							Gracias por ser parte de esta comunidad
// 						</h3>
// 						<p className="text-lg text-stone-700 mb-6 leading-relaxed font-inter">
// 							Cada donación, cada insumo, cada peso cuenta. Gracias a personas como vos, cientos de animales con
// 							discapacidad encuentran una segunda oportunidad llena de amor y cuidados.
// 						</p>
// 						<div className="flex flex-wrap justify-center gap-4">
// 							<button className="bg-amber-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-amber-700 transition">
// 								Quiero donar ahora
// 							</button>
// 							<button className="border-2 border-amber-600 text-amber-700 px-8 py-3 rounded-xl font-semibold hover:bg-amber-50 transition">
// 								Compartir en redes
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		</div>
// 	);
// };

// export default Donaciones;

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
			<section className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50/30">
				<div className="container mx-auto px-4">
					<div className="max-w-5xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="relative"
						>
							{/* Fondo decorativo */}
							<div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-amber-400 rounded-3xl blur-xl opacity-10" />

							<div className="relative bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
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
			<section className="py-8 bg-white border-y">
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
			<section id="insumos" className="py-16 md:py-24 scroll-mt-20 bg-gradient-to-b from-white to-teal-50/30">
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
							<h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-800 to-teal-600 bg-clip-text text-transparent">
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
															className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
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
														<AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
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
			<section id="economicas" className="py-16 md:py-24 scroll-mt-20 bg-gradient-to-b from-white to-teal-900/5">
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
							<h2 className="text-4xl font-bold mb-4 text-white bg-gradient-to-r from-teal-600 to-teal-800 p-4 rounded-2xl">
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
								<div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-teal-600 rounded-3xl blur-xl opacity-20" />
								<Card className="relative bg-gradient-to-br from-teal-50 to-white border-teal-200 shadow-xl">
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
								<div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl blur-xl opacity-20" />
								<Card className="relative bg-gradient-to-br from-amber-50 to-white border-amber-200 shadow-xl">
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
												<AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
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
			<section id="entrega" className="py-16 md:py-24 scroll-mt-20 bg-gradient-to-b from-white to-amber-50/30">
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
							<h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
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
			<section className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50/30">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-3xl mx-auto text-center"
					>
						<div className="relative">
							<div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-pink-400 rounded-3xl blur-xl opacity-10" />

							<div className="relative bg-gradient-to-br from-amber-50 to-pink-50 border border-amber-200 rounded-2xl p-10 md:p-12 shadow-xl">
								<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-pink-400 rounded-full mb-6">
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
										className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800"
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
