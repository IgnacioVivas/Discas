import { AnimalFormData } from '@/types/animal';
import { Disca } from '@/interface/interfaces';

const BASE = '/api/animals';

async function handleResponse<T>(res: Response): Promise<T> {
	if (!res.ok) {
		const err = await res.json().catch(() => ({ error: 'Error desconocido' }));
		throw new Error(err.error ?? `HTTP ${res.status}`);
	}
	return res.json();
}

function toPayload(data: AnimalFormData) {
	return {
		...data,
		discapacidad: data.discapacidad?.trim() || null,
		ubicacion: data.ubicacion?.trim() || null,
	};
}

export const animalsService = {
	getAll: (): Promise<Disca[]> =>
		fetch(BASE).then((r) => handleResponse<Disca[]>(r)),

	getById: (id: string): Promise<Disca> =>
		fetch(`${BASE}/${id}`).then((r) => handleResponse<Disca>(r)),

	create: (data: AnimalFormData): Promise<Disca> =>
		fetch(BASE, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(toPayload(data)),
		}).then((r) => handleResponse<Disca>(r)),

	update: (id: string, data: AnimalFormData): Promise<Disca> =>
		fetch(`${BASE}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(toPayload(data)),
		}).then((r) => handleResponse<Disca>(r)),

	patch: (id: string, data: { publicado?: boolean; destacado?: boolean; adoptado?: boolean }): Promise<Disca> =>
		fetch(`${BASE}/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		}).then((r) => handleResponse<Disca>(r)),

	remove: (id: string): Promise<void> =>
		fetch(`${BASE}/${id}`, { method: 'DELETE' }).then((r) => handleResponse<void>(r)),
};
