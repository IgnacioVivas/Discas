// import HeaderDos from '@/components/layout/HeaderDos';
// import InfoCard from '@/components/myComponents/InfoCard';
// import React from 'react';

// function Denuncia() {
// 	return (
// 		<div>
// 			<HeaderDos
// 				title="Denunciar también es cuidar"
// 				description="Recursos y orientación para intervenir frente al maltrato y proteger a quienes no pueden hacerlo."
// 			/>

// 			<section className="px-10 md:px-28 flex flex-col mb-32">
// 				{/* Título + subtítulo */}
// 				<div className="flex flex-col items-center justify-center gap-4 text-center max-w-3xl mx-auto mb-10">
// 					<h2 className="uppercase text-3xl md:text-[2.5rem] tracking-widest text-teal-900 font-bold">
// 						Cómo denunciar maltrato animal
// 					</h2>

// 					<p className="text-stone-600 text-lg leading-relaxed">
// 						Pasos claros para actuar frente a una situación de maltrato.
// 					</p>
// 				</div>

// 				{/* GRID DE InfoCardS */}
// 				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// 					{/* InfoCard 1: LEY */}
// 					<InfoCard
// 						icon="/image/emojis/1F4DC.svg"
// 						title="¿Qué dice la Ley 14.346?"
// 						description="La Ley Nacional de Protección Animal prohíbe el maltrato y los actos de crueldad. Toda persona puede denunciar."
// 					/>

// 					{/* InfoCard 2: DONDE DENUNCIAR */}
// 					<InfoCard
// 						icon="/image/emojis/1F4CD.svg"
// 						title="Dónde realizar la denuncia"
// 						description={
// 							<>
// 								Debés dirigirte a la Unidad Judicial del lugar del hecho. Consultá ubicaciones en{' '}
// 								<a
// 									href="http://www.mpfcordoba.gob.ar/unidades-judiciales/"
// 									target="_blank"
// 									rel="noopener noreferrer"
// 									className="text-teal-700 font-medium underline hover:text-teal-900 transition"
// 								>
// 									mpfcordoba.gob.ar/unidades-judiciales
// 								</a>
// 								.
// 							</>
// 						}
// 					/>

// 					{/* InfoCard 3: SI TE NIEGAN */}
// 					<InfoCard
// 						icon="/image/emojis/26A0.svg"
// 						title="Si te niegan la denuncia"
// 						description="Tomá los datos del empleado y dirigite a las Mesas de Atención Permanente en Tribunales I o II."
// 					/>

// 					{/* InfoCard 4: QUE LLEVAR */}
// 					<InfoCard
// 						icon="/image/emojis/1F4DD.svg"
// 						title="Requisitos y contenido"
// 						description="Presentate con DNI. Relatá los hechos con detalles, fechas, lugares, datos del acusado y material como fotos o videos."
// 					/>

// 					{/* InfoCard 5: SEGUIMIENTO */}
// 					<InfoCard
// 						icon="/image/emojis/260E.svg"
// 						title="Seguimiento de la causa"
// 						description="Hacé seguimiento en Fiscalía o con ONGs. Podés solicitar el depósito del animal para protegerlo."
// 					/>

// 					{/* InfoCard 6: CONTACTOS IMPORTANTES */}
// 					<InfoCard
// 						icon="/image/emojis/1F6A8.svg"
// 						title="Contactos útiles"
// 						description={
// 							<>
// 								Patrulla Ambiental: 4344163 <br />
// 								Córdoba Contra el Delito: 0810-888-3368 <br />
// 							</>
// 						}
// 					/>
// 				</div>
// 			</section>
// 		</div>
// 	);
// }

// export default Denuncia;

import HeaderDos from '@/components/layout/HeaderDos';
import InfoCard from '@/components/myComponents/InfoCard';
import { Shield, AlertTriangle, FileText, Phone, MapPin, Clock, Heart, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

function Denuncia() {
	const denunciaSteps = [
		{
			icon: FileText,
			title: '¿Qué dice la Ley 14.346?',
			description:
				'La Ley Nacional de Protección Animal prohíbe el maltrato y los actos de crueldad. Toda persona puede denunciar.',
			color: 'teal',
		},
		{
			icon: MapPin,
			title: 'Dónde realizar la denuncia',
			description: 'Debés dirigirte a la Unidad Judicial del lugar del hecho.',
			color: 'blue',
			link: 'http://www.mpfcordoba.gob.ar/unidades-judiciales/',
			linkText: 'mpfcordoba.gob.ar/unidades-judiciales',
		},
		{
			icon: AlertTriangle,
			title: 'Si te niegan la denuncia',
			description: 'Tomá los datos del empleado y dirigite a las Mesas de Atención Permanente en Tribunales I o II.',
			color: 'amber',
		},
		{
			icon: FileText,
			title: 'Requisitos y contenido',
			description:
				'Presentate con DNI. Relatá los hechos con detalles, fechas, lugares, datos del acusado y material como fotos o videos.',
			color: 'green',
		},
		{
			icon: Clock,
			title: 'Seguimiento de la causa',
			description: 'Hacé seguimiento en Fiscalía o con ONGs. Podés solicitar el depósito del animal para protegerlo.',
			color: 'purple',
		},
		{
			icon: Phone,
			title: 'Contactos útiles',
			description: 'Patrulla Ambiental: 4344163 • Córdoba Contra el Delito: 0810-888-3368',
			color: 'red',
		},
	];

	return (
		<main className="flex flex-col">
			{/* Header */}
			<HeaderDos
				title="Denunciar también es cuidar"
				description="Recursos y orientación para intervenir frente al maltrato y proteger a quienes no pueden hacerlo."
			/>

			{/* Sección principal */}
			<section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50/30">
				<div className="container mx-auto px-4">
					{/* Encabezado */}
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-amber-100 rounded-full mb-4">
							<Sparkles className="w-4 h-4 text-red-600" />
							<span className="text-sm font-medium text-red-700">Tu voz importa</span>
						</div>

						<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-800 via-amber-700 to-red-800 bg-clip-text text-transparent">
							Cómo denunciar maltrato animal
						</h2>

						<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
							Pasos claros para actuar frente a una situación de maltrato. Tu acción puede salvar una vida.
						</p>
					</div>

					{/* Cards de información con iconos */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
						{denunciaSteps.map((step, index) => {
							const Icon = step.icon;
							const colors = {
								teal: 'bg-teal-100 text-teal-700 border-teal-200',
								blue: 'bg-blue-100 text-blue-700 border-blue-200',
								amber: 'bg-amber-100 text-amber-700 border-amber-200',
								green: 'bg-green-100 text-green-700 border-green-200',
								purple: 'bg-purple-100 text-purple-700 border-purple-200',
								red: 'bg-red-100 text-red-700 border-red-200',
							};

							return (
								<Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
									<CardContent className="p-6">
										<div className="flex flex-col h-full">
											<div className="flex items-start gap-4 mb-4">
												<div className={`p-3 rounded-xl ${colors[step.color as keyof typeof colors]}`}>
													<Icon className="w-6 h-6" />
												</div>
												<h3 className="font-bold text-lg text-gray-800">{step.title}</h3>
											</div>

											<p className="text-gray-700 leading-relaxed mb-4 flex-grow">
												{step.description}
												{step.link && (
													<>
														{' '}
														Consultá ubicaciones en{' '}
														<a
															href={step.link}
															target="_blank"
															rel="noopener noreferrer"
															className="text-blue-600 font-medium underline hover:text-blue-800"
														>
															{step.linkText}
														</a>
														.
													</>
												)}
											</p>
										</div>
									</CardContent>
								</Card>
							);
						})}
					</div>

					{/* Tus InfoCards originales */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						<InfoCard
							icon="/image/emojis/1F4DC.svg"
							title="¿Qué dice la Ley 14.346?"
							description="La Ley Nacional de Protección Animal prohíbe el maltrato y los actos de crueldad. Toda persona puede denunciar."
						/>

						<InfoCard
							icon="/image/emojis/1F4CD.svg"
							title="Dónde realizar la denuncia"
							description={
								<>
									Debés dirigirte a la Unidad Judicial del lugar del hecho. Consultá ubicaciones en{' '}
									<a
										href="http://www.mpfcordoba.gob.ar/unidades-judiciales/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-teal-700 font-medium underline hover:text-teal-900 transition"
									>
										mpfcordoba.gob.ar/unidades-judiciales
									</a>
									.
								</>
							}
						/>

						<InfoCard
							icon="/image/emojis/26A0.svg"
							title="Si te niegan la denuncia"
							description="Tomá los datos del empleado y dirigite a las Mesas de Atención Permanente en Tribunales I o II."
						/>

						<InfoCard
							icon="/image/emojis/1F4DD.svg"
							title="Requisitos y contenido"
							description="Presentate con DNI. Relatá los hechos con detalles, fechas, lugares, datos del acusado y material como fotos o videos."
						/>

						<InfoCard
							icon="/image/emojis/260E.svg"
							title="Seguimiento de la causa"
							description="Hacé seguimiento en Fiscalía o con ONGs. Podés solicitar el depósito del animal para protegerlo."
						/>

						<InfoCard
							icon="/image/emojis/1F6A8.svg"
							title="Contactos útiles"
							description={
								<>
									Patrulla Ambiental: 4344163 <br />
									Córdoba Contra el Delito: 0810-888-3368 <br />
								</>
							}
						/>
					</div>

					{/* Llamado a la acción */}
					<div className="text-center">
						<div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-r from-white to-red-50 rounded-2xl border border-red-200 max-w-3xl mx-auto shadow-lg">
							<div className="flex-1 text-center md:text-left">
								<h3 className="text-2xl font-bold text-gray-800 mb-2">¿Presenciaste un caso de maltrato?</h3>
								<p className="text-gray-600 mb-4">
									No dudes en actuar. Tu denuncia puede cambiar la vida de un animal.
								</p>
							</div>

							<Button
								size="lg"
								className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 font-semibold shadow-lg"
							>
								<Shield className="w-5 h-5 mr-2" />
								Orientación inmediata
								<ArrowRight className="w-5 h-5 ml-2" />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Sección de información importante */}
			<section className="py-16 bg-gradient-to-r from-amber-50 to-red-50">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<Card className="bg-white/80 backdrop-blur-sm border-red-100 shadow-sm">
							<CardContent className="p-8">
								<div className="flex items-start gap-4 mb-6">
									<div className="p-3 bg-red-100 rounded-xl">
										<Heart className="w-6 h-6 text-red-600" />
									</div>
									<div>
										<h3 className="text-xl font-bold text-gray-800 mb-2">Recordá siempre</h3>
										<p className="text-gray-700">
											La denuncia es anónima y gratuita. No necesitás un abogado para iniciar el proceso. Si tenés
											pruebas (fotos, videos, testigos), llevalas. Cada detalle cuenta.
										</p>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
									<div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
										<h4 className="font-bold text-amber-800 mb-2">⏱️ Actuá rápido</h4>
										<p className="text-sm text-amber-700">
											Mientras antes denuncies, más chances hay de rescatar al animal.
										</p>
									</div>

									<div className="p-4 bg-red-50 rounded-xl border border-red-200">
										<h4 className="font-bold text-red-800 mb-2">📝 Documentá todo</h4>
										<p className="text-sm text-red-700">
											Fechas, horarios, descripciones y cualquier evidencia visual.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Denuncia;
