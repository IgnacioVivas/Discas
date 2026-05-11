import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

const TIENDA_WA = 'https://wa.me/5493513599984?text=' + encodeURIComponent('Hola! Me interesa ver el catálogo de la Tiendita Discas 🛍️');

function WhatsAppButton() {
	return (
		<div className="fixed bottom-6 right-6 z-50">
			<Link
				href={TIENDA_WA}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Tiendita Discas"
				className="flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors shadow-xl"
			>
				<ShoppingBag className="w-6 h-6 md:w-7 md:h-7 text-white" />
			</Link>
			<span className="absolute -top-7 right-0 text-xs font-semibold text-amber-700 whitespace-nowrap bg-white/90 px-2 py-0.5 rounded-full shadow-sm border border-amber-200">
				Tiendita
			</span>
		</div>
	);
}

export default WhatsAppButton;
