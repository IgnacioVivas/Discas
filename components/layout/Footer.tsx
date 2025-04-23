import { Dog, Facebook, Instagram, PawPrint, Twitter } from 'lucide-react';
import React from 'react';
import MySuscripcion from '../myComponents/MySuscripcion';
import { Separator } from '../ui/separator';
import Link from 'next/link';

const links = [
	{ text: 'Adoptá' },
	{ text: 'Infórmate' },
	{ text: 'Participá' },
	{ text: 'Tienda' },
	{ text: 'Contacto' },
];

// const Footer = () => {
// 	return (
// 		<div className="mt-40 bg-[#100A00] px-20 pt-28 flex flex-col justify-center">
// 			<div className="flex flex-row justify-between pb-28 text-white relative">
// 				<div className="grid grid-cols-3 gap-10 w-1/2">
// 					{/* seccion 1 */}
// 					<div className="flex flex-col gap-4">
// 						<div className="flex gap-3 items-center">
// 							<Dog className="text-custom-teal font-semibold text-4xl" />
// 							<h4 className="font-semibold text-2xl">Discas</h4>
// 						</div>
// 						<p className="text-custom-grey text-sm">
// 							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quae, labore suscipit exercitationem
// 							aperiam.
// 						</p>
// 						<div className="flex gap-3 text-custom-yellow">
// 							<Link
// 								className="border-[0.5px] border-[#FFFFFF35] rounded-lg p-2"
// 								href={'https://www.instagram.com/discascordoba/'}
// 							>
// 								<Instagram size={17} />
// 							</Link>
// 							<Link className="border-[0.5px] border-[#FFFFFF35] rounded-lg p-2" href={'https://x.com/DiscasCba'}>
// 								<Facebook size={17} />
// 							</Link>
// 							<Link
// 								className="border-[0.5px] border-[#FFFFFF35] rounded-lg p-2"
// 								href={'https://www.facebook.com/discas.rodandoporlavida'}
// 							>
// 								<Twitter size={17} />
// 							</Link>
// 						</div>
// 					</div>

// 					{/* seccion 2 */}
// 					<div className="text-custom-grey flex flex-col gap-3">
// 						<h5 className="text-white text-lg uppercase font-semibold">LINKS</h5>
// 						{links.map((link, index) => (
// 							<div key={index} className="flex gap-3 text-sm">
// 								<PawPrint className="text-custom-teal" />
// 								<p>{link.text}</p>
// 							</div>
// 						))}
// 					</div>
// 					{/* seccion 3 */}
// 					<div className="text-custom-grey flex flex-col gap-3">
// 						<h5 className="text-white text-lg uppercase font-semibold">LINKS</h5>
// 						{links.map((link, index) => (
// 							<div key={index} className="flex gap-3 text-sm">
// 								<PawPrint className="text-custom-teal" />
// 								<p>{link.text}</p>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 				{/* seccion 4 */}
// 				<div className="w-2/5 absolute top-[-150px] right-0">
// 					<MySuscripcion />
// 				</div>
// 			</div>

// 			<Separator />
// 			<span className="text-white text-xs text-center py-5">Copyright © 2025 Discas - Desarrollo Ignacio Vivas</span>
// 		</div>
// 	);
// };

// export default Footer;
// absolute top-[-150px]

const Footer = () => {
	return (
		<div className="mt-40 bg-[#100A00] px-20 pt-28 flex flex-col justify-center">
			<div className="grid grid-cols-5 gap-10 w-full">
				{/* seccion 1 */}
				<div className="flex flex-col gap-4">
					<div className="flex gap-3 items-center">
						<Dog className="text-custom-teal font-semibold text-4xl" />
						<h4 className="font-semibold text-2xl text-white cursor-default">Discas</h4>
					</div>
					<p className="text-custom-grey text-sm cursor-default">
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
				<div className="text-custom-grey flex flex-col gap-3">
					<h5 className="text-white text-lg uppercase font-semibold cursor-default">LINKS</h5>
					{links.map((link, index) => (
						<div key={index} className="flex gap-3 text-sm cursor-pointer">
							<PawPrint className="text-custom-teal" />
							<p>{link.text}</p>
						</div>
					))}
				</div>
				{/* seccion 3 */}
				<div className="text-custom-grey flex flex-col gap-3">
					<h5 className="text-white text-lg uppercase font-semibold cursor-default">LINKS</h5>
					{links.map((link, index) => (
						<div key={index} className="flex gap-3 text-sm cursor-pointer">
							<PawPrint className="text-custom-teal" />
							<p>{link.text}</p>
						</div>
					))}
				</div>

				{/* seccion 4 */}
				<div className="relative col-start-4 col-end-6">
					<div className="absolute top-[-150px]">
						<MySuscripcion />
					</div>
				</div>
			</div>

			<div className="w-full mt-8 flex flex-col justify-center">
				<Separator />
				<span className="text-white text-xs text-center py-5 cursor-default">
					Copyright © 2025 Discas - Desarrollo Ignacio Vivas
				</span>
			</div>
		</div>
	);
};

export default Footer;
