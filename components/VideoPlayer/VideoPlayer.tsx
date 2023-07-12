'use client'
import { useRef, useState } from "react";
import { PlaySvg, StopSvg } from "@/components/Icons";
import styles from './VideoPlayer.module.scss'
const VideoPlayer = ({src, title}:{src:string, title?: string}) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlay = () => {
        setIsPlaying(prevState =>  !prevState);
        if (!isPlaying) {
            // @ts-ignore
            videoRef.current.play();
        } else {
            // @ts-ignore
            videoRef.current.pause();
        }
    };

  return (
      <div className={'video_player'}>
          <div className={'video_player_controls'}>
              <a className={isPlaying ? styles.video_player__button : styles.video_player__button_playing} onClick={handlePlay}> {!isPlaying ? <PlaySvg /> : <StopSvg />}</a>
          </div>
          {title && <h3 className={'video_player__title'}>{title}</h3>}
          <div className={'video_player_media'}>
              <video
                  controls={false}
                  style={{ width: "100%"}} ref={videoRef}>
                <source src={src}/>
                  Sorry, your browser does&quote;t support embedded video.
              </video>
          </div>
      </div>

)
}
export default VideoPlayer
