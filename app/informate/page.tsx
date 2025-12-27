// import HeaderDos from '@/components/layout/HeaderDos';
// import InfoCard from '@/components/myComponents/InfoCard';
// import Image from 'next/image';

// function Informate() {
// 	return (
// 		<div className="flex flex-col">
// 			<HeaderDos
// 				title="Uso responsable del carrito"
// 				description="Recomendaciones, cuidados y recursos para acompañar de forma segura a los peluditos que usan carrito."
// 			/>

// 			<section className="px-10 md:px-28 flex flex-col mb-32">
// 				<div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
// 					{/* FOTO */}
// 					<div className="flex justify-center order-2 xl:order-1">
// 						<Image
// 							src="/image/varias/varias-6.jpg"
// 							alt="dos discas, uno con carrito"
// 							width={1066}
// 							height={1600}
// 							className="object-cover object-center shadow-lg"
// 						/>
// 					</div>

// 					{/* TEXTO */}
// 					<div className="flex flex-col gap-4 order-1 xl:order-2">
// 						<h2 className="font-nunito uppercase text-3xl md:text-[2.5rem] tracking-widest text-teal-dark font-bold">
// 							Uso correcto y seguro del carrito
// 						</h2>
// 						<p className="text-xl leading-relaxed text-orange font-medium font-quicksand">
// 							Antes de usar un carrito, es importante conocer estas recomendaciones básicas.
// 						</p>

// 						{/* CONSULTA PROFESIONAL */}
// 						<div>
// 							<div className="flex items-center gap-2">
// 								<Image
// 									src="/image/emojis/1FA7A.svg"
// 									alt="Protección de patitas"
// 									width={32}
// 									height={32}
// 									className="shrink-0"
// 								/>
// 								<h3 className="font-bold text-lg text-teal-900">Consulta profesional</h3>
// 							</div>
// 							<p className="text-lg leading-relaxed text-stone-700 font-inter">
// 								El uso del carrito debe ser indicado por un veterinario especializado en fisioterapia o traumatología.
// 							</p>
// 						</div>

// 						{/* TIEMPO DE USO */}
// 						<div>
// 							<div className="flex items-center gap-2">
// 								<Image
// 									src="/image/emojis/E0AB.svg"
// 									alt="Protección de patitas"
// 									width={32}
// 									height={32}
// 									className="shrink-0"
// 								/>
// 								<h3 className="font-bold text-lg text-teal-900">Tiempo de uso</h3>
// 							</div>
// 							<p className="text-lg leading-relaxed text-stone-700 font-inter">
// 								Se comienza con 30 minutos y rara vez se supera 1–2 horas por día. Evitar el uso prolongado.
// 							</p>
// 						</div>

// 						{/* SUPERVISIÓN CONSTANTE */}
// 						<div>
// 							<div className="flex items-center gap-2">
// 								<Image
// 									src="/image/emojis/1F440.svg"
// 									alt="Protección de patitas"
// 									width={32}
// 									height={32}
// 									className="shrink-0"
// 								/>
// 								<h3 className="font-bold text-lg text-teal-900">Supervisión constante</h3>
// 							</div>
// 							<p className="text-lg leading-relaxed text-stone-700 font-inter">
// 								Nunca se debe dejar al animal solo con el carrito. Puede lastimarse o quedar atrapado.
// 							</p>
// 						</div>

// 						{/* PROTECCIÓN DE PATITAS  */}
// 						<div>
// 							<div className="flex items-center gap-2">
// 								<Image
// 									src="/image/emojis/1F9E6.svg"
// 									alt="Protección de patitas"
// 									width={32}
// 									height={32}
// 									className="shrink-0"
// 								/>
// 								<h3 className="font-bold text-lg text-teal-900">Protección de patitas</h3>
// 							</div>
// 							<p className="text-lg leading-relaxed text-stone-700 font-inter">
// 								Usá vendas, medias o pantaloncitos de arrastre para evitar heridas por fricción.
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			{/* CONSEJOS ADICIONALES */}
// 			<section className="px-10 md:px-28">
// 				<div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
// 					{/* TEXTO */}
// 					<div className="flex flex-col gap-6">
// 						<h2 className="font-nunito uppercase text-3xl md:text-[2.5rem] tracking-widest text-teal-dark font-bold">
// 							Consejos adicionales para el uso del carrito
// 						</h2>

// 						<p className="text-lg leading-relaxed text-stone-700 font-inter">
// 							<strong className="text-teal-700">Adaptación al carrito: </strong>
// 							Un carrito bien fabricado no debería generar incomodidad. La mayoría de los peluditos se adaptan
// 							rápidamente cuando el carrito está hecho con materiales livianos y cuenta con pecheras y ruedas adecuadas.
// 						</p>

// 						<p className="text-lg leading-relaxed text-stone-700 font-inter">
// 							<strong className="text-teal-700">Conciencia y amor: </strong>
// 							Tener un perro en un carrito no debe causar lástima. Estos animales siguen mostrando amor y valentía pese
// 							a las adversidades. La buena energía y el acompañamiento son fundamentales para su bienestar emocional.
// 						</p>

// 						<p className="text-lg leading-relaxed text-stone-700 font-inter">
// 							<strong className="text-teal-700">Uso responsable de carritos: </strong>
// 							El uso debe estar indicado por un veterinario especializado. No todos los animales requieren un carrito de
// 							inmediato: después de una lesión o cirugía, primero necesitan recuperación. Usarlo antes de tiempo puede
// 							ser perjudicial.
// 						</p>

// 						<p className="text-lg leading-relaxed text-stone-700 font-inter">
// 							Si tu peludo debe utilizar un carrito, comenzá con períodos cortos y siempre bajo supervisión. Protegé sus
// 							patitas con vendas, medias o pantaloncitos de arrastre.
// 						</p>

// 						<p className="text-lg leading-relaxed text-stone-700 font-inter">
// 							Para más información sobre cuidados, alimentación e higiene, podés contactarnos a{' '}
// 							<a
// 								href="mailto:discasrodandoporlavida@gmail.com"
// 								className="text-red underline font-medium hover:text-red-800"
// 							>
// 								discasrodandoporlavida@gmail.com
// 							</a>
// 							.
// 						</p>
// 					</div>

// 					{/* FOTO */}
// 					<div className="flex gap-2 justify-center">
// 						<Image
// 							src="/image/varias/varias-3.jpg"
// 							alt="un discas en su carro"
// 							width={1600}
// 							height={1066}
// 							className="max-h-dvh object-cover object-center shadow-lg"
// 						/>
// 					</div>
// 				</div>
// 			</section>

// 			<div className="my-32 relative w-full h-[400px] md:h-[500px] overflow-hidden">
// 				<Image
// 					src="/image/varias/carro-2.jpg"
// 					alt="carro de los discas"
// 					fill
// 					className="hiiden md:block object-cover object-left md:object-center brightness-50"
// 				/>

// 				<Image
// 					src="/image/varias/carro-1.jpg"
// 					alt="carro de los discas"
// 					fill
// 					className="md:hidden object-cover object-left md:object-center brightness-50"
// 				/>

// 				<div className="absolute inset-0 bg-black/40"></div>

// 				<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 gap-4">
// 					<h2 className="uppercase text-3xl md:text-4xl tracking-widest text-white font-bold drop-shadow-lg font-dancing">
// 						Rodando hacia una vida mejor
// 					</h2>

// 					<p className="text-lg md:text-xl leading-relaxed text-stone-100 max-w-2xl drop-shadow">
// 						Con cuidados adecuados, amor y un carrito bien utilizado, cada peludito puede recuperar su libertad y
// 						disfrutar del camino.
// 					</p>
// 				</div>
// 			</div>

// 			<section className="px-10 md:px-28 flex flex-col">
// 				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
// 					<InfoCard
// 						icon="/image/emojis/1F6E0.svg"
// 						title="Fabricantes de carritos"
// 						description={
// 							<>
// 								Alberto (+54 351 3645964) <br />
// 								Ringo Ortopedia (+54 3541588868) <br />
// 								Luis Ríos (+54 3624550301) <br />
// 								Wocars (+54 1169792064)
// 							</>
// 						}
// 					/>

// 					<InfoCard
// 						icon="/image/emojis/1F455.svg"
// 						title="Accesorios ortopédicos"
// 						description={
// 							<>
// 								Ortopedia Per-Ros (+54 2235976757)
// 								<br />
// 								<a
// 									href="https://www.per-ros.com/productos-categorias.php?IDcategoria=21&linea=S"
// 									target="_blank"
// 									className="text-teal-700 underline font-medium"
// 								>
// 									per-ros.com
// 								</a>
// 							</>
// 						}
// 					/>

// 					<InfoCard
// 						icon="/image/emojis/1F3CB.svg"
// 						title="Ejercicios de fisioterapia"
// 						description={
// 							<>
// 								<a href="https://youtu.be/bbXI3N4-jLI" target="_blank" className="text-teal-700 underline font-medium">
// 									Fisioterapia general
// 								</a>{' '}
// 								<br />
// 								<a href="https://youtu.be/wFUrTI6_F7E" target="_blank" className="text-teal-700 underline font-medium">
// 									Artrosis en perros
// 								</a>
// 							</>
// 						}
// 					/>

// 					<InfoCard
// 						icon="/image/emojis/1F4D6.svg"
// 						title="Guías sobre el uso del carrito"
// 						description={
// 							<>
// 								<a
// 									href="https://www.instagram.com/p/C1YKSR6q2IO/"
// 									target="_blank"
// 									className="text-teal-700 underline font-medium"
// 								>
// 									Post 1
// 								</a>{' '}
// 								•{' '}
// 								<a
// 									href="https://m.facebook.com/story.php?story_fbid=1300667696718365&id=830674807050992"
// 									target="_blank"
// 									className="text-teal-700 underline font-medium"
// 								>
// 									Post 2
// 								</a>
// 								<br />
// 								<a
// 									href="https://m.facebook.com/story.php?story_fbid=2299200890198369&id=830674807050992"
// 									target="_blank"
// 									className="text-teal-700 underline font-medium"
// 								>
// 									Post 3
// 								</a>{' '}
// 								•{' '}
// 								<a
// 									href="https://m.facebook.com/story.php?story_fbid=3901601323291643&id=830674807050992"
// 									target="_blank"
// 									className="text-teal-700 underline font-medium"
// 								>
// 									Post 4
// 								</a>
// 							</>
// 						}
// 					/>

// 					<InfoCard icon="/image/emojis/1F9B4.svg" title="Taller Discas" description="Gretel (+54 3517668348)" />

// 					<InfoCard
// 						icon="/image/emojis/1F468-200D-2695-FE0F.svg"
// 						title="Veterinario recomendado"
// 						description={
// 							<>
// 								Dr. Hernán González <br />
// 								Veterinaria Quirós - Duarte Quirós 3191 <br />
// 								Atiende con turno.
// 							</>
// 						}
// 					/>
// 				</div>
// 			</section>
// 		</div>
// 	);
// }

// export default Informate;

import HeaderDos from '@/components/layout/HeaderDos';
import InfoCard from '@/components/myComponents/InfoCard';
import Image from 'next/image';
import { Shield, Clock, Eye, Heart, Sparkles, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

function Informate() {
	const recomendaciones = [
		{
			icon: Shield,
			title: 'Consulta profesional',
			description:
				'El uso del carrito debe ser indicado por un veterinario especializado en fisioterapia o traumatología.',
			color: 'teal',
		},
		{
			icon: Clock,
			title: 'Tiempo de uso',
			description: 'Se comienza con 30 minutos y rara vez se supera 1–2 horas por día. Evitar el uso prolongado.',
			color: 'amber',
		},
		{
			icon: Eye,
			title: 'Supervisión constante',
			description: 'Nunca se debe dejar al animal solo con el carrito. Puede lastimarse o quedar atrapado.',
			color: 'blue',
		},
		{
			icon: Heart,
			title: 'Protección de patitas',
			description: 'Usá vendas, medias o pantaloncitos de arrastre para evitar heridas por fricción.',
			color: 'pink',
		},
	];

	const consejos = [
		{
			title: 'Adaptación al carrito',
			content:
				'Un carrito bien fabricado no debería generar incomodidad. La mayoría de los peluditos se adaptan rápidamente cuando el carrito está hecho con materiales livianos y cuenta con pecheras y ruedas adecuadas.',
		},
		{
			title: 'Conciencia y amor',
			content:
				'Tener un perro en un carrito no debe causar lástima. Estos animales siguen mostrando amor y valentía pese a las adversidades. La buena energía y el acompañamiento son fundamentales para su bienestar emocional.',
		},
		{
			title: 'Uso responsable',
			content:
				'El uso debe estar indicado por un veterinario especializado. No todos los animales requieren un carrito de inmediato: después de una lesión o cirugía, primero necesitan recuperación. Usarlo antes de tiempo puede ser perjudicial.',
		},
	];

	return (
		<main className="flex flex-col">
			{/* Header */}
			<HeaderDos
				title="Uso responsable del carrito"
				description="Recomendaciones, cuidados y recursos para acompañar de forma segura a los peluditos que usan carrito."
			/>

			{/* Sección 1: Uso correcto y seguro */}
			<section className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50/30">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						{/* Columna de texto */}
						<div className="space-y-8">
							{/* Encabezado */}
							<div>
								<div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-100 to-amber-100 rounded-full mb-4">
									<Sparkles className="w-4 h-4 text-teal-600" />
									<span className="text-sm font-medium text-teal-700">Guía esencial</span>
								</div>

								<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-800 via-amber-700 to-teal-800 bg-clip-text text-transparent">
									Uso correcto y seguro del carrito
								</h2>

								<p className="text-lg md:text-xl text-amber-700 font-medium">
									Antes de usar un carrito, es importante conocer estas recomendaciones básicas.
								</p>
							</div>

							{/* Recomendaciones */}
							<div className="grid gap-4">
								{recomendaciones.map((item, index) => {
									const Icon = item.icon;
									const colors = {
										teal: 'bg-teal-100 text-teal-700 border-teal-200',
										amber: 'bg-amber-100 text-amber-700 border-amber-200',
										blue: 'bg-blue-100 text-blue-700 border-blue-200',
										pink: 'bg-pink-100 text-pink-700 border-pink-200',
									};

									return (
										<Card key={index} className="border-0 shadow-sm">
											<CardContent className="p-6">
												<div className="flex items-start gap-4">
													<div className={`p-3 rounded-xl ${colors[item.color as keyof typeof colors]}`}>
														<Icon className="w-6 h-6" />
													</div>
													<div className="flex-1">
														<h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
														<p className="text-gray-700 leading-relaxed">{item.description}</p>
													</div>
												</div>
											</CardContent>
										</Card>
									);
								})}
							</div>
						</div>

						{/* Columna de imagen */}
						<div className="relative">
							{/* Marco decorativo */}
							<div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-amber-400 rounded-3xl blur-xl opacity-20" />

							<div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
								<Image
									src="/image/varias/varias-6.jpg"
									alt="Dos discas, uno con carrito"
									width={600}
									height={800}
									className="w-full h-auto object-cover"
								/>

								{/* Overlay informativo */}
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
									<div className="text-white">
										<h4 className="text-xl font-bold mb-2">Movilidad con amor</h4>
										<p className="text-white/90">Cada carrito es un paso hacia la independencia y calidad de vida.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Banner: Rodando hacia una vida mejor */}
			<section className="relative py-20 md:py-28 overflow-hidden">
				{/* Fondo de imágenes responsivas */}
				<div className="absolute inset-0">
					<Image
						src="/image/varias/carro-2.jpg"
						alt="Carro de discas"
						fill
						className="hidden md:block object-cover object-center"
						priority
						quality={90}
					/>
					<Image
						src="/image/varias/carro-1.jpg"
						alt="Carro de discas"
						fill
						className="md:hidden object-cover object-center"
						priority
						quality={90}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 via-teal-800/60 to-transparent" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
				</div>

				{/* Contenido */}
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-3xl mx-auto text-center">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
							<Heart className="w-4 h-4 text-amber-300" />
							<span className="text-sm font-medium text-white">Camino hacia la felicidad</span>
						</div>

						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
							Rodando hacia una{' '}
							<span className="bg-gradient-to-r from-amber-300 to-teal-300 bg-clip-text text-transparent">
								vida mejor
							</span>
						</h2>

						<p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
							Con cuidados adecuados, amor y un carrito bien utilizado, cada peludito puede recuperar su libertad y
							disfrutar del camino.
						</p>

						<div className="flex flex-wrap justify-center gap-4">
							<Button size="lg" className="bg-white text-teal-700 hover:bg-white/90 font-semibold shadow-lg">
								<Heart className="w-5 h-5 mr-2" />
								Contactar para asesoramiento
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Sección 2: Consejos adicionales */}
			<section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50/30">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						{/* Columna de imagen */}
						<div className="relative order-2 lg:order-1">
							{/* Marco decorativo */}
							<div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-teal-400 rounded-3xl blur-xl opacity-20" />

							<div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
								<Image
									src="/image/varias/varias-3.jpg"
									alt="Un discas en su carro"
									width={800}
									height={600}
									className="w-full h-auto object-cover"
								/>
							</div>
						</div>

						{/* Columna de texto */}
						<div className="space-y-8 order-1 lg:order-2">
							{/* Encabezado */}
							<div>
								<div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-pink-100 rounded-full mb-4">
									<Sparkles className="w-4 h-4 text-amber-600" />
									<span className="text-sm font-medium text-amber-700">Conocimiento que empodera</span>
								</div>

								<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-800 via-amber-700 to-teal-800 bg-clip-text text-transparent">
									Consejos adicionales para el uso del carrito
								</h2>
							</div>

							{/* Consejos */}
							<div className="space-y-6">
								{consejos.map((consejo, index) => (
									<Card key={index} className="bg-gradient-to-br from-white to-gray-50 border-gray-200">
										<CardContent className="p-6">
											<h3 className="font-bold text-xl text-teal-800 mb-3">{consejo.title}</h3>
											<p className="text-gray-700 leading-relaxed">{consejo.content}</p>
										</CardContent>
									</Card>
								))}
							</div>

							{/* Información adicional */}
							<Card className="bg-gradient-to-r from-teal-50 to-amber-50 border-teal-200">
								<CardContent className="p-6">
									<p className="text-gray-700 leading-relaxed mb-4">
										Si tu peludo debe utilizar un carrito, comenzá con períodos cortos y siempre bajo supervisión.
										Protegé sus patitas con vendas, medias o pantaloncitos de arrastre.
									</p>

									<div className="flex items-center gap-3 p-4 bg-white/70 rounded-xl border border-teal-200">
										<Mail className="w-5 h-5 text-teal-600" />
										<div>
											<p className="text-sm text-gray-600">Para más información:</p>
											<Link
												href="mailto:discasrodandoporlavida@gmail.com"
												className="text-teal-700 font-medium hover:text-teal-800 hover:underline"
											>
												discasrodandoporlavida@gmail.com
											</Link>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Sección 3: InfoCards (Tus componentes originales) */}
			<section className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50">
				<div className="container mx-auto px-4">
					{/* Encabezado */}
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full mb-4">
							<Shield className="w-4 h-4 text-teal-600" />
							<span className="text-sm font-medium text-teal-700">Recursos y contactos</span>
						</div>

						<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-800 via-blue-700 to-teal-800 bg-clip-text text-transparent">
							Directorio de ayuda
						</h2>

						<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
							Contactos de fabricantes, veterinarios especializados y recursos educativos para el cuidado de discas.
						</p>
					</div>

					{/* Grid de InfoCards - Manteniendo tus componentes originales */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						<InfoCard
							icon="/image/emojis/1F6E0.svg"
							title="Fabricantes de carritos"
							description={
								<>
									Alberto (+54 351 3645964) <br />
									Ringo Ortopedia (+54 3541588868) <br />
									Luis Ríos (+54 3624550301) <br />
									Wocars (+54 1169792064)
								</>
							}
						/>

						<InfoCard
							icon="/image/emojis/1F455.svg"
							title="Accesorios ortopédicos"
							description={
								<>
									Ortopedia Per-Ros (+54 2235976757)
									<br />
									<a
										href="https://www.per-ros.com/productos-categorias.php?IDcategoria=21&linea=S"
										target="_blank"
										rel="noopener noreferrer"
										className="text-teal-700 underline font-medium hover:text-teal-800"
									>
										per-ros.com
									</a>
								</>
							}
						/>

						<InfoCard
							icon="/image/emojis/1F3CB.svg"
							title="Ejercicios de fisioterapia"
							description={
								<>
									<a
										href="https://youtu.be/bbXI3N4-jLI"
										target="_blank"
										rel="noopener noreferrer"
										className="text-teal-700 underline font-medium hover:text-teal-800"
									>
										Fisioterapia general
									</a>{' '}
									<br />
									<a
										href="https://youtu.be/wFUrTI6_F7E"
										target="_blank"
										rel="noopener noreferrer"
										className="text-teal-700 underline font-medium hover:text-teal-800"
									>
										Artrosis en perros
									</a>
								</>
							}
						/>

						<InfoCard
							icon="/image/emojis/1F4D6.svg"
							title="Guías sobre el uso del carrito"
							description={
								<>
									<a
										href="https://www.instagram.com/p/C1YKSR6q2IO/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-teal-700 underline font-medium hover:text-teal-800"
									>
										Post 1
									</a>{' '}
									•{' '}
									<a
										href="https://m.facebook.com/story.php?story_fbid=1300667696718365&id=830674807050992"
										target="_blank"
										rel="noopener noreferrer"
										className="text-teal-700 underline font-medium hover:text-teal-800"
									>
										Post 2
									</a>
									<br />
									<a
										href="https://m.facebook.com/story.php?story_fbid=2299200890198369&id=830674807050992"
										target="_blank"
										rel="noopener noreferrer"
										className="text-teal-700 underline font-medium hover:text-teal-800"
									>
										Post 3
									</a>{' '}
									•{' '}
									<a
										href="https://m.facebook.com/story.php?story_fbid=3901601323291643&id=830674807050992"
										target="_blank"
										rel="noopener noreferrer"
										className="text-teal-700 underline font-medium hover:text-teal-800"
									>
										Post 4
									</a>
								</>
							}
						/>

						<InfoCard icon="/image/emojis/1F9B4.svg" title="Taller Discas" description="Gretel (+54 3517668348)" />

						<InfoCard
							icon="/image/emojis/1F468-200D-2695-FE0F.svg"
							title="Veterinario recomendado"
							description={
								<>
									Dr. Hernán González <br />
									Veterinaria Quirós - Duarte Quirós 3191 <br />
									Atiende con turno.
								</>
							}
						/>
					</div>

					{/* Llamado a la acción */}
					<div className="text-center">
						<div className="inline-flex flex-col md:flex-row items-center gap-6 p-8 bg-gradient-to-r from-white to-teal-50 rounded-2xl border border-teal-200 max-w-3xl mx-auto shadow-lg">
							<div className="flex-1 text-center md:text-left">
								<h3 className="text-2xl font-bold text-gray-800 mb-2">¿Necesitás asesoramiento personalizado?</h3>
								<p className="text-gray-600 mb-4">
									Contactanos para recibir guía específica sobre el cuidado de tu peludito con discapacidad.
								</p>
							</div>

							<Button
								size="lg"
								className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 font-semibold shadow-lg"
							>
								<Phone className="w-5 h-5 mr-2" />
								Contactar ahora
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Pie de página */}
			<div className="bg-gradient-to-r from-teal-50 to-amber-50 border-t border-teal-200 py-12">
				<div className="container mx-auto px-4">
					<div className="text-center">
						<div className="inline-flex items-center gap-3 p-4 bg-white rounded-2xl border border-teal-200 mb-6">
							<MapPin className="w-5 h-5 text-teal-600" />
							<div>
								<h4 className="font-bold text-teal-800">Veterinaria de referencia</h4>
								<p className="text-gray-700">Av. Duarte Quirós 3191, Córdoba</p>
							</div>
						</div>

						<p className="text-gray-600">
							💙 La información compartida es de carácter orientativo. Siempre consultá con un profesional veterinario.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Informate;
