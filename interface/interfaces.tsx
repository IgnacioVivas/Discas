export interface Disca {
	id: string;
	nombre: string;
	raza: string;
	edad: number;
	genero: 'Macho' | 'Hembra';
	tamaño: 'Pequeño' | 'Mediano' | 'Grande';
	descripcion: string;
	personalidad: string[];
	salud: string[];
	requisitosDeAdopcion: string[];
	imagenCard: string;
	fotos: string[];
	estado: 'Disponible' | 'Adoptado' | 'En proceso';
	ubicacion: string;
	publicadoEn: Date;
}
