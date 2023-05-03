import React, { useState } from 'react'
import classes from './SelectItem.module.css'
import policeImg from '../../media/image/police.png'
import cloImg from '../../media/image/clo.png'
import moneyImg from '../../media/image/money.png'
import book1Img from '../../media/image/book1.png'
import book2Img from '../../media/image/book2.png'
import outImg from '../../media/image/out.png'

import PickVideo from '../pickVideo/PickVideo'

const toolTipContent = [
    "Report the indident to the police",
    "Report the indident to the Customer Liaison Officer (CLO)",
    "Eject the patron from the premises",
    "Provide the patron with information on gambling counselling services",
    "Provide the patron with information on self-exclusion services",
    "Lend the patron some money",
]

const SelectItem = ({ handleSelectItem }) => {

    const [tipId, setTipId] = useState(0);
    const [showTip, setShowTip] = useState(false);
    const [pickItem, setPickItem] = useState(false);
    const [bookId, setBookId] = useState(false);

    const showToolTip = (index) => {
        setTipId(index);
        setShowTip(true);
    }

    const judgeAnswer = (index) => {
        if (index === 0 || index === 2 || index === 5) {
            handleSelectItem(false)
        } else {
            if (index === 1) {
                handleSelectItem(true);
            } else {
                setBookId(index === 3 ? true : false);
                setPickItem(true);
            }
        }
    }

    const handlePickEnd = () => {
        handleSelectItem(true)
    }

    return (
        <div className={classes.offerWrapper}>
            <div className={classes.instrBox}>
                <div className={classes.instrHeader}>INSTRUCTIONS</div>
                <div className={classes.instrGuide}>
                    Select the appropriate action to take:
                </div>
                <ul className={classes.instrSelect}>
                    {
                        toolTipContent.map((item, index) => (
                            <li onMouseOver={() => showToolTip(index)} onMouseOut={() => setShowTip(false)} onClick={() => judgeAnswer(index)} key={index} className={`${classes.instrSelectItem} ${(showTip && tipId === index) && classes.active}`}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            {
                pickItem && (
                    <PickVideo bookID={bookId} handlePickEnd={handlePickEnd} />
                )
            }
            <svg className={classes.policeSVG} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297.95 585.27"><path onMouseOver={() => showToolTip(0)} onMouseOut={() => setShowTip(false)} onClick={() => judgeAnswer(0)} d="M164.9,0h1c1.69,1.08,3.58.49,5.35.55C185.7,1,195,9.69,201.7,21.06c6.84,11.57,10.21,24.55,11.44,38a27.25,27.25,0,0,1-.34,9.45c-2.11,8-1.51,16.2-1.64,24.34-.11,7.19,0,14.49-6.6,19.51a4.11,4.11,0,0,0-1.28,2.11c-3.15,10-8.6,18.72-14.6,27.17-2.08,2.92-2.32,5.78,0,8.7,2.6,3.25,4.2,7.22,7.26,10.13,2.89,2.75,5.94,5,10.2,2.78,1.8-.94,3.22,0,4.61.95,9.71,6.38,20.46,10.36,31.49,13.68a45.24,45.24,0,0,1,15.43,8c3.37,2.69,6,6.11,6.68,10.27,1.5,9.67,5.22,18.87,5.08,28.91-.1,7.49,2.94,14.66,4.42,22,2.27,11.26,4.42,22.69,8,33.48,3.12,9.46,4.25,19.08,6.36,28.61,1.08,4.86,4.11,8.72,6.61,12.81,3.37,5.5,4.5,10.56.93,16.76-2.4,4.16-.65,9.48-.24,14.21a169.87,169.87,0,0,1-2,47.22,51.44,51.44,0,0,1-4.33,12.73,8.43,8.43,0,0,0-.1,7.64c1.72,4,3.43,8,2.9,12.5-.62,5.26-2.72,7.55-7.81,7.8a4,4,0,0,0-4,2.94A257.39,257.39,0,0,1,262.47,479a6.68,6.68,0,0,0,.08,7.5c2.86,4.74,4.64,9.61,1.56,15-.75,1.33-.3,2.93-.17,4.43,1.22,14.75,1.9,29.56,4.13,44.22.22,1.48,0,3,.21,4.49.55,4.27-1.59,6.07-5.55,6.57-14.86,1.87-29.71,3.86-44.55,5.88-22.75,3.09-45.61,5.3-68.45,7.61-21.18,2.14-42.35,4.41-63.54,6.5-11.75,1.16-23.48,2.52-35.23,3.68-2,.2-4,.35-6,.36-5.77,0-5.77,0-4.75-5.76,1.78-10,3.7-20,5.4-30,1.11-6.53,1.84-12.72-2-19.21-2.2-3.7-3.94-7.75-6.44-11.47-3.07-4.55-1.77-10.34-2.45-15.55-1.67-12.73-1.42-25.58-1.06-38.37.23-8.39-1.43-16.56-1.83-24.85-.1-2.12-1.43-3.69-2.69-5.24-2.1-2.58-4.08-5.38-6.54-7.52-10-8.73-7.59-20-6.16-30.7,1-7.21,9.92-10.27,16.3-6.49a30.55,30.55,0,0,1,8.68,8.16c1.42,1.89,2.84,3.15,5.42,2.38A4.65,4.65,0,0,0,50.49,396c.1-2.84.67-5.62,1-8.43.57-4.7.83-8.87-3.93-12.3-3.41-2.46-3.63-7.35-4.5-11.38-.83-3.86-2.68-5.43-6.76-5.71-9.3-.64-18.55-2-27.31-5.42-3.87-1.5-7.74-3.23-9-7.83v-10c1.26-13.54,2.39-27.08,4.65-40.52a311.67,311.67,0,0,1,31.74-93.2,62.1,62.1,0,0,1,33-29.83c7.43-3,14.34-7.07,21.8-10,6.54-2.53,12-6.88,16.66-11.65,4.85-5,8.9-11.33,8.7-19-.18-7-.68-14-3-20.66-.93-2.69-2.39-4-5.46-4-5,0-7.51-2.12-9.12-6.93a48.34,48.34,0,0,1-2.14-11.28c-.41-5-.32-10-1.06-14.93a11.67,11.67,0,0,1,1.14-6.84c6-12,7.81-25.41,13.82-37.37,4.74-9.45,11-17.44,19.76-23.34C136.36,1.48,143.21,1,149.9,0h1A38.75,38.75,0,0,0,164.9,0Z" /></svg>
            <svg className={classes.cloSVG} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 515.73 538.81"><path onMouseOver={() => showToolTip(1)} onMouseOut={() => setShowTip(false)} onClick={() => judgeAnswer(1)} d="M66,538.81H59c-1.22-11.66-1.23-23.23,2.52-34.53.1-.32.13-.66.25-1a91.83,91.83,0,0,0,6.62-30.54c.46-8.7,3.21-17,5.8-25.25,1.41-4.48,1.92-9.1,2.58-13.71.5-3.48-.72-5.21-4-6.18-10.89-3.18-21.2-7.92-31.72-12.09-6.68-2.66-13.06-5.65-18.81-10.13a146.35,146.35,0,0,0-14.85-10.1c-3.38-2-6.19-4.5-7.32-8.45v-42c6.69-10.26,6.36-22.52,9-33.81a261.27,261.27,0,0,1,20.19-56.24,79.66,79.66,0,0,0,5.45-13.39c5.29-19,15-35.89,25-52.58A20.89,20.89,0,0,1,71,179.63c8.48-3,16.8-6.42,25.3-9.35a14.88,14.88,0,0,0,9.3-8.38c7.69-17.18,14.75-34.6,20.94-52.37a613,613,0,0,1,32-75.34c6.7-13.23,16.06-23.9,31-28.75C195.29,3.56,200.74.65,206.92,0h4c27.84,7,47.53,22.82,55.75,51.16a79.45,79.45,0,0,0,2.53,8.11c5.43,13.27,5.1,27.38,6,41.28.5,7.63.11,15.28.92,22.93A54.58,54.58,0,0,1,272.89,149a129,129,0,0,0-4.39,13.28c-1.65,6.28-.35,11.8,4.83,16.19,6.76,5.71,13.62,11.37,21.83,14.78,17.1,7.1,24.13,21.54,28.16,38.06,1.85,7.59,1.51,15.54,1.88,23.33,1,22.09.91,44.24,2.23,66.32.64,10.8,3.21,21.39,6,31.87a11.77,11.77,0,0,0,.71,1.87c3.78,8.37,4.91,8.7,12.74,4,19-11.25,36.3-24.8,53.85-38,14.06-10.57,29.15-16.18,46.78-15.37,10.3.48,20.63.35,30.86-1.62A21.64,21.64,0,0,1,492,305.66c2.13,1,4.16,2.48,4.26,5.11s-2,3.67-3.85,4.8c-7.45,4.5-15.55,5.43-23.5,4.37,4.38,1,8.92,3.14,13.59,4.85,9.23,3.37,18.53,6.55,28,9.28a14.26,14.26,0,0,1,3.74,1.38c.69.44,1.55.88,1.53,1.82,0,1.27-1.18,1.59-2.1,1.66-4.48.35-8.94.91-13.41,1.34-15.23,1.5-30.47,2.89-45.67,4.64-6.37.74-6.83,1.6-5.91,8.11a33.92,33.92,0,0,1,.48,7.46c-.24,3.42-2,4.77-5.34,3.92a29.56,29.56,0,0,1-5.69-1.84c-5.18-2.54-9.29-1.17-13.7,2.27-12.46,9.74-25.25,19.07-37.9,28.57a198.89,198.89,0,0,1-31.42,19.39,106.83,106.83,0,0,0-16.82,9.73c-5.64,4.19-12.16,6.87-18.71,9.34-2.37.9-4,2-3.71,5.05,1.26,12.42-.05,24.93,1.28,37.4,1.13,10.57,1.84,21.21,2.62,31.82.44,5.88-.75,7.43-6.6,8-31.6,3.31-63.22,6.45-94.83,9.75q-44.91,4.71-89.85,9.22c-20.51,2.08-41,4.73-61.62,5.2A1.56,1.56,0,0,0,66,538.81Z" /></svg>
            <svg className={classes.moneySVG} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244.21 172.04"><path onMouseOver={() => showToolTip(5)} onMouseOut={() => setShowTip(false)} onClick={() => judgeAnswer(5)} d="M4.48,85.69c2.17-2.64,4-4.58,5.45-6.74,1-1.43,3.83-2.94.07-4.89-1.73-.9.15-1.77,1-2.22A20.9,20.9,0,0,0,17,68.05c-4.56,0-9.12,0-13.68,0-1.06,0-2.45.62-3.09-.8a2.58,2.58,0,0,1,1-3.11c10.69-8.27,18.2-19.31,26.25-29.89a10.83,10.83,0,0,1,4.34-3.29c7.46-3,13.39-8,18.43-14.09,2.2-2.66,5.4-2.93,8.25-2.61,11.87,1.33,22.2-3.11,32.47-8a20.24,20.24,0,0,0,2.26-1.06c9.71-6.08,19.92-6.5,30.57-2.87C128.73,4,134.07,3.44,139,4.44c13.49,2.71,27,.68,40.51,1.58,1.5.1,2.64.38,3,1.94.95,4,3.94,5.32,7.47,6.39,8.4,2.56,16.2,6.88,25,8.46,2.41.44,3.59,2.86,5.43,4.25,5.84,4.41,11.52,9,17.75,12.93a31.31,31.31,0,0,1,4.61,3.78c2,1.93,2,3.22-.8,4.83-3.74,2.12-7.75,2.54-12.73,3,3.65,3.33,3.7,5.68-.8,7.07-1.52.47-1.44,2-1.16,3.41.8,4,2,7.67,4.79,10.79,3.85,4.26,3.74,4.37-1.93,6.18a54.58,54.58,0,0,0-5.63,2c-1.41.62-4.09.41-3.82,2.34s2.17,3.63,4.45,4.21c.16,0,.34,0,.5,0,2.58.69,6.45-1.1,7.55,1.62.76,1.88-1.36,4.91-2.19,7.43-2.37,7.1-4.9,14.15-7,21.32-1.05,3.52-2.5,5.14-6.28,3.7-1.46-.56-3.69-1.62-4.56,0-1.17,2.21,1.44,3,2.83,3.94,5.73,4,11.54,7.86,17.65,12-3.11,2.57-6.64,3.51-9.87,4.93-18.43,8-36.91,16-55.37,23.91-8.09-1.37-14.36,4.79-22,5.33-.82.06-2.07.31-2.41-.11-2.34-2.9-6.56-3.83-8.52-5.94-5.92-6.38-14.3-10.52-17.95-19-2.23-5.19-6.42-5.9-11.16-4.05-3.59,1.4-5.94,1.05-7-3.07s-3.8-4.73-7.91-4.26c-11.77,1.34-23.61.25-35.42.34-2.39,0-2.57-1.24-2.63-3.15-.15-5.16-.83-10.32-.69-15.46a8.92,8.92,0,0,0-3.75-8c-5.71-4.57-11.31-9.31-16.62-14.34-4.54-4.3-10.21-5.33-15.87-6.61C12.75,87.37,9,86.64,4.48,85.69Z" /></svg>
            <svg className={classes.book1SVG} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171.58 314.47"><path onMouseOver={() => showToolTip(4)} onMouseOut={() => setShowTip(false)} onClick={() => judgeAnswer(4)} d="M171.47,297.39v13c-1.14,1.13.1,2.86-1,4-55.41,0-110.82-.06-166.23.11-3.77,0-4.24-1-4.24-4.42Q.15,163,.08,16c3.35-2.35,7.36-1.87,11.06-2.25q58.13-5.85,116.23-12c8-.86,16.17-.35,24.17-1.72h9c1.82,2.09,1.55,4.65,1.57,7.13.21,23.42,1.7,46.81,2.22,70.23.4,18.43,1.21,36.85,1.9,55.28,1.1,29.05,2.05,58.1,3,87.15.65,19.1,1,38.19,1.36,57.29C170.72,283.84,170.38,290.66,171.47,297.39Z" /></svg>
            <svg className={classes.book2SVG} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248.33 381.42"><path onMouseOver={() => showToolTip(3)} onMouseOut={() => setShowTip(false)} onClick={() => judgeAnswer(3)} d="M0,172.74v-5a38.64,38.64,0,0,0,0-14v-1c1.52-12.15,2-24.39,3.33-36.56C5.2,99.05,7.21,81.91,8.9,64.73c1.41-14.37,3-28.72,4.63-43.07C14.25,15.37,16.39,9.9,21,5.26,24.39,1.81,28.47.69,32.91,0h14C55.09,1.16,63.4.75,71.63.84c18.09.21,36.18.42,54.26.83,21.39.49,42.8,1,64.15,2,14.91.76,29.87-.12,44.75,1.66,8.52,1,12.53,4.2,13,11.91q0,177.6,0,355.21c0,2,.27,4-.27,5.95a5.1,5.1,0,0,1-3.61,1.43c-1,.06-2,.05-3,0-45.67-.38-91.34.71-137,.51-24.24-.11-48.48.85-72.72.49-7.07-.16-14.16.31-21.23-.25-2.5-1.81-2.52-4.56-2.52-7.2,0-20.91-1.56-41.76-2.23-62.65-.78-24.35-2-48.7-3-73.06-.64-15.41-1-30.82-1.3-46.24C.78,185.26,1,179,0,172.74Z" /></svg>
            <svg className={classes.outSVG} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100"><path onMouseOver={() => showToolTip(2)} onMouseOut={() => setShowTip(false)} onClick={() => judgeAnswer(2)} d="M319,99.9q-157.34,0-314.67.1C.61,100,0,99.13,0,95.62Q.24,50,0,4.38C0,.87.61,0,4.31,0Q161.65.2,319,.1c.82,1.21.48,2.58.48,3.88q0,46,0,92C319.46,97.32,319.8,98.69,319,99.9Z" /></svg>
            <div className={`${classes.policeOutline} ${classes.outlineBox}`}>
                <img className={`${classes.outline} ${(tipId === 0 && showTip) && classes.active}`} src={policeImg} alt="outline" />
            </div>
            <div onMouseOver={() => showToolTip(1)} onMouseOut={() => setShowTip(false)} onClick={() => judgeAnswer(1)} className={`${classes.cloOutline} ${classes.outlineBox}`}>
                <img className={`${classes.outline} ${(tipId === 1 && showTip) && classes.active}`} src={cloImg} alt="outline" />
            </div>
            <div onMouseOver={() => showToolTip(5)} onMouseOut={() => setShowTip(false)} onClick={() => judgeAnswer(5)} className={`${classes.moneyOutline} ${classes.outlineBox}`}>
                <img className={`${classes.outline} ${(tipId === 5 && showTip) && classes.active}`} src={moneyImg} alt="outline" />
            </div>
            <div onMouseOver={() => showToolTip(4)} onMouseOut={() => setShowTip(false)} onClick={() => judgeAnswer(4)} className={`${classes.book1Outline} ${classes.outlineBox}`}>
                <img className={`${classes.outline} ${(tipId === 4 && showTip) && classes.active}`} src={book1Img} alt="outline" />
            </div>
            <div onMouseOver={() => showToolTip(3)} onMouseOut={() => setShowTip(false)} onClick={() => judgeAnswer(3)} className={`${classes.book2Outline} ${classes.outlineBox}`}>
                <img className={`${classes.outline} ${(tipId === 3 && showTip) && classes.active}`} src={book2Img} alt="outline" />
            </div>
            <div onMouseOver={() => showToolTip(2)} onMouseOut={() => setShowTip(false)} onClick={() => judgeAnswer(2)} className={`${classes.outOutline} ${classes.outlineBox}`}>
                <img className={`${classes.outline} ${(tipId === 2 && showTip) && classes.active}`} src={outImg} alt="outline" />
            </div>
        </div>
    )
}

export default SelectItem
