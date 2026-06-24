export interface Disca {
	id: string;
	nombre: string;
	descripcion: string;
	imagenCard: string;
	fotos: string[];
	edad: number;
	genero: string;
	tamaño: string;
	tipo: 'perro' | 'gato' | 'otro';
	castrado: boolean;
	vacunado: boolean;
	desparasitado: boolean;
	discapacidad?: string | null;
	ubicacion?: string | null;
	personalidad: string[];
	requisitosDeAdopcion: string[];
	publicado: boolean;
	adoptado: boolean;
	fallecido: boolean;
	fechaIngreso?: string | null;
	createdAt: string;
	updatedAt: string;
}
