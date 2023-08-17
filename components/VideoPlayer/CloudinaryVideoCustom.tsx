// 'use client'
// import { useRef } from "react";
// import player from "cloudinary-video-player";
// import { AdvancedVideo } from "@cloudinary/react";
// import { videoCodec } from "@cloudinary/url-gen/actions/transcode";
// import { auto } from "@cloudinary/url-gen/qualifiers/videoCodec";
// import { CloudinaryVideo } from "@cloudinary/url-gen";
// import "cloudinary-video-player/dist/cld-video-player.min.css";
// // @ts-ignore
// const VideoPlayer = (props) => {
// 	const vid = new CloudinaryVideo('dog', {cloudName: 'demo'});
// 	const videoEl = useRef();
// 	// @ts-ignore
// 	const player = vid.videoPlayer('player', {
// 		fluid: true,
// 		controls: true
// 	});
//
// 	player.source('nest/c5g3xpzt4ubjuukiuxv5');
// // Modify player source and play hls adaptive streaming
// 	player.source('rafting', { sourceTypes: ['hls'],
// 		transformation: { streaming_profile: 'full_hd' } }).play();
// 	const sources = [
// 		{
// 			type: 'mp4',
// 			codecs: ['vp8', 'vorbis'],
// 			transcode: videoCodec(auto())
// 		},
// 		{
// 			type: 'webm',
// 			codecs: ['avc1.4D401E', 'mp4a.40.2'],
// 			videoCodec: videoCodec(auto())
// 		}];
//
//
// 	return (
// 		<div>
// 			<AdvancedVideo
// 				// @ts-ignore
// 				cldVid={vid} sources={sources} ref={videoEl} controls />
//
// 			<video src={player}/>
// 		</div>
// 	)
// };
// export default VideoPlayer;
