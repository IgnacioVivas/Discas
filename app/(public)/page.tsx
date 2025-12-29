import Header from '@/components/layout/Header';
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
				<Separator className="bg-slate-300" />
				<SponsorsSection />
			</main>
		</div>
	);
}
