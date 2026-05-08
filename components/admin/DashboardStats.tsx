import { PawPrint, BarChart3, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Disca } from '@/interface/interfaces';

interface Props {
	animales: Disca[];
}

export default function DashboardStats({ animales }: Props) {
	const stats = [
		{
			label: 'Animales activos',
			value: animales.filter((a) => a.publicado).length,
			icon: PawPrint,
			color: 'from-teal-500 to-teal-600',
			change: `+${animales.filter((a) => new Date(a.createdAt) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).length} este mes`,
			description: 'Disponibles para adopción',
		},
		{
			label: 'Total animales',
			value: animales.length,
			icon: BarChart3,
			color: 'from-amber-500 to-orange-500',
			change: `${animales.filter((a) => !a.fallecido && !a.adoptado).length} disponibles`,
			description: 'En el sistema',
		},
		{
			label: 'Adoptados',
			value: animales.filter((a) => a.adoptado).length,
			icon: Heart,
			color: 'from-pink-500 to-rose-500',
			change: `${animales.filter((a) => a.fallecido).length} en el cielo`,
			description: 'Encontraron hogar',
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
			{stats.map((stat, i) => (
				<motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }}>
					<Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
						<div className={`h-1.5 bg-gradient-to-r ${stat.color}`} />
						<CardContent className="p-6">
							<div className="flex items-start justify-between">
								<div>
									<p className="text-sm text-gray-500 mb-1">{stat.label}</p>
									<div className="flex items-end gap-2 mb-1">
										<p className="text-3xl font-bold text-gray-800">{stat.value}</p>
										<span className="text-xs font-medium px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full mb-1">
											{stat.change}
										</span>
									</div>
									<p className="text-sm text-gray-500">{stat.description}</p>
								</div>
								<div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-md`}>
									<stat.icon className="w-5 h-5 text-white" />
								</div>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			))}
		</div>
	);
}
