'use client';

import { motion } from 'framer-motion';
import { Home, Heart, Users, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HOGAR_FORM_URL =
	'https://docs.google.com/forms/d/e/1FAIpQLSeGa_aJ3ORMc6zLdQRLnQj-L2G5jVrL1OMTKfbRZy2t5pBXdw/viewform?pli=1';

const HogarTransito = () => {
	const items = [
		{
			icon: Home,
			title: 'Espacio temporal',
			desc: 'Recibís a un peludito por el tiempo necesario mientras espera su hogar definitivo.',
			color: 'teal',
		},
		{
			icon: Heart,
			title: 'Cuidado con apoyo',
			desc: 'Discas te acompaña con orientación, veterinaria y todo lo que el animal necesite.',
			color: 'amber',
		},
		{
			icon: Users,
			title: 'Cambiás una vida',
			desc: 'Tu hogar de tránsito le da la oportunidad de recuperarse y ser adoptado.',
			color: 'pink',
		},
	];

	return (
		<section className="bg-linear-to-b from-white to-teal-50/30">
			<div className="container mx-auto px-4 md:px-10 xl:px-20">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					{/* Encabezado */}
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-teal-100 to-amber-100 rounded-full mb-4">
							<Sparkles className="w-4 h-4 text-teal-600" />
							<span className="text-sm font-medium text-teal-700">Temporal pero transformador</span>
						</div>
						<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-teal-800 via-amber-700 to-teal-800 bg-clip-text text-transparent">
							Sé Hogar de Tránsito
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
							Un hogar de tránsito es un espacio de amor temporal donde un peludito espera su familia definitiva con
							toda la contención que necesita.
						</p>
					</div>

					{/* Cards */}
					<div className="grid md:grid-cols-3 gap-6 mb-12">
						{items.map((item, i) => {
							const Icon = item.icon;
							const bg = item.color === 'teal' ? 'bg-teal-100' : item.color === 'amber' ? 'bg-amber-100' : 'bg-pink-100';
							const text =
								item.color === 'teal' ? 'text-teal-600' : item.color === 'amber' ? 'text-amber-600' : 'text-pink-600';
							return (
								<Card key={i} className="border-0 shadow-sm hover:shadow-md transition-shadow">
									<CardContent className="p-6">
										<div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${bg}`}>
											<Icon className={`w-6 h-6 ${text}`} />
										</div>
										<h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
										<p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
									</CardContent>
								</Card>
							);
						})}
					</div>

					{/* CTA */}
					<div className="text-center">
						<div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 bg-linear-to-r from-teal-600 to-teal-700 rounded-2xl shadow-2xl max-w-3xl mx-auto w-full">
							<div className="text-white text-center md:text-left flex-1">
								<h3 className="text-2xl font-bold mb-2">¿Tu casa puede ser su hogar temporal?</h3>
								<p className="text-teal-100">Completá el formulario y nos ponemos en contacto con vos.</p>
							</div>
							<motion.a
								href={HOGAR_FORM_URL}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="shrink-0"
							>
								<Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 font-semibold cursor-pointer whitespace-nowrap">
									<Home className="w-5 h-5 mr-2" />
									Quiero ser hogar de tránsito
									<ArrowRight className="w-5 h-5 ml-2" />
								</Button>
							</motion.a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HogarTransito;
