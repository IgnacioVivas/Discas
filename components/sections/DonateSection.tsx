import React from 'react';
import { Card, CardContent } from '../ui/card';

const DonateSection = () => {
	return (
		<div className="w-full flex flex-col justify-center gap-3">
			<h2 className="text-3xl text-center text-stone-900 font-bold">Haz una diferencia hoy</h2>
			<h3 className="text-lg text-center text-stone-400 font-normal">
				Con tu contribución, podemos seguir ayudando a más discas. ¡Gracias por tu generosidad!
			</h3>
			<h2 className="uppercase text-center">Doná Mensualmente</h2>
			<div className="grid grid-cols-2 gap-3 justify-items-center md:grid-cols-3">
				<div className="w-full p-4 bg-teal-400 rounded-xl text-center">$6.000</div>
				<div className="w-full p-4 bg-teal-400 rounded-xl text-center">$8.000</div>
				<div className="w-full p-4 bg-teal-400 rounded-xl text-center col-span-2 md:col-auto">$12.000</div>
				<div className="w-full p-4 bg-teal-400 rounded-xl text-center">$18.000</div>
				<div className="w-full p-4 bg-teal-400 rounded-xl text-center">$24.000</div>
				<div className="w-full p-4 bg-teal-400 rounded-xl text-center col-span-2 md:col-auto">$30.000</div>
			</div>
			<h2 className="uppercase text-center">DONÁ POR ÚNICA VEZ</h2>
			<div className="grid grid-cols-2 gap-3 md:grid-cols-6">
				<div className="p-4 bg-slate-500">$5000</div>
				<div className="p-4 bg-slate-500">$10000</div>
				<div className="p-4 bg-slate-500">$15000</div>
				<div className="p-4 bg-slate-500">$20000</div>
				<div className="p-4 bg-slate-500">$25000</div>
				<div className="p-4 bg-slate-500">$30000</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
				<div className="flex flex-col gap-3">
					<h2 className="uppercase text-center">APORTÁ USANDO ALIAS</h2>
					<div className="p-4 bg-slate-500">CABRA.OSO</div>
				</div>
				<div className="flex flex-col gap-3">
					<h2 className="uppercase text-center">O SI ESTÁS FUERA DE ARGENTINA</h2>
					<div className="p-4 bg-slate-500">PayPal</div>
				</div>
			</div>
		</div>
	);
};

export default DonateSection;
