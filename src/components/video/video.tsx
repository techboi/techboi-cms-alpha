'use client'
import React, { useRef, useState } from "react"

import compStyle from './video.module.css'
import VideoCompProps from "./video.props"

import Icon from "../icon/icon"

const Video = (props: VideoCompProps) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const { autoPlay, hidePlayButton, src, title } = props

  let refVideo = useRef<any>(null)

  const play = () => {
    if (!refVideo || !refVideo.current) {
      return null
    }

    // refVideo.current.requestFullscreen()
    refVideo.current.play()
    refVideo.current.muted = false
    refVideo.current.loop = false
    refVideo.current.currentTime = 0
    setIsPlaying(true)
  }

  const stopPlaying = () => {
    refVideo.current.muted = true
    refVideo.current.loop = true
    setIsPlaying(false)

    if (!autoPlay) {
      refVideo.current.pause()
    }
  }

  return (
    <div className={compStyle.videoWrapper}>
      <div className={compStyle.videoHeader}>
        {title &&
          <div className={compStyle.videoTitle}>{title}</div>
        }

        {!hidePlayButton &&
          <div className={compStyle.videoButton}>
            {!isPlaying
              ?
                <button onClick={() => play()}>
                  <Icon type="play" color="#000" />
                </button>
              :
                <button onClick={() => stopPlaying()}>
                  <Icon type="stop" color="#000" />
                </button>
            }
          </div>
        }
      </div>

      

      
      <video autoPlay={autoPlay} loop muted playsInline ref={(element) => (refVideo.current = element)}>
        <source src={`${src}.mp4`} type="video/mp4" />
        <source src={`${src}.ogg`} type="video/ogg" />
        <source src={`${src}.webm`} type="video/webm" />
      </video>
    </div>
  )
}

export default Video