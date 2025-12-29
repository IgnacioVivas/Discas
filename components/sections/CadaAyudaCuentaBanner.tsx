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
				<div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent" />
				<div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
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
		</section>
	);
};

export default CadaAyudaCuentaBanner;
