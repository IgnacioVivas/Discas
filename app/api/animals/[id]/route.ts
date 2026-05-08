import { NextResponse, type NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth-admin';
import { UTApi } from 'uploadthing/server';

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
	try {
		const { id } = await context.params;
		const animal = await prisma.animal.findUnique({ where: { id } });
		if (!animal) return NextResponse.json({ error: 'Animal no encontrado' }, { status: 404 });
		return NextResponse.json(animal);
	} catch (err) {
		console.error('[GET /api/animals/:id]', err);
		return NextResponse.json({ error: 'Error al obtener el animal' }, { status: 500 });
	}
}

export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
	try {
		const auth = await requireAdmin(req);
		if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });

		const { id } = await context.params;
		const body = await req.json();

		const existing = await prisma.animal.findUnique({ where: { id } });

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
				adoptado: body.adoptado ?? false,
				fallecido: body.fallecido ?? false,
			},
		});

		if (existing) {
			const newUrls = new Set([body.imagenCard, ...(body.fotos ?? [])].filter(Boolean));
			const oldUrls = [existing.imagenCard, ...existing.fotos].filter(Boolean) as string[];
			const orphanedKeys = oldUrls
				.filter((url) => !newUrls.has(url))
				.map(extractUtKey)
				.filter(Boolean) as string[];
			if (orphanedKeys.length > 0) {
				const utapi = new UTApi();
				await utapi.deleteFiles(orphanedKeys);
			}
		}

		return NextResponse.json(animal);
	} catch (err) {
		console.error('[PUT /api/animals/:id]', err);
		return NextResponse.json({ error: 'Error al actualizar el animal' }, { status: 500 });
	}
}

export async function PATCH(req: NextRequest, context: { params: Promise<{ id: string }> }) {
	try {
		const auth = await requireAdmin(req);
		if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });

		const { id } = await context.params;
		const body = await req.json();

		const allowed: { publicado?: boolean; adoptado?: boolean; fallecido?: boolean } = {};
		if (typeof body.publicado === 'boolean') allowed.publicado = body.publicado;
		if (typeof body.adoptado === 'boolean') allowed.adoptado = body.adoptado;
		if (typeof body.fallecido === 'boolean') allowed.fallecido = body.fallecido;

		if (Object.keys(allowed).length === 0) {
			return NextResponse.json({ error: 'No hay campos válidos para actualizar' }, { status: 400 });
		}

		const animal = await prisma.animal.update({ where: { id }, data: allowed });
		return NextResponse.json(animal);
	} catch (err) {
		console.error('[PATCH /api/animals/:id]', err);
		return NextResponse.json({ error: 'Error al actualizar el animal' }, { status: 500 });
	}
}

function extractUtKey(url: string): string | null {
	try {
		const match = url.match(/\/f\/([^/?#]+)/);
		return match ? match[1] : null;
	} catch {
		return null;
	}
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
	try {
		const auth = await requireAdmin(req);
		if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });

		const { id } = await context.params;

		const animal = await prisma.animal.findUnique({ where: { id } });
		if (animal) {
			const urls = [animal.imagenCard, ...animal.fotos].filter(Boolean) as string[];
			const keys = urls.map(extractUtKey).filter(Boolean) as string[];
			if (keys.length > 0) {
				const utapi = new UTApi();
				await utapi.deleteFiles(keys);
			}
		}

		await prisma.animal.delete({ where: { id } });
		return NextResponse.json({ ok: true });
	} catch (err) {
		console.error('[DELETE /api/animals/:id]', err);
		return NextResponse.json({ error: 'Error al eliminar el animal' }, { status: 500 });
	}
}
