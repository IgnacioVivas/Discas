'use client';

import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '../ui/card';
import confetti from 'canvas-confetti';
import Image from 'next/image';

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
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const hasFired = useRef(false);

	useEffect(() => {
		if (!sectionRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasFired.current) {
						hasFired.current = true;
						launchFireworks();
					}
				});
			},
			{
				threshold: 0.4, // dispara cuando el 40% de la sección está visible
			},
		);

		observer.observe(sectionRef.current);

		return () => observer.disconnect();
	}, []);

	const launchFireworks = () => {
		const duration = 15 * 1000; // 15 segundos
		const animationEnd = Date.now() + duration;

		const defaults = {
			startVelocity: 30,
			spread: 360,
			ticks: 60,
			zIndex: 0,
		};

		function randomInRange(min: number, max: number) {
			return Math.random() * (max - min) + min;
		}

		const interval = setInterval(() => {
			const timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				return clearInterval(interval);
			}

			const particleCount = 50 * (timeLeft / duration);

			// Izquierda → derecha
			confetti({
				...defaults,
				particleCount,
				origin: {
					x: randomInRange(0.1, 0.3),
					y: Math.random() - 0.2,
				},
				colors: ['#14b8a6', '#fbbf24', '#f87171'], // tus colores Discas
			});

			// Derecha → izquierda
			confetti({
				...defaults,
				particleCount,
				origin: {
					x: randomInRange(0.7, 0.9),
					y: Math.random() - 0.2,
				},
				colors: ['#14b8a6', '#fbbf24', '#f87171'],
			});
		}, 250);
	};

	return (
		<section ref={sectionRef} className="px-10 md:px-28 flex flex-col gap-4 items-center text-center">
			<h2 className="font-nunito uppercase text-3xl md:text-[2.5rem] tracking-widest text-teal-dark font-bold">
				Nuestros Padrinos y Madrinas
			</h2>

			<p className="text-lg leading-relaxed text-stone-700 font-inter">
				A todas las madrinas y padrinos que nos acompañan día a día: gracias por sostenernos, por confiar en nuestro
				trabajo y por darle una oportunidad a cada peludito que cuidamos. Su compromiso hace posible que sigamos
				rescatando, recuperando y cambiando vidas.
				<br />
				<span className="flex items-center justify-center gap-2 mt-1 text-xl leading-relaxed text-orange font-medium font-quicksand">
					Los Discas —y todo nuestro equipo— les agradecemos con el corazón.
					<Image src="/image/emojis/1FA75.svg" alt="Discas" width={28} height={28} />
					<Image src="/image/emojis/1F436.svg" alt="Discas" width={28} height={28} />
					<Image src="/image/emojis/1F638.svg" alt="Discas" width={28} height={28} />
					<Image src="/image/emojis/1FAF6.svg" alt="Discas" width={32} height={32} />
				</span>
			</p>

			<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl">
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
