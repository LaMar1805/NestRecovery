/** @type {import('next').NextConfig} */
const nextConfig = {
	// experimental: {
	// 	serverActions: true,
	// },
		images: {
			remotePatterns: [
				{

					hostname: 'vz-59c0616c-d60.b-cdn.net',

				},
			],
			deviceSizes: [440, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
			imageSizes: [16, 24, 32, 48, 64, 96, 128, 256, 384],
		},


	env: {
		baseUrl: process.env.NODE_ENV === "development" ? 'http://localhost:3000' : 'https://www.nestrecovery.me'
	}
}

module.exports = nextConfig
