import { getToken } from 'next-auth/jwt';
import { requireAdmin } from '@/lib/auth-admin';
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	try {
		const token = await getToken({ req, secret: process.env.AUTH_SECRET });
		const isAdmin = token?.role === 'admin';

		const animals = await prisma.animal.findMany({
			where: isAdmin ? undefined : { publicado: true, fallecido: false },
			orderBy: { createdAt: 'desc' },
		});

		return NextResponse.json(animals);
	} catch {
		return NextResponse.json({ error: 'Error al obtener animales' }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const auth = await requireAdmin(req);
		if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });

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
				fallecido: body.fallecido ?? false,
			},
		});

		return NextResponse.json(animal, { status: 201 });
	} catch {
		return NextResponse.json({ error: 'Error al crear animal' }, { status: 500 });
	}
}
