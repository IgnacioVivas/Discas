import HeaderDos from '@/components/layout/HeaderDos';
import { Phone, Mail, MapPin, Heart, MessageCircle, Users, Dog, Cat, Calendar, Shield, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contacto = () => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-teal-50/20 to-white">
			{/* HEADER */}
			<HeaderDos
				title="Contactá a Discas"
				description="Estamos aquí para responder tus dudas, coordinar rescates o recibir tu ayuda. Juntos hacemos la diferencia."
			/>

			{/* HERO CON OPCIONES DE CONTACTO */}
			<section className="px-4 md:px-8 lg:px-24 mt-12 mb-16">
				<div className="max-w-6xl mx-auto bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl shadow-xl overflow-hidden">
					<div className="grid md:grid-cols-2">
						<div className="p-10 md:p-12 text-white">
							<h2 className="text-2xl md:text-3xl font-bold mb-6 font-nunito">¿Cómo contactarnos?</h2>
							<p className="text-lg mb-8 opacity-95 leading-relaxed">
								Para reportar animales en situación de calle, consultar sobre adopciones, ofrecerte como voluntario o
								coordinar donaciones, podés hacerlo directamente por:
							</p>
							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<div className="bg-white/20 p-2 rounded-lg">
										<Phone className="w-5 h-5" />
									</div>
									<div>
										<p className="font-semibold">Teléfono / WhatsApp</p>
										<p className="text-teal-100">+54 351 123-4567</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<div className="bg-white/20 p-2 rounded-lg">
										<Mail className="w-5 h-5" />
									</div>
									<div>
										<p className="font-semibold">Email directo</p>
										<p className="text-teal-100">discas.cba@gmail.com</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<div className="bg-white/20 p-2 rounded-lg">
										<MessageCircle className="w-5 h-5" />
									</div>
									<div>
										<p className="font-semibold">Redes sociales</p>
										<p className="text-teal-100">@Discas.cba (Instagram y Facebook)</p>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-teal-800 p-8 md:p-12 flex items-center justify-center">
							<div className="text-center">
								<Heart className="w-16 h-16 mx-auto text-teal-200 mb-6" />
								<p className="text-white text-xl font-bold mb-2">Contacto directo</p>
								<p className="text-teal-200">Sin formularios complicados</p>
								<p className="text-teal-200">Respuesta en 24-48 horas</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SECCIÓN PRINCIPAL - MEJOR BALANCEADA */}
			<section className="px-4 md:px-8 lg:px-24 mb-24">
				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-8">
						{/* COLUMNA IZQUIERDA - INFORMACIÓN */}
						<div className="space-y-8">
							{/* TARJETA PRINCIPAL DE CONTACTO */}
							<div className="bg-white rounded-2xl border shadow-lg p-8">
								<h3 className="text-2xl font-bold text-teal-900 mb-6 font-nunito flex items-center gap-3">
									<div className="bg-teal-100 p-2 rounded-lg">
										<Phone className="w-6 h-6 text-teal-700" />
									</div>
									Contacto directo
								</h3>

								<div className="space-y-6">
									<div className="p-5 bg-teal-50 rounded-xl border border-teal-100">
										<h4 className="font-bold text-teal-800 mb-3 flex items-center gap-2">
											<Shield className="w-5 h-5" />
											Para emergencias y rescates
										</h4>
										<p className="text-teal-700 font-bold text-lg mb-1">+54 351 123-4567</p>
										<p className="text-sm text-stone-600">Disponible 24/7 para animales en peligro</p>
									</div>

									<div className="p-5 bg-white border rounded-xl">
										<h4 className="font-bold text-teal-800 mb-3 flex items-center gap-2">
											<MessageCircle className="w-5 h-5" />
											Para consultas generales
										</h4>
										<p className="text-teal-700 font-bold text-lg mb-1">+54 351 987-6543</p>
										<p className="text-sm text-stone-600">Lunes a Viernes de 9:00 a 18:00</p>
										<p className="text-teal-700 font-bold mt-3">discas.cba@gmail.com</p>
									</div>

									<div className="p-5 bg-white border rounded-xl">
										<h4 className="font-bold text-teal-800 mb-3 flex items-center gap-2">
											<Users className="w-5 h-5" />
											Redes sociales
										</h4>
										<div className="flex flex-wrap gap-3 mt-3">
											<a
												href="#"
												className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-lg hover:bg-teal-100 transition font-medium"
											>
												Instagram
											</a>
											<a
												href="#"
												className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-lg hover:bg-teal-100 transition font-medium"
											>
												Facebook
											</a>
										</div>
										<p className="text-sm text-stone-600 mt-3">@Discas.cba en ambas redes</p>
									</div>
								</div>
							</div>

							{/* INFORMACIÓN DE UBICACIÓN SIMPLIFICADA */}
							<div className="bg-white rounded-2xl border shadow-lg p-8">
								<h3 className="text-2xl font-bold text-teal-900 mb-6 font-nunito flex items-center gap-3">
									<div className="bg-amber-100 p-2 rounded-lg">
										<MapPin className="w-6 h-6 text-amber-700" />
									</div>
									¿Dónde estamos?
								</h3>

								<div className="space-y-6">
									<div className="p-5 bg-amber-50 rounded-xl border border-amber-100">
										<h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
											<Home className="w-5 h-5" />
											Refugio principal
										</h4>
										<p className="text-amber-700 font-semibold mb-2">Ruta Provincial E55, Km 12.5</p>
										<p className="text-stone-600">Córdoba, Argentina</p>
										<p className="text-sm text-stone-500 mt-2">📍 Coordenadas aproximadas: -31.4201, -64.1888</p>
									</div>

									<div className="p-5 bg-white border rounded-xl">
										<h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
											<Calendar className="w-5 h-5" />
											Visitas al refugio
										</h4>
										<p className="text-stone-700 mb-2">
											Las visitas son con cita previa coordinada por WhatsApp o teléfono.
										</p>
										<p className="text-sm text-stone-600">
											Generalmente recibimos visitas los sábados de 10:00 a 13:00 hs.
										</p>
									</div>

									<div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5">
										<h4 className="font-bold text-blue-800 mb-2">¿No podés acercarte?</h4>
										<p className="text-blue-700 text-sm">
											Coordinamos puntos de encuentro en distintos barrios de Córdoba Capital para facilitar la entrega
											de donaciones.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* COLUMNA DERECHA - INFORMACIÓN ADICIONAL */}
						<div className="space-y-8">
							{/* TIPOS DE CONSULTA */}
							<div className="bg-white rounded-2xl border shadow-lg p-8">
								<h3 className="text-2xl font-bold text-teal-900 mb-6 font-nunito">¿Qué podés consultarnos?</h3>

								<div className="grid gap-4">
									<div className="flex items-start gap-4 p-4 bg-teal-50 rounded-xl">
										<div className="bg-teal-100 p-2 rounded-lg">
											<Dog className="w-5 h-5 text-teal-700" />
										</div>
										<div>
											<h4 className="font-bold text-teal-800 mb-1">Reportar animales en situación de calle</h4>
											<p className="text-sm text-stone-600">
												Si ves un animal herido, discapacitado o en peligro, contactanos inmediatamente.
											</p>
										</div>
									</div>

									<div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl">
										<div className="bg-amber-100 p-2 rounded-lg">
											<Heart className="w-5 h-5 text-amber-700" />
										</div>
										<div>
											<h4 className="font-bold text-amber-800 mb-1">Adopciones responsables</h4>
											<p className="text-sm text-stone-600">
												Conocé nuestros perritos y gatitos especiales que buscan un hogar para siempre.
											</p>
										</div>
									</div>

									<div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl">
										<div className="bg-emerald-100 p-2 rounded-lg">
											<Users className="w-5 h-5 text-emerald-700" />
										</div>
										<div>
											<h4 className="font-bold text-emerald-800 mb-1">Voluntariado y padrinazgo</h4>
											<p className="text-sm text-stone-600">
												Sumate como voluntario o hacete padrino/madrina de uno de nuestros rescatados.
											</p>
										</div>
									</div>

									<div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
										<div className="bg-blue-100 p-2 rounded-lg">
											<Cat className="w-5 h-5 text-blue-700" />
										</div>
										<div>
											<h4 className="font-bold text-blue-800 mb-1">Donaciones y colaboraciones</h4>
											<p className="text-sm text-stone-600">
												Toda ayuda es bienvenida: alimentos, medicamentos, pañales o donaciones económicas.
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* EMERGENCIA DESTACADA */}
							<div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl shadow-xl overflow-hidden">
								<div className="p-8">
									<div className="flex items-center gap-4 mb-6">
										<div className="bg-white/20 p-3 rounded-xl">
											<Phone className="w-8 h-8" />
										</div>
										<div>
											<h3 className="text-xl font-bold">¿EMERGENCIA?</h3>
											<p className="text-rose-100">Animal herido o en peligro inmediato</p>
										</div>
									</div>

									<div className="space-y-4">
										<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
											<p className="font-semibold mb-1">Llamar inmediatamente a:</p>
											<p className="text-2xl font-bold tracking-wide">+54 351 123-4567</p>
										</div>

										<ul className="space-y-2 text-sm text-rose-100 pl-5">
											<li className="list-disc">No enviar mensajes de texto en emergencias</li>
											<li className="list-disc">Contestar todas las preguntas del operador</li>
											<li className="list-disc">Si es posible, enviar ubicación exacta por WhatsApp</li>
											<li className="list-disc">Quedarse cerca del animal si es seguro hacerlo</li>
										</ul>
									</div>
								</div>
							</div>

							{/* INFO RÁPIDA */}
							<div className="bg-white rounded-2xl border shadow-sm p-8">
								<h3 className="font-bold text-teal-800 mb-4">Información rápida</h3>
								<div className="space-y-3 text-sm">
									<div className="flex justify-between py-2 border-b">
										<span className="text-stone-600">Respuesta a consultas:</span>
										<span className="font-semibold text-teal-700">24-48 horas</span>
									</div>
									<div className="flex justify-between py-2 border-b">
										<span className="text-stone-600">Donaciones en especie:</span>
										<span className="font-semibold text-teal-700">Con cita previa</span>
									</div>
									<div className="flex justify-between py-2 border-b">
										<span className="text-stone-600">Proceso de adopción:</span>
										<span className="font-semibold text-teal-700">Entrevista + seguimiento</span>
									</div>
									<div className="flex justify-between py-2">
										<span className="text-stone-600">Voluntariado:</span>
										<span className="font-semibold text-teal-700">Inducción previa</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ SIMPLIFICADO */}
			<section className="px-4 md:px-8 lg:px-24 mb-20">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-teal-900 mb-4 font-nunito">Preguntas frecuentes</h2>
						<p className="text-stone-600">Respuestas rápidas a las dudas más comunes</p>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						<div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
							<h4 className="font-bold text-teal-800 mb-2">¿Qué hago si encuentro un animal herido?</h4>
							<p className="text-stone-600 text-sm">
								1. Llamá al número de emergencias
								<br />
								2. Describí la situación y ubicación exacta
								<br />
								3. Si es seguro, quedate cerca hasta que lleguemos
							</p>
						</div>
						<div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
							<h4 className="font-bold text-teal-800 mb-2">¿Puedo visitar para conocer los animales?</h4>
							<p className="text-stone-600 text-sm">
								Sí, con cita previa. Coordiná por WhatsApp o teléfono. Los sábados realizamos visitas guiadas de 10:00 a
								13:00 hs.
							</p>
						</div>
						<div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
							<h4 className="font-bold text-teal-800 mb-2">¿Qué insumos necesitan con urgencia?</h4>
							<p className="text-stone-600 text-sm">
								Pañales tamaño bebé y adulto, alimentos urinary para perros y gatos, medicamentos y material de
								curación.
							</p>
						</div>
						<div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
							<h4 className="font-bold text-teal-800 mb-2">¿Cómo puedo ser voluntario?</h4>
							<p className="text-stone-600 text-sm">
								Contactanos por WhatsApp o redes sociales. No necesitás experiencia previa, solo compromiso y amor por
								los animales.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CIERRE EMOTIVO */}
			<section className="px-4 md:px-8 lg:px-24 mb-16">
				<div className="max-w-4xl mx-auto text-center">
					<div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-2xl p-10 shadow-sm">
						<div className="flex justify-center gap-4 mb-6">
							<Dog className="w-10 h-10 text-teal-600" />
							<Cat className="w-10 h-10 text-teal-600" />
							<Heart className="w-10 h-10 text-teal-600" />
						</div>
						<h3 className="text-2xl font-bold text-teal-900 mb-4 font-nunito">Gracias por querer ayudar</h3>
						<p className="text-lg text-stone-700 mb-6 leading-relaxed max-w-2xl mx-auto">
							Cada llamado, cada mensaje, es un paso más hacia un mundo donde todos los animales, sin importar su
							discapacidad o edad, reciban el amor y cuidado que merecen.
						</p>
						<div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-teal-200">
							<span className="text-teal-700 font-semibold">🐾 El equipo de Discas te espera 🐾</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contacto;
