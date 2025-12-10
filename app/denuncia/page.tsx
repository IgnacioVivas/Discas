import HeaderDos from '@/components/layout/HeaderDos';
import InfoCard from '@/components/myComponents/InfoCard';
import React from 'react';

function page() {
	return (
		<div>
			<HeaderDos
				title="Guías y recursos"
				description="Recursos prácticos, contactos importantes y guías para acompañar a los peluditos que más lo necesitan."
			/>

			<section className="px-10 md:px-28 flex flex-col mb-32">
				{/* Título + subtítulo */}
				<div className="flex flex-col items-center justify-center gap-4 text-center max-w-3xl mx-auto mb-12">
					<h2 className="uppercase text-3xl md:text-[2.5rem] tracking-widest text-teal-900 font-bold">
						Cómo denunciar maltrato animal
					</h2>

					<p className="text-stone-600 text-lg leading-relaxed">
						Pasos claros para actuar frente a una situación de maltrato.
					</p>
				</div>

				{/* GRID DE InfoCardS */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* InfoCard 1: LEY */}
					<InfoCard
						icon="📜"
						title="¿Qué dice la Ley 14.346?"
						description="La Ley Nacional de Protección Animal prohíbe el maltrato y los actos de crueldad. Toda persona puede denunciar."
					/>

					{/* InfoCard 2: DONDE DENUNCIAR */}
					<InfoCard
						icon="📍"
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

					{/* InfoCard 3: SI TE NIEGAN */}
					<InfoCard
						icon="⚠️"
						title="Si te niegan la denuncia"
						description="Tomá los datos del empleado y dirigite a las Mesas de Atención Permanente en Tribunales I o II."
					/>

					{/* InfoCard 4: QUE LLEVAR */}
					<InfoCard
						icon="📝"
						title="Requisitos y contenido"
						description="Presentate con DNI. Relatá los hechos con detalles, fechas, lugares, datos del acusado y material como fotos o videos."
					/>

					{/* InfoCard 5: SEGUIMIENTO */}
					<InfoCard
						icon="📞"
						title="Seguimiento de la causa"
						description="Hacé seguimiento en Fiscalía o con ONGs. Podés solicitar el depósito del animal para protegerlo."
					/>

					{/* InfoCard 6: CONTACTOS IMPORTANTES */}
					<InfoCard
						icon="🚨"
						title="Contactos útiles"
						description={`Patrulla Ambiental: 4344163 • Córdoba Contra el Delito: 0810-888-3368 • Mesas de Atención Permanente.`}
					/>
				</div>
			</section>
		</div>
	);
}

export default page;
