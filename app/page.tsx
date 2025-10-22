import Header from '@/components/layout/Header';
import CardSection from '@/components/sections/CardSection';
import DonateSection from '@/components/sections/DonateSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import { Separator } from '@/components/ui/separator';

export default function Home() {
	return (
		<div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<Header />
				<div className="flex flex-col gap-20">
					<CardSection />
					<DonateSection />
					<div className="w-full px-10 md:px-20">
						<Separator className="bg-slate-300" />
					</div>
					<SponsorsSection />
				</div>
			</main>
		</div>
	);
}
