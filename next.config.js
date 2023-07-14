/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		deviceSizes: [640, 1080, 1200, 1920],
		imageSizes: [16,  96, 128, 256, ]
	},
	env: {
		baseUrl: 'https://www.nestrecovery.me'
	}
}

module.exports = nextConfig
