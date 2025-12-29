import OurTeam from '@/components/sections/OurTeam';
import SponsorsSection from '@/components/sections/SponsorsSection';
import OurValue from '@/components/sections/OurValue';
import Counter from '@/components/sections/Counter';
import HeaderDos from '@/components/layout/HeaderDos';
import { Heart, Users, Target, Star, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

function Conocenos() {
	const valores = [
		{
			icon: Target,
			title: 'Nuestra Misión',
			description:
				'Decimos NO a la eutanasia por discapacidad. Visibilizamos que los animales con discapacidad pueden desarrollarse plenamente y ser felices.',
			color: 'red',
		},
		{
			icon: Users,
			title: 'Nuestra Visión',
			description:
				'Una sociedad donde ningún animal sea descartado por su discapacidad, y donde cada vida sea valorada y respetada.',
			color: 'teal',
		},
		{
			icon: Star,
			title: 'Nuestros Valores',
			description: 'Empatía, responsabilidad, compromiso y amor incondicional guían cada una de nuestras acciones.',
			color: 'amber',
		},
	];

	return (
		<main className="flex flex-col">
			{/* Header */}
			<HeaderDos title="¿Quiénes somos?" description="La discapacidad no define, el amor sí." />

			{/* Sección 1: Qué es Discas */}
			<section className="py-16 md:py-24 bg-linear-to-b from-white to-teal-50/30">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						{/* Columna de texto */}
						<div className="space-y-8">
							<div>
								<div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-teal-100 to-amber-100 rounded-full mb-4">
									<Sparkles className="w-4 h-4 text-teal-600" />
									<span className="text-sm font-medium text-teal-700">Sobre la fundación</span>
								</div>

								<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-teal-800 via-amber-700 to-teal-800 bg-clip-text text-transparent">
									¿QUÉ ES DISCAS?
								</h2>

								<p className="text-lg text-gray-700 leading-relaxed">
									Discas es el primer y único grupo organizado de Córdoba Capital destinado específicamente al rescate,
									rehabilitación y adopción de animales con discapacidad.
								</p>
							</div>

							<div className="space-y-6">
								<p className="text-gray-700 leading-relaxed">
									Nuestro trabajo nace del amor, la empatía y la convicción de que la discapacidad no limita el derecho
									a una vida digna, feliz y acompañada.
								</p>

								<p className="text-gray-700 leading-relaxed">
									Nos dedicamos a brindar segundas oportunidades a peluditos que muchas veces son invisibilizados:
									animales con parálisis, amputaciones, enfermedades crónicas o secuelas físicas que requieren cuidados
									especiales, pero que tienen intactas sus ganas de vivir, jugar y dar amor.
								</p>

								<Card className="bg-linear-to-br from-amber-50 to-pink-50 border-amber-100">
									<CardContent className="p-6">
										<div className="flex items-start gap-4">
											<div className="p-3 bg-amber-100 rounded-xl">
												<Heart className="w-6 h-6 text-amber-600" />
											</div>
											<div>
												<h4 className="font-bold text-gray-800 mb-2">Adopciones difíciles</h4>
												<p className="text-gray-700">
													También acompañamos y promovemos las llamadas “adopciones difíciles”, impulsando la adopción
													de animales de edad avanzada o con historias complejas.
												</p>
											</div>
										</div>
									</CardContent>
								</Card>

								<p className="text-gray-700 leading-relaxed">
									En Discas creemos que no se trata solo de rescatar, sino de acompañar cada proceso con
									responsabilidad, información y compromiso, construyendo vínculos reales entre personas y animales.
								</p>
							</div>

							<Button
								size="lg"
								className="bg-linear-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 font-semibold shadow-lg"
							>
								<Users className="w-5 h-5 mr-2" />
								Unite a nuestra causa
								<ArrowRight className="w-5 h-5 ml-2" />
							</Button>
						</div>

						{/* Columna de imagen */}
						<div className="relative">
							{/* Marco decorativo */}
							<div className="absolute -inset-4 bg-linear-to-r from-teal-400 to-amber-400 rounded-3xl blur-xl opacity-20" />

							<div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
								<Image
									src="/image/varias/equipo-1.jpeg"
									alt="Equipo de Discas trabajando con animales"
									width={800}
									height={600}
									className="w-full h-auto object-cover"
								/>

								{/* Overlay informativo */}
								<div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
									<div className="text-white">
										<h4 className="text-xl font-bold mb-2">Trabajo en equipo</h4>
										<p className="text-white/90">
											Personas reales, corazones grandes, haciendo la diferencia todos los días.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Sección 2: Counter */}
			<section className="py-16 bg-linear-to-b from-teal-50/30 to-white">
				<div className="container mx-auto px-4">
					<Counter />
				</div>
			</section>

			{/* Sección 4: OurValue (tu componente original) */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<OurValue />
				</div>
			</section>

			{/* Sección 5: Nuestro Equipo */}
			<section className="py-16 md:py-24 bg-linear-to-b from-white to-teal-50/30">
				<div className="container mx-auto px-4">
					<OurTeam />
				</div>
			</section>

			{/* Sección 6: SponsorsSection */}
			<section className="py-16 bg-linear-to-b from-teal-50/30 to-white">
				<div className="container mx-auto px-4">
					<SponsorsSection />
				</div>
			</section>
		</main>
	);
}

export default Conocenos;
