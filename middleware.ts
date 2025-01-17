import { NextResponse, userAgent  } from 'next/server'


import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	// Assume a "Cookie:nextjs=fast" header to be present on the incoming request
	// Getting cookies from the request using the `RequestCookies` API
	const { device } = userAgent(request)
	const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'
	// let cookie = request.cookies.get('nextjs')
	// console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
	// const allCookies = request.cookies.getAll()
	// console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]
	//
	// request.cookies.has('nextjs') // => true
	// request.cookies.delete('nextjs')
	// request.cookies.has('nextjs') // => false

	// Setting cookies on the response using the `ResponseCookies` API
	const response = NextResponse.next()
	// response.cookies.set('vercel', 'fast')

	response.cookies.set('device', viewport);

	// response.cookies.set({
	// 	name: 'vercel',
	// 	value: 'fast',
	// 	path: '/',
	// })
	// cookie = response.cookies.get('vercel')
	// console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
	// The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.

	return response
}
