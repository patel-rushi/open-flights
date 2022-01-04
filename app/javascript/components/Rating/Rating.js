import React from 'react'
import './Rating.css'

const Rating = (props) => {
    const score = (props.score/5)*100
    return (
        <span className='star-wrapper'>
            <span className='stars' style={{width: score+"%"}}>
            </span>
            <i class="far fa-address-book"></i>
            <i class="fab fa-github"></i>
            
        </span>
    )
}

export default Rating