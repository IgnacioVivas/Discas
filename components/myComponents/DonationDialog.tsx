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

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		const hasSeenDialog = localStorage.getItem('donationDialogShown');
	// 		if (!hasSeenDialog) {
	// 			setIsOpen(true);
	// 			localStorage.setItem('donationDialogShown', 'true');
	// 		}
	// 	}, 500); // 1 minuto 60000

	// 	return () => clearTimeout(timer);
	// }, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			// Comenta esta línea para pruebas:
			// const hasSeenDialog = localStorage.getItem('donationDialogShown');
			// if (!hasSeenDialog) {
			setIsOpen(true);
			// localStorage.setItem('donationDialogShown', 'true');
			// }
		}, 1000); // Cambia a 1 segundo para pruebas rápidas

		return () => clearTimeout(timer);
	}, []);

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogContent className="max-w-md">
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
						className="bg-green-600 hover:bg-green-700"
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
