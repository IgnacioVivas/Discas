'use client';

import React from 'react';
import { motion } from 'framer-motion';
import bgPatitas from '@/image/huellas-perros.png';
import Image from 'next/image';
import imgDona from '@/image/mano-dona.png';
import { inter, nunito, poppins } from '../ui/fonts';

const DonateSection = () => {
	return (
		<div
			className="w-full flex flex-col justify-center gap-3 p-10 md:p-20"
			style={{ backgroundImage: `url(${bgPatitas.src})` }}
		>
			<div className="px-8 md:px-20 py-10 bg-teal-950 bg-opacity-85 rounded-xl">
				<h2 className={`text-4xl text-center text-white font-semibold mb-5 ${poppins.className}`}>
					Haz una diferencia hoy
				</h2>
				<h3 className={`text-lg text-center text-white font-normal ${inter.className}`}>
					Con tu contribución, podemos seguir ayudando a más discas. <br /> ¡Gracias por tu generosidad!
				</h3>
				<div className="w-full flex justify-center items-center">
					<Image src={imgDona.src} alt="dona" width={150} height={150} />
				</div>
				<h2 className={`uppercase text-center mb-6 font-semibold text-2xl text-white ${poppins.className}`}>
					Doná Mensualmente
				</h2>
				<div className="grid grid-cols-2 gap-9 justify-items-center md:grid-cols-3 text-white font-bold text-2xl">
					{['$6.000', '$8.000', '$12.000', '$18.000', '$24.000', '$30.000'].map((price, index) => (
						<motion.div
							key={index}
							className={`w-full py-5 bg-teal-400 rounded-xl text-center border-2 border-stone-900 ${nunito.className}`}
							whileHover={{
								scale: 1.1,
								rotate: [0, 3, -3, 0],
								boxShadow: '0px 4px 30px rgba(0, 128, 128, 0.8)',
							}}
							whileTap={{ scale: 0.9 }}
							transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						>
							{price}
						</motion.div>
					))}
				</div>
				<h2 className={`uppercase text-center my-6 font-semibold text-2xl text-white ${poppins.className}`}>
					DONÁ POR ÚNICA VEZ
				</h2>
				<div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-white font-bold text-2xl">
					{['$5000', '$10000', '$15000', '$25000'].map((price, index) => (
						<motion.div
							key={index}
							className={`py-3 bg-teal-400 rounded-xl text-center border-2 border-stone-900 ${nunito.className}`}
							whileHover={{
								scale: 1.1,
								rotate: [0, 3, -3, 0],
								boxShadow: '0px 4px 30px rgba(0, 128, 128, 0.8)',
							}}
							whileTap={{ scale: 0.9 }}
							transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						>
							{price}
						</motion.div>
					))}
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-9">
					<div
						className={`uppercase text-white flex flex-col justify-center items-center gap-2 bg-teal-950/70 rounded-xl py-5 ${nunito.className}`}
					>
						<h2 className="font-semibold text-lg text-center">APORTÁ USANDO ALIAS</h2>
						<div className="font-bold text-3xl text-teal-400 text-center">CABRA.OSO</div>
					</div>
					<div
						className={`text-white flex flex-col justify-center items-center gap-2 bg-teal-950/70 rounded-xl py-5 ${nunito.className}`}
					>
						<h2 className="uppercase font-semibold text-lg text-center">O SI ESTÁS FUERA DE ARGENTINA</h2>
						<div className="font-bold text-3xl text-teal-400 text-center">PayPal</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DonateSection;

// import React from 'react';
// import { motion } from 'framer-motion';

// const DonateSection = () => {
// 	return (
// 		<div className="w-full flex flex-col justify-center gap-3">
// 			<h2 className="text-3xl text-center text-stone-900 font-bold">Haz una diferencia hoy</h2>
// 			<h3 className="text-lg text-center text-stone-400 font-normal">
// 				Con tu contribución, podemos seguir ayudando a más discas. ¡Gracias por tu generosidad!
// 			</h3>
// 			<h2 className="uppercase text-center mt-9 font-semibold text-xl">Doná Mensualmente</h2>
// 			<div className="grid grid-cols-2 gap-3 justify-items-center md:grid-cols-3 text-white font-bold text-2xl">
// 				{['$6.000', '$8.000', '$12.000', '$18.000', '$24.000', '$30.000'].map((price, index) => (
// 					<motion.div
// 						key={index}
// 						className="w-full p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900"
// 						whileHover={{
// 							rotate: [-1, 1, -1, 1, 0], // Simula el movimiento de vibración
// 						}}
// 						transition={{
// 							duration: 0.3, // Duración total de la vibración
// 							repeat: Infinity, // Repite mientras el cursor esté sobre la tarjeta
// 							repeatType: 'loop', // Tipo de repetición
// 						}}
// 					>
// 						{price}
// 					</motion.div>
// 				))}
// 			</div>
// 			<h2 className="uppercase text-center mt-9 font-semibold text-xl">DONÁ POR ÚNICA VEZ</h2>
// 			<div className="grid grid-cols-2 gap-3 md:grid-cols-6 text-white font-bold text-2xl">
// 				{['$5000', '$10000', '$15000', '$20000', '$25000', '$30000'].map((price, index) => (
// 					<motion.div
// 						key={index}
// 						className="p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900"
// 						whileHover={{
// 							rotate: [-1, 1, -1, 1, 0],
// 						}}
// 						transition={{
// 							duration: 0.3,
// 							repeat: Infinity,
// 							repeatType: 'loop',
// 						}}
// 					>
// 						{price}
// 					</motion.div>
// 				))}
// 			</div>
// 			<div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-9">
// 				<motion.div
// 					className="flex flex-col gap-3"
// 					whileHover={{
// 						rotate: [-1, 1, -1, 1, 0],
// 					}}
// 					transition={{
// 						duration: 0.3,
// 						repeat: Infinity,
// 						repeatType: 'loop',
// 					}}
// 				>
// 					<h2 className="uppercase text-center font-semibold text-xl">APORTÁ USANDO ALIAS</h2>
// 					<motion.div
// 						className="p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900 text-white font-bold text-2xl"
// 						whileHover={{
// 							rotate: [-1, 1, -1, 1, 0],
// 						}}
// 						transition={{
// 							duration: 0.3,
// 							repeat: Infinity,
// 							repeatType: 'loop',
// 						}}
// 					>
// 						CABRA.OSO
// 					</motion.div>
// 				</motion.div>
// 				<motion.div
// 					className="flex flex-col gap-3"
// 					whileHover={{
// 						rotate: [-1, 1, -1, 1, 0],
// 					}}
// 					transition={{
// 						duration: 0.3,
// 						repeat: Infinity,
// 						repeatType: 'loop',
// 					}}
// 				>
// 					<h2 className="uppercase text-center font-semibold text-xl">O SI ESTÁS FUERA DE ARGENTINA</h2>
// 					<motion.div
// 						className="p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900 text-white font-bold text-2xl"
// 						whileHover={{
// 							rotate: [-1, 1, -1, 1, 0],
// 						}}
// 						transition={{
// 							duration: 0.3,
// 							repeat: Infinity,
// 							repeatType: 'loop',
// 						}}
// 					>
// 						PayPal
// 					</motion.div>
// 				</motion.div>
// 			</div>
// 		</div>
// 	);
// };

// export default DonateSection;
