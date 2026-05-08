import { NextResponse, type NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth-admin';

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
	try {
		const { id } = await context.params;
		const animal = await prisma.animal.findUnique({ where: { id } });
		if (!animal) return NextResponse.json({ error: 'Animal no encontrado' }, { status: 404 });
		return NextResponse.json(animal);
	} catch {
		return NextResponse.json({ error: 'Error al obtener el animal' }, { status: 500 });
	}
}

export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
	try {
		const auth = await requireAdmin(req);
		if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });

		const { id } = await context.params;
		const body = await req.json();

		const animal = await prisma.animal.update({
			where: { id },
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

		return NextResponse.json(animal);
	} catch {
		return NextResponse.json({ error: 'Error al actualizar el animal' }, { status: 500 });
	}
}

export async function PATCH(req: NextRequest, context: { params: Promise<{ id: string }> }) {
	try {
		const auth = await requireAdmin(req);
		if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });

		const { id } = await context.params;
		const body = await req.json();

		const allowed: { publicado?: boolean; destacado?: boolean; adoptado?: boolean; fallecido?: boolean } = {};
		if (typeof body.publicado === 'boolean') allowed.publicado = body.publicado;
		if (typeof body.destacado === 'boolean') allowed.destacado = body.destacado;
		if (typeof body.adoptado === 'boolean') allowed.adoptado = body.adoptado;
		if (typeof body.fallecido === 'boolean') allowed.fallecido = body.fallecido;

		if (Object.keys(allowed).length === 0) {
			return NextResponse.json({ error: 'No hay campos válidos para actualizar' }, { status: 400 });
		}

		const animal = await prisma.animal.update({ where: { id }, data: allowed });
		return NextResponse.json(animal);
	} catch {
		return NextResponse.json({ error: 'Error al actualizar el animal' }, { status: 500 });
	}
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
	try {
		const auth = await requireAdmin(req);
		if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });

		const { id } = await context.params;
		await prisma.animal.delete({ where: { id } });
		return NextResponse.json({ ok: true });
	} catch {
		return NextResponse.json({ error: 'Error al eliminar el animal' }, { status: 500 });
	}
}
