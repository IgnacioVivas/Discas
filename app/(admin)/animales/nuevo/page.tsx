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
		await create(data);
		toast.success('¡Disca creado con éxito!');
		router.push('/dashboard');
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
