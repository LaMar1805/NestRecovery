'use client'
import React, { useEffect, useRef, useState } from "react";
import { PlaySvg, StopSvg } from "@/components/Icons";
import styles from './VideoPlayer.module.scss';
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";
import { OnProgressProps } from "react-player/base";
import useWindowDimensions, { resolutionQuality } from "@/components/utils";

const VideoPlayerC = ({src, srcId, title, btn = false, auto = true, poster, muted = true}:{src?:string, srcId?:string, title?: string, auto?: boolean, btn?: boolean, poster?:  React.ReactElement, muted?: boolean}) => {

    const {width} = useWindowDimensions();


    const [loaded, setLoaded] = useState(false);
    const [sourceC, setSourceC] = useState(null);
    const [playerInt, setplayerInt] = useState(null);
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

    // console.log(fetchVideo())
    const { ref, inView } = useInView({ threshold: 1 });
    useEffect(() => {

        muted ?  setMute(true) : setMute(false)

        if(width) {
            let source = resolutionQuality(width);
            console.log(source.length > 0)
            if(source.length > 0) {
                setSourceC({source});

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
        // const hls = videoRef.current.getInternalPlayer('hls')

        // console.log(hls.bufferController.media.canPlayType('application/vnd.apple.mpegurl'))
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


    // @ts-ignore
    return (
      <div className={'video_player'} ref={ref}>
          {state.url !== "" &&  <div className={'video_player_controls'} data-playing={state.playing} onClick={togglePlay}>
              <a className={state.playing ? styles.video_player__button : styles.video_player__button_playing} onClick={togglePlay}> {!state.playing ? <PlaySvg /> : btn ? <StopSvg /> : null
              }</a>
          </div>}
          {title && <h3 className={'video_player__title'}>{title}</h3>}
          <div className={'video_player_media'}>

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
                  // fallback={poster}
                  //  playsinline={true}
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

                   // autoPlay={state.playing}

                  />

          </div>
      </div>

)
}
export default VideoPlayerC
