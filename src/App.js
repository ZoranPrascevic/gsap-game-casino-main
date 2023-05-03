import React, { useState, useRef } from 'react'
import QVideo from './components/qVideo/QVideo'
import PlayBox from './components/playBox/PlayBox'
import classes from './App.module.css'
import LoaderBox from './components/loaderBox/LoaderBox'
import backgroundSound from './media/audio/background.mp3'
import postMessage from './actions/postMessage'

const App = () => {

  const [vidId, setVidId] = useState(0)
  const [isGameWelcome, setIsGameWelcome] = useState(true)
  const [classSet, setClassSet] = useState(`${classes.startOverlay}`)
  const [isPlay, setIsPlay] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [muted, setMuted] = useState(false)

  const audioElement = useRef(null)

  const handleAnswer = (isCorrect) => {
    if (isCorrect === true) {
      setVidId(currentQ === 0 ? 2 : 8);
      if (currentQ === 0) setCurrentQ(1);
    } else {
      postMessage(2);
      restartGame();
    }
    setIsPlay(false)
  }

  const handleVideoEnd = () => {
    console.log("VIDEO ENDED!", vidId)
    switch (vidId) {
      case 0:
        setVidId(1); setIsPlay(true);
        break;
      case 2:
        setVidId(3); setIsPlay(true);
        break;
      case 4:
        setVidId(5); setIsPlay(true);
        break;
      case 8:
        if (currentQ === 1) {
          setCurrentQ(2);
          setVidId(4)
        } else {
          postMessage(3);
          restartGame();
        }
        break;

      default:
        break;
    }
  }

  const startGame = () => {
    console.log("START GAME!", isGameWelcome)
    setIsGameWelcome(false)
    setClassSet(`${classes.startOverlay} ${classes.opacityAnimation}`)
    setTimeout(() => {
      setClassSet(`${classes.displayNone}`)
    }, 990);
  }

  const muteSound = () => {
    if (muted === true) {
      audioElement.current.muted = false;
      setMuted(false)
    } else {
      audioElement.current.muted = true
      setMuted(true)
    }
  }

  const restartGame = () => {
    setIsGameWelcome(true);
    setClassSet(`${classes.startOverlay}`);
    setIsPlay(false);
    setCurrentQ(0);
    setMuted(false)
    setVidId(0);
  }

  return (
    <div className={classes.gameBody}>
      {(isGameWelcome === true)
        ?
        (
          <div className={classes.gameWelcome}>
            <LoaderBox startGame={startGame} />
          </div>
        )
        :
        (
          <div className={classes.appBox}>
            <div className={classSet}></div>
            <QVideo playId={vidId} handleVideoEnd={handleVideoEnd} muted={muted} />
            <audio ref={audioElement} src={backgroundSound} autoPlay={true} controls={false} loop={true} />
            <PlayBox isPlay={isPlay} handleAnswer={(answer) => handleAnswer(answer)} currentQ={currentQ} muteSound={muteSound} />
          </div>
        )}
    </div>
  )
}

export default App
