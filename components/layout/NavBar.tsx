import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { Button } from '../ui/button';
import Image from 'next/image';
import logoDiscas from '../../image/LOGO DISCAS.png';
import { PawPrint, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '../ui/separator';
import Link from 'next/link';

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
	return (
		<div className="px-5 md:px-20 absolute w-full top-10 z-10">
			<div className="hidden lg:flex items-center justify-between px-5 h-24 w-full rounded-xl border bg-white">
				<Image className="w-24" src={logoDiscas} alt="logo discas" />
				<Menubar>
					{menuItems.map((item, index) => (
						<MenubarMenu key={index}>
							<MenubarTrigger>
								<Link href={item.ruta}>{item.name}</Link>
							</MenubarTrigger>
						</MenubarMenu>
					))}
					<MenubarMenu>
						<Button>
							{' '}
							<PawPrint />
							Doná ahora
						</Button>
					</MenubarMenu>
				</Menubar>
			</div>
			<div className="flex justify-between items-center lg:hidden rounded-xl border bg-white p-3">
				<Image className="w-20" src={logoDiscas} alt="logo discas" />
				<Sheet>
					<SheetTrigger asChild>
						<Menu />
					</SheetTrigger>
					<SheetContent side="left">
						<div className="grid gap-4 py-4">
							{menuItems.map((item, index) => (
								<>
									<div className="grid grid-cols-4 items-center gap-4" key={index}>
										<Link href={item.ruta} className="hover:underline">
											{item.name}
										</Link>
									</div>
									{index < menuItems.length - 1 && <Separator />}
								</>
							))}
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
};

export default NavBar;

// <div className="grid grid-cols-4 items-center gap-4">Inicio</div>
// <Separator />
