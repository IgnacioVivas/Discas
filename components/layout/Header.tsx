'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, PawPrint, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import imgHero from '@/public/image/piru/piru-4.jpg';
import Link from 'next/link';

const Header = () => {
	return (
		<div className="relative h-screen w-full overflow-hidden">
			{/* Imagen de fondo con overlay */}
			<div className="absolute inset-0">
				<Image
					src={imgHero}
					alt="Discas - Rescatamos animales con discapacidad"
					fill
					className="object-cover object-center"
					priority
					quality={90}
				/>
				<div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent" />
				<div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
			</div>

			{/* Elementos decorativos */}
			<div className="absolute top-1/4 right-1/4 opacity-20">
				<PawPrint className="w-32 h-32 text-white" />
			</div>

			{/* Contenido principal */}
			<div className="relative h-full flex items-center">
				<div className="container mx-auto mt-24 px-4 md:px-8 lg:px-20">
					<div className="max-w-2xl">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="space-y-6"
						>
							{/* Título principal */}
							<h1 className="text-5xl md:text-7xl font-nunito font-bold text-white leading-tight">
								Transformá{' '}
								<span className="bg-linear-to-r from-teal-400 to-amber-300 bg-clip-text text-transparent">vidas</span>
								<br />
								con tu ayuda
							</h1>

							{/* Descripción */}
							<p className="text-xl font-inter md:text-2xl text-white/90 max-w-xl leading-relaxed">
								Cada donación, cada apadrinamiento, cada adopción marca la diferencia en la vida de un animal con
								discapacidad.
							</p>

							{/* Botones de acción */}
							<div className="flex flex-wrap gap-4 pt-4">
								<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
									<Button
										size="lg"
										className="bg-linear-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 font-semibold shadow-lg cursor-pointer"
										onClick={() => {
											document.getElementById('donar')?.scrollIntoView({
												behavior: 'smooth',
											});
										}}
									>
										<Heart className="w-5 h-5 mr-2" />
										Donar ahora
										<ArrowRight className="w-5 h-5 ml-2" />
									</Button>
								</motion.div>

								<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
									<Button
										size="lg"
										variant="outline"
										className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm cursor-pointer"
									>
										<PawPrint className="w-5 h-5 mr-2" />
										<Link href={`/adopta`}>Conocer adopciones</Link>
									</Button>
								</motion.div>
							</div>

							{/* Estadísticas rápidas */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5 }}
								className="pt-8 hidden lg:flex flex-wrap gap-6 "
							>
								{[
									{ number: '200+', label: 'Animales rescatados' },
									{ number: '90+', label: 'Adopciones exitosas' },
									{ number: '40+', label: 'Voluntarios activos' },
								].map((stat, index) => (
									<div key={index} className="text-center">
										<div className="text-2xl font-bold font-inter text-white">{stat.number}</div>
										<div className="text-sm font-inter text-white/80">{stat.label}</div>
									</div>
								))}
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Flecha indicadora */}
			<motion.div
				animate={{ y: [0, 10, 0] }}
				transition={{ repeat: Infinity, duration: 2 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
			>
				<div className="w-10 h-16 border-2 border-white/30 rounded-full flex justify-center">
					<div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
				</div>
			</motion.div>
		</div>
	);
};

export default Header;
