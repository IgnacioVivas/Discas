import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

export const ourFileRouter = {
	imageUploader: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
		.middleware(() => ({}))
		.onUploadComplete(({ file }) => ({ url: file.ufsUrl })),

	galleryUploader: f({ image: { maxFileSize: '4MB', maxFileCount: 6 } })
		.middleware(() => ({}))
		.onUploadComplete(({ file }) => ({ url: file.ufsUrl })),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
