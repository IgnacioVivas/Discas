import { requireAdmin } from '@/lib/auth-admin';
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// Obtener todos los discas
export async function GET() {
	const animals = await prisma.animal.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	});

	return NextResponse.json(animals);
}

// Crear un disca
export async function POST(req: NextRequest) {
	const auth = await requireAdmin(req);

	if (!auth.ok) {
		return NextResponse.json({ error: auth.error }, { status: auth.status });
	}

	const body = await req.json();

	const animal = await prisma.animal.create({
		data: {
			nombre: body.nombre,
			descripcion: body.descripcion,
			edad: body.edad,
			genero: body.genero,
			tamaño: body.tamaño,
			tipo: body.tipo,

			discapacidad: body.discapacidad ?? null,
			ubicacion: body.ubicacion ?? null,

			castrado: body.castrado ?? false,
			vacunado: body.vacunado ?? false,
			desparasitado: body.desparasitado ?? false,

			personalidad: body.personalidad ?? [],
			requisitosDeAdopcion: body.requisitosDeAdopcion ?? [],

			imagenCard: body.imagenCard,
			fotos: body.fotos ?? [],

			publicado: body.publicado ?? false,
			destacado: body.destacado ?? false,
		},
	});

	return NextResponse.json(animal, { status: 201 });
}
