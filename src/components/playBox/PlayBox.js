import React, {useState, useEffect} from 'react'
import classes from './PlayBox.module.css'
import SignsList from '../signsList/SignsList'
import ManagerVideo from '../managerVideo/ManagerVideo'

import SelectItem from '../selectItem/SelectItem'
import arrowUp from '../../media/image/arrow_up.png'
import arrowDown from '../../media/image/arrow_down.png'
import screenfull from 'screenfull'

import postMessage from '../../actions/postMessage'

const correctItems = [
    [9], [0, 1], [0, 1, 2, 3]
]

const PlayBox = ({isPlay, handleAnswer, currentQ, muteSound}) => {

    const [selectSigns, setSelectSigns] = useState(false);
    const [showSigns, setShowSigns] = useState(false)
    const [interact, setInteract] = useState(false)
    const [qNow, setQNow] = useState(0)
    const [showSuggestion, setShowSuggestion] = useState(false)
    const [lives, setLives] = useState(2)
    const [isFullScr, setIsFullScr] = useState(false)
    const [isWrong, setIsWrong] = useState(false)

    useEffect(() => {
        if (currentQ !== qNow) setLives(2);
        if (!isPlay) setShowSuggestion(false)
        setInteract(isPlay);
        setQNow(currentQ);
    }, [isPlay, currentQ, qNow])
    
    const openSignsList = (choice) => {
        setSelectSigns(choice)
        setShowSigns(true)
    }

    const closeSignsList = () => {
        setShowSigns(false)
    }

    const handleCorrect = () => {
        if (qNow === 0) {
            handleAnswer(true);
        } else {
            setShowSigns(false);
            setShowSuggestion(true);
            postMessage(1)
        }
    }
    
    const handleNoSign = () => {
        if (qNow === 0) {
            handleAnswer(true)
            postMessage(1)
        } else {
            setLives(lives - 1)
            setIsWrong(true)
        }
    }
    
    const handleSelectItem = (isCorrect) => {
        if (isCorrect) {
            handleAnswer(true);
            setShowSuggestion(false)
            postMessage(1)
        } else {
            setLives(lives - 1)
            setIsWrong(true)
        }
    }

    useEffect(() => {
        if (isWrong) {
            postMessage(0);
        }
    }, [isWrong])
    
    const handleBossEnd = () => {
        setIsWrong(false)
        if (lives < 0) {
            setLives(2)
            handleAnswer(false);
        }
    }

    const goFullScr = () => {
        if (isFullScr === true) {
            if (screenfull.isEnabled) {
                screenfull.exit();
                setIsFullScr(false)
            } else {
                alert("Your browser does not support fullscreen mode.")
            }
        } else {
            if (screenfull.isEnabled) {
                screenfull.request();
                setIsFullScr(true)
            } else {
                alert("Your browser does not support fullscreen mode.")
            }
        }
    }

    return (
        <div className={classes.playBox}>
            <div onClick={() => openSignsList(false)} className={classes.signsListBtn}>SIGNS OF PROBLEM<br/>GAMBLING<br/><span className={classes.btnRedText}>CLICK HERE TO READ</span></div>
            {
                showSigns && <SignsList isSelect={selectSigns} closeBox={closeSignsList} correctItems={correctItems[qNow]} handleCorrect={handleCorrect} />
            }
            {
                interact && (
                    <div className={classes.signOrNoWrapper}>
                        <div className={classes.signOrNoHeading}>INSTRUCTIONS</div>
                        <div className={classes.signOrNoGuide}>
                            Consider the
                            <span> legislative signage &#11044;</span>
                            , customer's behaviour and
                            <span> the signs of problem gambling, &#11044; </span>
                            then select one of the following options:
                        </div>
                        <div onClick={() => openSignsList(true)} className={classes.signOrBtn}>
                            Signs of problem gambling are being displayed by the patron
                        </div>
                        <div onClick={handleNoSign} className={classes.signOrBtn}>
                            Signs of problem gambling are NOT being displayed by the patron
                        </div>
                        <img src={arrowUp} alt="arrowup" className={classes.arrowUp} />
                        <img src={arrowDown} alt="arrowdown" className={classes.arrowDown} />
                    </div>
                )
            }
            {
                showSuggestion && <SelectItem handleSelectItem={(isTru) => handleSelectItem(isTru)} />
            }
            {
                isWrong && <ManagerVideo handleBossEnd={handleBossEnd} />
            }
            <div onClick={muteSound} className={classes.muteBtn}>Mute Sound</div>
            <div onClick={goFullScr} className={classes.fscrBtn}>Full Screen</div>
        </div>
    )
}

export default PlayBox
