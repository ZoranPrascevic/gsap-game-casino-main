import React, { useState, useEffect } from 'react'
import classes from './LoaderBox.module.css'
import welcomeImage from '../../media/image/loader.jpg'
import Preloader from '../preloader/Preloader'
import managerVideo from '../../media/video/manager.mp4'

const LoaderBox = ({ startGame }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [platform, setPlatform] = useState(false)
    
    function iOS() {
        return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
            // iPad on iOS 13 detection
            || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    }

    useEffect(() => {
        setPlatform(iOS());
    })
    const handleClick = () => {
        console.log("CLICKED")
        // e.preventDefault()
        startGame()
    }

    return (
        <div>
            <img src={welcomeImage} alt="welcome" className={classes.gameWelcomeImage} />
            <div className={classes.gameWelcomeBtn} onClick={handleClick} >Start Game</div>
            {
                (isLoading && !platform) && <Preloader />
            }
            {
                (isLoading && !platform) && <video className={classes.preVideo} src={managerVideo} playsInline preload="true" muted onCanPlayThrough={() => setIsLoading(false)} />
            }
        </div>
    )
}

export default LoaderBox
