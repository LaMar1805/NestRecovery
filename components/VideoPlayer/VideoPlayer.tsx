'use client'
import React, { useEffect, useRef, useState } from "react";
import { PlaySvg, StopSvg } from "@/components/Icons";
import styles from './VideoPlayer.module.scss';
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";
import { OnProgressProps } from "react-player/base";

const VideoPlayerC = ({src, title, btn = false, auto = true, poster, muted = true}:{src:string, title?: string, auto?: boolean, btn?: boolean, poster?:  React.ReactElement, muted?: boolean}) => {

    const [loaded, setLoaded] = useState(false);
    const videoRef = useRef<any>(null);

    const [state, setState] = useState({
        url: "",
        pip: false,
        playing: false,
        controls: false,
        light: false,
        volume: 0.8,
        muted: true,
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


        if (state.url === "") {
            setUrl();
            setLoaded(true);

        }
        if(inView) {
            muted ?  setMute(muted) : () => void
                auto ? handlePlay() : handlePause();
            auto ? handlePlay() : handlePause();
        } else {
            handlePause()
        }

    }, [inView]);
    const setUrl = () => {
        setState((prevState) => ({
            ...prevState,
            url: src as string
        }));
    };

    const setMute = (state:boolean) => {  setState((prevState) => ({
            ...prevState,
            volume: state ? 1 : 0,
            muted: state
        }));
    }
    const handlePause = () => {

        setState((prevState) => ({
            ...prevState,
            playing: false
        }));

    }
    const handlePlay = () => {
        // videoRef.current.muted = true;
        setState((prevState) => ({
            ...prevState,
            playing: true,

        }));
    };
    const togglePlay = () => {
        if(state.playing) {
            handlePause()
        } else {
            handlePlay()
        }
    }
    const handleProgress = (state: OnProgressProps) => {

        if(state.played > 0.99) {
            videoRef.current.seekTo(1);
            handlePause();
        }
    };


    return (
      <div className={'video_player'} ref={ref}>
          {state.url !== "" &&  <div className={'video_player_controls'} data-playing={state.playing} onClick={togglePlay}>
              <a className={state.playing ? styles.video_player__button : styles.video_player__button_playing} onClick={togglePlay}> {!state.playing ? <PlaySvg /> : btn ? <StopSvg /> : null
              }</a>
          </div>}
          {title && <h3 className={'video_player__title'}>{title}</h3>}
          {loaded && <div className={'video_player_media'}>

               <ReactPlayer

                  playbackRate={state.playbackRate}
                  loop={state.loop}
                  width={'100%'}
                   muted={muted}
                   controls={state.controls}
                  height={'100%'}
                   volume={1}
                  className='react-player'
                  playing={state.playing}
                  // fallback={poster}
                   playsinline={true}
                  onProgress={handleProgress}
                onPlay={handlePlay}
                onPause={handlePause}
                config={{
                    file: {
                        forceVideo: true,
                        forceHLS: true,
                        forceSafariHLS: true,
                        hlsOptions: {
                            // abrMaxWithRealBitrate: true,
                            minAutoBitrate: 2000000,
                            capLevelToPlayerSize: true
                        }
                    }
                    }
                }
                  url={state.url}
                  ref={videoRef}


                  />

          </div>}
      </div>

)
}
export default VideoPlayerC
