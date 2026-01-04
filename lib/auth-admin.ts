import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function requireAdmin(req: NextRequest) {
	const token = await getToken({
		req,
		secret: process.env.AUTH_SECRET,
	});

	if (!token) {
		return { ok: false, status: 401, error: 'No autenticado' };
	}

	if (token.role !== 'admin') {
		return { ok: false, status: 403, error: 'No autorizado' };
	}

	return { ok: true };
}
