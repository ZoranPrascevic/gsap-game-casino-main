import React, {useState, useEffect} from 'react'
import firstBook from '../../media/video/book1.mp4'
import secondBook from '../../media/video/book2.mp4'
import classes from './PickVideo.module.css'

const PickVideo = ({bookID, handlePickEnd}) => {

    const [bookItem, setBookItem] = useState(false);
    
    useEffect(() => {
        setBookItem(bookID)
    }, [bookID])

    return (
        <div className={classes.pickVideoWrapper}>
            <video src={bookItem ? secondBook : firstBook} autoPlay onEnded={handlePickEnd} playsInline />
        </div>
    )
}

export default PickVideo
