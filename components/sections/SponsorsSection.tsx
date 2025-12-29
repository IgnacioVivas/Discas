import { Building2, HeartHandshake, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import client1 from '@/public/image/client-1.png';
import client2 from '@/public/image/client-2.png';
import client3 from '@/public/image/client-3.png';
import client4 from '@/public/image/client-4.png';

const sponsorsData = [
	{
		imagen: client1,
		alt: 'Patrocinador 1',
		name: 'Empresa Solidaria',
		type: 'Patrocinador Platino',
	},
	{
		imagen: client2,
		alt: 'Patrocinador 2',
		name: 'Veterinaria Amiga',
		type: 'Aliado de Salud',
	},
	{
		imagen: client3,
		alt: 'Patrocinador 3',
		name: 'Tienda Mascotas',
		type: 'Proveedor Oficial',
	},
	{
		imagen: client4,
		alt: 'Patrocinador 4',
		name: 'Fundación Hermanos',
		type: 'Aliado Estratégico',
	},
];

const SponsorsSection = () => {
	return (
		<section className="bg-linear-to-b from-white to-amber-50/30">
			<div className="container mx-auto px-4">
				{/* Encabezado */}
				<div className="text-center mb-12">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-amber-100 to-pink-100 rounded-full mb-4">
						<Sparkles className="w-4 h-4 text-amber-600" />
						<span className="text-sm font-medium text-amber-700">Juntos hacemos más</span>
					</div>

					<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-teal-800 via-amber-700 to-teal-800 bg-clip-text text-transparent">
						Nuestros Aliados
					</h2>

					<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
						Empresas y organizaciones que creen en nuestra causa y nos acompañan en este camino.
					</p>
				</div>

				{/* Grid de sponsors */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
					{sponsorsData.map((sponsor, index) => (
						<Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-shadow">
							<CardContent className="p-6">
								<div className="flex flex-col items-center text-center">
									{/* Logo del sponsor */}
									<div className="w-32 h-32 relative mb-6">
										<Image src={sponsor.imagen} alt={sponsor.alt} fill className="object-contain" />
									</div>

									{/* Información */}
									<h3 className="font-bold text-gray-800 mb-2">{sponsor.name}</h3>
									<p className="text-sm text-teal-600 font-medium mb-4">{sponsor.type}</p>

									{/* Icono decorativo */}
									<div className="p-2 bg-amber-50 rounded-lg">
										<HeartHandshake className="w-5 h-5 text-amber-600" />
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Llamado a ser sponsor */}
				<div className="text-center">
					<div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 bg-linear-to-r from-white to-teal-50 rounded-2xl border border-teal-200 max-w-3xl mx-auto shadow-lg">
						<div className="flex-1 text-center md:text-left">
							<h3 className="text-2xl font-bold text-gray-800 mb-2">¿Querés ser nuestro aliado?</h3>
							<p className="text-gray-600 mb-4">
								Sumate a esta red de organizaciones comprometidas con el bienestar animal.
							</p>
						</div>

						<button className="px-6 py-3 bg-linear-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg">
							<Building2 className="w-5 h-5 inline mr-2" />
							Ser patrocinador
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SponsorsSection;
