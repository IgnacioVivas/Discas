'use client';
import React, { useEffect, useState } from 'react';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { Button } from '../ui/button';
import Image from 'next/image';
import logoDiscas from '@/public/image/LOGO DISCAS.png';
import { PawPrint, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
	{ name: 'Inicio', ruta: '/' },
	{ name: 'Conócenos', ruta: '/conocenos' },
	{ name: 'Adoptá', ruta: '/adopta' },
	{ name: 'Infórmate', ruta: '/informate' },
	{ name: 'Participá', ruta: '/participa' },
	{ name: 'Donaciones', ruta: '/donaciones' },
	{ name: 'Tienda', ruta: '/tienda' },
	{ name: 'Contacto', ruta: '/contacto' },
];

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();
	const isAdoptaPage = pathname.includes('/adopta');

	const navClass = isAdoptaPage ? 'bg-transparent' : 'bg-white';

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div
			className={`px-5 md:px-20 z-50 top-0 w-full transition-all duration-300 ${
				scrolled ? 'fixed bg-white shadow-md' : 'absolute top-10'
			}`}
		>
			<div
				className={`hidden lg:flex items-center justify-between px-5 h-24 w-full rounded-xl ${navClass} ${
					scrolled ? 'border-0' : 'border'
				}`}
			>
				<Image className="w-24" src={logoDiscas} alt="logo discas" />
				<Menubar className="bg-transparent">
					{menuItems.map((item, index) => (
						<MenubarMenu key={index}>
							<MenubarTrigger>
								<Link
									href={item.ruta}
									className={`font-nunito text-base transition-colors ${
										pathname === item.ruta
											? 'text-custom-red font-bold border-b-2 border-custom-red pb-1'
											: 'text-gray-600'
									}`}
								>
									{item.name}
								</Link>
							</MenubarTrigger>
						</MenubarMenu>
					))}
					<MenubarMenu>
						<Button className="bg-teal-950 hover:bg-teal-900/80">
							<PawPrint className="mr-1" />
							Doná ahora
						</Button>
					</MenubarMenu>
				</Menubar>
			</div>
			{/* Mobile */}
			<div
				className={`flex justify-between items-center lg:hidden rounded-xl bg-white p-3 ${
					scrolled ? 'border-0' : 'border'
				}`}
			>
				<Image className="w-20" src={logoDiscas} alt="logo discas" />
				<Sheet>
					<SheetTrigger asChild>
						<Menu />
					</SheetTrigger>
					<SheetContent side="left">
						<div className="grid gap-4 py-4">
							{menuItems.map((item, index) => (
								<React.Fragment key={index}>
									<div className="grid grid-cols-4 items-center gap-4">
										<Link
											href={item.ruta}
											className={`font-nunito text-base hover:underline transition-colors ${
												pathname === item.ruta ? 'text-custom-red font-bold' : 'text-gray-600'
											}`}
										>
											{item.name}
										</Link>
									</div>
									{index < menuItems.length - 1 && (
										<Separator className={` ${pathname === item.ruta && 'bg-custom-red font-bold'}`} />
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
