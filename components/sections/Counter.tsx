// 'use client';

// import CountUp from 'react-countup';

// const Counter = () => {
// 	return (
// 		<div className="flex flex-col md:flex-row justify-center gap-20 py-10 text-center bg-white rounded-xl border shadow-sm border-teal-300/40 hover:shadow-md transition-all">
// 			<div>
// 				<p className="text-5xl font-extrabold font-nunito text-teal-900">
// 					<CountUp end={10} duration={3} />
// 				</p>
// 				<p className="text-sm font-semibold text-gray-600 tracking-wide mt-2">AÑOS DE ACCIÓN</p>
// 			</div>
// 			<div>
// 				<p className="text-5xl font-extrabold font-nunito text-teal-900">
// 					<CountUp end={90} duration={2.5} />
// 				</p>
// 				<p className="text-sm font-semibold text-gray-600 tracking-wide mt-2">DISCAS ADOPTADOS</p>
// 			</div>
// 			<div>
// 				<p className="text-5xl font-extrabold font-nunito text-teal-900">
// 					<CountUp end={3} duration={5} />
// 				</p>
// 				<p className="text-sm font-semibold text-gray-600 tracking-wide mt-2">DISCAS ADOPTADOS EN 2025</p>
// 			</div>
// 			<div>
// 				<p className="text-5xl font-extrabold font-nunito text-teal-900">
// 					<CountUp end={18} duration={4} />
// 				</p>
// 				<p className="text-sm font-semibold text-gray-600 tracking-wide mt-2">DISCAS POR ADOPTAR</p>
// 			</div>
// 			<div>
// 				<p className="text-5xl font-extrabold font-nunito text-teal-900">
// 					<CountUp end={40} duration={2.5} />
// 				</p>
// 				<p className="text-sm font-semibold text-gray-600 tracking-wide mt-2">VOLUNTARIOS</p>
// 			</div>
// 		</div>
// 	);
// };

// export default Counter;

'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Users, Heart, Target, Calendar, PawPrint } from 'lucide-react';

const Counter = () => {
	const stats = [
		{
			value: 10,
			label: 'AÑOS DE ACCIÓN',
			icon: Calendar,
			color: 'text-teal-600',
			bgColor: 'bg-teal-100',
		},
		{
			value: 90,
			label: 'DISCAS ADOPTADOS',
			icon: Heart,
			color: 'text-amber-600',
			bgColor: 'bg-amber-100',
		},
		{
			value: 3,
			label: 'DISCAS ADOPTADOS EN 2025',
			icon: Target,
			color: 'text-red-600',
			bgColor: 'bg-red-100',
		},
		{
			value: 18,
			label: 'DISCAS POR ADOPTAR',
			icon: PawPrint,
			color: 'text-purple-600',
			bgColor: 'bg-purple-100',
		},
		{
			value: 40,
			label: 'VOLUNTARIOS',
			icon: Users,
			color: 'text-blue-600',
			bgColor: 'bg-blue-100',
		},
	];

	return (
		<div className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
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
						className="relative"
					>
						{/* Fondo decorativo */}
						<div
							className={`absolute -inset-4 ${stat.bgColor
								.replace('bg-', 'bg-')
								.replace('100', '200')} rounded-3xl blur-xl opacity-30`}
						/>

						<div className="relative p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow text-center">
							{/* Icono */}
							<div className={`inline-flex items-center justify-center w-14 h-14 ${stat.bgColor} rounded-xl mb-4`}>
								<Icon className={`w-7 h-7 ${stat.color}`} />
							</div>

							{/* Número con animación */}
							<div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
								<CountUp
									end={stat.value}
									duration={2.5}
									prefix={stat.value === 10 ? '' : ''}
									suffix={stat.value === 10 ? '' : ''}
								/>
							</div>

							{/* Etiqueta */}
							<p className="text-sm font-semibold text-gray-600 tracking-wide">{stat.label}</p>
						</div>
					</motion.div>
				);
			})}
		</div>
	);
};

export default Counter;
