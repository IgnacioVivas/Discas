'use client';

import { useEffect, useState } from 'react';
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogCancel,
	AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Heart } from 'lucide-react';

function DonationDialog() {
	const [isOpen, setIsOpen] = useState(false);

	// Abrir automáticamente después de 1 minuto
	useEffect(() => {
		const timer = setTimeout(() => {
			// ⚠️ Descomentar para evitar mostrarlo más de una vez
			const hasSeenDialog = localStorage.getItem('donationDialogShown');
			if (!hasSeenDialog) {
				setIsOpen(true);
				localStorage.setItem('donationDialogShown', 'true');
			}
		}, 60 * 1000); // 1 minuto (para pruebas podés poner 1000)

		return () => clearTimeout(timer);
	}, []);

	// ⌨️ Forzar apertura con tecla "d" (modo desarrollo)
	// useEffect(() => {
	// 	const handleKey = (e: KeyboardEvent) => {
	// 		if (e.key === 'd') setIsOpen(true);
	// 	};
	// 	window.addEventListener('keydown', handleKey);
	// 	return () => window.removeEventListener('keydown', handleKey);
	// }, []);

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogContent className="max-w-xs md:max-w-md">
				<AlertDialogHeader>
					<div className="flex items-center gap-2">
						<Heart className="w-6 h-6 text-red-500 fill-red-500" />
						<AlertDialogTitle>¡Marca la diferencia!</AlertDialogTitle>
					</div>
					<AlertDialogDescription className="mt-2">
						Con una donación de <span className="font-bold">$1.000</span>, ayudas a un Disca a tener una vida mejor.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Hoy no</AlertDialogCancel>
					<AlertDialogAction
						className="bg-teal-400 hover:bg-teal-400/80"
						onClick={() => (window.location.href = '/donaciones')}
					>
						Donar ahora
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}

export default DonationDialog;
