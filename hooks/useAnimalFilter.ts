import { useState, useMemo, useCallback } from 'react';
import { useAnimals } from '@/hooks/useAnimals';
import { Disca } from '@/interface/interfaces';

export function useAnimalFilter(limit?: number, randomize?: boolean) {
	const { data: allAnimals = [], isLoading } = useAnimals();
	const [filter, setFilter] = useState<'todos' | 'perros' | 'gatos'>('todos');

	const detectAnimalType = useCallback((animal: Disca): 'perro' | 'gato' | 'otro' => {
		return animal.tipo ?? 'gato';
	}, []);

	const publicAnimals = useMemo(
		() => allAnimals.filter((a) => a.publicado && !a.fallecido && !a.adoptado),
		[allAnimals],
	);

	const shuffled = useMemo(() => {
		if (!randomize) return publicAnimals;
		return [...publicAnimals].sort(() => 0.5 - Math.random());
	}, [publicAnimals, randomize]);

	const displayedAnimals = useMemo(() => {
		let result = shuffled;
		if (filter === 'perros') result = result.filter((a) => detectAnimalType(a) === 'perro');
		if (filter === 'gatos') result = result.filter((a) => detectAnimalType(a) === 'gato');
		if (limit && limit > 0) result = result.slice(0, limit);
		return result;
	}, [shuffled, filter, limit, detectAnimalType]);

	const totalPerros = useMemo(() => publicAnimals.filter((a) => detectAnimalType(a) === 'perro').length, [publicAnimals, detectAnimalType]);
	const totalGatos = useMemo(() => publicAnimals.filter((a) => detectAnimalType(a) === 'gato').length, [publicAnimals, detectAnimalType]);

	return {
		filter,
		setFilter,
		displayedAnimals,
		isLoading,
		detectAnimalType,
		totalPerros,
		totalGatos,
		totalAnimals: publicAnimals.length,
		allAnimals,
	};
}
