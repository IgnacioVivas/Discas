import { useState, useMemo, useCallback } from 'react';
import { useAnimals } from '@/hooks/useAnimals';
import { Disca } from '@/interface/interfaces';

export function useAnimalFilter(limit?: number, randomize?: boolean) {
	const { data: allAnimals = [], isLoading } = useAnimals();
	const [filter, setFilter] = useState<'todos' | 'perros' | 'gatos'>('todos');

	const detectAnimalType = useCallback((animal: Disca): 'perro' | 'gato' | 'otro' => {
		return animal.tipo ?? 'gato';
	}, []);

	const shuffled = useMemo(() => {
		if (!randomize) return allAnimals;
		return [...allAnimals].sort(() => 0.5 - Math.random());
	}, [allAnimals, randomize]);

	const displayedAnimals = useMemo(() => {
		let result = shuffled;
		if (filter === 'perros') result = result.filter((a) => detectAnimalType(a) === 'perro');
		if (filter === 'gatos') result = result.filter((a) => detectAnimalType(a) === 'gato');
		if (limit && limit > 0) result = result.slice(0, limit);
		return result;
	}, [shuffled, filter, limit, detectAnimalType]);

	const totalPerros = useMemo(() => allAnimals.filter((a) => detectAnimalType(a) === 'perro').length, [allAnimals, detectAnimalType]);
	const totalGatos = useMemo(() => allAnimals.filter((a) => detectAnimalType(a) === 'gato').length, [allAnimals, detectAnimalType]);

	return {
		filter,
		setFilter,
		displayedAnimals,
		isLoading,
		detectAnimalType,
		totalPerros,
		totalGatos,
		totalAnimals: allAnimals.length,
		allAnimals,
	};
}
