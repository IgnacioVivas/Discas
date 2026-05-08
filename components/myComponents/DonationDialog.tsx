'use client';

import { useEffect, useState } from 'react';
import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog';
import { Heart, PawPrint, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

function DonationDialog() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (!localStorage.getItem('donationDialogShown')) {
				setIsOpen(true);
				localStorage.setItem('donationDialogShown', 'true');
			}
		}, 60 * 1000);
		return () => clearTimeout(timer);
	}, []);

	const handleDonate = () => {
		setIsOpen(false);
		window.location.href = '/donaciones';
	};

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogContent className="bg-white border-0 shadow-2xl rounded-2xl overflow-hidden p-0 max-w-sm w-full">
				<div className="relative bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 px-6 pt-8 pb-10 text-white text-center">
					<button
						onClick={() => setIsOpen(false)}
						className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
					>
						<X className="w-4 h-4 text-white" />
					</button>
					<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-white/10">
						<PawPrint className="w-8 h-8 text-white" />
					</div>
					<h2 className="text-2xl font-bold mb-1">¡Hacé la diferencia!</h2>
					<p className="text-teal-100 text-sm">Tu ayuda transforma vidas especiales</p>
					<div className="absolute -bottom-5 left-0 right-0 h-10 bg-white rounded-t-[2rem]" />
				</div>

				<div className="px-6 pt-8 pb-7 text-center">
					<p className="text-gray-500 text-sm mb-1">Con solo</p>
					<p className="text-5xl font-bold text-teal-700 mb-1">$1.000</p>
					<p className="text-gray-500 text-sm mb-6">
						ayudás a un Disca a tener una vida mejor
					</p>

					<div className="flex flex-wrap gap-2 justify-center mb-6 text-xs text-gray-400">
						{['Alimento', 'Veterinaria', 'Medicamentos'].map((item) => (
							<span key={item} className="flex items-center gap-1 bg-teal-50 text-teal-700 px-3 py-1 rounded-full font-medium">
								<Heart className="w-3 h-3 fill-teal-400 text-teal-400" />{item}
							</span>
						))}
					</div>

					<Button
						onClick={handleDonate}
						className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-5 rounded-xl shadow-md mb-3"
					>
						<Heart className="w-4 h-4 mr-2 fill-white" />
						Donar ahora
					</Button>
					<button
						onClick={() => setIsOpen(false)}
						className="w-full text-sm text-gray-400 hover:text-gray-600 transition-colors py-1"
					>
						Hoy no, gracias
					</button>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	);
}

export default DonationDialog;
