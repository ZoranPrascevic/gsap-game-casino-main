import React, { useState, useEffect } from 'react'
import classes from './SignsList.module.css'
import LineTo from 'react-lineto';

const optionList = [
    {
        text: 'The patron is spending an excessive amount of time gambling',
        errText: 'This patron has not been gambling for very long',
    },
    {
        text: 'The patron is spending an excessive amount of money gambling',
        errText: 'This patron has not spent a lot of money',
    },
    {
        text: 'The patron has lost household money on gambling. e.g. money that was intended to be used to pay for groceries, rent or bills',
        errText: 'There is no reason to believe this patron has lost household money',
    },
    {
        text: 'The patron is unable to meet loans or financial obligations due to gambling',
        errText: 'There is no reason to believe this patron is in that position',
    },
    {
        text: 'The patron has requested credit or a long for the purposes of gambling',
        errText: 'This patron has not asked for a loan or credit',
    },
    {
        text: 'The patron is threatening or causing physical harm to property, other patrons or themselves',
        errText: 'This patron has not caused or threatened any physical harm',
    },
    {
        text: 'The patron is participating in superstitious behavior to make the machine luckier',
        errText: 'This patron is not behaving in a superstitious way',
    },
    {
        text: 'The patron is paticipating in three or more gambling activities simultaneously',
        errText: 'This patron is not participating in 3 or more activities'
    },
]

const lineTos = [
    23, 30, 39.5, 51, 60, 68.5, 77.5, 86
]

const ListChild = ({ handleCorrect, isTrue, content, isChoice }) => {
    const [showCard, setShowCard] = useState(false)
    const [isntFalse, setIsntFalse] = useState(false)
    const [itemData, setItemData] = useState({
        text: "",
        errText: ""
    })
    const [isSelect, setIsSelect] = useState(false)

    useEffect(() => {
        setIsntFalse(isTrue);
        setItemData(content);
        setIsSelect(isChoice)
    }, [isTrue, content, isChoice])

    const handleClick = () => {
        if (isSelect) {
            if (isntFalse) {
                handleCorrect()
            } else {
                setShowCard(true)
            }
        }
    }
    return (
        <li onClick={handleClick} className={`${classes.optionItem} ${isSelect && classes.selectable}`}>
            {itemData.text}
            {
                showCard && (
                    <div className={classes.errCard}>
                        <div className={classes.errTimes}>&times;</div>
                        <div className={classes.errCardText}>{itemData.errText}</div>
                    </div>
                )
            }
        </li>
    )
}

const SignsList = ({ isSelect, closeBox, correctItems, handleCorrect }) => {

    const [corrects, setCorrects] = useState([9])
    const [isChoice, setIsChoice] = useState(false)
    useEffect(() => {
        setIsChoice(isSelect)
        setCorrects(correctItems)
    }, [isSelect, correctItems])

    return (
        <div className={classes.signsListWrapper}>
            <div className={classes.listPaper}>
                <div onClick={closeBox} className={classes.closeBtn}><span>&times;</span></div>
                <div className={classes.paperHeading}>SIGNS OF PROBLEM GAMBLING</div>
                <ul className={classes.signsSelect}>
                    {
                        optionList.map((item, index) =>
                            <ListChild key={index} handleCorrect={handleCorrect} isTrue={corrects.includes(index) ? true : false} content={item} isChoice={isChoice} />
                        )
                    }
                </ul>
            </div>
            {
                isChoice && (
                    <div className={classes.helperPaper}>
                        <div className={classes.helperHeader}>WHY ARE YOU TAKING ACTION?</div>
                        <div className={classes.helperGuide}>Please click on the "Sign of Problem Gambling" (right) that relates to the reason you are taking action.</div>
                        <div className={classes.helperCancel}>To cancel please close the signs of problem gambling document.</div>
                        {
                            lineTos.map((item, index) => {
                                return (
                                    <LineTo fromAnchor="24.5% 50%" toAnchor={"31.5% " + item + "%"} key={index} borderStyle="dashed" borderColor="#2b2b2b" borderWidth={2} from={classes.signsListWrapper} to={classes.signsListWrapper} within={classes.signsListWrapper} />
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default SignsList
