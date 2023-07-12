import localFont from 'next/font/local'

const font = localFont({
	src: [
		{
		path: './Futura/subset-FuturaBookC.woff2',
		weight: 'normal',
		style: 'normal',
	},
		{
		path: './Futura/subset-FuturaLightC.woff2',
		weight: '300',
		style: 'normal',
	},
	{
		path: './TheHills/subset-TheHillsPERSONALUSEONLY.woff2',
		weight: '100',
		style: 'normal',
	}],
	display: 'swap',
	variable: '--futura-book'
})



export {font}
