'use client';

import { useCallback, useState } from 'react';
import imageCompression from 'browser-image-compression';
import { useUploadThing } from '@/lib/uploadthing';
import { Plus, X, Loader2, Images } from 'lucide-react';
import { toast } from 'sonner';
import Image from 'next/image';

interface Props {
	value: string[];
	onChange: (urls: string[]) => void;
	max?: number;
}


const COMPRESSION = { maxSizeMB: 0.8, maxWidthOrHeight: 1200, useWebWorker: true, fileType: 'image/webp' };

export default function GalleryUploader({ value, onChange, max = 6 }: Props) {
	const [compressing, setCompressing] = useState(false);
	const { startUpload, isUploading } = useUploadThing('galleryUploader');
	const busy = compressing || isUploading;
	const canAdd = value.length < max;

	const upload = useCallback(
		async (files: File[]) => {
			if (!canAdd) return;
			try {
				setCompressing(true);
				const compressed = await Promise.all(
					files.slice(0, max - value.length).map(async (f) => {
						const c = await imageCompression(f, COMPRESSION);
						return new File([c], f.name.replace(/\.[^.]+$/, '.webp'), { type: 'image/webp' });
					}),
				);
				setCompressing(false);
				const result = await startUpload(compressed);
				if (result) {
					onChange([...value, ...result.map((r) => r.ufsUrl)]);
					toast.success(`${result.length} foto${result.length > 1 ? 's' : ''} subida${result.length > 1 ? 's' : ''}`);
				}
			} catch {
				setCompressing(false);
				toast.error('Error al subir las fotos');
			}
		},
		[startUpload, onChange, value, canAdd, max],
	);

	const remove = (index: number) => onChange(value.filter((_, i) => i !== index));

	return (
		<div className="space-y-3">
			{value.length > 0 && (
				<div className="grid grid-cols-3 gap-2">
					{value.map((url, i) => (
						<div key={i} className="relative group aspect-square rounded-lg overflow-hidden border border-gray-200">
							<Image src={url} alt={`Foto ${i + 1}`} fill className="object-cover" />
							<button
								type="button"
								onClick={() => remove(i)}
								className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
							>
								<X className="w-3 h-3" />
							</button>
						</div>
					))}
					{canAdd && !busy && (
						<label className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-teal-400 hover:bg-teal-50/30 transition-colors">
							<Plus className="w-6 h-6 text-gray-400" />
							<input type="file" className="hidden" accept="image/*" multiple onChange={(e) => { const files = Array.from(e.target.files ?? []); if (files.length) upload(files); }} />
						</label>
					)}
					{busy && (
						<div className="aspect-square rounded-lg border-2 border-teal-300 bg-teal-50 flex flex-col items-center justify-center gap-1">
							<Loader2 className="w-5 h-5 text-teal-600 animate-spin" />
							<span className="text-xs text-teal-600">{compressing ? 'Optimizando' : 'Subiendo'}</span>
						</div>
					)}
				</div>
			)}

			{value.length === 0 && (
				<label
					className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-teal-400 hover:bg-teal-50/30 transition-colors"
					onDragOver={(e) => e.preventDefault()}
					onDrop={(e) => { e.preventDefault(); const files = Array.from(e.dataTransfer.files).filter((f) => f.type.startsWith('image/')); if (files.length) upload(files); }}
				>
					{busy ? (
						<div className="flex flex-col items-center gap-2 text-teal-600">
							<Loader2 className="w-6 h-6 animate-spin" />
							<span className="text-sm">{compressing ? 'Optimizando...' : 'Subiendo...'}</span>
						</div>
					) : (
						<div className="flex flex-col items-center gap-1.5 text-gray-400 pointer-events-none">
							<Images className="w-7 h-7" />
							<span className="text-sm font-medium text-gray-600">Subir fotos de galería</span>
							<span className="text-xs">Máximo {max} imágenes</span>
						</div>
					)}
					<input type="file" className="hidden" accept="image/*" multiple disabled={busy} onChange={(e) => { const files = Array.from(e.target.files ?? []); if (files.length) upload(files); }} />
				</label>
			)}

			{value.length > 0 && (
				<p className="text-xs text-gray-500 text-right">{value.length}/{max} fotos</p>
			)}
		</div>
	);
}
