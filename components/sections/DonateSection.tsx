// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import bgPatitas from '@/public/image/huellas-perros.png';
// import Image from 'next/image';
// import imgDona from '@/public/image/mano-dona.png';

// const DonateSection = () => {
// 	return (
// 		<div
// 			className="w-full flex flex-col justify-center gap-3 p-10 md:p-20"
// 			style={{ backgroundImage: `url(${bgPatitas.src})` }}
// 		>
// 			<div className="px-8 md:px-20 py-10 bg-teal-950 bg-opacity-85 rounded-xl">
// 				<h2 className={`text-4xl text-center text-white font-semibold mb-5 font-poppins`}>Haz una diferencia hoy</h2>
// 				<h3 className={`text-lg text-center text-white font-normal font-inter`}>
// 					Con tu contribución, podemos seguir ayudando a más discas. <br /> ¡Gracias por tu generosidad!
// 				</h3>
// 				<div className="w-full flex justify-center items-center">
// 					<Image src={imgDona.src} alt="dona" width={150} height={150} />
// 				</div>
// 				<h2 className={`uppercase text-center mb-6 font-semibold text-2xl text-white font-poppins`}>
// 					Doná Mensualmente
// 				</h2>
// 				<div className="grid grid-cols-2 gap-9 justify-items-center md:grid-cols-3 text-white font-bold text-2xl">
// 					{['$6.000', '$8.000', '$12.000', '$18.000', '$24.000', '$30.000'].map((price, index) => (
// 						<motion.div
// 							key={index}
// 							className={`w-full py-5 bg-teal-400 rounded-xl text-center border-2 border-stone-900 cursor-pointer font-nunito`}
// 							whileHover={{
// 								scale: 1.1,
// 								rotate: [0, 3, -3, 0],
// 								boxShadow: '0px 4px 30px rgba(0, 128, 128, 0.8)',
// 							}}
// 							whileTap={{ scale: 0.9 }}
// 							transition={{ type: 'spring', stiffness: 400, damping: 10 }}
// 						>
// 							{price}
// 						</motion.div>
// 					))}
// 				</div>
// 				<h2 className={`uppercase text-center my-6 font-semibold text-2xl text-white font-poppins`}>
// 					DONÁ POR ÚNICA VEZ
// 				</h2>
// 				<div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-white font-bold text-2xl">
// 					{['$5000', '$10000', '$15000', '$25000'].map((price, index) => (
// 						<motion.div
// 							key={index}
// 							className={`py-3 bg-teal-400 rounded-xl text-center border-2 border-stone-900 cursor-pointer font-nunito`}
// 							whileHover={{
// 								scale: 1.1,
// 								rotate: [0, 3, -3, 0],
// 								boxShadow: '0px 4px 30px rgba(0, 128, 128, 0.8)',
// 							}}
// 							whileTap={{ scale: 0.9 }}
// 							transition={{ type: 'spring', stiffness: 400, damping: 10 }}
// 						>
// 							{price}
// 						</motion.div>
// 					))}
// 				</div>
// 				<div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-9">
// 					<div
// 						className={`uppercase text-white flex flex-col justify-center items-center gap-2 bg-teal-950/70 rounded-xl py-5 font-nunito`}
// 					>
// 						<h2 className="font-semibold text-lg text-center">APORTÁ USANDO ALIAS</h2>
// 						<div className="font-bold text-3xl text-teal-400 text-center">CABRA.OSO</div>
// 					</div>
// 					<div
// 						className={`text-white flex flex-col justify-center items-center gap-2 bg-teal-950/70 rounded-xl py-5 font-nunito`}
// 					>
// 						<h2 className="uppercase font-semibold text-lg text-center">O SI ESTÁS FUERA DE ARGENTINA</h2>
// 						<div className="font-bold text-3xl text-teal-400 text-center">PayPal</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default DonateSection;

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	Heart,
	Copy,
	Check,
	ArrowRight,
	Sparkles,
	Wallet,
	Smartphone,
	Banknote,
	Gift,
	Users,
	Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// Datos de donaciones
const MERCADO_PAGO_LINKS = [
	{ amount: '$100', url: 'https://mpago.la/2L3qsrT' },
	{ amount: '$200', url: 'https://mpago.la/1TL3cpz' },
	{ amount: '$300', url: 'https://mpago.la/1VJsKJZ' },
	{ amount: '$500', url: 'https://mpago.la/2zv8Nbc' },
	{ amount: '$1000', url: 'https://mpago.la/1rfV1sS' },
];

const BANK_INFO = {
	banco: 'Banco PATAGONIA',
	cajaAhorros: 'CA $ 070-709868055-000',
	titular: 'Quiñones Sabrina',
	cbu: '0340070808709868055000',
	cuil: '27281140758',
	alias: 'DISCAS.CORDOBA.ARG',
	contacto: 'Nati 3885003055',
	email: 'discasrodandoporlavida@gmail.com',
};

const DISCAS_SIERRAS = {
	cvu: '0000003100091826882228',
	alias: 'Discas-ayuda',
	contactos: ['3513233112 (Lau)', '3541580485 (Euge)'],
	redes: [
		{ name: 'Facebook', url: '@discas.sierras' },
		{ name: 'Instagram', url: '@discassierras' },
		{ name: 'TikTok', url: '@discassierras' },
	],
};

const DonateSection = () => {
	const [copiedField, setCopiedField] = useState<string | null>(null);
	const [activeTab, setActiveTab] = useState<'mercado-pago' | 'transferencia' | 'sierras'>('mercado-pago');

	const copyToClipboard = (text: string, field: string) => {
		navigator.clipboard.writeText(text).then(() => {
			setCopiedField(field);
			setTimeout(() => setCopiedField(null), 2000);
		});
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
			},
		},
	};

	return (
		<section className="relative overflow-hidden py-16 md:py-24 bg-linear-to-br from-teal-50 via-white to-amber-50">
			{/* Elementos decorativos */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20 -translate-y-48 translate-x-48" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20 -translate-x-48 translate-y-48" />

			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-20 left-10">
					<Heart className="w-32 h-32" />
				</div>
				<div className="absolute bottom-20 right-10">
					<Heart className="w-40 h-40" />
				</div>
			</div>

			<div id="donar" className="container mx-auto px-4 relative z-10 scroll-mt-24">
				{/* Encabezado */}
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-teal-100 to-amber-100 rounded-full mb-4">
						<Sparkles className="w-4 h-4 text-teal-600" />
						<span className="text-sm font-bold font-quicksand text-teal-700">Tu ayuda marca la diferencia</span>
					</div>

					<h2 className="text-4xl md:text-5xl font-extrabold font-nunito mb-4 bg-linear-to-r from-teal-700 via-amber-600 to-teal-700 bg-clip-text text-transparent">
						Tu apoyo transforma vidas
					</h2>

					<p className="text-lg font-inter md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Cada donación nos permite seguir rescatando, cuidando y dando una segunda oportunidad a animales con
						discapacidad. Juntos, podemos hacer mucho más.
					</p>
				</motion.div>

				{/* Tabs de métodos de donación */}
				<motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
					<div className="flex flex-wrap justify-center gap-2 mb-8">
						{[
							{ id: 'mercado-pago', label: 'Mercado Pago', icon: Smartphone },
							{ id: 'transferencia', label: 'Transferencia', icon: Banknote },
							{ id: 'sierras', label: 'Discas Sierras', icon: Users },
						].map((tab) => {
							const Icon = tab.icon;
							return (
								<motion.button
									key={tab.id}
									variants={itemVariants}
									onClick={() => setActiveTab(tab.id as any)}
									className={cn(
										'flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300',
										activeTab === tab.id
											? 'bg-linear-to-r from-teal-600 to-teal-700 text-white shadow-lg'
											: 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200',
									)}
								>
									<Icon className="w-4 h-4" />
									{tab.label}
								</motion.button>
							);
						})}
					</div>

					<AnimatePresence mode="wait">
						{/* Mercado Pago */}
						{activeTab === 'mercado-pago' && (
							<motion.div
								key="mercado-pago"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								className="grid lg:grid-cols-2 gap-8"
							>
								<Card className="bg-linear-to-br from-white to-teal-50 border-teal-100 shadow-xl">
									<CardContent className="p-8">
										<div className="flex items-center gap-3 mb-6">
											<div className="p-3 bg-teal-100 rounded-xl">
												<Smartphone className="w-6 h-6 text-teal-700" />
											</div>
											<div>
												<h3 className="text-2xl font-bold text-gray-800">Donación rápida</h3>
												<p className="text-gray-600">Elegí el monto y doná en segundos</p>
											</div>
										</div>

										<div className="space-y-4">
											<p className="text-gray-700">
												Buscanos en Mercado Pago como: <span className="font-bold text-teal-700">Discas.cba</span>
											</p>

											<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
												{MERCADO_PAGO_LINKS.map((link) => (
													<motion.a
														key={link.amount}
														href={link.url}
														target="_blank"
														rel="noopener noreferrer"
														whileHover={{ scale: 1.05 }}
														whileTap={{ scale: 0.95 }}
														className="group"
													>
														<div className="bg-white border-2 border-teal-200 rounded-xl p-4 text-center hover:border-teal-400 hover:bg-teal-50 transition-all duration-300">
															<div className="text-2xl font-bold text-teal-700 group-hover:text-teal-800">
																{link.amount}
															</div>
															<div className="text-xs text-gray-500 mt-1">Donar ahora</div>
														</div>
													</motion.a>
												))}
											</div>
										</div>
									</CardContent>
								</Card>

								<Card className="bg-linear-to-br from-amber-50 to-white border-amber-100 shadow-xl">
									<CardContent className="p-8">
										<div className="flex items-center gap-3 mb-6">
											<div className="p-3 bg-amber-100 rounded-xl">
												<Gift className="w-6 h-6 text-amber-700" />
											</div>
											<div>
												<h3 className="text-2xl font-bold text-gray-800">¿Qué logra tu donación?</h3>
												<p className="text-gray-600">Tu aporte se transforma en:</p>
											</div>
										</div>

										<div className="space-y-4">
											{[
												{ amount: '$100', text: '1 día de alimento especial' },
												{ amount: '$300', text: 'Medicación para una semana' },
												{ amount: '$500', text: 'Pañales para 15 días' },
												{ amount: '$1000', text: 'Tratamiento médico completo' },
											].map((item, index) => (
												<motion.div
													key={index}
													initial={{ opacity: 0, x: -20 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{ delay: index * 0.1 }}
													className="flex items-center gap-4 p-3 bg-white rounded-lg border border-amber-100"
												>
													<div className="p-2 bg-amber-100 rounded-lg">
														<Heart className="w-4 h-4 text-amber-600" />
													</div>
													<div>
														<span className="font-bold text-amber-700">{item.amount}</span>
														<span className="text-gray-600 ml-2">= {item.text}</span>
													</div>
												</motion.div>
											))}
										</div>

										<div className="mt-8 p-4 bg-linear-to-r from-teal-500/10 to-amber-500/10 rounded-xl border border-teal-200/50">
											<p className="text-sm text-gray-700">
												<strong>Recordá:</strong> Enviar el comprobante por mensaje privado a{' '}
												<span className="font-semibold text-teal-700">{BANK_INFO.contacto}</span> para control.
											</p>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						)}

						{/* Transferencia Bancaria */}
						{activeTab === 'transferencia' && (
							<motion.div
								key="transferencia"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
							>
								<Card className="bg-linear-to-br from-white to-blue-50 border-blue-100 shadow-xl">
									<CardContent className="p-8">
										<div className="flex items-center gap-3 mb-8">
											<div className="p-3 bg-blue-100 rounded-xl">
												<Wallet className="w-6 h-6 text-blue-700" />
											</div>
											<div>
												<h3 className="text-2xl font-bold text-gray-800">Transferencia bancaria</h3>
												<p className="text-gray-600">Datos para transferir desde tu banco</p>
											</div>
										</div>

										<div className="grid md:grid-cols-2 gap-6">
											{Object.entries({
												Banco: BANK_INFO.banco,
												'Caja de ahorros': BANK_INFO.cajaAhorros,
												Titular: BANK_INFO.titular,
												CBU: BANK_INFO.cbu,
												CUIL: BANK_INFO.cuil,
												Alias: BANK_INFO.alias,
											}).map(([key, value], index) => (
												<motion.div
													key={key}
													initial={{ opacity: 0, y: 20 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: index * 0.1 }}
													className="space-y-2"
												>
													<label className="text-sm font-medium text-gray-500">{key}</label>
													<div className="flex items-center gap-2">
														<div className="flex-1 p-3 bg-white border border-gray-200 rounded-lg font-mono text-gray-800">
															{value}
														</div>
														<Button
															size="sm"
															variant="outline"
															onClick={() => copyToClipboard(value, key)}
															className="shrink-0"
														>
															{copiedField === key ? (
																<Check className="w-4 h-4 text-green-600" />
															) : (
																<Copy className="w-4 h-4" />
															)}
														</Button>
													</div>
												</motion.div>
											))}
										</div>

										<div className="mt-8 space-y-4">
											<div className="p-4 bg-linear-to-r from-blue-500/10 to-teal-500/10 rounded-xl border border-blue-200">
												<p className="text-sm text-gray-700">
													<strong>Importante:</strong> Después de transferir, enviá el comprobante por mensaje privado a{' '}
													<span className="font-semibold text-blue-700">{BANK_INFO.contacto}</span>
												</p>
											</div>
											<div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
												<p className="text-sm text-amber-800">
													💌 También podés contactarnos por email:{' '}
													<a href={`mailto:${BANK_INFO.email}`} className="font-semibold underline">
														{BANK_INFO.email}
													</a>
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						)}

						{/* Discas Sierras */}
						{activeTab === 'sierras' && (
							<motion.div
								key="sierras"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
							>
								<Card className="bg-linear-to-br from-white to-purple-50 border-purple-100 shadow-xl">
									<CardContent className="p-8">
										<div className="flex items-center gap-3 mb-8">
											<div className="p-3 bg-purple-100 rounded-xl">
												<Users className="w-6 h-6 text-purple-700" />
											</div>
											<div>
												<h3 className="text-2xl font-bold text-gray-800">Discas de las Sierras</h3>
												<p className="text-gray-600">Nuestro equipo en las sierras de Córdoba</p>
											</div>
										</div>

										<div className="grid md:grid-cols-2 gap-8">
											<div className="space-y-6">
												<div>
													<h4 className="font-bold text-gray-700 mb-3">Datos para donar</h4>
													<div className="space-y-4">
														<div>
															<label className="text-sm font-medium text-gray-500">CVU</label>
															<div className="flex items-center gap-2 mt-1">
																<div className="flex-1 p-3 bg-white border border-gray-200 rounded-lg font-mono">
																	{DISCAS_SIERRAS.cvu}
																</div>
																<Button
																	size="sm"
																	variant="outline"
																	onClick={() => copyToClipboard(DISCAS_SIERRAS.cvu, 'cvu')}
																>
																	{copiedField === 'cvu' ? (
																		<Check className="w-4 h-4 text-green-600" />
																	) : (
																		<Copy className="w-4 h-4" />
																	)}
																</Button>
															</div>
														</div>

														<div>
															<label className="text-sm font-medium text-gray-500">Alias</label>
															<div className="flex items-center gap-2 mt-1">
																<div className="flex-1 p-3 bg-white border border-gray-200 rounded-lg font-mono">
																	{DISCAS_SIERRAS.alias}
																</div>
																<Button
																	size="sm"
																	variant="outline"
																	onClick={() => copyToClipboard(DISCAS_SIERRAS.alias, 'alias')}
																>
																	{copiedField === 'alias' ? (
																		<Check className="w-4 h-4 text-green-600" />
																	) : (
																		<Copy className="w-4 h-4" />
																	)}
																</Button>
															</div>
														</div>
													</div>
												</div>

												<div>
													<h4 className="font-bold text-gray-700 mb-3">Contactos</h4>
													<div className="space-y-2">
														{DISCAS_SIERRAS.contactos.map((contacto, index) => (
															<div key={index} className="p-3 bg-white border border-gray-200 rounded-lg">
																<div className="font-medium text-gray-800">{contacto}</div>
															</div>
														))}
													</div>
												</div>
											</div>

											<div className="space-y-6">
												<div>
													<h4 className="font-bold text-gray-700 mb-3">Redes sociales</h4>
													<div className="space-y-3">
														{DISCAS_SIERRAS.redes.map((red, index) => (
															<motion.a
																key={index}
																href="#"
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
												</div>

												<div className="p-4 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-200">
													<h4 className="font-bold text-purple-800 mb-2">¡Seguilos!</h4>
													<p className="text-sm text-gray-700">
														Conocé las historias de rescate y el trabajo increíble que hacen en las sierras.
													</p>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						)}
					</AnimatePresence>

					{/* Llamado a la acción */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="mt-12 text-center"
					>
						<div className="inline-flex items-center gap-4 p-8 bg-linear-to-r from-teal-50 to-amber-50 rounded-2xl border border-teal-200 max-w-2xl mx-auto">
							<div className="text-left">
								<h3 className="text-2xl font-bold text-gray-800 mb-2">¿Listo para ayudar?</h3>
								<p className="text-gray-600 mb-4">
									Cada donación, por pequeña que sea, ayuda a un animal a tener una vida mejor.
								</p>
								<Button
									size="lg"
									className="bg-linear-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 font-semibold"
									onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
								>
									<Heart className="w-5 h-5 mr-2" />
									Quiero donar ahora
									<ArrowRight className="w-5 h-5 ml-2" />
								</Button>
							</div>

							<div className="hidden md:block">
								<div className="relative w-40 h-40">
									<div className="absolute inset-0 bg-linear-to-r from-teal-400 to-amber-400 rounded-full animate-pulse opacity-20" />
									<div className="absolute inset-4 bg-linear-to-r from-teal-500 to-amber-500 rounded-full flex items-center justify-center">
										<Heart className="w-16 h-16 text-white" />
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default DonateSection;
