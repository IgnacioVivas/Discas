// export interface Disca {
// 	id: string;
// 	nombre: string;
// 	edad: number;
// 	genero: 'Macho' | 'Hembra';
// 	tamaño: 'Pequeño' | 'Mediano' | 'Grande';
// 	castrado: 'No castrado' | 'Castrado';
// 	descripcion: string;
// 	personalidad: string[];
// 	salud: string[];
// 	alimentacion: string;
// 	requisitosDeAdopcion: string[];
// 	imagenCard: string;
// 	fotos: string[];
// 	estado: 'Disponible' | 'Adoptado' | 'En proceso';
// 	ubicacion: string;
// 	publicadoEn: Date;
// }

export interface Disca {
	id: string;
	nombre: string;
	descripcion: string;
	imagenCard: string;
	edad: number;
	genero: string;
	tamaño: string;
	castrado: boolean;
	personalidad: string[];
	requisitosDeAdopcion: string[];
	fotos: string[];
	// Añade estas propiedades si quieres
	tipo?: 'perro' | 'gato';
	discapacidad?: string;
	ubicacion?: string;
}
