'use client';
import Image from 'next/image';
import React from 'react';
import imgMobile from '@/image/piru/piru-2.jpg';
import imgDesktop from '@/image/piru/piru-4.jpg';
import { AspectRatio } from '../ui/aspect-ratio';
import { Button } from '../ui/button';
import { PawPrint } from 'lucide-react';
import { inter, poppins } from '../ui/fonts';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Header = () => {
	const isDesktop = useMediaQuery('(min-width: 768px)'); // tailwind md = 768px

	const selectedImage = isDesktop ? imgDesktop : imgMobile;

	return (
		<div className="w-full h-screen relative">
			<AspectRatio ratio={16 / 9}>
				<Image className="w-full h-screen object-cover" src={selectedImage} alt="portada" priority />
			</AspectRatio>
			<div className={`md: absolute md:top-[250px] lg:top-[350px] px-10 md:px-20 text-white flex flex-col`}>
				<h1 className={`text-4xl lg:text-6xl font-semibold text-white drop-shadow-md font-poppins`}>
					¡Transforma vidas <br /> con <span className="text-teal-400">tu</span> ayuda!
				</h1>
				<span className={`text-lg lg:text-2xl mt-2 drop-shadow-sm font-medium ${inter.className}`}>
					Tu apoyo hace posible un futuro mejor para ellos<span className="text-teal-400">.</span>
				</span>
				<div className="flex gap-3 z-10">
					<Button className="max-w-40 mt-5 bg-white text-black hover:bg-black hover:border-0 hover:text-white">
						<PawPrint /> Doná Ahora
					</Button>
					<Button className="max-w-40 mt-5 bg-transparent border-2 text-white hover:bg-black hover:border-transparent">
						Apadriná
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Header;
