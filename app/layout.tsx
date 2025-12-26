// import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/myComponents/WhatsAppButton';
import DonationDialog from '@/components/myComponents/DonationDialog';

// export const metadata: Metadata = {
// 	title: 'Discas',
// 	description: 'Rescatamos animales discas y viejitos',
// 	icons: {
// 		icon: '/favicon.ico',
// 	},
// };

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	return (
// 		<html lang="es">
// 			<head>
// 				<style>
// 					@import
// 					url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Hind:wght@300;400;500;600;700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&display=swap');
// 				</style>
// 			</head>
// 			<body className={`antialiased bg-stone-100`}>
// 				<NavBar />
// 				{children}
// 				<WhatsAppButton />
// 				<DonationDialog />
// 				<Footer />
// 			</body>
// 		</html>
// 	);
// }

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<head>
				{/* Reemplaza la importación problemática por estas etiquetas <link> */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Hind:wght@300;400;500;600;700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className={`antialiased bg-stone-100`}>
				<NavBar />
				{children}
				<WhatsAppButton />
				<DonationDialog />
				<Footer />
			</body>
		</html>
	);
}
