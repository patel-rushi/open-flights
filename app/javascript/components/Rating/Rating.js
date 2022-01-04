import './Rating.css'
import React from 'react'

const Rating = (props) => {
    const score = (props.score/5)*100
    return (
        <span class='star-wrapper'>
            <span class='stars' style={{width: score+"%"}}></span>
        </span>
    )
}

export default Rating