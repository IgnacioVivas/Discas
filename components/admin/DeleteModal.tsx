// components/admin/DeleteModal.tsx
'use client';

import { AlertTriangle, X, PawPrint, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface DeleteModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	animalName: string;
	isLoading?: boolean;
}

export function DeleteModal({ isOpen, onClose, onConfirm, animalName, isLoading = false }: DeleteModalProps) {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Overlay */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
					/>

					{/* Modal */}
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
						<motion.div
							initial={{ scale: 0.9, opacity: 0, y: 20 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.9, opacity: 0, y: 20 }}
							transition={{ type: 'spring', damping: 25 }}
							className="relative w-full max-w-md"
						>
							<div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl blur-xl opacity-20" />

							<div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
								{/* Header */}
								<div className="p-6 text-center">
									<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-full mb-4">
										<AlertTriangle className="w-8 h-8 text-red-600" />
									</div>

									<h3 className="text-2xl font-bold text-gray-800 mb-2">
										¿Eliminar a <span className="text-red-600">{animalName}</span>?
									</h3>

									<p className="text-gray-600 mb-6">
										Esta acción <span className="font-bold text-red-600">no se puede deshacer</span>. El animal será
										eliminado permanentemente del sistema.
									</p>

									<div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-4 mb-6 border border-red-100">
										<div className="flex items-start gap-3">
											<Heart className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
											<div className="text-left">
												<p className="text-sm font-medium text-red-800">Considera:</p>
												<ul className="text-sm text-red-700 mt-1 space-y-1">
													<li>• Se perderán todas las fotos y datos</li>
													<li>• No aparecerá más en el sitio público</li>
													<li>• Los interesados no podrán contactar</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								{/* Footer */}
								<div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row gap-3">
									<Button
										variant="outline"
										onClick={onClose}
										className="flex-1 border-gray-300 hover:bg-gray-100"
										disabled={isLoading}
									>
										<X className="w-4 h-4 mr-2" />
										Cancelar
									</Button>

									<Button
										onClick={onConfirm}
										disabled={isLoading}
										className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
									>
										{isLoading ? (
											<>
												<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
												Eliminando...
											</>
										) : (
											<>
												<AlertTriangle className="w-4 h-4 mr-2" />
												Sí, eliminar
											</>
										)}
									</Button>
								</div>
							</div>
						</motion.div>
					</div>
				</>
			)}
		</AnimatePresence>
	);
}
