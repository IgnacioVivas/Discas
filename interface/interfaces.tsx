export interface Disca {
	id: string;
	nombre: string;
	edad: number;
	genero: 'Macho' | 'Hembra';
	tamaño: 'Pequeño' | 'Mediano' | 'Grande';
	castrado: 'No castrado' | 'Castrado';
	descripcion: string;
	personalidad: string[];
	salud: string[];
	alimentacion: string;
	requisitosDeAdopcion: string[];
	imagenCard: string;
	fotos: string[];
	estado: 'Disponible' | 'Adoptado' | 'En proceso';
	ubicacion: string;
	publicadoEn: Date;
}
