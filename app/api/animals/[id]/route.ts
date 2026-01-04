import { NextResponse, type NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth-admin';

// Obtener un disca
export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
	const { id } = await context.params;

	const animal = await prisma.animal.findUnique({
		where: { id },
	});

	if (!animal) {
		return NextResponse.json({ error: 'Animal no encontrado' }, { status: 404 });
	}

	return NextResponse.json(animal);
}

// Editar un disca
export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
	const auth = await requireAdmin(req);

	if (!auth.ok) {
		return NextResponse.json({ error: auth.error }, { status: auth.status });
	}

	const { id } = await context.params;
	const body = await req.json();

	const animal = await prisma.animal.update({
		where: { id },
		data: body,
	});

	return NextResponse.json(animal);
}

// Eliminar un disca
export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
	const auth = await requireAdmin(req);

	if (!auth.ok) {
		return NextResponse.json({ error: auth.error }, { status: auth.status });
	}

	const { id } = await context.params;

	await prisma.animal.delete({
		where: { id },
	});

	return NextResponse.json({ ok: true });
}
