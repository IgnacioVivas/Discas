'use client';
import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

export default function PhotoGallery({ photos, name }: { photos: string[]; name: string }) {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	return (
		<div className="space-y-4">
			{/* Imagen principal */}
			<div
				className="relative h-64 md:h-[30rem] rounded-lg overflow-hidden cursor-zoom-in"
				onClick={() => {
					setLightboxIndex(0);
					setLightboxOpen(true);
				}}
			>
				<Image src={photos[0]} alt={`${name} - Foto principal`} fill className="object-cover" priority />
			</div>

			{/* Thumbnails (estilo e-commerce) */}
			<div className="grid grid-cols-4 gap-2">
				{photos.map((photo, index) => (
					<div
						key={index}
						className={`relative h-20 rounded-md overflow-hidden cursor-pointer border-2 ${
							index === 0 ? 'border-custom-red' : 'border-transparent'
						}`}
						onClick={() => {
							setLightboxIndex(index);
							setLightboxOpen(true);
						}}
					>
						<Image src={photo} alt={`${name} - Thumbnail ${index + 1}`} fill className="object-cover" />
					</div>
				))}
			</div>

			{/* Lightbox con Thumbnails */}
			<Lightbox
				open={lightboxOpen}
				close={() => setLightboxOpen(false)}
				index={lightboxIndex}
				slides={photos.map((photo) => ({ src: photo }))}
				plugins={[Thumbnails]}
				thumbnails={{
					position: 'bottom',
					width: 80,
					height: 60,
					border: 1,
					borderRadius: 4,
					padding: 4,
					gap: 16,
				}}
				animation={{ fade: 300 }}
				controller={{ closeOnBackdropClick: true }}
			/>
		</div>
	);
}
