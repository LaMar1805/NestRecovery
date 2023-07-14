/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		deviceSizes: [640, 1080, 1200, 1920],
		imageSizes: [600,  960, 1160, 1900, ]
	},
	env: {
		baseUrl: 'https://www.nestrecovery.me'
	}
}

module.exports = nextConfig
