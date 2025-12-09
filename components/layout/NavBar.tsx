'use client';
import React, { useEffect, useState } from 'react';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { Button } from '../ui/button';
import Image from 'next/image';
import logoDiscas from '@/public/image/LOGO DISCAS.png';
import { PawPrint, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const menuItems = [
	{ name: 'Inicio', ruta: '/' },
	{ name: 'Conócenos', ruta: '/conocenos' },
	{ name: 'Adoptá', ruta: '/adopta' },
	{ name: 'Infórmate', ruta: '/informate' },
	{ name: 'Participá', ruta: '/participa' },
	{ name: 'Donaciones', ruta: '/donaciones' },
	{ name: 'Contacto', ruta: '/contacto' },
];

const initialRouteStyles = {
	'/': 'bg-white',
	'/adopta': 'bg-transparent',
	'/conocenos': 'bg-red',
	default: 'bg-white',
};
// rgba(255, 255, 255, 0.05)
const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		// Solo ejecutar en el cliente
		if (typeof window !== 'undefined') {
			handleScroll();
			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	}, []);

	const getInitialStyle = () => {
		if (pathname.startsWith('/adopta')) {
			return 'bg-transparent';
		}
		return initialRouteStyles[pathname as keyof typeof initialRouteStyles] || initialRouteStyles.default;
	};

	return (
		<div
			className={cn(
				'px-5 md:px-10 lg:px-20 z-50 top-0 w-full transition-all duration-300',
				scrolled ? 'fixed bg-white shadow-md' : 'absolute top-10',
			)}
		>
			{/* Versión Desktop */}
			<div
				className={cn(
					'hidden lg:flex items-center justify-between px-5 h-24 w-full rounded-xl',
					scrolled ? 'border-0' : 'border',
					!scrolled && getInitialStyle(),
				)}
			>
				<Link href={`/`}>
					<Image className="w-24" src={logoDiscas} alt="logo discas" />
				</Link>

				<Menubar className="bg-transparent">
					{menuItems.map((item) => (
						<MenubarMenu key={item.ruta}>
							<MenubarTrigger
								className={cn(
									!scrolled && pathname === '/'
										? 'data-[state=open]:bg-red-100 hover:bg-red-100'
										: 'data-[state=open]:bg-custom-yellow hover:bg-red-100',
									scrolled && 'data-[state=open]:bg-red-100 hover:bg-red-100 hover:text-accent-foreground',
								)}
							>
								<Link
									href={item.ruta}
									className={cn(
										'font-nunito text-base transition-colors',
										// Estilo cuando está activo (prioridad máxima)
										pathname === item.ruta && 'text-custom-red font-bold border-b-2 border-custom-red pb-1',
										// Estilos según scroll y ruta
										!scrolled && pathname.startsWith('/adopta') && 'text-white hover:text-white/80',
										!scrolled && !pathname.startsWith('/adopta') && 'text-gray-600 hover:text-gray-800',
										// Estilo cuando hay scroll (para todas las páginas)
										scrolled && 'text-gray-600 hover:text-gray-800',
									)}
								>
									{item.name}
								</Link>
							</MenubarTrigger>
						</MenubarMenu>
					))}

					<MenubarMenu>
						<Button className={cn('transition-colors', 'bg-teal-950 hover:bg-teal-900/80')}>
							<PawPrint className="mr-1" />
							Doná ahora
						</Button>
					</MenubarMenu>
				</Menubar>
			</div>

			{/* Versión Mobile */}
			<div
				className={cn(
					'flex justify-between items-center lg:hidden rounded-xl p-3',
					scrolled ? 'bg-white border-0' : `${getInitialStyle()} border`,
				)}
			>
				<Image className="w-20" src={logoDiscas} alt="logo discas" />
				<Sheet>
					<SheetTrigger asChild aria-label="Abrir menú de navegación">
						<Menu className={!scrolled && pathname.startsWith('/adopta') ? 'text-white' : 'text-gray-600'} />
					</SheetTrigger>
					<SheetContent side="left">
						<SheetTitle className="sr-only">Menú de navegación</SheetTitle>

						<div className="grid gap-4 py-4">
							{menuItems.map((item, index) => (
								<React.Fragment key={item.ruta}>
									<div className="grid grid-cols-4 items-center gap-4">
										<Link
											href={item.ruta}
											className={cn(
												'font-nunito text-base hover:underline transition-colors',
												pathname === item.ruta ? 'text-custom-red font-bold' : 'text-gray-600',
											)}
										>
											{item.name}
										</Link>
									</div>
									{index < menuItems.length - 1 && (
										<Separator className={pathname === item.ruta ? 'bg-custom-red' : ''} />
									)}
								</React.Fragment>
							))}
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
};

export default NavBar;
