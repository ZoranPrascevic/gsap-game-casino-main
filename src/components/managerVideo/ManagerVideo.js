import React, { useState } from 'react'
import classes from './ManagerVideo.module.css'
import bossVideo from '../../media/video/manager.mp4'
import Speech from '../speech/Speech'

const ManagerVideo = ({ handleBossEnd }) => {

    const [showTexts, setShowTexts] = useState(false)

    return (
        <div className={classes.bossWrapper}>
            <div className={classes.bossBox}>
                <video src={bossVideo} className={classes.boss} autoPlay onPlay={() => setShowTexts(true)} onEnded={handleBossEnd} controls={false} playsInline disableRemotePlayback />
                {
                    showTexts && (
                        <div className={classes.title}>MANAGER</div>
                    )
                }
            </div>
            {
                showTexts && (
                    <Speech x={-80} y={88} text="That's not right. Make sure to read the instructions." orient={true} />
                )
            }
        </div>
    )
}

export default ManagerVideo
