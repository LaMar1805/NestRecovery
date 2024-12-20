'use client'
import React, { useEffect, useRef, useState } from "react";
import { PlaySvg, StopSvg } from "@/components/Icons";
import styles from './VideoPlayer.module.scss';
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";
import OnProgressProps from "react-player/base";
import useWindowDimensions, { resolutionQuality } from "@/components/utils";
import Loading from "@/app/loading";

const VideoPlayerC = ({src, srcId, title, btn = false, auto = true, poster, muted = true}:{src?:string, srcId?:string, title?: string, auto?: boolean, btn?: boolean, poster?:  React.ReactElement, muted?: boolean}) => {

    const {width} = useWindowDimensions();


    const [loaded, setLoaded] = useState(false);
    // const [sourceC, setSourceC] = useState(null);
    // const [playerInt, setplayerInt] = useState(null);
    const videoRef = useRef<any>(null);

    const [state, setState] = useState({
        url: "",
        pip: false,
        playing: false,
        controls: false,
        light: false,
        volume: 0,
        muted: true,
        seeking: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1,
        loop: false

    })

    const { ref, inView } = useInView({ threshold: 1 });

    useEffect(() => {
        muted ?  setMute(true) : setMute(false)

        if(width && width > 0) {
            let source;
            if(!src) {
                source = resolutionQuality(width);
            } else {
                source = src;
            }
            // @ts-ignore
            if(source.length > 0) {
                // @ts-ignore
                // setSourceC({source});
                // @ts-ignore
                setUrl(source)
            }
        }

        setLoaded(true)


    }, [width]);

     useEffect(() => {

         if(inView && auto) {

             handlePlay()

         }
         if(!inView  && auto)  {
             handlePause()
         }

    }, [inView]);


    const setUrl = (source: string | []) => {
        // @ts-ignore
        setState((prevState) => ({
            ...prevState,
            url: source
        }));
        setLoaded(true)
    }

    const setMute = (state:boolean) => {

        setState((prevState) => ({
            ...prevState,
            volume:  state ?  0 : 1,
            muted: state
        }));

        // loaded && (videoRef.current.volume = state ? 0 : 1)
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
    // @ts-ignore
    const handleProgress = (state: OnProgressProps) => {

        if(state.played > 0.99) {
            videoRef.current.seekTo(1);
            handlePause();
        }
    };


    // @ts-ignore
    return (
      <div className={'video_player'} ref={ref}>
          {state.url !== "" &&  <div className={'video_player_controls'} data-playing={state.playing} onClick={togglePlay}>
              <a className={state.playing ? styles.video_player__button : styles.video_player__button_playing} onClick={togglePlay}> {!state.playing ? <PlaySvg /> : btn ? <StopSvg /> : null
              }</a>
          </div>}
          {title && <h3 className={'video_player__title'}>{title}</h3>}
          <div className={'video_player_media'}>
              {loaded ?
               <ReactPlayer
                   ref={videoRef}
                  playbackRate={state.playbackRate}
                  loop={state.loop}
                  width={'100%'}
                   muted={state.muted}
                   controls={state.controls}
                  height={'100%'}


                   volume={state.volume}
                  className='react-player'
                  playing={state.playing}
                  fallback={poster}

                   playsinline={true}
                  onProgress={handleProgress}
                onPlay={handlePlay}
                onPause={handlePause}

                config={{
                    file: {
                        forceVideo: true,
                    }
                    }
                }
                  url={state.url}
                  /> : <Loading/>}

          </div>
      </div>

)
}
export default VideoPlayerC
