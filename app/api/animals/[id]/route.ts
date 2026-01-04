import { NextResponse, type NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth-admin';

// Obtener un disca
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
	const animal = await prisma.animal.findUnique({
		where: { id: params.id },
	});

	if (!animal) {
		return NextResponse.json({ error: 'Animal no encontrado' }, { status: 404 });
	}

	return NextResponse.json(animal);
}

// Editar un disca
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
	const auth = await requireAdmin(req);

	if (!auth.ok) {
		return NextResponse.json({ error: auth.error }, { status: auth.status });
	}

	const body = await req.json();

	const animal = await prisma.animal.update({
		where: { id: params.id },
		data: body,
	});

	return NextResponse.json(animal);
}

// Eliminar un disca
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
	const auth = await requireAdmin(req);

	if (!auth.ok) {
		return NextResponse.json({ error: auth.error }, { status: auth.status });
	}

	await prisma.animal.delete({
		where: { id: params.id },
	});

	return NextResponse.json({ ok: true });
}
