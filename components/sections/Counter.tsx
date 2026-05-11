'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Users, Heart, Target, Calendar, PawPrint } from 'lucide-react';

const Counter = () => {
	const stats = [
		{ value: 10, label: 'AÑOS DE ACCIÓN',           icon: Calendar, color: 'text-teal-600',   bgColor: 'bg-teal-100',   featured: false },
		{ value: 90, label: 'DISCAS ADOPTADOS',         icon: Heart,    color: 'text-amber-600',  bgColor: 'bg-amber-100',  featured: false },
		{ value: 3,  label: 'DISCAS ADOPTADOS EN 2025', icon: Target,   color: 'text-red-600',    bgColor: 'bg-red-100',    featured: true  },
		{ value: 18, label: 'DISCAS POR ADOPTAR',       icon: PawPrint, color: 'text-purple-600', bgColor: 'bg-purple-100', featured: false },
		{ value: 40, label: 'VOLUNTARIOS',              icon: Users,    color: 'text-blue-600',   bgColor: 'bg-blue-100',   featured: false },
	];

	return (
		<div className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto auto-rows-fr">
			{stats.map((stat, index) => {
				const Icon = stat.icon;
				return (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.1 }}
						whileHover={{ y: -10 }}
						className="relative h-full"
					>
						<div className={`absolute -inset-4 ${stat.bgColor.replace('100', '200')} rounded-3xl blur-xl opacity-30`} />

						<div className={`relative p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow text-center h-full flex flex-col items-center justify-center ${stat.featured ? 'lg:h-[calc(100%+3rem)]' : ''}`}>
							<div className={`inline-flex items-center justify-center w-14 h-14 ${stat.bgColor} rounded-xl mb-4`}>
								<Icon className={`w-7 h-7 ${stat.color}`} />
							</div>

							<div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
								<CountUp end={stat.value} duration={2.5} />
							</div>

							<p className="text-sm font-semibold text-gray-600 tracking-wide">{stat.label}</p>
						</div>
					</motion.div>
				);
			})}
		</div>
	);
};

export default Counter;
