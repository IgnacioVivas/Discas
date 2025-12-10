import HeaderDos from '@/components/layout/HeaderDos';
import InfoCard from '@/components/myComponents/InfoCard';
import Image from 'next/image';

function page() {
	return (
		<div className="flex flex-col">
			<HeaderDos
				title="Guías y recursos"
				description="Recursos prácticos, contactos importantes y guías para acompañar a los peluditos que más lo necesitan."
			/>

			<section className="px-10 md:px-28 flex flex-col mb-32">
				{/* BLOQUE 1 */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
					<div className="flex justify-center">
						<Image
							src="/image/varias/varias-3.jpg"
							alt="un disca con su carrito"
							width={1066}
							height={1600}
							className="max-h-dvh object-cover object-center shadow-lg"
						/>
					</div>

					{/* LADO DERECHO */}
					<div className="flex flex-col gap-8">
						<h2 className="uppercase text-3xl md:text-[2.5rem] tracking-widest text-teal-900 font-bold">
							Uso correcto y seguro del carrito
						</h2>
						<p className="text-xl leading-relaxed text-teal-600 font-medium">
							Antes de usar un carrito, es importante conocer estas recomendaciones básicas.
						</p>

						<div>
							<div className="text-4xl mb-2">🩺</div>
							<h3 className="font-bold text-lg text-teal-900">Consulta profesional</h3>
							<p className="text-stone-600 text-sm leading-relaxed">
								El uso del carrito debe ser indicado por un veterinario especializado en fisioterapia o traumatología.
							</p>
						</div>

						<div>
							<div className="text-4xl mb-2">⏱️</div>
							<h3 className="font-bold text-lg text-teal-900">Tiempo de uso</h3>
							<p className="text-stone-600 text-sm leading-relaxed">
								Se comienza con 30 minutos y rara vez se supera 1-2 horas por día. Evitar el uso prolongado.
							</p>
						</div>
						<div>
							<div className="text-4xl mb-2">👀</div>
							<h3 className="font-bold text-lg text-teal-900">Supervisión constante</h3>
							<p className="text-stone-600 text-sm leading-relaxed">
								Nunca se debe dejar al animal solo con el carrito. Puede lastimarse o quedar atrapado.
							</p>
						</div>

						<div>
							<div className="text-4xl mb-2">🧦</div>
							<h3 className="font-bold text-lg text-teal-900">Protección de patitas</h3>
							<p className="text-stone-600 text-sm leading-relaxed">
								Usá vendas, medias o pantaloncitos de arrastre para evitar heridas por fricción.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* BLOQUE 3 — CONSEJOS ADICIONALES (tipo "apadriná") */}
			<section className="px-10 md:px-28">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					{/* TEXTO */}
					<div className="flex flex-col gap-6">
						<h3 className="text-3xl font-bold text-teal-900 leading-tight">
							Consejos adicionales para el uso del carrito
						</h3>

						<p className="text-stone-700 leading-relaxed">
							<strong>Adaptación al carrito:</strong>
							Un carrito bien fabricado no debería generar incomodidad. La mayoría de los peluditos se adaptan
							rápidamente cuando el carrito está hecho con materiales livianos y cuenta con pecheras y ruedas adecuadas.
						</p>

						<p className="text-stone-700 leading-relaxed">
							<strong>Conciencia y amor:</strong>
							Tener un perro en un carrito no debe causar lástima. Estos animales siguen mostrando amor y valentía pese
							a las adversidades. La buena energía y el acompañamiento son fundamentales para su bienestar emocional.
						</p>

						<p className="text-stone-700 leading-relaxed">
							<strong>Uso responsable de carritos:</strong>
							El uso debe estar indicado por un veterinario especializado. No todos los animales requieren un carrito de
							inmediato: después de una lesión o cirugía, primero necesitan recuperación. Usarlo antes de tiempo puede
							ser perjudicial.
						</p>

						<p className="text-stone-700 leading-relaxed">
							Si tu peludo debe utilizar un carrito, comenzá con períodos cortos y siempre bajo supervisión. Protegé sus
							patitas con vendas, medias o pantaloncitos de arrastre.
						</p>

						<p className="text-stone-700 leading-relaxed">
							Para más información sobre cuidados, alimentación e higiene, podés contactarnos a{' '}
							<a
								href="mailto:discasrodandoporlavida@gmail.com"
								className="text-teal-700 underline font-medium hover:text-teal-900"
							>
								discasrodandoporlavida@gmail.com
							</a>
							.
						</p>
					</div>

					{/* FOTO */}
					<div className="flex gap-2 justify-center">
						<Image
							src="/image/varias/varias-6.jpg"
							alt="dos discas juntos, uno en carro"
							width={1600}
							height={1066}
							className="object-cover object-center shadow-lg"
						/>
						{/* <Image
							src="/image/varias/varias-4.jpg"
							alt="dos discas juntos, uno en carro"
							width={1456}
							height={2048}
							className="object-cover object-center shadow-lg w-2/5"
						/> */}
					</div>
				</div>
			</section>

			<div className="my-32 relative w-full h-[400px] md:h-[500px] overflow-hidden">
				<Image
					src="/image/varias/carro-2.jpg"
					alt="carro de los discas"
					fill
					className="object-cover object-left md:object-center brightness-50"
				/>

				<div className="absolute inset-0 bg-black/40"></div>

				<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 gap-4">
					<h2 className="uppercase text-3xl md:text-4xl tracking-widest text-white font-bold drop-shadow-lg">
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
						icon="🛠️"
						title="Fabricantes de carritos"
						description={
							<>
								Alberto (351 364-5964) <br />
								Ringo Ortopedia (3541 588868) <br />
								Go! Luis Ríos (3624 550301) <br />
								Wocars:{' '}
								<a
									href="https://www.facebook.com/wocarss/"
									target="_blank"
									className="text-teal-700 underline font-medium"
								>
									facebook.com/wocarss
								</a>
							</>
						}
					/>

					<InfoCard
						icon="🎽"
						title="Accesorios ortopédicos"
						description={
							<>
								Ortopedia veterinaria
								<br />
								Whatsapp: 223 5976757
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
						icon="🏋️‍♀️"
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
						icon="📚"
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

					<InfoCard icon="🦴" title="Taller Discas" description="Gretel — 351 766 8348" />

					<InfoCard
						icon="👨‍⚕️"
						title="Veterinario recomendado"
						description={
							<>
								Dr. Hernán González (Quirós) <br />
								Duarte Quirós 3191 <br />
								Atiende con turno.
							</>
						}
					/>
				</div>
			</section>
		</div>
	);
}

export default page;
