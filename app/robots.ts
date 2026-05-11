import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/dashboard', '/animales/'],
			},
		],
		sitemap: 'https://discas.com.ar/sitemap.xml',
	};
}
