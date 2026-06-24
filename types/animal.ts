import { z } from 'zod';

export const animalSchema = z.object({
	nombre: z.string().min(2, 'Mínimo 2 caracteres').max(50, 'Máximo 50 caracteres'),
	descripcion: z.string().min(10, 'Mínimo 10 caracteres').max(1000, 'Máximo 1000 caracteres'),
	edad: z.number().min(0, 'La edad no puede ser negativa').max(30, 'Edad no válida'),
	genero: z.enum(['macho', 'hembra']),
	tamaño: z.enum(['chico', 'mediano', 'grande']),
	tipo: z.enum(['perro', 'gato', 'otro']),
	discapacidad: z.string().optional(),
	castrado: z.boolean(),
	vacunado: z.boolean(),
	desparasitado: z.boolean(),
	ubicacion: z.string().optional(),
	personalidad: z.array(z.string()),
	requisitosDeAdopcion: z.array(z.string()),
	imagenCard: z.string().min(1, 'Agregá al menos una foto a la galería'),
	fotos: z.array(z.string()),
	publicado: z.boolean(),
	adoptado: z.boolean(),
	fallecido: z.boolean(),
	fechaIngreso: z.string().optional(),
});

export type AnimalFormData = z.infer<typeof animalSchema>;

export const ANIMAL_FORM_DEFAULTS: AnimalFormData = {
	nombre: '',
	descripcion: '',
	edad: 1,
	genero: 'macho',
	tamaño: 'mediano',
	tipo: 'perro',
	discapacidad: '',
	castrado: false,
	vacunado: false,
	desparasitado: false,
	ubicacion: 'Córdoba Capital',
	personalidad: [],
	requisitosDeAdopcion: [],
	imagenCard: '',
	fotos: [],
	publicado: false,
	adoptado: false,
	fallecido: false,
	fechaIngreso: '',
};

export const OPCIONES_PERSONALIDAD = [
	'cariñoso/a', 'juguetón/a', 'tranquilo/a', 'energético/a', 'tímido/a',
	'sociable', 'independiente', 'curioso/a', 'protector/a', 'dócil',
];

export const OPCIONES_REQUISITOS = [
	'patio cercado', 'otras mascotas', 'hogar tranquilo', 'sin escaleras',
	'interior', 'experiencia previa', 'paciencia', 'tiempo para paseos',
	'familia sin niños pequeños', 'familia con niños',
];
