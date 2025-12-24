import HeaderDos from '@/components/layout/HeaderDos';
import InfoCard from '@/components/myComponents/InfoCard';
import Image from 'next/image';

function Informate() {
	return (
		<div className="flex flex-col">
			<HeaderDos
				title="Uso responsable del carrito"
				description="Recomendaciones, cuidados y recursos para acompañar de forma segura a los peluditos que usan carrito."
			/>

			<section className="px-10 md:px-28 flex flex-col mb-32">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
					{/* FOTO */}
					<div className="flex justify-center order-2 xl:order-1">
						<Image
							src="/image/varias/varias-6.jpg"
							alt="dos discas, uno con carrito"
							width={1066}
							height={1600}
							className="object-cover object-center shadow-lg"
						/>
					</div>

					{/* TEXTO */}
					<div className="flex flex-col gap-4 order-1 xl:order-2">
						<h2 className="font-nunito uppercase text-3xl md:text-[2.5rem] tracking-widest text-teal-dark font-bold">
							Uso correcto y seguro del carrito
						</h2>
						<p className="text-xl leading-relaxed text-orange font-medium font-quicksand">
							Antes de usar un carrito, es importante conocer estas recomendaciones básicas.
						</p>

						{/* CONSULTA PROFESIONAL */}
						<div>
							<div className="flex items-center gap-2">
								<Image
									src="/image/emojis/1FA7A.svg"
									alt="Protección de patitas"
									width={32}
									height={32}
									className="shrink-0"
								/>
								<h3 className="font-bold text-lg text-teal-900">Consulta profesional</h3>
							</div>
							<p className="text-lg leading-relaxed text-stone-700 font-inter">
								El uso del carrito debe ser indicado por un veterinario especializado en fisioterapia o traumatología.
							</p>
						</div>

						{/* TIEMPO DE USO */}
						<div>
							<div className="flex items-center gap-2">
								<Image
									src="/image/emojis/E0AB.svg"
									alt="Protección de patitas"
									width={32}
									height={32}
									className="shrink-0"
								/>
								<h3 className="font-bold text-lg text-teal-900">Tiempo de uso</h3>
							</div>
							<p className="text-lg leading-relaxed text-stone-700 font-inter">
								Se comienza con 30 minutos y rara vez se supera 1–2 horas por día. Evitar el uso prolongado.
							</p>
						</div>

						{/* SUPERVISIÓN CONSTANTE */}
						<div>
							<div className="flex items-center gap-2">
								<Image
									src="/image/emojis/1F440.svg"
									alt="Protección de patitas"
									width={32}
									height={32}
									className="shrink-0"
								/>
								<h3 className="font-bold text-lg text-teal-900">Supervisión constante</h3>
							</div>
							<p className="text-lg leading-relaxed text-stone-700 font-inter">
								Nunca se debe dejar al animal solo con el carrito. Puede lastimarse o quedar atrapado.
							</p>
						</div>

						{/* PROTECCIÓN DE PATITAS  */}
						<div>
							<div className="flex items-center gap-2">
								<Image
									src="/image/emojis/1F9E6.svg"
									alt="Protección de patitas"
									width={32}
									height={32}
									className="shrink-0"
								/>
								<h3 className="font-bold text-lg text-teal-900">Protección de patitas</h3>
							</div>
							<p className="text-lg leading-relaxed text-stone-700 font-inter">
								Usá vendas, medias o pantaloncitos de arrastre para evitar heridas por fricción.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CONSEJOS ADICIONALES */}
			<section className="px-10 md:px-28">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
					{/* TEXTO */}
					<div className="flex flex-col gap-6">
						<h2 className="font-nunito uppercase text-3xl md:text-[2.5rem] tracking-widest text-teal-dark font-bold">
							Consejos adicionales para el uso del carrito
						</h2>

						<p className="text-lg leading-relaxed text-stone-700 font-inter">
							<strong className="text-teal-700">Adaptación al carrito: </strong>
							Un carrito bien fabricado no debería generar incomodidad. La mayoría de los peluditos se adaptan
							rápidamente cuando el carrito está hecho con materiales livianos y cuenta con pecheras y ruedas adecuadas.
						</p>

						<p className="text-lg leading-relaxed text-stone-700 font-inter">
							<strong className="text-teal-700">Conciencia y amor: </strong>
							Tener un perro en un carrito no debe causar lástima. Estos animales siguen mostrando amor y valentía pese
							a las adversidades. La buena energía y el acompañamiento son fundamentales para su bienestar emocional.
						</p>

						<p className="text-lg leading-relaxed text-stone-700 font-inter">
							<strong className="text-teal-700">Uso responsable de carritos: </strong>
							El uso debe estar indicado por un veterinario especializado. No todos los animales requieren un carrito de
							inmediato: después de una lesión o cirugía, primero necesitan recuperación. Usarlo antes de tiempo puede
							ser perjudicial.
						</p>

						<p className="text-lg leading-relaxed text-stone-700 font-inter">
							Si tu peludo debe utilizar un carrito, comenzá con períodos cortos y siempre bajo supervisión. Protegé sus
							patitas con vendas, medias o pantaloncitos de arrastre.
						</p>

						<p className="text-lg leading-relaxed text-stone-700 font-inter">
							Para más información sobre cuidados, alimentación e higiene, podés contactarnos a{' '}
							<a
								href="mailto:discasrodandoporlavida@gmail.com"
								className="text-red underline font-medium hover:text-red-800"
							>
								discasrodandoporlavida@gmail.com
							</a>
							.
						</p>
					</div>

					{/* FOTO */}
					<div className="flex gap-2 justify-center">
						<Image
							src="/image/varias/varias-3.jpg"
							alt="un discas en su carro"
							width={1600}
							height={1066}
							className="max-h-dvh object-cover object-center shadow-lg"
						/>
					</div>
				</div>
			</section>

			<div className="my-32 relative w-full h-[400px] md:h-[500px] overflow-hidden">
				<Image
					src="/image/varias/carro-2.jpg"
					alt="carro de los discas"
					fill
					className="hiiden md:block object-cover object-left md:object-center brightness-50"
				/>

				<Image
					src="/image/varias/carro-1.jpg"
					alt="carro de los discas"
					fill
					className="md:hidden object-cover object-left md:object-center brightness-50"
				/>

				<div className="absolute inset-0 bg-black/40"></div>

				<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 gap-4">
					<h2 className="uppercase text-3xl md:text-4xl tracking-widest text-white font-bold drop-shadow-lg font-dancing">
						Rodando hacia una vida mejor
					</h2>

					<p className="text-lg md:text-xl leading-relaxed text-stone-100 max-w-2xl drop-shadow">
						Con cuidados adecuados, amor y un carrito bien utilizado, cada peludito puede recuperar su libertad y
						disfrutar del camino.
					</p>
				</div>
			</div>

			<section className="px-10 md:px-28 flex flex-col">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
									className="text-teal-700 underline font-medium"
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
								<a href="https://youtu.be/bbXI3N4-jLI" target="_blank" className="text-teal-700 underline font-medium">
									Fisioterapia general
								</a>{' '}
								<br />
								<a href="https://youtu.be/wFUrTI6_F7E" target="_blank" className="text-teal-700 underline font-medium">
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
									className="text-teal-700 underline font-medium"
								>
									Post 1
								</a>{' '}
								•{' '}
								<a
									href="https://m.facebook.com/story.php?story_fbid=1300667696718365&id=830674807050992"
									target="_blank"
									className="text-teal-700 underline font-medium"
								>
									Post 2
								</a>
								<br />
								<a
									href="https://m.facebook.com/story.php?story_fbid=2299200890198369&id=830674807050992"
									target="_blank"
									className="text-teal-700 underline font-medium"
								>
									Post 3
								</a>{' '}
								•{' '}
								<a
									href="https://m.facebook.com/story.php?story_fbid=3901601323291643&id=830674807050992"
									target="_blank"
									className="text-teal-700 underline font-medium"
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
			</section>
		</div>
	);
}

export default Informate;
