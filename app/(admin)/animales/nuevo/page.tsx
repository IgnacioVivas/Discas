'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useCreateAnimal } from '@/hooks/useAnimals';
import AnimalFormPage from '@/components/admin/AnimalFormPage';
import { AnimalFormData } from '@/types/animal';

export default function NuevoAnimalPage() {
	const router = useRouter();
	const { mutateAsync: create, isPending } = useCreateAnimal();

	const handleSubmit = async (data: AnimalFormData) => {
		try {
			await create(data);
			toast.success('¡Disca creado con éxito!', {
				description: 'Ya está disponible en el sistema.',
			});
			router.push('/dashboard');
		} catch (err) {
			toast.error('No se pudo crear el disca', {
				description: err instanceof Error ? err.message : 'Revisá tu conexión e intentá de nuevo.',
			});
		}
	};

	return (
		<AnimalFormPage
			title="Nuevo Disca"
			subtitle="Agrega un nuevo peludito a la fundación"
			onSubmit={handleSubmit}
			isLoading={isPending}
		/>
	);
}
