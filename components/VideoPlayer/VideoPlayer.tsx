'use client'
import React, { Suspense, useEffect, useRef, useState } from "react";
import { PlaySvg, StopSvg } from "@/components/Icons";
import styles from './VideoPlayer.module.scss';
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";

const VideoPlayerC = ({src, title, auto = true, poster, muted = true}:{src:string, title?: string, auto?: boolean, poster?:  React.ReactElement, muted?: boolean}) => {

    const [loaded, setLoaded] = useState(false);
    const videoRef = useRef<any>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [srcVid, setsrcVid] = useState("");
    const [state, setState] = useState({
        url: null,
        pip: false,
        playing: false,
        controls: true,
        light: false,
        volume: 0,
        muted: false,
        seeking: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1,
        loop: false

    })

    // console.log(fetchVideo())
    const { ref, inView } = useInView({ threshold: 1 });
    useEffect(() => {
        setLoaded(true);
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
        // console.log('can play')
        console.log(videoRef)
    }
    const handlePause = () => {

        setState((prevState) => ({
            ...prevState,
            playing: false
        }));

    }
    const handlePlay = () => {
        setState((prevState) => ({
            ...prevState,
            playing: true
        }));
    };
    const togglePlay = () => {
        // console.log(state.playing)
        if(state.playing) {
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
              <a className={state.playing ? styles.video_player__button : styles.video_player__button_playing} onClick={togglePlay}> {!state.playing ? <PlaySvg /> : <StopSvg />}</a>
          </div>}
          {title && <h3 className={'video_player__title'}>{title}</h3>}
          {loaded && <div className={'video_player_media'}>
<Suspense>
              <ReactPlayer

                  inView={inView}
                  onReady={() => setLoaded(true)}

                  muted={true}
                  playbackRate={state.playbackRate}
                  loop={state.loop}
                  width={'100%'}
                  height={'100%'}
                  className='react-player'
                  auto={auto}
                  playing={state.playing}
                  poster={poster}
                  // handleProgress={handleProgress}
                  onPlay={() => setState(prevState => ({
                  ...prevState,
                          playing: true

                  }))}
                  url={srcVid}
                  ref={videoRef}
                  />
</Suspense>
          </div>}
      </div>

)
}
export default VideoPlayerC
