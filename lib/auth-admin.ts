import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

export async function requireAdmin(req: NextRequest) {
	const token = await getToken({
		req,
		secret: process.env.AUTH_SECRET,
	});

	if (!token) {
		return { ok: false, error: 'No autenticado', status: 401 };
	}

	if (token.role !== 'admin') {
		return { ok: false, error: 'No autorizado', status: 403 };
	}

	return { ok: true, token };
}
