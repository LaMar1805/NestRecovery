/**
 * // useWindowDimension.ts
 * * This hook returns the viewport/window height and width
 */
'use client'
import { MutableRefObject, useEffect, useRef, useState } from 'react';


type WindowDimentions = {
	width: number | undefined;
	height: number | undefined;
	state: Promise<boolean> | boolean | undefined;
};


export const isServer = typeof window === 'undefined';
export const resolutionQuality =  (width:number) => {

	const videoSize = [ 240, 360, 480, 720, 1080, 1440, 2160 ];
	// console.log(width)
	if (width) {
		const resQuality = (it: number) => width / 4 * 3 < it

		const qlty = () => {
			console.log(videoSize.findIndex(resQuality))
			if (videoSize.findIndex(resQuality) > 0) return videoSize[videoSize.findIndex(resQuality)]
			console.log(videoSize.length)
			if (videoSize.findIndex(resQuality) - 1 < 0) return videoSize[videoSize.length - 1]
			console.log(videoSize[videoSize.length - 1])
		}

		let quality = qlty()
		console.log(quality)
		return [
			{ src: `/video/promo_mp4/nest_promo_${quality}p.mp4`, type: 'video/mp4' },
			{ src: `/video/promo_mp4/nest_promo_${quality}p.webm`, type: 'video/webm' }
		]


	}
}
const useWindowDimensions = (): WindowDimentions => {
	const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
		width: undefined,
		height: undefined,
		state: undefined
	});
	useEffect(() => {
		function handleResize(): void {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
				state: window.innerWidth < window.innerHeight
			});
		}
		handleResize();

		window.addEventListener('resize', handleResize);
		return (): void => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount

	return windowDimensions;
};

export default useWindowDimensions;

export function useIntersectionObserver(ref: MutableRefObject<Element | null>, options: IntersectionObserverInit = {}, forward: boolean = true) {
	const [element, setElement] = useState<Element | null>(null);
	const [isIntersecting, setIsIntersecting] = useState(false);
	const observer = useRef<null | IntersectionObserver>(null);

	const cleanOb = () => {
		if (observer.current) {
			observer.current.disconnect()
		}
	}

	useEffect(() => {
		setElement(ref.current);
	}, [ref]);

	useEffect(() => {
		if (!element) return;
		cleanOb()
		const ob = observer.current = new IntersectionObserver(([entry]) => {
			const isElementIntersecting = entry.isIntersecting;
			if (!forward) {
				setIsIntersecting(isElementIntersecting)
			} else if (forward && !isIntersecting && isElementIntersecting) {
				setIsIntersecting(isElementIntersecting);
				cleanOb()
			}
		}, { ...options })
		ob.observe(element);
		return () => {
			cleanOb()
		}
	}, [element, options ])


	return isIntersecting;
}
