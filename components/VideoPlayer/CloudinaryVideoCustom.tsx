'use client'
import React, { useRef } from 'react'
import {AdvancedVideo, lazyload } from '@cloudinary/react';
import { Cloudinary, CloudinaryVideo, } from "@cloudinary/url-gen";
// import { Simulate } from "react-dom/test-utils";
// import { scale } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import { auto as autoFormat } from "@cloudinary/url-gen/qualifiers/format";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";
import { auto as autoVideo } from "@cloudinary/url-gen/qualifiers/videoCodec";
import { name } from "@cloudinary/url-gen/actions/namedTransformation";
// @ts-ignore
// import  VideoPlayer  from "cloudinary-video-player";

import { videoCodec } from "@cloudinary/url-gen/actions/transcode";

// @ts-ignore
const CloudinaryVideoCustom = () => {
	// const cld = cloudinary.videoPlayer('example-player', {
	// 	cloud_name: 'dpiuthi6q'
	// });
	// const player = cld.videoPlayer('player', {
	// 	fluid: true,
	// 	controls: false,
	// 	muted: false,
	// 	hideContextMenu: true,
	// 	floatingWhenNotVisible: false,
	// 	autoplayMode: 'on-scroll',
	// 	autoplay: true
	// });
	//
	// player.source('elephants', {
	// 	sourceTypes: ['hls'],
	// 	transformation: {
	// 		streaming_profile: 'auto'
	// 	}
	// });
	// Use the video with public ID, 'docs/walking_talking'.
	// const myVideo = cld.video('docs/walking_talking');https://res.cloudinary.com/dpiuthi6q/video/upload/s--pnsDz6Xb--/f_auto:video,q_auto/v1/nest/1/xjpchft1uit3cf5gzhtt
	const ref = useRef();
	// const sources = [
	// 	{
	// 		type: 'mp4',
	// 		codecs: ['vp8', 'vorbis'],
	// 		transcode: videoCodec(autoVideo())
	// 	},
	// 	{
	// 		type: 'webm',
	// 		codecs: ['avc1.4D401E', 'mp4a.40.2'],
	// 		videoCodec: videoCodec(autoVideo())
	// 	}];
	let myVideo = new CloudinaryVideo('nest/c5g3xpzt4ubjuukiuxv5', {
		apiKey: '195655714938893',
		apiSecret: 'ciavXR0Z0wCiXkhFRAeOAyDewYM',
		cloudName: 'dpiuthi6q'
	}, {
		secure: true
	}).namedTransformation(name("VIDSCREEN"))
	// .delivery(format(autoFormat()))
	.delivery(quality(autoQuality())

	);
	// const player = cld('video', {
	// 	fluid: true,
	// 	controls: false,
	// 	muted: true,
	// 	floatingWhenNotVisible: false,
	// 	posterOptions: {
	// 		transformation: {
	// 			startOffset: '0'
	// 		}
	// 	},
	// 	autoplayMode: 'on-scroll',
	// 	autoplay: true
	// });
	//
	// player.source('nest/c5g3xpzt4ubjuukiuxv5', {
	// 	transformation: {
	// 		fetch_format: 'auto'
	// 	}
	// });
	const vid = new CloudinaryVideo('nest/c5g3xpzt4ubjuukiuxv5', {cloudName: 'dpiuthi6q'});
	const videoEl = useRef(null);
	const sources = [
		{
			type: 'mp4',
			codecs: ['vp8', 'vorbis'],
			transcode: videoCodec(autoVideo())
		},
		{
			type: 'webm',
			codecs: ['avc1.4D401E', 'mp4a.40.2'],
			transcode: videoCodec(autoVideo())
		}];

	return (
		<div>
			<AdvancedVideo cldVid={vid} sources={sources} ref={videoEl} controls />
<AdvancedVideo cldVid={myVideo} />

		</div>
	)
};
export default CloudinaryVideoCustom
