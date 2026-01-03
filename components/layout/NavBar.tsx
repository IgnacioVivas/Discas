'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Heart, Menu, PawPrint, ChevronUp } from 'lucide-react';

// Tu logo - asegurate de tenerlo en la ruta correcta
import logoDiscas from '@/public/image/LOGO DISCAS.png';

// Items del menú (manteniendo los tuyos)
const NAV_ITEMS = [
	{ name: 'Inicio', path: '/' },
	{ name: 'Conócenos', path: '/conocenos' },
	{ name: 'Adoptá', path: '/adopta' },
	{ name: 'Infórmate', path: '/informate' },
	{ name: 'Participá', path: '/participa' },
	{ name: 'Denuncia', path: '/denuncia' },
	{ name: 'Donaciones', path: '/donaciones' },
	{ name: 'Contacto', path: '/contacto' },
];

// Configuración de estilos por ruta
const ROUTE_STYLES = {
	'/': {
		initialBg: 'bg-white',
		textColor: 'text-gray-800',
		hoverColor: 'hover:text-teal-600',
		logoFilter: '',
	},
	'/adopta': {
		initialBg: 'bg-transparent',
		textColor: 'text-white',
		hoverColor: 'hover:text-teal-200',
		logoFilter: 'brightness(0) invert(1)',
	},
	'/conocenos': {
		initialBg: 'bg-white',
		textColor: 'text-gray-800',
		hoverColor: 'hover:text-teal-600',
		logoFilter: '',
	},
	default: {
		initialBg: 'bg-white',
		textColor: 'text-gray-800',
		hoverColor: 'hover:text-teal-600',
		logoFilter: '',
	},
};

const NavBar = () => {
	const pathname = usePathname();
	const router = useRouter();

	// Estados
	const [isScrolled, setIsScrolled] = useState(false);
	// const [lastScrollY, setLastScrollY] = useState(0);
	const [isNavbarVisible, setIsNavbarVisible] = useState(true);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Determinar estilos según la ruta actual
	const getCurrentRouteStyle = () => {
		const routeKey = Object.keys(ROUTE_STYLES).find(
			(key) => key !== 'default' && pathname.startsWith(key),
		) as keyof typeof ROUTE_STYLES;

		return ROUTE_STYLES[routeKey] || ROUTE_STYLES.default;
	};

	const currentStyle = getCurrentRouteStyle();

	// Control del scroll para desktop y móvil
	useEffect(() => {
		let ticking = false;
		let lastScrollY = 0;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const currentScrollY = window.scrollY;

					// Comportamiento para desktop
					if (window.innerWidth >= 1024) {
						setIsScrolled(currentScrollY > 20);
					}
					// Comportamiento para móvil
					else {
						// Se oculta al hacer scroll hacia abajo
						if (currentScrollY > lastScrollY && currentScrollY > 100) {
							setIsNavbarVisible(false);
						}
						// Se muestra al hacer scroll hacia arriba
						else if (currentScrollY < lastScrollY) {
							setIsNavbarVisible(true);
						}

						// Efecto de scrolled para móvil también
						setIsScrolled(currentScrollY > 10);
					}

					lastScrollY = currentScrollY;
					ticking = false;
				});

				ticking = true;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Determinar clases del navbar según el estado
	const getNavbarClasses = () => {
		const baseClasses = cn(
			'z-50 transition-all duration-500 ease-in-out',
			// Estado inicial - diferentes por ruta
			!isScrolled ? 'absolute top-6' : 'fixed top-0',
			// Ancho responsivo
			!isScrolled ? 'w-[calc(100%-2rem)] lg:w-[calc(100%-4rem)] mx-4 lg:mx-8' : 'w-full',
			// Control de visibilidad en móvil - verifica si window existe
			typeof window !== 'undefined' && window.innerWidth < 1024 && !isNavbarVisible
				? '-translate-y-full'
				: 'translate-y-0',
		);

		const bgClasses = cn(
			'transition-all duration-300',
			// Fondo según estado y ruta
			isScrolled ? 'bg-white shadow-lg backdrop-blur-sm bg-white/95' : currentStyle.initialBg,
			// Borde redondeado solo cuando no hay scroll
			!isScrolled && 'rounded-2xl border border-gray-100',
		);

		return cn(baseClasses, bgClasses);
	};
	// Navegar al hacer click en un item
	const handleNavClick = (path: string) => {
		setIsMobileMenuOpen(false);
		router.push(path);
	};

	// Función para donar
	const handleDonate = () => {
		router.push('/donaciones');
	};

	return (
		<nav className={getNavbarClasses()}>
			<div className="container mx-auto px-4 lg:px-6">
				<div className="flex items-center justify-between h-16 lg:h-20">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2 z-50" onClick={() => setIsMobileMenuOpen(false)}>
						<div className={cn('relative w-32 h-12 transition-all duration-300', isScrolled && 'w-28 h-10')}>
							<Image
								src={logoDiscas}
								alt="Discas - Rescatamos animales con discapacidad"
								fill
								className="object-contain"
								style={!isScrolled && pathname.startsWith('/adopta') ? { filter: 'brightness(0) invert(1)' } : {}}
								priority
							/>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-1">
						{NAV_ITEMS.map((item) => (
							<Link
								key={item.path}
								href={item.path}
								className={cn(
									'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
									// Color del texto según estado
									isScrolled
										? 'text-gray-700 hover:text-white hover:bg-teal-600'
										: cn(currentStyle.textColor, currentStyle.hoverColor, 'hover:bg-white/10'),
									// Item activo
									pathname === item.path && 'text-teal-600 bg-teal-100 font-semibold hover:bg-red-500',
								)}
							>
								{item.name}
							</Link>
						))}

						{/* Botón Donar - Desktop */}
						<Button
							onClick={handleDonate}
							className={cn(
								'ml-4 transition-all duration-300',
								'text-white bg-linear-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800',
							)}
						>
							<Heart className="w-4 h-4 mr-2" />
							Donar ahora
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<div className="flex lg:hidden items-center space-x-2">
						<Button
							onClick={handleDonate}
							size="sm"
							className={cn(
								'transition-all',
								isScrolled
									? 'bg-teal-600 hover:bg-teal-700'
									: pathname.startsWith('/adopta')
									? 'bg-white text-teal-700 hover:bg-white/90'
									: 'bg-teal-600 hover:bg-teal-700',
							)}
						>
							<Heart className="w-3 h-3 mr-1" />
							Donar
						</Button>

						<Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className={cn('transition-colors', isScrolled ? 'text-gray-700' : currentStyle.textColor)}
								>
									<Menu className="w-5 h-5" />
								</Button>
							</SheetTrigger>

							<SheetContent side="right" className="w-full bg-white">
								<div className="flex flex-col h-full pt-6">
									{/* Header del menú móvil */}
									{/* <div className="flex items-center justify-between mb-8">
										<div className="relative w-32 h-10">
											<Image src={logoDiscas} alt="Discas" fill className="object-contain" />
										</div>
									</div> */}

									<div className="flex items-center justify-start mb-8">
										<div className="relative w-32 h-10">
											<Image src={logoDiscas} alt="Discas" fill className="object-contain" />
										</div>
									</div>

									{/* Items del menú móvil */}
									<div className="flex-1 overflow-y-auto">
										<div className="space-y-1">
											{NAV_ITEMS.map((item) => (
												<button
													key={item.path}
													onClick={() => handleNavClick(item.path)}
													className={cn(
														'w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center',
														pathname === item.path
															? 'bg-teal-50 text-teal-600 font-semibold'
															: 'text-gray-700 hover:bg-gray-100',
													)}
												>
													{item.name}
													{pathname === item.path && <ChevronUp className="w-4 h-4 ml-auto rotate-90 text-teal-500" />}
												</button>
											))}
										</div>

										{/* Separador */}
										<div className="my-6 border-t border-gray-200" />

										{/* Información adicional en móvil */}
										<div className="px-4 py-4 bg-linear-to-r from-teal-50 to-teal-100 rounded-xl">
											<h3 className="font-semibold text-teal-800 mb-2">¿Encontraste un animal que necesita ayuda?</h3>
											<p className="text-sm text-teal-700 mb-3">Contactanos inmediatamente</p>
											<Button
												onClick={() => handleNavClick('/contacto')}
												className="w-full bg-teal-600 hover:bg-teal-700"
											>
												<PawPrint className="w-4 h-4 mr-2" />
												Contactar emergencia
											</Button>
										</div>
									</div>

									{/* Footer del menú móvil */}
									<div className="pt-4 border-t border-gray-200">
										<p className="text-xs text-gray-500 text-center">Rescatamos animales con discapacidad 🐾</p>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
