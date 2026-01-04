import { useState, useEffect, useCallback } from 'react';
import { Disca } from '@/interface/interfaces';
import { datosDiscas } from '@/data/discas';

export function useAnimalFilter(limit?: number, randomize?: boolean) {
	const [filter, setFilter] = useState<'todos' | 'perros' | 'gatos'>('todos');
	const [displayedAnimals, setDisplayedAnimals] = useState<Disca[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	// Función para detectar tipo con useCallback para evitar recreaciones
	const detectAnimalType = useCallback((animal: Disca): 'perro' | 'gato' => {
		if (!animal) return 'perro';

		const lowerNombre = animal.nombre?.toLowerCase() || '';
		const lowerDesc = animal.descripcion?.toLowerCase() || '';

		if (animal.tipo) {
			return animal.tipo;
		}

		if (
			lowerDesc.includes('perro') ||
			lowerDesc.includes('canino') ||
			lowerDesc.includes('can') ||
			lowerNombre.includes('perro')
		) {
			return 'perro';
		}
		return 'gato';
	}, []);

	useEffect(() => {
		setIsLoading(true);

		// Usa datosDiscas directamente
		const allData = datosDiscas || [];

		let filtered = [...allData];

		if (filter === 'perros') {
			filtered = allData.filter((animal) => detectAnimalType(animal) === 'perro');
		} else if (filter === 'gatos') {
			filtered = allData.filter((animal) => detectAnimalType(animal) === 'gato');
		}

		// Aplicar randomización si se solicita
		let result = filtered;
		if (randomize) {
			result = [...filtered].sort(() => 0.5 - Math.random());
		}

		// Aplicar límite si se especifica
		if (limit && limit > 0) {
			result = result.slice(0, limit);
		}

		setDisplayedAnimals(result);

		const timer = setTimeout(() => setIsLoading(false), 300);
		return () => clearTimeout(timer);
	}, [filter, limit, randomize, detectAnimalType]);

	// Contadores
	const totalPerros = datosDiscas.filter((a) => detectAnimalType(a) === 'perro').length;
	const totalGatos = datosDiscas.filter((a) => detectAnimalType(a) === 'gato').length;

	return {
		filter,
		setFilter,
		displayedAnimals,
		isLoading,
		detectAnimalType,
		totalPerros,
		totalGatos,
		totalAnimals: datosDiscas.length,
		allAnimals: datosDiscas,
	};
}
