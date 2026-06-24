'use client';

import HeaderDos from '@/components/layout/HeaderDos';
import { useState } from 'react';
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
	Share2,
	Copy,
	Check,
	ArrowRight,
	ChevronRight,
	Users,
	Globe,
	Phone,
	Mail,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const Donaciones = () => {
	const [copied, setCopied] = useState(false);
	const [showShareOptions, setShowShareOptions] = useState(false);

	const handleShare = async () => {
		const url = window.location.href;
		const text = '🐾 Ayudá a Fundación Discas: animales con discapacidad que necesitan tu apoyo.';
		if (navigator.share) {
			await navigator.share({ title: 'Fundación Discas', text, url }).catch(() => {});
		} else {
			setShowShareOptions((v) => !v);
		}
	};

	const copyLink = () => {
		navigator.clipboard.writeText(window.location.href).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	};

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
											<Button
												size="lg"
												className="bg-white text-teal-700 hover:bg-teal-50 font-semibold shadow-lg cursor-pointer"
											>
												<Banknote className="w-5 h-5 mr-2" />
												Donar ahora
												<ArrowRight className="w-5 h-5 ml-2" />
											</Button>
										</motion.a>

										<motion.a href="#insumos" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
											<Button
												size="lg"
												variant="outline"
												className="border-2 border-white text-white hover:bg-white/10 font-semibold cursor-pointer"
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

			{/* SECCIÓN DE INSUMOS */}
			<section id="insumos" className="my-32 scroll-mt-20 bg-linear-to-b from-white to-teal-50/30">
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
										'Toallitas húmedas sin alcohol',
										'Cremas: con vitamina A, antimicóticas o cicatrizantes',
									],
									color: 'teal',
								},
								{
									icon: '💊',
									title: 'Medicación',
									items: [
										'Antibióticos',
										'Suplementos',
										'Desparasitantes',
										'Complejo B, Vitamina C',
										'Urovier, Cisticalm',
										'Meloxicam, Pregabalina, Dipirona',
									],
									color: 'amber',
									alert: 'Debe estar vigente y en buen estado',
								},
								{
									icon: '👶',
									title: 'Pañales y absorbentes',
									items: [
										'Niño: PRE, P, M, XG, XXG y XXXG',
										'Adulto: anatómicos o rectos',
										'Juvenil (cualquier marca)',
										'Zaleas o paños absorbentes',
									],
									color: 'pink',
								},
								{
									icon: '🐕',
									title: 'Alimentos',
									items: [
										'Urinary (perro o gato)',
										'Renal (perro)',
										'Gastrointestinal (perro o gato)',
										'Senior',
										'Balanceado 21%+ de proteínas',
									],
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
			<section id="economicas" className="pb-16 mb-16 scroll-mt-20 bg-linear-to-b from-white to-teal-900/5">
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

						<div className="max-w-2xl mx-auto">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
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

										<div className="grid grid-cols-2 gap-3 mb-6">
											{[
												{
													label: 'Monto libre',
													sub: 'Lo que puedas',
													href: 'https://link.mercadopago.com.ar/discasfundacion',
													highlight: true,
												},
												{
													label: '$1.000',
													sub: 'Una colaboración',
													href: 'https://mpago.la/1KhrdzE',
													highlight: false,
												},
												{
													label: '$3.000',
													sub: 'Ayuda más completa',
													href: 'https://mpago.la/1roAL7Z',
													highlight: false,
												},
												{ label: '$5.000', sub: 'Gran apoyo', href: 'https://mpago.la/1Pwj1uv', highlight: false },
											].map((item) => (
												<motion.a
													key={item.label}
													href={item.href}
													target="_blank"
													rel="noopener noreferrer"
													whileHover={{ scale: 1.03 }}
													whileTap={{ scale: 0.97 }}
													className={`p-4 rounded-xl text-center font-semibold transition-all border ${
														item.highlight
															? 'bg-teal-600 text-white hover:bg-teal-700 border-teal-600 shadow-md'
															: 'bg-white text-teal-800 hover:bg-teal-50 border-teal-200'
													}`}
												>
													<p className="text-lg">{item.label}</p>
													<p className={`text-xs mt-0.5 ${item.highlight ? 'text-teal-100' : 'text-gray-500'}`}>
														{item.sub}
													</p>
												</motion.a>
											))}
										</div>

										<div className="bg-teal-50 border border-teal-200 rounded-lg p-4 space-y-1">
											<p className="text-sm text-teal-800">
												Alias: <span className="font-bold font-mono">fundaciondiscas.mp</span>
											</p>
											<p className="text-xs text-teal-600">A nombre de Silvina Capellino</p>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* DISCAS SIERRAS */}
			<section className="mb-32 scroll-mt-20 bg-linear-to-b from-white to-purple-50/30">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-6xl mx-auto"
					>
						<div className="text-center mb-12">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
								<Users className="w-4 h-4 text-purple-600" />
								<span className="text-sm font-medium text-purple-700">Filial serrana</span>
							</div>
							<h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">
								Discas de las Sierras
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Nuestro equipo en las sierras de Córdoba también necesita tu apoyo
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
							{/* Datos bancarios */}
							<Card className="border-0 shadow-lg">
								<CardContent className="p-8">
									<h3 className="font-bold text-lg text-gray-800 mb-6">Datos para donar</h3>
									<div className="space-y-4">
										<div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
											<p className="text-xs font-medium text-gray-500 mb-1">CVU</p>
											<p className="font-mono font-semibold text-gray-800 break-all">0000003100091826882228</p>
										</div>
										<div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
											<p className="text-xs font-medium text-gray-500 mb-1">Alias</p>
											<p className="font-mono font-semibold text-gray-800">Discas-ayuda</p>
										</div>
									</div>

									<div className="mt-6">
										<h4 className="font-bold text-gray-700 mb-3">Contactos</h4>
										<div className="space-y-2">
											{['3513233112 (Lau)', '3541580485 (Euge)'].map((contacto) => (
												<a
													key={contacto}
													href={`tel:${contacto.split(' ')[0]}`}
													className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors"
												>
													<Phone className="w-4 h-4 text-purple-500 shrink-0" />
													<span className="text-gray-800">{contacto}</span>
												</a>
											))}
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Redes sociales */}
							<Card className="border-0 shadow-lg">
								<CardContent className="p-8">
									<h4 className="font-bold text-gray-700 mb-3">Redes sociales</h4>
									<div className="space-y-3">
										{[
											{ name: 'Instagram', url: 'https://www.instagram.com/discassierras/' },
										].map((red, index) => (
											<motion.a
												key={index}
												href={red.url}
												target="_blank"
												rel="noopener noreferrer"
												whileHover={{ x: 5 }}
												className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors"
											>
												<div className="p-2 bg-purple-100 rounded-lg">
													<Globe className="w-4 h-4 text-purple-600" />
												</div>
												<div>
													<div className="font-medium text-gray-800">{red.name}</div>
													<div className="text-sm text-gray-600">{red.url}</div>
												</div>
											</motion.a>
										))}
									</div>

									<div className="mt-6 p-4 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-200">
										<h4 className="font-bold text-purple-800 mb-2">¡Seguilos!</h4>
										<p className="text-sm text-gray-700">
											Conocé las historias de rescate y el trabajo increíble que hacen en las sierras.
										</p>
									</div>
								</CardContent>
							</Card>
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
												<p className="text-gray-700">Chubut 190</p>
												<div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
													<Calendar className="w-4 h-4" />
													<span>Lunes a Sábado 8:00 - 20:00</span>
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

										<div className="p-5 bg-pink-50 rounded-xl border border-pink-200">
											<p className="text-gray-700 mb-4 leading-relaxed">
												Coordinamos puntos de encuentro según tu ubicación. Contamos con voluntarios en varias
												localidades. En algunos casos también podemos coordinar retiro a domicilio.
											</p>
											<a href="mailto:discasrodandoporlavida@gmail.com?subject=Coordinación%20de%20donación%20-%20Interior%20de%20Córdoba">
												<Button className="bg-pink-600 hover:bg-pink-700 w-full cursor-pointer text-white">
													<Mail className="w-4 h-4 mr-2" />
													Escribinos para coordinar
												</Button>
											</a>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* TIENDITA DISCAS */}
			<section className="mb-32 scroll-mt-20">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-4xl mx-auto"
					>
						<div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-amber-500 to-amber-600 p-8 md:p-12 shadow-2xl text-white">
							<div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
							<div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16" />

							<div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
								<div className="flex-1 text-center md:text-left">
									<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-4">
										<span className="text-sm font-medium">Moda circular &amp; merchandising</span>
									</div>
									<h2 className="text-3xl md:text-4xl font-bold mb-3">🛍 Tiendita Discas</h2>
									<p className="text-white/90 text-lg leading-relaxed mb-2">Ropa, calzado y accesorios a beneficio.</p>
									<p className="text-white/80 text-sm">
										Comprá o donás ropa y ayudás directamente a los discas. ¡Todo lo recaudado va a la fundación!
									</p>
								</div>

								<div className="shrink-0">
									<motion.a
										href={
											'https://wa.me/5493513599984?' +
											new URLSearchParams({
												text: 'Hola! Me interesa ver el catálogo de la Tiendita Discas 🛍️',
											}).toString()
										}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.97 }}
										className="flex items-center gap-3 px-8 py-4 bg-white text-amber-600 font-bold rounded-xl shadow-lg hover:bg-amber-50 transition-colors text-lg cursor-pointer"
									>
										Ver catálogo
										<ArrowRight className="w-5 h-5" />
									</motion.a>
								</div>
							</div>
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
									<a href="#economicas">
										<Button
											size="lg"
											className="bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 cursor-pointer text-white"
										>
											<Gift className="w-5 h-5 mr-2" />
											Quiero donar ahora
										</Button>
									</a>

									<div className="relative">
										<Button
											size="lg"
											variant="outline"
											className="border-amber-600 text-amber-700 hover:bg-amber-50 cursor-pointer"
											onClick={handleShare}
										>
											<Share2 className="w-5 h-5 mr-2" />
											Compartir
										</Button>

										{showShareOptions && (
											<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl border border-gray-100 p-2 flex flex-col gap-1 min-w-44 z-10">
												<a
													href={`https://api.whatsapp.com/send?text=${encodeURIComponent('🐾 Ayudá a Fundación Discas: ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-50 text-sm font-medium text-gray-700 transition-colors"
												>
													<span className="w-4 h-4 text-green-600">💬</span> WhatsApp
												</a>
												<a
													href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 text-sm font-medium text-gray-700 transition-colors"
												>
													<span className="w-4 h-4 text-blue-600">📘</span> Facebook
												</a>
												<button
													onClick={copyLink}
													className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors cursor-pointer w-full text-left"
												>
													{copied ? (
														<Check className="w-4 h-4 text-green-600" />
													) : (
														<Copy className="w-4 h-4 text-gray-500" />
													)}
													{copied ? 'Enlace copiado' : 'Copiar enlace'}
												</button>
											</div>
										)}
									</div>
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
