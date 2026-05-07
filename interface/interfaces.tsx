export interface Disca {
	id: string;
	nombre: string;
	descripcion: string;
	imagenCard: string;
	fotos: string[];
	edad: number;
	genero: string;
	tamaño: string;
	tipo: 'perro' | 'gato';
	castrado: boolean;
	vacunado: boolean;
	desparasitado: boolean;
	discapacidad?: string | null;
	ubicacion?: string | null;
	personalidad: string[];
	requisitosDeAdopcion: string[];
	publicado: boolean;
	destacado: boolean;
	adoptado: boolean;
	createdAt: string;
	updatedAt: string;
}
