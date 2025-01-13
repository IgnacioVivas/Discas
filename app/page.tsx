import Header from '@/components/layout/Header';
import CardSection from '@/components/sections/CardSection';
import DonateSection from '@/components/sections/DonateSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import { Separator } from '@/components/ui/separator';

export default function Home() {
	return (
		// className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
		<div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<Header />
				<div className="px-20 flex flex-col gap-20">
					<CardSection />
					<DonateSection />
					<Separator className="bg-slate-300" />
					<SponsorsSection />
				</div>
			</main>
		</div>
	);
}
