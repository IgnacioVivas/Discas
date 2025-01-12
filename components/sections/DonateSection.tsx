// import React from 'react';

// const DonateSection = () => {
// 	return (
// 		<div className="w-full flex flex-col justify-center gap-3">
// 			<h2 className="text-3xl text-center text-stone-900 font-bold">Haz una diferencia hoy</h2>
// 			<h3 className="text-lg text-center text-stone-400 font-normal">
// 				Con tu contribución, podemos seguir ayudando a más discas. ¡Gracias por tu generosidad!
// 			</h3>
// 			<h2 className="uppercase text-center mt-9 font-semibold text-xl">Doná Mensualmente</h2>
// 			<div className="grid grid-cols-2 gap-3 justify-items-center md:grid-cols-3 text-white font-bold text-2xl">
// 				<div className="w-full p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900">$6.000</div>
// 				<div className="w-full p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900">$8.000</div>
// 				<div className="w-full p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900 col-span-2 md:col-auto">
// 					$12.000
// 				</div>
// 				<div className="w-full p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900">$18.000</div>
// 				<div className="w-full p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900">$24.000</div>
// 				<div className="w-full p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900 col-span-2 md:col-auto">
// 					$30.000
// 				</div>
// 			</div>
// 			<h2 className="uppercase text-center mt-9 font-semibold text-xl">DONÁ POR ÚNICA VEZ</h2>
// 			<div className="grid grid-cols-2 gap-3 md:grid-cols-6 text-white font-bold text-2xl">
// 				<div className="p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900">$5000</div>
// 				<div className="p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900">$10000</div>
// 				<div className="p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900">$15000</div>
// 				<div className="p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900">$20000</div>
// 				<div className="p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900">$25000</div>
// 				<div className="p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900">$30000</div>
// 			</div>
// 			<div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-9">
// 				<div className="flex flex-col gap-3">
// 					<h2 className="uppercase text-center font-semibold text-xl">APORTÁ USANDO ALIAS</h2>
// 					<div className="p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900 text-white font-bold text-2xl">
// 						CABRA.OSO
// 					</div>
// 				</div>
// 				<div className="flex flex-col gap-3">
// 					<h2 className="uppercase text-center font-semibold text-xl">O SI ESTÁS FUERA DE ARGENTINA</h2>
// 					<div className="p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900 text-white font-bold text-2xl">
// 						PayPal
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default DonateSection;

'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DonateSection = () => {
	return (
		<div className="w-full flex flex-col justify-center gap-3">
			<h2 className="text-3xl text-center text-stone-900 font-bold">Haz una diferencia hoy</h2>
			<h3 className="text-lg text-center text-stone-400 font-normal">
				Con tu contribución, podemos seguir ayudando a más discas. ¡Gracias por tu generosidad!
			</h3>
			<h2 className="uppercase text-center mt-9 font-semibold text-xl">Doná Mensualmente</h2>
			<div className="grid grid-cols-2 gap-9 justify-items-center md:grid-cols-3 text-white font-bold text-2xl">
				{['$6.000', '$8.000', '$12.000', '$18.000', '$24.000', '$30.000'].map((price, index) => (
					<motion.div
						key={index}
						className="w-full p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900"
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
			<h2 className="uppercase text-center mt-9 font-semibold text-xl">DONÁ POR ÚNICA VEZ</h2>
			<div className="grid grid-cols-2 gap-4 md:grid-cols-6 text-white font-bold text-2xl">
				{['$5000', '$10000', '$15000', '$20000', '$25000', '$30000'].map((price, index) => (
					<motion.div
						key={index}
						className="p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900"
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
				<div className="flex flex-col gap-3">
					<h2 className="uppercase text-center font-semibold text-xl">APORTÁ USANDO ALIAS</h2>
					<motion.div
						className="p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900 text-white font-bold text-2xl"
						whileHover={{ scale: 1.1, boxShadow: '0px 4px 30px rgba(0, 128, 128, 0.8)' }}
						whileTap={{ scale: 0.95 }}
					>
						CABRA.OSO
					</motion.div>
				</div>
				<div className="flex flex-col gap-3">
					<h2 className="uppercase text-center font-semibold text-xl">O SI ESTÁS FUERA DE ARGENTINA</h2>
					<motion.div
						className="p-4 bg-teal-400 rounded-xl text-center border-2 border-stone-900 text-white font-bold text-2xl"
						whileHover={{ scale: 1.1, boxShadow: '0px 4px 30px rgba(0, 128, 128, 0.8)' }}
						whileTap={{ scale: 0.95 }}
					>
						PayPal
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default DonateSection;
