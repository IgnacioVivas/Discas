import { Dog, Facebook, Instagram, PawPrint, Twitter } from 'lucide-react';
import React from 'react';
import MySuscripcion from '../myComponents/MySuscripcion';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import { inter, poppins } from '../ui/fonts';

const links = [
	{ text: 'Adoptá' },
	{ text: 'Infórmate' },
	{ text: 'Participá' },
	{ text: 'Tienda' },
	{ text: 'Contacto' },
];

const Footer = () => {
	return (
		<div className="mt-40 bg-[#100A00] px-10 md:px-20 pt-28 flex flex-col justify-center">
			<div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-10 w-full grid-rows-3 md:grid-rows-1">
				{/* seccion 1 */}
				<div className="flex flex-col gap-4 row-start-2 col-span-2 md:row-start-1 md:col-span-1 self-start md:self-stretch">
					<div className="flex gap-3 items-center">
						<Dog className="text-custom-teal font-semibold text-4xl" />
						<h4 className={`font-semibold text-2xl text-white cursor-default ${poppins.className}`}>Discas</h4>
					</div>
					<p className={`text-custom-grey text-sm cursor-default ${inter.className}`}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quae, labore suscipit exercitationem aperiam.
					</p>
					<div className="flex gap-3 text-custom-yellow">
						<Link
							className="border-[0.5px] border-[#FFFFFF35] rounded-lg p-2"
							href={'https://www.instagram.com/discascordoba/'}
						>
							<Instagram size={17} />
						</Link>
						<Link className="border-[0.5px] border-[#FFFFFF35] rounded-lg p-2" href={'https://x.com/DiscasCba'}>
							<Facebook size={17} />
						</Link>
						<Link
							className="border-[0.5px] border-[#FFFFFF35] rounded-lg p-2"
							href={'https://www.facebook.com/discas.rodandoporlavida'}
						>
							<Twitter size={17} />
						</Link>
					</div>
				</div>

				{/* seccion 2 */}
				<div className="text-custom-grey flex flex-col gap-3 row-start-3 md:row-start-1 col-start-1 md:col-start-2">
					<h5 className={`text-white text-lg uppercase font-semibold cursor-default ${poppins.className}`}>LINKS</h5>
					{links.map((link, index) => (
						<div key={index} className="flex gap-3 text-sm cursor-pointer">
							<PawPrint className="text-custom-teal" />
							<p className={`${inter.className}`}> {link.text}</p>
						</div>
					))}
				</div>
				{/* seccion 3 */}
				<div className="text-custom-grey flex flex-col gap-3 row-start-3 md:row-start-1 col-start-2 md:col-start-3">
					<h5 className={`text-white text-lg uppercase font-semibold cursor-default ${poppins.className}`}>LINKS</h5>
					{links.map((link, index) => (
						<div key={index} className="flex gap-3 text-sm cursor-pointer">
							<PawPrint className="text-custom-teal" />
							<p className={`${inter.className}`}>{link.text}</p>
						</div>
					))}
				</div>

				{/* seccion 4 */}
				<div className="relative row-start-1 col-span-2 md:col-start-4 md:col-end-6">
					<div className="absolute top-[-150px]">
						<MySuscripcion />
					</div>
				</div>
			</div>

			<div className="w-full mt-8 flex flex-col justify-center">
				<Separator />
				<span className={`text-white text-xs text-center py-5 cursor-default ${inter.className}`}>
					Copyright © 2025 Discas - Desarrollo Ignacio Vivas
				</span>
			</div>
		</div>
	);
};

export default Footer;
