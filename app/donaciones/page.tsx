import HeaderDos from '@/components/layout/HeaderDos';
import { HeartHandshake, Package, Banknote, MapPin, Truck, Calendar, AlertCircle } from 'lucide-react';

const Donaciones = () => {
	return (
		<div className="">
			{/* HEADER */}
			<HeaderDos
				title="Ayudanos a seguir ayudando"
				description="Tu ayuda nos permite seguir rescatando, cuidando y acompañando a más animales."
			/>

			{/* LLAMADO A LA ACCIÓN */}
			<section className="px-6 md:px-28 mb-20">
				<div className="max-w-4xl mx-auto bg-linear-to-r from-teal-600 to-teal-700 text-white rounded-2xl p-8 md:p-12 shadow-lg">
					<h2 className="font-nunito uppercase text-2xl md:text-[2.5rem] font-bold">¿Cómo puedes ayudar hoy?</h2>
					<p className="text-lg mb-6 opacity-95 leading-relaxed font-inter">
						En Discas acompañamos a animales con discapacidad que necesitan cuidados constantes, tratamientos médicos y
						mucho amor. Cada donación marca la diferencia entre un animal que sufre y uno que recupera su calidad de
						vida.
					</p>
					<div className="flex flex-wrap gap-4">
						<a href="#economicas">
							<button className="bg-white text-teal-700 px-6 py-3 rounded-xl font-semibold hover:bg-teal-50 transition flex items-center gap-2">
								<Banknote className="w-5 h-5" />
								Donar ahora
							</button>
						</a>
						<a href="#insumos">
							<button className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition flex items-center gap-2">
								<Package className="w-5 h-5" />
								Ver insumos necesarios
							</button>
						</a>
					</div>
				</div>
			</section>

			{/* CONTENIDO PRINCIPAL EN PESTAÑAS VISUALES */}
			<section className="px-6 md:px-28 mb-32">
				<div className="max-w-6xl mx-auto">
					{/* NAVEGACIÓN VISUAL */}
					<div className="flex flex-wrap gap-4 mb-12 justify-center">
						<a
							href="#insumos"
							className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border shadow-sm hover:shadow-md transition hover:border-teal-300"
						>
							<Package className="w-5 h-5 text-teal-600" />
							<span className="font-semibold text-teal-900">Insumos</span>
						</a>
						<a
							href="#economicas"
							className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border shadow-sm hover:shadow-md transition hover:border-teal-300"
						>
							<Banknote className="w-5 h-5 text-teal-600" />
							<span className="font-semibold text-teal-900">Donación económica</span>
						</a>
						<a
							href="#entrega"
							className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border shadow-sm hover:shadow-md transition hover:border-teal-300"
						>
							<Truck className="w-5 h-5 text-teal-600" />
							<span className="font-semibold text-teal-900">Entrega</span>
						</a>
					</div>

					{/* INSUMOS - MEJOR ESTRUCTURA */}
					<div id="insumos" className="mb-16 scroll-mt-20">
						<div className="bg-white rounded-2xl border shadow-lg overflow-hidden">
							<div className="bg-linear-to-r from-teal-50 to-teal-100 p-8">
								<div className="flex items-center gap-3">
									<Package className="w-8 h-8 text-teal-700" />
									<h2 className="text-2xl font-bold text-teal-900 font-nunito">Donaciones de insumos</h2>
								</div>
								<p className="text-stone-600 mt-2 font-quicksand">
									Todo lo que necesitan nuestros rescatados para su día a día
								</p>
							</div>

							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
								<div className="space-y-4">
									<div className="flex items-center gap-2 text-teal-700">
										<div className="bg-teal-100 p-2 rounded-lg">🧴</div>
										<h3 className="font-bold text-teal-800 font-nunito">Curación y cuidado</h3>
									</div>
									<ul className="space-y-2 text-stone-700 font-inter">
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
											<span>Vendas comunes y Coban (5 a 10 cm)</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
											<span>Gasas, algodón</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
											<span>Agua oxigenada, pervinox</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
											<span>Cremas: Adermicina, Hipoglós</span>
										</li>
									</ul>
								</div>

								<div className="space-y-4">
									<div className="flex items-center gap-2 text-teal-700">
										<div className="bg-teal-100 p-2 rounded-lg">💊</div>
										<h3 className="font-bold text-teal-800 font-nunito">Medicación</h3>
									</div>
									<ul className="space-y-2 text-stone-700 font-inter">
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
											<span>Cefalexina 500</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
											<span>Complejo B, vitamina C</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
											<span>Quelantes, Urovier</span>
										</li>
									</ul>
									<div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm font-nunito">
										<AlertCircle className="w-4 h-4 inline mr-1 text-amber-600" />
										<span className="text-amber-700">Debe estar vigente y en buen estado</span>
									</div>
								</div>

								<div className="space-y-4">
									<div className="flex items-center gap-2 text-teal-700">
										<div className="bg-teal-100 p-2 rounded-lg">👶</div>
										<h3 className="font-bold text-teal-800 font-nunito">Pañales y absorbentes</h3>
									</div>
									<ul className="space-y-2 text-stone-700 font-inter">
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
											<span>Bebé: P, XG, XXG y XXXG</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
											<span>Adulto: talle G</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
											<span>Juveniles (cualquier marca)</span>
										</li>
									</ul>
								</div>

								<div className="space-y-4">
									<div className="flex items-center gap-2 text-teal-700">
										<div className="bg-teal-100 p-2 rounded-lg">🐕</div>
										<h3 className="font-bold text-teal-800 font-nunito">Alimentos</h3>
									</div>
									<ul className="space-y-2 text-stone-700 font-inter">
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
											<span>Urinary y renal (perro)</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
											<span>Urinary (gato)</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>
											<span>Balanceados +21% proteínas</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* DONACIONES ECONÓMICAS - MÁS VISUAL */}
					<div id="economicas" className="mb-16 scroll-mt-20">
						<div className="bg-linear-to-r from-teal-900 to-teal-800 text-white rounded-2xl shadow-xl overflow-hidden">
							<div className="p-8 md:p-12">
								<div className="flex items-center gap-3 mb-8">
									<Banknote className="w-8 h-8 text-teal-200" />
									<h2 className="text-2xl font-bold font-nunito">Donaciones económicas</h2>
								</div>

								<div className="grid md:grid-cols-2 gap-10">
									<div className="space-y-6">
										<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
											<h3 className="text-xl font-bold mb-4 flex items-center gap-2 font-nunito">
												<div className="bg-teal-700 p-2 rounded-lg">💳</div>
												Mercado Pago
											</h3>
											<p className="mb-6 opacity-90 font-inter">La forma más rápida de ayudar ahora mismo</p>

											<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4 font-inter">
												{['$100', '$200', '$300', '$500', '$1000', 'Otro monto'].map((monto, idx) => (
													<a
														key={idx}
														href={monto !== 'Otro monto' ? `https://mpago.la/...` : '#'}
														className="bg-white/20 hover:bg-white/30 border border-white/30 text-center py-3 rounded-lg font-semibold transition backdrop-blur-sm"
													>
														{monto}
													</a>
												))}
											</div>
											<p className="text-sm opacity-80 font-inter">
												Buscanos como <strong>Discas.cba</strong>
											</p>
										</div>
									</div>

									<div className="space-y-6">
										<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
											<h3 className="text-xl font-bold mb-4 flex items-center gap-2 font-nunito">
												<div className="bg-teal-700 p-2 rounded-lg">🏦</div>
												Transferencia bancaria
											</h3>

											<div className="space-y-4 mb-6 font-inter">
												<div>
													<p className="text-sm opacity-80 mb-1">Alias</p>
													<div className="bg-white/10 p-3 rounded-lg font-mono">DISCAS.CORDOBA.ARG</div>
												</div>
												<div>
													<p className="text-sm opacity-80 mb-1">CBU</p>
													<div className="bg-white/10 p-3 rounded-lg font-mono text-sm">0340070808709868055000</div>
												</div>
												<div>
													<p className="text-sm opacity-80 mb-1">Banco</p>
													<div className="bg-white/10 p-3 rounded-lg">Patagonia</div>
												</div>
											</div>

											<div className="bg-amber-900/30 border border-amber-700/50 rounded-lg p-3 text-sm font-nunito">
												<AlertCircle className="w-4 h-4 inline mr-1 text-amber-300" />
												<span className="opacity-90">Enviá el comprobante por mensaje privado</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* ENTREGA - MÁS CLARO */}
					<div id="entrega" className="scroll-mt-20">
						<div className="bg-white rounded-2xl border shadow-lg overflow-hidden">
							<div className="bg-linear-to-r from-amber-50 to-amber-100 p-8">
								<div className="flex items-center gap-3">
									<MapPin className="w-8 h-8 text-amber-700" />
									<h2 className="text-2xl font-bold text-amber-900 font-nunito">¿Dónde entregar donaciones?</h2>
								</div>
								<p className="text-stone-600 mt-2 font-quicksand">
									Puntos de recolección en Córdoba Capital e Interior
								</p>
							</div>

							<div className="grid md:grid-cols-2 gap-8 p-8">
								<div className="space-y-6">
									<h3 className="text-xl font-bold text-amber-800 flex items-center gap-2 font-nunito">
										<div className="bg-amber-100 p-2 rounded-lg">📍</div>
										Córdoba Capital
									</h3>
									<div className="space-y-4">
										<div className="border border-amber-200 rounded-xl p-5 hover:border-amber-300 transition">
											<h4 className="font-bold text-amber-700 mb-2 font-nunito">Veterinaria Quirós</h4>
											<p className="text-stone-600 font-inter">Av. Duarte Quirós 3191</p>
											<p className="text-sm text-stone-500 mt-2 font-inter">Lunes a Viernes 9:00 - 20:00</p>
										</div>
										<div className="border border-amber-200 rounded-xl p-5 hover:border-amber-300 transition">
											<h4 className="font-bold text-amber-700 mb-2">Veterinaria Ánima</h4>
											<p className="text-stone-600 font-inter">Av. Colón 1034</p>
											<p className="text-sm text-stone-500 mt-2 font-inter">Lunes a Sábado 8:00 - 21:00</p>
										</div>
									</div>
								</div>

								<div className="space-y-6">
									<h3 className="text-xl font-bold text-amber-800 flex items-center gap-2 font-nunito">
										<div className="bg-amber-100 p-2 rounded-lg">🚚</div>
										Interior de Córdoba
									</h3>
									<div className="border border-amber-200 rounded-xl p-5">
										<p className="text-stone-600 mb-4 font-inter">
											Coordinamos puntos de encuentro según tu ubicación.
										</p>
										<button className="bg-amber-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-amber-700 transition flex items-center gap-2">
											<Calendar className="w-4 h-4" />
											Contactar para coordinar
										</button>
									</div>

									<div className="bg-blue-50 border border-blue-200 rounded-xl p-5 font-nunito">
										<h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
											<Truck className="w-5 h-5" />
											¿No podés acercarte?
										</h4>
										<p className="text-stone-600 text-sm">Podemos coordinar retiro a domicilio en algunos casos.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CIERRE EMOCIONAL */}
			<section className="px-6 md:px-28 mb-20">
				<div className="max-w-3xl mx-auto text-center">
					<div className="bg-linear-to-br from-orange-50 to-amber-50 border border-amber-200 rounded-2xl p-10 shadow-sm">
						<HeartHandshake className="w-12 h-12 mx-auto text-amber-600 mb-6" />
						<h3 className="text-2xl font-bold text-amber-800 mb-4 font-nunito">
							Gracias por ser parte de esta comunidad
						</h3>
						<p className="text-lg text-stone-700 mb-6 leading-relaxed font-inter">
							Cada donación, cada insumo, cada peso cuenta. Gracias a personas como vos, cientos de animales con
							discapacidad encuentran una segunda oportunidad llena de amor y cuidados.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<button className="bg-amber-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-amber-700 transition">
								Quiero donar ahora
							</button>
							<button className="border-2 border-amber-600 text-amber-700 px-8 py-3 rounded-xl font-semibold hover:bg-amber-50 transition">
								Compartir en redes
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Donaciones;
