import { HeartHandshake, Sparkles, Phone, Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const sponsors = [
	{
		nombre: 'San Nicolás Salud Mental',
		instagram: '@sannicolas.saludmental',
		descripcion: 'Clínica Privada Integral de Salud Mental',
		telefono: '351 703 4611',
	},
	{
		nombre: 'Andrea Bertini Pastelería',
		instagram: '@andreabertinipasteleria',
		descripcion: 'Pastelería profesional ¡Riquísimo!',
		telefono: null,
	},
	{
		nombre: 'Traslados Guau',
		instagram: '@gabiszafran',
		descripcion: 'Servicio de traslado para llevarte a vos y a tu peludo donde necesiten ❤',
		telefono: '351 200 6168',
	},
	{
		nombre: 'Hand Made Arte Textil',
		instagram: '@handmadeartetextil',
		descripcion: 'Productos únicos personalizados a tu gusto ✨',
		telefono: null,
	},
	{
		nombre: 'Asesor Inmobiliario M&L',
		instagram: '@asesor_inmobiliario_myl',
		descripcion: 'Esteban Cuello — Si necesitás un agente inmobiliario, lo acabás de encontrar!',
		telefono: '351 766 7169',
	},
	{
		nombre: 'ONG NAMO — Masajista Profesional',
		instagram: '@masajista_profesional25',
		descripcion: 'Masajes relajantes, descontracturantes. Aromaterapia y Musicoterapia',
		telefono: '351 631 7739',
	},
	{
		nombre: 'Consultor Psicológico — Parejas',
		instagram: '@anacamargo320',
		descripcion: 'Espacio de escucha y acompañamiento para parejas',
		telefono: '351 223 0025',
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
						Nuestros Sponsors
					</h2>

					<p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
						Conocé a los Sponsors que nos permiten seguir rescatando y rehabilitando vidas ❤
					</p>
				</div>

				{/* Grid de sponsors */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
					{sponsors.map((sponsor) => (
						<Card key={sponsor.instagram} className="border-0 shadow-sm hover:shadow-md transition-shadow">
							<CardContent className="p-5">
								<div className="flex items-start gap-3 mb-3">
									<div className="p-2 bg-amber-50 rounded-lg shrink-0">
										<HeartHandshake className="w-4 h-4 text-amber-600" />
									</div>
									<div className="min-w-0">
										<h3 className="font-bold text-gray-800 text-sm leading-snug">{sponsor.nombre}</h3>
										<a
											href={`https://www.instagram.com/${sponsor.instagram.replace('@', '')}`}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1 text-xs text-teal-600 hover:text-teal-700 mt-0.5"
										>
											<Instagram className="w-3 h-3" />
											{sponsor.instagram}
										</a>
									</div>
								</div>

								<p className="text-sm text-gray-600 leading-relaxed mb-3">{sponsor.descripcion}</p>

								{sponsor.telefono && (
									<a
										href={`tel:${sponsor.telefono.replace(/\s/g, '')}`}
										className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-teal-600 transition-colors"
									>
										<Phone className="w-3 h-3" />
										{sponsor.telefono}
									</a>
								)}
							</CardContent>
						</Card>
					))}
				</div>

				{/* Llamado a ser sponsor */}
				<div className="text-center">
					<div className="inline-flex flex-col sm:flex-row items-center gap-6 p-7 bg-linear-to-r from-white to-teal-50 rounded-2xl border border-teal-200 max-w-2xl mx-auto shadow-lg">
						<div className="flex-1 text-center sm:text-left">
							<h3 className="text-xl font-bold text-gray-800 mb-1">¿Querés sumarte como Sponsor?</h3>
							<p className="text-gray-600 text-sm">Visibilizá tu emprendimiento y apoyá a Fundación Discas.</p>
						</div>
						<a
							href="https://wa.me/5493516858771"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors shadow-md shrink-0 text-sm"
						>
							<Phone className="w-4 h-4" />
							Contactar a Silvina
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SponsorsSection;
