'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, Sparkles, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const Apadrina = () => {
	return (
		<section className="pt-16 md:px-10 xl:px-20 bg-linear-to-b from-white to-teal-50/30">
			<div className="container mx-auto px-4">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Columna de texto */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-8"
					>
						{/* Encabezado */}
						<div>
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-amber-100 to-pink-100 rounded-full mb-4">
								<Sparkles className="w-4 h-4 text-amber-600" />
								<span className="text-sm font-medium text-amber-700">Oportunidad única</span>
							</div>

							<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-teal-800 via-amber-700 to-teal-800 bg-clip-text text-transparent">
								Sé Madrina o Padrino
							</h2>

							<h3 className="text-xl md:text-2xl text-amber-700 font-medium mb-6">
								Apadriná a un peludito en guardería
							</h3>
						</div>

						{/* Contenido */}
						<div className="space-y-6">
							<Card className="bg-linear-to-br from-white to-amber-50 border-amber-100 shadow-sm">
								<CardContent className="p-6">
									<div className="flex items-start gap-4">
										<div className="p-3 bg-amber-100 rounded-xl">
											<Shield className="w-6 h-6 text-amber-700" />
										</div>
										<div>
											<h4 className="font-bold text-gray-800 mb-2">¿Qué significa apadrinar?</h4>
											<p className="text-gray-700 leading-relaxed">
												Cada uno de nuestros peluditos rescatados —tanto en Córdoba como en las Sierras— recibe
												atención, contención y un techo seguro en guarderías mientras esperan encontrar su hogar
												definitivo.
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="bg-linear-to-br from-white to-teal-50 border-teal-100 shadow-sm">
								<CardContent className="p-6">
									<div className="flex items-start gap-4">
										<div className="p-3 bg-teal-100 rounded-xl">
											<Gift className="w-6 h-6 text-teal-700" />
										</div>
										<div>
											<h4 className="font-bold text-gray-800 mb-2">Tu apoyo marca la diferencia</h4>
											<p className="text-gray-700 leading-relaxed">
												Mantenerlos cuidados tiene un costo importante, y por eso necesitamos la ayuda de madrinas y
												padrinos que quieran acompañarlos en esta etapa de recuperación.
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Información financiera */}
							<div className="p-6 bg-linear-to-r from-teal-50 to-amber-50 rounded-2xl border border-teal-200">
								<div className="flex items-center gap-3 mb-4">
									<div className="p-2 bg-white rounded-lg">
										<Heart className="w-5 h-5 text-teal-600" />
									</div>
									<h4 className="font-bold text-teal-800 text-lg">Inversión mensual</h4>
								</div>
								<div className="space-y-2">
									<div className="flex justify-between items-center">
										<span className="text-gray-700">Costo de guardería por perrito:</span>
										<span className="text-2xl font-bold text-teal-700">$100.000</span>
									</div>
									<p className="text-sm text-gray-600">
										Se abona cada 15 días por adelantado. Podés colaborar a principios, a mitad o a fin de mes.
									</p>
								</div>
							</div>
						</div>

						{/* Botón de acción */}
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								size="lg"
								className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 font-semibold shadow-lg px-8 py-6 text-lg"
							>
								<Users className="w-5 h-5 mr-2" />
								Quiero ser padrino/madrina
							</Button>
						</motion.div>
					</motion.div>

					{/* Columna de imagen */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative"
					>
						{/* Marco decorativo */}
						<div className="absolute -inset-4 bg-linear-to-r from-amber-400 to-teal-400 rounded-3xl blur-xl opacity-30" />

						<div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
							<Image
								src="/image/varias/varias-1.jpg"
								alt="Perrito disca esperando por un padrino"
								width={800}
								height={600}
								className="w-full h-auto object-cover"
							/>

							{/* Overlay informativo */}
							<div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
								<div className="text-white">
									<h4 className="text-xl font-bold mb-2">Ellos te esperan</h4>
									<p className="text-white/90">
										Con tu ayuda, aseguramos que un peludito disca siga recibiendo el cuidado que merece mientras espera
										a su familia para siempre.
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
								<Shield className="w-6 h-6 text-teal-600" />
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Apadrina;
