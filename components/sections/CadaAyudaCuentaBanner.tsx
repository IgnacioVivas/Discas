'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const CadaAyudaCuentaBanner = () => {
	return (
		<section className="relative py-16 md:py-24 overflow-hidden">
			{/* Fondo de imagen */}
			<div className="absolute inset-0">
				<Image
					src="/image/varias/varias-2.jpg"
					alt="Dos discas juntos, uno en carro"
					fill
					className="object-cover object-left md:object-center"
					priority
					quality={90}
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 via-teal-800/60 to-transparent" />
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
			</div>

			{/* Elementos decorativos */}
			<div className="absolute top-10 left-10 opacity-20">
				<Heart className="w-20 h-20 text-white" />
			</div>
			<div className="absolute bottom-10 right-10 opacity-20">
				<Users className="w-24 h-24 text-white" />
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-4xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center space-y-8"
					>
						{/* Badge superior */}
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
							<Sparkles className="w-4 h-4 text-amber-300" />
							<span className="text-sm font-medium text-white">Juntos somos más fuertes</span>
						</div>

						{/* Título principal */}
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
							¡Cada{' '}
							<span className="bg-gradient-to-r from-amber-300 to-teal-300 bg-clip-text text-transparent">ayuda</span>{' '}
							cuenta!
						</h2>

						{/* Descripción */}
						<p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
							Ya sea como madrina, padrino o voluntario, tu apoyo transforma la vida de nuestros peluditos en
							recuperación y les da la oportunidad de un futuro mejor lleno de amor y cuidados.
						</p>

						{/* Estadísticas */}
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3 }}
							className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8"
						>
							{[
								{ value: '100+', label: 'Padrinos activos' },
								{ value: '50+', label: 'Voluntarios' },
								{ value: '∞', label: 'Sonrisas generadas' },
							].map((stat, index) => (
								<div
									key={index}
									className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
								>
									<div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
									<div className="text-sm text-white/80">{stat.label}</div>
								</div>
							))}
						</motion.div>

						{/* Botones de acción */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.5 }}
							className="flex flex-wrap justify-center gap-4 pt-8"
						>
							<Button
								size="lg"
								className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 font-semibold shadow-lg"
							>
								<Heart className="w-5 h-5 mr-2" />
								Ser padrino/madrina
								<ArrowRight className="w-5 h-5 ml-2" />
							</Button>

							<Button
								size="lg"
								variant="outline"
								className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
							>
								<Users className="w-5 h-5 mr-2" />
								Ser voluntario
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Onda decorativa inferior */}
			<div className="absolute bottom-0 left-0 right-0 h-16">
				<svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
					<path
						d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
						opacity=".25"
						className="fill-white"
					/>
					<path
						d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
						opacity=".5"
						className="fill-white"
					/>
					<path
						d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
						className="fill-white"
					/>
				</svg>
			</div>
		</section>
	);
};

export default CadaAyudaCuentaBanner;
