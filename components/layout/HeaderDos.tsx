'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
				<div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent" />
				<div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
				{/* <div className="absolute inset-0 bg-linear-to-r from-teal-900/70 via-teal-800/60 to-transparent" />
				<div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" /> */}
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
							<div className="w-20 h-1 bg-linear-to-r from-teal-400 to-amber-400 rounded-full mx-auto" />
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default HeaderDos;
