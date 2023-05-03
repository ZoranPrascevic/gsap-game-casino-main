import React, { useState, useEffect, useRef } from 'react'
import classes from './QVideo.module.css'
import q1_main from '../../media/video/q1_main.mp4'
import q1_loop from '../../media/video/q1_loop.mp4'
import q2_main from '../../media/video/q2_main.mp4'
import q2_loop from '../../media/video/q2_loop.mp4'
import q3_main from '../../media/video/q3_main.mp4'
import q3_loop from '../../media/video/q3_loop.mp4'
import book1 from '../../media/video/book1.mp4'
import book2 from '../../media/video/book2.mp4'
import thanks from '../../media/video/thanks.mp4'

import Preloader from '../preloader/Preloader'
import Speech from '../speech/Speech'

const QVideo = ({ playId, handleVideoEnd, muted }) => {
    const srcList = [
        q1_main,
        q1_loop,
        q2_main,
        q2_loop,
        q3_main,
        q3_loop,
        book1,
        book2,
        thanks
    ]

    const loopOptionList = [
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        false
    ]

    const speeches = [
        "Hi mate.",
        "Can you believe I lost over $2000 on that machine over the night?",
        "The wife made me speed on the couch",
        "I've been pretty devastated.",
        "Anyway, I've got my lucky machine tonight.",
        "Hopefully I can make enough money to pay my rent."
    ]

    const thanksMsg = "Thanks mate"

    const videoElement = useRef(null)

    const [srcId, setSrcId] = useState(0);
    const [showSpeech, setShowSpeech] = useState(false)
    const [speechText, setSpeechText] = useState("")
    const [speechPos, setSpeechPos] = useState({
        x: 17, y: 25
    })
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setSrcId(playId);
    }, [playId])

    useEffect(() => {
        if (muted === true) {
            videoElement.current.muted = true
        } else {
            videoElement.current.muted = false
        }
    }, [muted])

    const handleEnded = () => {
        handleVideoEnd()
    }

    const handleTimeUpdate = () => {
        if (srcId === 8) {
            if (videoElement.current.currentTime >= 2.3 && videoElement.current.currentTime <= 2.7) {
                if (showSpeech === false) {
                    setSpeechText(thanksMsg)
                    setSpeechPos({
                        x: 17, y: 25
                    })
                    setShowSpeech(true)
                }
            }
            if (videoElement.current.currentTime >= 3.8) {
                if (showSpeech === true) setShowSpeech(false)
            }
        }

        if (srcId === 4) {
            if (videoElement.current.currentTime >= 2.9 && videoElement.current.currentTime <= 3.3) {
                if (showSpeech === false) {
                    setSpeechText(speeches[0])
                    setSpeechPos({
                        x: 27, y: 15
                    })
                    setShowSpeech(true)
                }
            }
            if (videoElement.current.currentTime >= 4.3 && videoElement.current.currentTime <= 4.7) {
                    setSpeechText(speeches[1])
            }
            if (videoElement.current.currentTime >= 8.7 && videoElement.current.currentTime <= 9.1) {
                    setSpeechText(speeches[2])
            }
            if (videoElement.current.currentTime >= 10.7 && videoElement.current.currentTime <= 11.1) {
                    setSpeechText(speeches[3])
            }
            if (videoElement.current.currentTime >= 13 && videoElement.current.currentTime <= 13.4) {
                    setSpeechText(speeches[4])
            }
            if (videoElement.current.currentTime >= 16 && videoElement.current.currentTime <= 16.4) {
                    setSpeechText(speeches[5])
            }
            if (videoElement.current.currentTime >= 19 && videoElement.current.currentTime <= 19.4) {
                if (showSpeech === true) setShowSpeech(false)
            }
        }
    }

    return (
        <div className={classes.videoWrapper}>
            <video playsInline onLoadStart={() => setIsLoading(true)} onCanPlayThrough={() => setIsLoading(false)} onTimeUpdate={handleTimeUpdate} ref={videoElement} onEnded={handleEnded} className={classes.video} src={srcList[srcId]} loop={loopOptionList[srcId]} autoPlay disableRemotePlayback />
            {
                showSpeech && (
                    <Speech x={speechPos.x} y={speechPos.y} text={speechText} orient={false} />
                )
            }
            {
                isLoading && <Preloader />
            }
        </div>
    )
}

export default QVideo
