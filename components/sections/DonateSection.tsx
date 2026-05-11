'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Copy, Check, ArrowRight, Sparkles, Smartphone, Gift, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type DonateTab = 'mercado-pago' | 'sierras';

type DonateTabItem = {
	id: DonateTab;
	label: string;
	icon: React.ElementType;
};

const MERCADO_PAGO_LINKS = [
	{
		amount: 'Monto libre',
		sub: 'Lo que puedas',
		url: 'https://link.mercadopago.com.ar/discasfundacion',
		highlight: true,
	},
	{ amount: '$1.000', sub: 'Una colaboración', url: 'https://mpago.la/1KhrdzE', highlight: false },
	{ amount: '$3.000', sub: 'Ayuda más completa', url: 'https://mpago.la/1roAL7Z', highlight: false },
	{ amount: '$5.000', sub: 'Gran apoyo', url: 'https://mpago.la/1Pwj1uv', highlight: false },
];

const DISCAS_SIERRAS = {
	cvu: '0000003100091826882228',
	alias: 'Discas-ayuda',
	contactos: ['3513233112 (Lau)', '3541580485 (Euge)'],
	redes: [
		{ name: 'Instagram', url: 'https://www.instagram.com/discassierras/' },
	],
};

const DonateSection = () => {
	const [copiedField, setCopiedField] = useState<string | null>(null);
	const [activeTab, setActiveTab] = useState<DonateTab>('mercado-pago');

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

	const tabs: DonateTabItem[] = [
		{ id: 'mercado-pago', label: 'Mercado Pago', icon: Smartphone },
		{ id: 'sierras', label: 'Discas Sierras', icon: Users },
	];

	return (
		<section className="relative overflow-hidden py-16 bg-linear-to-br from-teal-50 via-white to-amber-50">
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
						{tabs.map((tab) => {
							const Icon = tab.icon;
							return (
								<motion.button
									key={tab.id}
									variants={itemVariants}
									onClick={() => setActiveTab(tab.id)}
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
											<div className="p-3 bg-teal-50 rounded-xl border border-teal-100">
												<p className="text-sm text-gray-700">
													Alias Mercado Pago: <span className="font-bold text-teal-700">fundaciondiscas.mp</span>
												</p>
												<p className="text-xs text-gray-500 mt-0.5">A nombre de Silvina Capellino</p>
											</div>

											<div className="grid grid-cols-2 gap-3">
												{MERCADO_PAGO_LINKS.map((link) => (
													<motion.a
														key={link.amount}
														href={link.url}
														target="_blank"
														rel="noopener noreferrer"
														whileHover={{ scale: 1.05 }}
														whileTap={{ scale: 0.95 }}
														className={cn(
															'block rounded-xl p-4 text-center border-2 transition-all duration-300',
															link.highlight
																? 'bg-teal-600 border-teal-600 text-white hover:bg-teal-700 hover:border-teal-700 col-span-2'
																: 'bg-white border-teal-200 hover:border-teal-400 hover:bg-teal-50',
														)}
													>
														<div className={cn('text-xl font-bold', link.highlight ? 'text-white' : 'text-teal-700')}>
															{link.amount}
														</div>
														<div className={cn('text-xs mt-1', link.highlight ? 'text-teal-100' : 'text-gray-500')}>
															{link.sub}
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
												{ amount: '$1.000', text: '1 día de alimento especial' },
												{ amount: '$3.000', text: 'Medicación para una semana' },
												{ amount: '$5.000', text: 'Pañales para 15 días' },
												{ amount: '$10.000', text: 'Ayuda a un tratamiento médico' },
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
								<a href="https://link.mercadopago.com.ar/discasfundacion" target="_blank" rel="noopener noreferrer">
									<Button
										size="lg"
										className="bg-linear-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 font-semibold text-white cursor-pointer"
									>
										<Heart className="w-5 h-5 mr-2" />
										Quiero donar ahora
										<ArrowRight className="w-5 h-5 ml-2" />
									</Button>
								</a>
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
