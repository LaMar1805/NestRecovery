'use client'
import React, {  useEffect, useRef, useState } from "react";
import { PlaySvg, StopSvg } from "@/components/Icons";
import styles from './VideoPlayer.module.scss';
import MemoVidPlayer from "@/components/VideoPlayer/MemoVid";
import { useInView } from "react-intersection-observer";
const VideoPlayer = ({src, title, auto = true, poster, muted = true}:{src:string, title?: string, auto?: boolean, poster?:  React.ReactElement, muted?: boolean}) => {

    const videoRef = useRef<any>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [srcVid, setsrcVid] = useState("");


    // console.log(fetchVideo())
    const { ref, inView } = useInView({ threshold: 1 });
    useEffect(() => {

        if (inView && srcVid === "") {
            setsrcVid(src);
            setIsPlaying(() => auto);
            !auto && handlePause();
        }

        if(!inView && isPlaying) {
            handlePause();
        }

    }, [inView, srcVid]);


    const handleEnd = () => {
        videoRef.current.currentTime = 0;
        videoRef.current.pause();
        setIsPlaying(false);
    }
    const canPlay = () => {
        console.log('can play')
    }
    const handlePause = () => {
        setIsPlaying(false);
        // console.log('pause');
        videoRef.current.pause();

    }
    const handlePlay = () => {
        if(videoRef.current) {
            setIsPlaying(true);
            videoRef.current.play();
        }
    };
    const togglePlay = () => {
        if(isPlaying) {
            handlePause()
        } else {
            handlePlay()
        }
    }


    useEffect(() => {
        if(progress > 99) handleEnd();
    }, [progress]);

    const handleProgress = () => {
        const can =  videoRef.current.onCanPlay;
        const duration = videoRef.current.duration;
        const currentTime = videoRef.current.currentTime;
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
    };

  return (
      <div className={'video_player'} ref={ref}>
          {srcVid !== "" &&  <div className={'video_player_controls'} data-playing={isPlaying} onClick={togglePlay}>
              <a className={isPlaying ? styles.video_player__button : styles.video_player__button_playing} onClick={togglePlay}> {!isPlaying ? <PlaySvg /> : <StopSvg />}</a>
          </div>}
          {title && <h3 className={'video_player__title'}>{title}</h3>}
          <div className={'video_player_media'}>

              <MemoVidPlayer
                  inView={inView}
                  isPlaying={isPlaying}
                  muted={muted}
                  auto={auto}
                  // poster={poster}
                  handleProgress={handleProgress}
                  onCanPlay={canPlay}
                  src={srcVid}
                  ref={videoRef}
                  />
             <div className={'video_player_fallback_img'} style={{ width: "100%"}}>{poster}</div>
          </div>
      </div>

)
}
export default VideoPlayer
