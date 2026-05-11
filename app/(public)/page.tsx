import type { Metadata } from 'next';
import Header from '@/components/layout/Header';

export const metadata: Metadata = {
	title: 'Discas | Rescate y Adopción de Animales con Discapacidad en Córdoba',
	description:
		'Fundación Discas rescata y cuida animales con discapacidad en Córdoba desde 2015. Adoptá un perro o gato especial, hacete padrino/madrina o doná. ¡Cada patita cuenta!',
	alternates: { canonical: 'https://discas.com.ar' },
	openGraph: {
		title: 'Discas | Rescate y Adopción de Animales con Discapacidad en Córdoba',
		description: 'Rescatamos animales con discapacidad en Córdoba desde 2015. Adoptá, doná o sé voluntario. ¡Tu amor puede cambiar una vida!',
		url: 'https://discas.com.ar',
	},
};
import ParallaxImage from '@/components/layout/ParallaxImage';
import CardSection from '@/components/sections/CardSection';
import DonateSection from '@/components/sections/DonateSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="min-h-screen">
			<main className="flex flex-col">
				<Header />
				<CardSection />
				<ParallaxImage />
				<DonateSection />
				<div className="mb-32">
					<Separator className="bg-slate-300" />
				</div>
				<div className="px-4 md:px-10 xl:px-20">
					<SponsorsSection />
				</div>
			</main>
		</div>
	);
}
