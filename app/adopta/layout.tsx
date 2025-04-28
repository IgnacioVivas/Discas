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
				<div className="absolute inset-0 flex flex-col items-center justify-center">
					{/* <h1
						className={`text-4xl lg:text-6xl font-semibold text-white drop-shadow-md font-poppins md:text-6xl text-center px-4`}
					>
						Conocé a quienes esperan por vos
					</h1> */}
					<h1
						className={`text-4xl lg:text-6xl font-semibold text-white drop-shadow-md font-poppins md:text-6xl text-center px-4`}
					>
						Conócelos y enamórate
					</h1>
					<p className={`text-lg lg:text-2xl mt-2 drop-shadow-sm font-medium font-inter text-white`}>
						Adoptar es cambiar una vida para siempre.
					</p>
				</div>
			</div>
			<main className="flex-1">{children}</main>
		</div>
	);
}
