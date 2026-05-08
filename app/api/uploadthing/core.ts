import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

const f = createUploadthing();

async function requireAdminToken(req: Request) {
	const token = await getToken({ req: req as unknown as NextRequest, secret: process.env.AUTH_SECRET });
	if (!token || token.role !== 'admin') throw new Error('No autorizado');
	return { userId: token.id as string };
}

export const ourFileRouter = {
	imageUploader: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
		.middleware(({ req }) => requireAdminToken(req))
		.onUploadComplete(({ file }) => ({ url: file.ufsUrl })),

	galleryUploader: f({ image: { maxFileSize: '4MB', maxFileCount: 6 } })
		.middleware(({ req }) => requireAdminToken(req))
		.onUploadComplete(({ file }) => ({ url: file.ufsUrl })),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
