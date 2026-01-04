import { requireAdmin } from '@/lib/auth-admin';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

type Params = {
	params: {
		id: string;
	};
};

// Obtener un disca
export async function GET(_: Request, { params }: Params) {
	const animal = await prisma.animal.findUnique({
		where: { id: params.id },
	});

	if (!animal) {
		return NextResponse.json({ error: 'Animal no encontrado' }, { status: 404 });
	}

	return NextResponse.json(animal);
}

// Editar un disca
export async function PUT(req: Request, { params }: Params) {
	const auth = await requireAdmin(req as any);

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
export async function DELETE(_: Request, { params }: Params) {
	const auth = await requireAdmin(_ as any);

	if (!auth.ok) {
		return NextResponse.json({ error: auth.error }, { status: auth.status });
	}

	await prisma.animal.delete({
		where: { id: params.id },
	});

	return NextResponse.json({ ok: true });
}
