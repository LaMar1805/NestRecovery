/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	// experimental: {
	// 	serverActions: true,
	// },
		images: {
			deviceSizes: [440, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
			imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		},


	env: {
		REACT_APP_CLOUDINARY_CLOUD_NAME: 'dpiuthi6q',
		baseUrl: process.env.NODE_ENV === "development" ? 'http://localhost:3000' : 'https://www.nestrecovery.me'
	}
}

module.exports = nextConfig
