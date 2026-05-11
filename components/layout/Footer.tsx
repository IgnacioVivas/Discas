import Link from 'next/link';
import Image from 'next/image';
import { Heart, PawPrint, Instagram, Facebook, Mail, MapPin, ChevronRight, Sparkles } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

// Datos del footer
const NAV_LINKS = [
	{ name: 'Inicio', path: '/' },
	{ name: 'Conócenos', path: '/conocenos' },
	{ name: 'Adoptá', path: '/adopta' },
	{ name: 'Infórmate', path: '/informate' },
	{ name: 'Participá', path: '/participa' },
	{ name: 'Denuncia', path: '/denuncia' },
	{ name: 'Donaciones', path: '/donaciones' },
	{ name: 'Contacto', path: '/contacto' },
];

const SOCIAL_LINKS = [
	{
		name: 'Instagram',
		icon: Instagram,
		href: 'https://www.instagram.com/discascordoba/',
		color: 'hover:bg-linear-to-r hover:from-pink-500 hover:to-purple-600',
	},
	{
		name: 'Facebook',
		icon: Facebook,
		href: 'https://www.facebook.com/discas.rodandoporlavida',
		color: 'hover:bg-blue-600',
	},
];

const CONTACT_INFO = [
	{ icon: Mail, text: 'discasrodandoporlavida@gmail.com', description: 'Escribinos por email' },
	{ icon: MapPin, text: 'Córdoba Capital, Argentina', description: 'Sede principal' },
	{ icon: Heart, text: '+500 animales rescatados', description: 'Desde 2015' },
];

const Footer = () => {
	return (
		<footer className="px-6 relative overflow-hidden bg-linear-to-b from-gray-900 to-gray-950 text-white mt-32">
			{/* Elementos decorativos */}
			<div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-teal-500 via-amber-500 to-pink-500" />

			<div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-teal-500/5 blur-3xl" />
			<div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl" />

			<div className="absolute bottom-10 left-10 opacity-10">
				<PawPrint className="w-40 h-40" />
			</div>
			<div className="absolute top-10 right-10 opacity-10">
				<PawPrint className="w-32 h-32" />
			</div>

			{/* Contenido principal */}
			<div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
					{/* Sección 1: Logo y misión */}
					<div className="lg:col-span-4 space-y-6">
						<div className="flex items-center gap-3">
							<div className="relative w-12 h-12">
								<div className="absolute inset-0 bg-linear-to-r from-teal-500 to-amber-500 rounded-2xl rotate-12" />
								<div className="absolute inset-1 bg-gray-900 rounded-xl flex items-center justify-center">
									<PawPrint className="w-6 h-6 text-teal-400" />
								</div>
							</div>
							<div>
								<h2 className="text-2xl font-bold bg-linear-to-r from-teal-300 to-amber-200 bg-clip-text text-transparent">
									Discas
								</h2>
								<p className="text-sm text-gray-400">Rescatamos animales con discapacidad</p>
							</div>
						</div>

						<p className="text-gray-300 leading-relaxed">
							Desde 2015, brindamos amor y cuidados especializados a perritos y gatitos con discapacidad. Cada patita
							cuenta, cada vida importa.
						</p>

						<div className="space-y-4">
							<h3 className="font-semibold text-lg flex items-center gap-2">
								<Sparkles className="w-5 h-5 text-amber-400" />
								Síguenos en redes
							</h3>
							<div className="flex gap-3">
								{SOCIAL_LINKS.map((social) => {
									const Icon = social.icon;
									return (
										<Link
											key={social.name}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className={cn(
												'w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300',
												'hover:scale-110 hover:shadow-lg',
												social.color,
											)}
											aria-label={`Seguir a Discas en ${social.name}`}
										>
											<Icon className="w-5 h-5" />
										</Link>
									);
								})}
								{/* TikTok */}
								<Link
									href="https://www.tiktok.com/@discasrodandoporlavida"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Seguir a Discas en TikTok"
									className={cn(
										'w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300',
										'hover:scale-110 hover:shadow-lg hover:bg-black',
									)}
								>
									<svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.87a8.18 8.18 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z" />
									</svg>
								</Link>
							</div>
						</div>
					</div>

					{/* Sección 2: Navegación */}
					<div className="lg:col-span-3 space-y-6">
						<h3 className="text-xl font-bold flex items-center gap-2">
							<ChevronRight className="w-5 h-5 text-teal-400" />
							Navegación
						</h3>
						<ul className="space-y-3">
							{NAV_LINKS.map((link) => (
								<li key={link.path}>
									<Link
										href={link.path}
										className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
									>
										<div className="w-1.5 h-1.5 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
										<span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
									</Link>
								</li>
							))}
						</ul>

						{/* Botón especial de donación */}
						{/* <Button
							asChild
							className="w-full mt-6 bg-linear-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 font-semibold"
						>
							<Link href="/donaciones">
								<Heart className="w-4 h-4 mr-2" />
								Donar ahora
							</Link>
						</Button> */}
					</div>

					{/* Sección 3: Contacto */}
					<div className="lg:col-span-3 space-y-6">
						<h3 className="text-xl font-bold flex items-center gap-2">
							<ChevronRight className="w-5 h-5 text-amber-400" />
							Contacto
						</h3>
						<div className="space-y-4">
							{CONTACT_INFO.map((item, index) => {
								const Icon = item.icon;
								return (
									<div key={index} className="flex items-start gap-3">
										<div className="p-2 bg-gray-800 rounded-lg">
											<Icon className="w-4 h-4 text-teal-400" />
										</div>
										<div>
											<p className="font-medium">{item.text}</p>
											<p className="text-sm text-gray-400">{item.description}</p>
										</div>
									</div>
								);
							})}
						</div>

						{/* Información legal */}
						<div className="pt-4 border-t border-gray-800">
							<p className="text-sm text-gray-400">
								Discas es una organización sin fines de lucro registrada en Argentina. Todas las donaciones son
								deducibles de impuestos.
							</p>
						</div>
					</div>

					{/* Sección 4: Timoteo (Estrella del refugio) */}
					<div className="lg:col-span-2">
						<div className="relative group">
							{/* Marco decorativo */}
							<div className="absolute -inset-1 bg-linear-to-r from-teal-500 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

							<div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 p-4">
								{/* Imagen de Timoteo */}
								<div className="relative flex items-center justify-center h-64 overflow-hidden rounded-xl mb-4">
									<Image
										src="/image/varias/timoteo.png"
										alt="Timoteo - Nuestro embajador de cuatro patas"
										// fill
										className="w-52 object-cover group-hover:scale-105 transition-transform duration-500"
										// sizes="(max-width: 768px) 100vw, 256px"
										width={1000}
										height={1500}
									/>

									{/* Overlay */}
									<div className="absolute inset-0 bg-linear-to-t from-gray-900/60 to-transparent" />

									{/* Badge */}
									{/* <div className="absolute top-3 right-3">
										<div className="px-3 py-1 bg-linear-to-r from-amber-500 to-pink-500 rounded-full text-xs font-bold flex items-center gap-1">
											<Heart className="w-3 h-3" />
											Embajador
										</div>
									</div> */}
								</div>

								{/* Info de Timoteo */}
								{/* <div className="text-center">
									<h4 className="font-bold text-lg mb-1">Timoteo</h4>
									<p className="text-sm text-gray-300 mb-2">Nuestro guerrero de 4 patas</p>
									<p className="text-xs text-gray-400">
										Rescatado en 2020, hoy inspira con su fuerza y alegría a todos los que conocen su historia.
									</p>
								</div> */}
							</div>

							{/* Elemento decorativo adicional */}
							<div className="absolute -bottom-2 -right-2">
								<PawPrint className="w-8 h-8 text-amber-500/30" />
							</div>
						</div>
					</div>
				</div>

				{/* Separador */}
				<Separator className="my-8 lg:my-12 bg-gray-800" />

				{/* Pie de página inferior */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="text-center md:text-left">
						<p className="text-gray-400 text-sm">© {new Date().getFullYear()} Discas. Todos los derechos reservados.</p>
						<p className="text-gray-500 text-xs mt-1">Rescatamos animales con discapacidad 🐾</p>
					</div>

					<div className="flex items-center gap-6">
						{/* <Link href="/privacidad" className="text-gray-400 hover:text-white text-sm transition-colors">
							Política de privacidad
						</Link>
						<Link href="/terminos" className="text-gray-400 hover:text-white text-sm transition-colors">
							Términos de uso
						</Link> */}
						<div className="text-gray-500 text-sm flex items-center gap-2">
							<span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
							Desarrollado por Ignacio Vivas
						</div>
					</div>
				</div>

				{/* Mensaje especial */}
				<div className="mt-8 text-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
						<Heart className="w-4 h-4 text-pink-400" />
						<span className="text-sm text-gray-300">Gracias por apoyar a nuestros guerreros de cuatro patas</span>
						<Heart className="w-4 h-4 text-pink-400" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
