// import { HeartHandshake, Megaphone } from 'lucide-react';
// import { cn } from '@/lib/utils';

// const valores = [
// 	{
// 		titulo: 'Nuestro Objetivo',
// 		texto:
// 			'Decimos NO a la eutanasia por discapacidad, porque toda vida merece ser respetada. Nuestro objetivo es visibilizar que los animales con discapacidad pueden desarrollarse plenamente, ser felices y dar amor, adaptándose física y emocionalmente a su entorno cuando reciben acompañamiento y cuidados adecuados.',
// 		icono: HeartHandshake,
// 	},
// 	{
// 		titulo: 'Nuestra Accionar',
// 		texto:
// 			'Promovemos adopciones responsables y acompañadas, buscando hogares comprometidos con cada proceso. Además, realizamos acciones de concientización a través de charlas educativas, iniciativas solidarias y acompañamiento a familias que atraviesan situaciones similares.',
// 		icono: Megaphone,
// 	},
// ];

// const OurValue = () => {
// 	return (
// 		<div
// 			className={cn(
// 				'flex flex-col gap-5 md:flex-row px-4 md:px-16 py-20 justify-center items-center rounded-xl relative',
// 				'bg-[url(/image/varias/varias-7.jpg)] lg:bg-[url(/image/baners/baner-3.jpg)] bg-cover bg-no-repeat bg-center bg-zinc-800',
// 			)}
// 		>
// 			<div className="absolute w-full h-full bg-zinc-900/50 rounded-xl"></div>
// 			<div className="w-full md:w-1/2 flex flex-col gap-4 z-10">
// 				<span className="text-orange font-medium font-quicksand">Nuestros Valores</span>
// 				<h2 className="font-nunito text-3xl md:text-[2.5rem] tracking-wider text-white font-bold">
// 					El corazón de Discas
// 				</h2>
// 				<p className="leading-relaxed font-inter text-white">
// 					En Discas trabajamos desde el respeto, la empatía y la responsabilidad. Cada acción que llevamos adelante está
// 					impulsada por la convicción de que todos los animales merecen vivir con dignidad, amor y oportunidades, sin
// 					que la discapacidad sea un límite para su bienestar ni para su felicidad.
// 				</p>

// 				<div className="w-56 h-3">
// 					<svg viewBox="0 0 100 10" className="h-full">
// 						<path
// 							d="M0 5 Q5 0 10 5 T20 5 T30 5 T40 5 T50 5 T60 5 T70 5 T80 5 T90 5 T100 5"
// 							fill="none"
// 							stroke="#2dd4bf"
// 							stroke-width="2"
// 						/>
// 					</svg>
// 				</div>
// 			</div>
// 			<div className="flex flex-col gap-5 w-full md:w-1/2 z-10">
// 				{valores.map((v, index) => (
// 					<div
// 						key={index}
// 						className="bg-slate-100/50 flex flex-col md:flex-row gap-6 items-start md:items-center py-7 px-6 rounded-xl"
// 					>
// 						<div className={`p-5 rounded-xl ${index === 0 ? 'bg-red-400' : 'bg-teal-400'}`}>
// 							<v.icono className="w-9 h-9 text-white" />
// 						</div>
// 						<div className="text-white">
// 							<h5 className="font-quicksand font-bold text-xl mb-3">{v.titulo}</h5>
// 							<p className="font-inter text-base leading-relaxed">{v.texto}</p>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default OurValue;

'use client';

import { HeartHandshake, Megaphone, Target, Users, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const valores = [
	{
		titulo: 'Nuestro Objetivo',
		texto:
			'Decimos NO a la eutanasia por discapacidad, porque toda vida merece ser respetada. Nuestro objetivo es visibilizar que los animales con discapacidad pueden desarrollarse plenamente, ser felices y dar amor, adaptándose física y emocionalmente a su entorno cuando reciben acompañamiento y cuidados adecuados.',
		icono: Target,
		color: 'red',
		iconColor: 'text-red-600',
		bgColor: 'bg-red-100',
		borderColor: 'border-red-200',
	},
	{
		titulo: 'Nuestra Accionar',
		texto:
			'Promovemos adopciones responsables y acompañadas, buscando hogares comprometidos con cada proceso. Además, realizamos acciones de concientización a través de charlas educativas, iniciativas solidarias y acompañamiento a familias que atraviesan situaciones similares.',
		icono: Megaphone,
		color: 'teal',
		iconColor: 'text-teal-600',
		bgColor: 'bg-teal-100',
		borderColor: 'border-teal-200',
	},
	{
		titulo: 'Nuestro Compromiso',
		texto:
			'Trabajamos desde el respeto, la empatía y la responsabilidad. Cada acción está impulsada por la convicción de que todos los animales merecen vivir con dignidad, amor y oportunidades, sin que la discapacidad sea un límite para su bienestar ni para su felicidad.',
		icono: HeartHandshake,
		color: 'amber',
		iconColor: 'text-amber-600',
		bgColor: 'bg-amber-100',
		borderColor: 'border-amber-200',
	},
];

const OurValue = () => {
	return (
		<section className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50/30">
			<div className="container mx-auto px-4">
				{/* Encabezado */}
				<div className="text-center mb-12">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-pink-100 rounded-full mb-4"
					>
						<Sparkles className="w-4 h-4 text-amber-600" />
						<span className="text-sm font-medium text-amber-700">Lo que nos guía</span>
					</motion.div>

					<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-800 via-amber-700 to-teal-800 bg-clip-text text-transparent">
						El corazón de Discas
					</h2>

					<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
						Los valores y principios que impulsan cada una de nuestras acciones y decisiones.
					</p>
				</div>

				{/* Grid de valores */}
				<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{valores.map((valor, index) => {
						const Icon = valor.icono;

						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ y: -10 }}
							>
								<Card
									className={cn(
										'border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full',
										'bg-gradient-to-b from-white to-gray-50',
									)}
								>
									<CardContent className="p-8">
										{/* Icono y título */}
										<div className="flex flex-col items-center text-center mb-6">
											<div className={cn('p-4 rounded-2xl mb-6', valor.bgColor, valor.borderColor, 'border-2')}>
												<Icon className={cn('w-8 h-8', valor.iconColor)} />
											</div>

											<h3 className="text-2xl font-bold text-gray-800 mb-4">{valor.titulo}</h3>
										</div>

										{/* Descripción */}
										<p className="text-gray-700 leading-relaxed text-center">{valor.texto}</p>

										{/* Separador decorativo */}
										<div className="mt-8 pt-6 border-t border-gray-100">
											<div className="flex items-center justify-center gap-2">
												{[...Array(3)].map((_, i) => (
													<div
														key={i}
														className={cn(
															'w-2 h-2 rounded-full',
															valor.color === 'red'
																? 'bg-red-400'
																: valor.color === 'teal'
																? 'bg-teal-400'
																: 'bg-amber-400',
														)}
													/>
												))}
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>

				{/* Mensaje adicional */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
					className="mt-16 max-w-3xl mx-auto"
				>
					<Card className="bg-gradient-to-r from-teal-50 to-amber-50 border-teal-200">
						<CardContent className="p-8">
							<div className="flex items-center gap-4">
								<div className="p-3 bg-white rounded-xl shadow-sm">
									<Users className="w-6 h-6 text-teal-600" />
								</div>
								<div>
									<h4 className="font-bold text-gray-800 mb-2">Juntos podemos más</h4>
									<p className="text-gray-700">
										Cada uno de estos valores se materializa a través del trabajo en equipo, la colaboración de nuestra
										comunidad y el compromiso diario de cada persona que forma parte de Discas.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</section>
	);
};

export default OurValue;
