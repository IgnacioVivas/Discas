'use client';

import { useCallback, useState } from 'react';
import imageCompression from 'browser-image-compression';
import { useUploadThing } from '@/lib/uploadthing';
import { Upload, X, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import Image from 'next/image';

interface Props {
	value: string;
	onChange: (url: string) => void;
}

const COMPRESSION = { maxSizeMB: 0.8, maxWidthOrHeight: 1200, useWebWorker: true, fileType: 'image/webp' };

export default function ImageUploader({ value, onChange }: Props) {
	const [compressing, setCompressing] = useState(false);
	const { startUpload, isUploading } = useUploadThing('imageUploader');
	const busy = compressing || isUploading;

	const upload = useCallback(
		async (file: File) => {
			try {
				setCompressing(true);
				const compressed = await imageCompression(file, COMPRESSION);
				setCompressing(false);
				const result = await startUpload([new File([compressed], file.name.replace(/\.[^.]+$/, '.webp'), { type: 'image/webp' })]);
				if (result?.[0]?.ufsUrl) {
					onChange(result[0].ufsUrl);
					toast.success('Imagen subida correctamente');
				}
			} catch {
				setCompressing(false);
				toast.error('Error al subir la imagen');
			}
		},
		[startUpload, onChange],
	);

	if (value) {
		return (
			<div className="relative group w-full h-48 rounded-xl overflow-hidden border border-gray-200">
				<Image src={value} alt="Imagen principal" fill className="object-cover" />
				<button
					type="button"
					onClick={() => onChange('')}
					className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow"
				>
					<X className="w-3.5 h-3.5" />
				</button>
			</div>
		);
	}

	return (
		<label
			className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-teal-400 hover:bg-teal-50/30 transition-colors"
			onDragOver={(e) => e.preventDefault()}
			onDrop={(e) => {
				e.preventDefault();
				const file = e.dataTransfer.files[0];
				if (file?.type.startsWith('image/')) upload(file);
			}}
		>
			{busy ? (
				<div className="flex flex-col items-center gap-2 text-teal-600">
					<Loader2 className="w-7 h-7 animate-spin" />
					<span className="text-sm">{compressing ? 'Optimizando...' : 'Subiendo...'}</span>
				</div>
			) : (
				<div className="flex flex-col items-center gap-1.5 text-gray-400 pointer-events-none">
					<Upload className="w-7 h-7" />
					<span className="text-sm font-medium text-gray-600">Subir imagen</span>
					<span className="text-xs">JPG, PNG, WebP — se optimiza automáticamente</span>
				</div>
			)}
			<input type="file" className="hidden" accept="image/*" disabled={busy} onChange={(e) => { const f = e.target.files?.[0]; if (f) upload(f); }} />
		</label>
	);
}
