import type { MetadataRoute } from 'next';

const SITE_URL = 'https://discas.com.ar';

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();

	return [
		{
			url: SITE_URL,
			lastModified: now,
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: `${SITE_URL}/adopta`,
			lastModified: now,
			changeFrequency: 'daily',
			priority: 0.9,
		},
		{
			url: `${SITE_URL}/conocenos`,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${SITE_URL}/donaciones`,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${SITE_URL}/participa`,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${SITE_URL}/informate`,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${SITE_URL}/denuncia`,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.6,
		},
		{
			url: `${SITE_URL}/contacto`,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.6,
		},
	];
}
