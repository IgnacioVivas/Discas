import Image from 'next/image';
import React from 'react';
import img from '../../image/foto-portada.jpg';
import { AspectRatio } from '../ui/aspect-ratio';
import { Button } from '../ui/button';
import { PawPrint } from 'lucide-react';

const Header = () => {
	return (
		<div className="w-full h-screen relative">
			<AspectRatio ratio={16 / 9}>
				<Image className="w-full h-screen object-cover" src={img} alt="portada" />
			</AspectRatio>
			<div className="absolute top-[350px] pl-20 text-white flex flex-col">
				<h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
					¡Transforma vidas <br /> con <span className="text-teal-400">tu</span> ayuda!
				</h1>
				<span className="text-lg md:text-2xl mt-2 drop-shadow-sm font-semibold">
					Tu apoyo hace posible un futuro mejor para ellos<span className="text-teal-400">.</span>
				</span>
				<div className="flex gap-3">
					<Button className="max-w-40 mt-5 bg-white text-black hover:bg-black hover:border-0 hover:text-white">
						<PawPrint /> Doná Ahora
					</Button>
					<Button className="max-w-40 mt-5 bg-transparent border-2 text-white">Apadriná</Button>
				</div>
			</div>
		</div>
	);
};

export default Header;
