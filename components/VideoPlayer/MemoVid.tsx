import { forwardRef, memo } from "react";

const MemoVidPlayer = memo( forwardRef(function  ({ auto, inView, handleProgress, src, poster }:any, ref) { {
	return (
		<video
			muted={auto}
			playsInline={true}
			autoPlay={auto}
			style={{ width: "100%", height: "100%", objectFit: "cover"}}
			onTimeUpdate={handleProgress}
			preload="none"
			// @ts-ignore

		 	ref={ref}
			src={`https://www.nestrecovery.me${src}`}>
			<p>Sorry, your browser does&quote;t support embedded video.</p>
		</video>
	);
}}));
export default MemoVidPlayer
