import OurTeam from '@/components/sections/OurTeam';
import SponsorsSection from '@/components/sections/SponsorsSection';
import OurValue from '@/components/sections/OurValue';
import { Separator } from '@/components/ui/separator';
import Counter from '@/components/sections/Counter';
import HeaderDos from '@/components/layout/HeaderDos';
import Image from 'next/image';

function Conocenos() {
	return (
		<div className="flex flex-col">
			<HeaderDos title="¿Quiénes somos?" description="La discapacidad no define, el amor sí." />

			<main className="flex-1 flex flex-col gap-32">
				<section className="grid grid-cols-1 xl:grid-cols-2 items-center gap-10 px-10 md:px-20">
					<div className="flex flex-col gap-4">
						<span className="text-orange font-medium font-quicksand">Sobre la fundación</span>
						<h2 className="font-nunito uppercase text-3xl md:text-[2.5rem] tracking-widest text-teal-dark font-bold">
							¿QUÉ ES DISCAS?
						</h2>
						<p className="text-lg leading-relaxed text-stone-700 font-inter">
							Discas es el primer y único grupo organizado de Córdoba Capital destinado específicamente al rescate,
							rehabilitación y adopción de animales con discapacidad. Nuestro trabajo nace del amor, la empatía y la
							convicción de que la discapacidad no limita el derecho a una vida digna, feliz y acompañada.
							<br />
							<br />
							Nos dedicamos a brindar segundas oportunidades a peluditos que muchas veces son invisibilizados: animales
							con parálisis, amputaciones, enfermedades crónicas o secuelas físicas que requieren cuidados especiales,
							pero que tienen intactas sus ganas de vivir, jugar y dar amor.
							<br />
							<br />
							También acompañamos y promovemos las llamadas <em>“adopciones difíciles”</em>, impulsando la adopción de
							animales de edad avanzada o con historias complejas, entendiendo que cada etapa de la vida merece ser
							transitada con respeto, contención y afecto.
							<br />
							<br />
							En Discas creemos que no se trata solo de rescatar, sino de acompañar cada proceso con responsabilidad,
							información y compromiso, construyendo vínculos reales entre personas y animales, y demostrando día a día
							que la discapacidad no define: el amor sí.
						</p>
					</div>
					<div>
						<Image
							src="/image/varias/equipo-1.jpeg"
							alt="perro disca de festejo"
							width={1599}
							height={1258}
							className="w-full h-auto object-cover"
						/>
					</div>
				</section>

				<section className="px-10 md:px-20">
					<Counter />
				</section>

				<section className="px-10 md:px-20">
					<OurValue />
				</section>

				<section className="px-10 md:px-20">
					<OurTeam />
				</section>

				<div className="w-full px-10 md:px-20">
					<Separator className="bg-slate-300" />
				</div>

				<SponsorsSection />
			</main>
		</div>
	);
}

export default Conocenos;
