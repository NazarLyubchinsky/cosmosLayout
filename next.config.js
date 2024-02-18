/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'via.placeholder.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'th.bing.com',
				port: '',
			},
		],
	},
}

module.exports = nextConfig
