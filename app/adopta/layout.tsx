import Image from 'next/image';
import baner from '@/public/image/baners/baner-1.jpg';

export default function AdoptaLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="relative w-full h-[500px]">
				<Image src={baner} alt="Banner" fill className="object-cover object-center" priority />
				<div className="absolute inset-0 bg-teal-950/30 "></div>
				<div className="px-5 absolute inset-0 flex flex-col items-center justify-center">
					<h1 className={`text-4xl lg:text-6xl font-semibold text-white drop-shadow-md font-poppins text-center px-4`}>
						Conócelos y enamórate
					</h1>
					<p className={`text-center text-lg lg:text-2xl mt-2 drop-shadow-sm font-medium font-inter text-white`}>
						Adoptar es cambiar una vida para siempre.
					</p>
				</div>
			</div>
			<main className="flex-1">{children}</main>
		</div>
	);
}
