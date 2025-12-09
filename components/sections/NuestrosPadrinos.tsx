import React from 'react';
import { Card, CardContent } from '../ui/card';

const padrinos = [
	'María Elena',
	'Araceli',
	'Mery Guzman',
	'Amalia',
	'Constanza',
	'Gabriela',
	'Marisa y Edith',
	'Susana',
	'Ciro',
	'Ani',
	'Mathius',
	'Ana',
	'Mauricio',
	'Claudia',
	'Cristina Cabezas',
	'Tamara',
	'Santiago',
];

const NuestrosPadrinos = () => {
	return (
		<section className="px-10 md:px-28 flex flex-col gap-10 items-center text-center">
			<h2 className="uppercase text-3xl md:text-4xl tracking-widest text-teal-900 font-bold">
				Nuestros Padrinos y Madrinas
			</h2>

			<p className="text-lg leading-relaxed text-stone-700">
				A todas las madrinas y padrinos que nos acompañan día a día: gracias por sostenernos, por confiar en nuestro
				trabajo y por darle una oportunidad a cada peludito que cuidamos. Su compromiso hace posible que sigamos
				rescatando, recuperando y cambiando vidas.
				<br />
				<span className="text-teal-600 font-medium">
					Los Discas —y todo nuestro equipo— les agradecemos con el corazón. 💛🐶🐱
				</span>
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl">
				{padrinos.map((name) => (
					<Card key={name} className="shadow-sm border-teal-300/40 hover:shadow-md transition-all bg-white">
						<CardContent className="py-4 px-2 text-center">
							<span className="text-stone-700 font-medium">{name}</span>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};

export default NuestrosPadrinos;
