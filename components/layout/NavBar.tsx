// 'use client';
// import React, { useEffect, useState } from 'react';
// import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
// import { Button } from '../ui/button';
// import Image from 'next/image';
// import logoDiscas from '@/public/image/LOGO DISCAS.png';
// import { PawPrint, Menu } from 'lucide-react';
// import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
// import { Separator } from '../ui/separator';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { cn } from '@/lib/utils';

// const menuItems = [
// 	{ name: 'Inicio', ruta: '/' },
// 	{ name: 'Conócenos', ruta: '/conocenos' },
// 	{ name: 'Adoptá', ruta: '/adopta' },
// 	{ name: 'Infórmate', ruta: '/informate' },
// 	{ name: 'Participá', ruta: '/participa' },
// 	{ name: 'Denuncia', ruta: '/denuncia' },
// 	{ name: 'Donaciones', ruta: '/donaciones' },
// 	{ name: 'Contacto', ruta: '/contacto' },
// ];

// const initialRouteStyles = {
// 	'/': 'bg-white',
// 	'/adopta': 'bg-transparent',
// 	'/conocenos': 'bg-red',
// 	default: 'bg-white',
// };
// // rgba(255, 255, 255, 0.05)
// const NavBar = () => {
// 	const [scrolled, setScrolled] = useState(false);
// 	const pathname = usePathname();

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			setScrolled(window.scrollY > 50);
// 		};

// 		// Solo ejecutar en el cliente
// 		if (typeof window !== 'undefined') {
// 			handleScroll();
// 			window.addEventListener('scroll', handleScroll);
// 			return () => window.removeEventListener('scroll', handleScroll);
// 		}
// 	}, []);

// 	const getInitialStyle = () => {
// 		if (pathname.startsWith('/adopta')) {
// 			return 'bg-transparent';
// 		}
// 		return initialRouteStyles[pathname as keyof typeof initialRouteStyles] || initialRouteStyles.default;
// 	};

// 	return (
// 		<div
// 			className={cn(
// 				'px-5 md:px-10 lg:px-20 z-50 top-0 w-full transition-all duration-300',
// 				scrolled ? 'fixed bg-white shadow-md' : 'absolute top-10',
// 			)}
// 		>
// 			{/* Versión Desktop */}
// 			<div
// 				className={cn(
// 					'hidden lg:flex items-center justify-between px-5 h-24 w-full rounded-xl',
// 					scrolled ? 'border-0' : 'border',
// 					!scrolled && getInitialStyle(),
// 				)}
// 			>
// 				<Link href={`/`}>
// 					<Image className="w-24" src={logoDiscas} alt="logo discas" />
// 				</Link>

// 				<Menubar className="bg-transparent">
// 					{menuItems.map((item) => (
// 						<MenubarMenu key={item.ruta}>
// 							<MenubarTrigger
// 								className={cn(
// 									!scrolled && pathname === '/'
// 										? 'data-[state=open]:bg-red-100 hover:bg-red-100'
// 										: 'data-[state=open]:bg-custom-yellow hover:bg-red-100',
// 									scrolled && 'data-[state=open]:bg-red-100 hover:bg-red-100 hover:text-accent-foreground',
// 								)}
// 							>
// 								<Link
// 									href={item.ruta}
// 									className={cn(
// 										'font-nunito text-base transition-colors',
// 										// Estilo cuando está activo (prioridad máxima)
// 										pathname === item.ruta && 'text-custom-red font-bold border-b-2 border-custom-red pb-1',
// 										// Estilos según scroll y ruta
// 										!scrolled && pathname.startsWith('/adopta') && 'text-white hover:text-white/80',
// 										!scrolled && !pathname.startsWith('/adopta') && 'text-gray-600 hover:text-gray-800',
// 										// Estilo cuando hay scroll (para todas las páginas)
// 										scrolled && 'text-gray-600 hover:text-gray-800',
// 									)}
// 								>
// 									{item.name}
// 								</Link>
// 							</MenubarTrigger>
// 						</MenubarMenu>
// 					))}

// 					<MenubarMenu>
// 						<Button className={cn('transition-colors', 'bg-teal-950 hover:bg-teal-900/80')}>
// 							<PawPrint className="mr-1" />
// 							Doná ahora
// 						</Button>
// 					</MenubarMenu>
// 				</Menubar>
// 			</div>

// 			{/* Versión Mobile */}
// 			<div
// 				className={cn(
// 					'flex justify-between items-center lg:hidden rounded-xl p-3',
// 					scrolled ? 'bg-white border-0' : `${getInitialStyle()} border`,
// 				)}
// 			>
// 				<Image className="w-20" src={logoDiscas} alt="logo discas" />
// 				<Sheet>
// 					<SheetTrigger asChild aria-label="Abrir menú de navegación">
// 						<Menu className={!scrolled && pathname.startsWith('/adopta') ? 'text-white' : 'text-gray-600'} />
// 					</SheetTrigger>
// 					<SheetContent side="left">
// 						<SheetTitle className="sr-only">Menú de navegación</SheetTitle>

// 						<div className="grid gap-4 py-4">
// 							{menuItems.map((item, index) => (
// 								<React.Fragment key={item.ruta}>
// 									<div className="grid grid-cols-4 items-center gap-4">
// 										<Link
// 											href={item.ruta}
// 											className={cn(
// 												'font-nunito text-base hover:underline transition-colors',
// 												pathname === item.ruta ? 'text-custom-red font-bold' : 'text-gray-600',
// 											)}
// 										>
// 											{item.name}
// 										</Link>
// 									</div>
// 									{index < menuItems.length - 1 && (
// 										<Separator className={pathname === item.ruta ? 'bg-custom-red' : ''} />
// 									)}
// 								</React.Fragment>
// 							))}
// 						</div>
// 					</SheetContent>
// 				</Sheet>
// 			</div>
// 		</div>
// 	);
// };

// export default NavBar;

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
			// Control de visibilidad en móvil
			window.innerWidth < 1024 && !isNavbarVisible ? '-translate-y-full' : 'translate-y-0',
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
										? 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
										: cn(currentStyle.textColor, currentStyle.hoverColor, 'hover:bg-white/10'),
									// Item activo
									pathname === item.path &&
										(isScrolled
											? 'text-teal-600 bg-teal-50 font-semibold'
											: pathname.startsWith('/adopta')
											? 'text-white bg-white/20 font-semibold'
											: 'text-teal-600 bg-teal-50 font-semibold'),
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
								isScrolled
									? 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800'
									: pathname.startsWith('/adopta')
									? 'bg-white text-teal-700 hover:bg-white/90'
									: 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800',
							)}
						>
							<Heart className="w-4 h-4 mr-2" />
							Donar ahora
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<div className="flex lg:hidden items-center space-x-2 bg-amber-300">
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
										<div className="px-4 py-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl">
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
