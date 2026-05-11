import type { Metadata } from 'next';
import './globals.css';
import QueryProvider from '@/providers/QueryProvider';

const SITE_URL = 'https://discas.com.ar';

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: 'Discas | Rescate y Adopción de Animales con Discapacidad en Córdoba',
		template: '%s | Discas Córdoba',
	},
	description:
		'Fundación Discas rescata y cuida animales con discapacidad en Córdoba, Argentina desde 2015. Adoptá un perro o gato especial, hacete padrino/madrina o donante. ¡Cada patita cuenta!',
	keywords: [
		'discas', 'fundación discas', 'discas córdoba', 'animales con discapacidad',
		'adoptar perro discapacitado', 'adoptar gato discapacitado', 'perros en silla de ruedas',
		'rescate animal córdoba', 'adopción responsable córdoba', 'animales especiales adopción',
		'voluntariado animal córdoba', 'donar animales córdoba', 'hogar de tránsito córdoba',
		'gatos ciegos adopción', 'perros tres patas', 'animales especiales argentina',
	],
	authors: [{ name: 'Fundación Discas', url: SITE_URL }],
	creator: 'Fundación Discas',
	publisher: 'Fundación Discas',
	alternates: { canonical: SITE_URL },
	openGraph: {
		type: 'website',
		locale: 'es_AR',
		url: SITE_URL,
		siteName: 'Discas - Animales con Discapacidad',
		title: 'Discas | Rescate y Adopción de Animales con Discapacidad en Córdoba',
		description:
			'Rescatamos y cuidamos animales con discapacidad en Córdoba desde 2015. Adoptá, doná o hacete padrino/madrina. ¡Tu amor puede cambiar una vida!',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Discas | Animales con Discapacidad en Córdoba',
		description: 'Rescatamos animales con discapacidad en Córdoba. Adoptá, doná o sé voluntario.',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
	},
	verification: {
		google: 'mrpnJyCVxXNAWlamxBk5MEQfNFGvRhGvKdx2iN_suEM',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Hind:wght@300;400;500;600;700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&display=swap"
					rel="stylesheet"
				/>
			</head>

			<body className="antialiased bg-linear-to-b from-white via-teal-50/30 to-amber-50/30">
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'NGO',
							name: 'Fundación Discas',
							alternateName: 'Discas',
							url: SITE_URL,
							logo: `${SITE_URL}/image/LOGO DISCAS.png`,
							description: 'Fundación sin fines de lucro que rescata y cuida animales con discapacidad en Córdoba, Argentina desde 2015.',
							foundingDate: '2015',
							address: {
								'@type': 'PostalAddress',
								addressLocality: 'Córdoba Capital',
								addressRegion: 'Córdoba',
								addressCountry: 'AR',
							},
							contactPoint: {
								'@type': 'ContactPoint',
								email: 'discasrodandoporlavida@gmail.com',
								contactType: 'customer support',
								availableLanguage: 'Spanish',
							},
							sameAs: [
								'https://www.instagram.com/discascordoba/',
								'https://www.facebook.com/discas.rodandoporlavida',
								'https://www.tiktok.com/@discasrodandoporlavida',
							],
						}),
					}}
				/>
				<QueryProvider>
					<main className="min-h-screen">{children}</main>
				</QueryProvider>
			</body>
		</html>
	);
}
