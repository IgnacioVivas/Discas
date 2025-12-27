// import Image from 'next/image';
// interface HeaderDosProps {
// 	title: string;
// 	description: string;
// 	image?: string;
// }

// function HeaderDos({ title, description }: HeaderDosProps) {
// 	return (
// 		<div className="h-screen w-full relative flex flex-col mb-32">
// 			{/* <div className="relative w-full h-[500px]"> */}
// 			<Image
// 				src="/image/baners/baner-1.jpg"
// 				alt="banner disca"
// 				fill
// 				className="hidden xl:block object-cover object-center"
// 				priority
// 			/>
// 			<Image
// 				src="/image/varias/varias-4.jpg"
// 				alt="banner disca"
// 				fill
// 				className="xl:hidden object-cover object-center"
// 				priority
// 			/>
// 			<div className="absolute inset-0 bg-teal-950/30"></div>

// 			<div className="px-5 absolute inset-0 flex flex-col items-center justify-center">
// 				<h1 className="font-nunito text-4xl lg:text-6xl font-extrabold text-white drop-shadow-md text-center px-4">
// 					{title}
// 				</h1>
// 				<p className="font-quicksand text-center text-lg lg:text-2xl mt-2 drop-shadow-sm font-semibold text-white">
// 					{description}
// 				</p>
// 			</div>
// 			{/* </div> */}
// 		</div>
// 	);
// }

// export default HeaderDos;

'use client'; // ¡IMPORTANTE! Framer Motion necesita 'use client'

import Image from 'next/image';
import { motion } from 'framer-motion'; // Import correcto

interface HeaderDosProps {
	title: string;
	description: string;
	imageDesktop?: string;
	imageMobile?: string;
}

function HeaderDos({
	title,
	description,
	imageDesktop = '/image/baners/baner-1.jpg',
	imageMobile = '/image/varias/varias-4.jpg',
}: HeaderDosProps) {
	// Divide el título en palabras para animación
	const titleWords = title.split(' ');

	return (
		<div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
			{/* Imagen de fondo responsiva */}
			<div className="absolute inset-0">
				<Image
					src={imageDesktop}
					alt="Banner Discas"
					fill
					className="hidden md:block object-cover object-center"
					priority
					quality={85}
				/>
				<Image
					src={imageMobile}
					alt="Banner Discas"
					fill
					className="md:hidden object-cover object-center"
					priority
					quality={85}
				/>

				{/* Overlay gradiente */}
				<div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 via-teal-800/60 to-transparent" />
				<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
			</div>

			{/* Contenido centrado */}
			<div className="relative h-full flex items-center justify-center">
				<div className="container mx-auto px-4 md:px-8 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto space-y-6"
					>
						{/* Título con efecto */}
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
							{titleWords.map((word, index) => (
								<motion.span
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									className="inline-block mr-2"
								>
									{word}
								</motion.span>
							))}
						</h1>

						{/* Descripción */}
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3 }}
							className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto"
						>
							{description}
						</motion.p>

						{/* Elemento decorativo */}
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.5, type: 'spring' }}
							className="inline-block p-2"
						>
							<div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-amber-400 rounded-full mx-auto" />
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Onda decorativa inferior */}
			<div className="absolute bottom-0 left-0 right-0 h-12">
				<svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
					<path
						d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
						opacity=".25"
						className="fill-white"
					/>
					<path
						d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
						opacity=".5"
						className="fill-white"
					/>
					<path
						d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
						className="fill-white"
					/>
				</svg>
			</div>
		</div>
	);
}

export default HeaderDos;
