import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://www.nestrecovery.me',
			lastModified: new Date(),
		},
		{
			url: 'https://www.nestrecovery.me/about',
			lastModified: new Date(),
		},
		{
			url: 'https://www.nestrecovery.me/bookingandstay',
			lastModified: new Date(),
		},
		{
			url: 'https://www.nestrecovery.me/californiaprivacy',
			lastModified: new Date(),
		},
		{
			url: 'https://www.nestrecovery.me/care',
			lastModified: new Date(),
		},
		{
			url: 'https://www.nestrecovery.me/chef',
			lastModified: new Date(),
		},
		{
			url: 'https://www.nestrecovery.me/experiences',
			lastModified: new Date(),
		},
		{
			url: 'https://www.nestrecovery.me/faq',
			lastModified: new Date(),
		},
		{
			url: 'https://www.nestrecovery.me/privacy',
			lastModified: new Date(),
		},
		{
			url: 'https://www.nestrecovery.me/terms',
			lastModified: new Date(),
		},
		{
			url: 'https://www.nestrecovery.me/what-to-expect',
			lastModified: new Date(),
		}
	]
}
