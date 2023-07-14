'use client'
import { useEffect, useRef, useState } from "react";
import { PlaySvg, StopSvg } from "@/components/Icons";
import styles from './VideoPlayer.module.scss';
const VideoPlayer = ({src,  title}:{src:string, title?: string}) => {

    const videoRef = useRef<any>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "-450px" }
        );
        // console.log(isIntersecting);
        observer.observe(videoRef.current);

        return () => observer.disconnect();
    }, [isIntersecting]);

    const handleEnd = () => {
        videoRef.current.currentTime = 0;
        videoRef.current.pause();
        setIsPlaying(false);
    }
    const handleProgress = () => {
        const duration = videoRef.current.duration;
        const currentTime = videoRef.current.currentTime;
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
    };
    const setVolume = () => {
        videoRef.current.muted = false;
        videoRef.current.volume = 1;
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
        if(isIntersecting) {
            handlePlay();
        } else {
            handlePause();
        }
    }, [isIntersecting]);

    useEffect(() => {
       if(progress > 99) handleEnd();
    }, [progress]);
  return (
      <div className={'video_player'}>
          <div className={'video_player_controls'} data-playing={isPlaying} onClick={togglePlay}>
              <a className={isPlaying ? styles.video_player__button : styles.video_player__button_playing} onClick={togglePlay}> {!isPlaying ? <PlaySvg /> : <StopSvg />}</a>
          </div>
          {title && <h3 className={'video_player__title'}>{title}</h3>}
          <div className={'video_player_media'}>
              <video
                  muted={true}
                  onTimeUpdate={handleProgress}
                  style={{ width: "100%"}} ref={videoRef}>
                <source src={src}/>
                  Sorry, your browser does&quote;t support embedded video.
              </video>
          </div>
      </div>

)
}
export default VideoPlayer
