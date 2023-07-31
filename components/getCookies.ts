'use server'
import { cookies } from 'next/headers'
export async function getCookie() {
	const device = cookies().get('device')?.value
	console.log(device)
	return device;
}
