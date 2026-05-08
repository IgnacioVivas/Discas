import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { animalsService } from '@/services/animals';
import { AnimalFormData } from '@/types/animal';
import { Disca } from '@/interface/interfaces';

export const ANIMALS_KEY = ['animals'] as const;
export const animalKey = (id: string) => ['animals', id] as const;

export function useAnimals() {
	return useQuery({
		queryKey: ANIMALS_KEY,
		queryFn: animalsService.getAll,
	});
}

export function useAnimal(id: string) {
	return useQuery({
		queryKey: animalKey(id),
		queryFn: () => animalsService.getById(id),
		enabled: !!id,
	});
}

export function useCreateAnimal() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: animalsService.create,
		onSuccess: () => qc.invalidateQueries({ queryKey: ANIMALS_KEY }),
	});
}

export function useUpdateAnimal(id: string) {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (data: AnimalFormData) => animalsService.update(id, data),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ANIMALS_KEY });
			qc.invalidateQueries({ queryKey: animalKey(id) });
		},
	});
}

export function usePatchAnimal() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({ id, data }: { id: string; data: { publicado?: boolean; adoptado?: boolean; fallecido?: boolean } }) =>
			animalsService.patch(id, data),
		onMutate: async ({ id, data }) => {
			await qc.cancelQueries({ queryKey: ANIMALS_KEY });
			const previous = qc.getQueryData<Disca[]>(ANIMALS_KEY);
			qc.setQueryData<Disca[]>(ANIMALS_KEY, (old) =>
				old?.map((a) => (a.id === id ? { ...a, ...data } : a)),
			);
			return { previous };
		},
		onError: (_err, _vars, ctx) => {
			if (ctx?.previous) qc.setQueryData(ANIMALS_KEY, ctx.previous);
		},
		onSettled: () => qc.invalidateQueries({ queryKey: ANIMALS_KEY }),
	});
}

export function useDeleteAnimal() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: animalsService.remove,
		onSuccess: () => qc.invalidateQueries({ queryKey: ANIMALS_KEY }),
	});
}
