// 'use client'
// import { Video, CloudinaryContext } from "cloudinary-react";
// import { useState, useEffect, memo } from "react";
// import { useInView } from "react-intersection-observer";
// import { AdvancedVideo } from "@cloudinary/react";
// import { CloudinaryVideo } from "@cloudinary/url-gen";
// import { videoCodec } from "@cloudinary/url-gen/actions/transcode";
// import { auto } from "@cloudinary/url-gen/qualifiers/videoCodec";
// import { format } from "@cloudinary/url-gen/actions/delivery";
//
// // @ts-ignore
// // eslint-disable-next-line react/display-name
// export const MemoVidPlayer = memo(({ publicId }) => {
// 	// @ts-ignore
// 	let vid =  new CloudinaryVideo('nest/xjpchft1uit3cf5gzhtt', {cloudName: 'dpiuthi6q'})
//
// 	return (
// 		<CloudinaryContext cloudName="dpiuthi6q">
// 			<AdvancedVideo cldVid={vid} sources={ [
// 			{
// 				type: 'mp4',
// 				codecs: ['vp8', 'vorbis'],
// 				transcode: videoCodec(auto())
// 			},
// 			{
// 				type: 'webm',
// 				codecs: ['avc1.4D401E', 'mp4a.40.2'],
// 				transcode: videoCodec(auto())
// 			}]} controls   autoPlay muted />
// 		</CloudinaryContext>
// 	);
// });
//
// export const VideoPlayer = ({ vidPublicId = "video-blog/cat" }) => {
//
// 	const [publicId, setPublicId] = useState("");
// 	const { ref, inView } = useInView({ threshold: 1 });
//
// 	useEffect(() => {
// 		if (inView) {
// 			setPublicId(vidPublicId);
// 		}
// 	}, [inView, vidPublicId]);
//
//
// 	return (
// 		<div ref={ref}>
// 			<MemoVidPlayer
// 				// @ts-ignore
// 				publicId={publicId} />
// 		</div>
// 	);
// };
