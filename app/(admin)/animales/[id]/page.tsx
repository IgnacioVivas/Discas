'use client';

import { useParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { useAnimal, useUpdateAnimal } from '@/hooks/useAnimals';
import AnimalFormPage from '@/components/admin/AnimalFormPage';
import { AnimalFormData } from '@/types/animal';

export default function EditarAnimalPage() {
	const params = useParams();
	const router = useRouter();
	const id = params.id as string;

	const { data: animal, isLoading } = useAnimal(id);
	const { mutateAsync: update, isPending } = useUpdateAnimal(id);

	const handleSubmit = async (data: AnimalFormData) => {
		try {
			await update(data);
			toast.success('¡Cambios guardados!', {
				description: `${data.nombre} fue actualizado correctamente.`,
			});
			router.push('/dashboard');
		} catch (err) {
			toast.error('No se pudieron guardar los cambios', {
				description: err instanceof Error ? err.message : 'Revisá tu conexión e intentá de nuevo.',
			});
		}
	};

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<Loader2 className="w-10 h-10 animate-spin text-teal-600 mx-auto mb-3" />
					<p className="text-gray-500">Cargando animal...</p>
				</div>
			</div>
		);
	}

	return (
		<AnimalFormPage
			title={`Editar: ${animal?.nombre ?? ''}`}
			subtitle="Actualizá la información del disca"
			initialValues={animal as unknown as AnimalFormData}
			onSubmit={handleSubmit}
			isLoading={isPending}
		/>
	);
}
