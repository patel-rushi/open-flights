import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Card = styled.div`
 border: 1px solid rgba(0,0,0,0.1);
 border-radius: 5px;
 padding: 16px;
 margin: 0px 30px 10px 0px;
`
const RatingContainer = styled.div`
    display:flex;
    flex-direction:row;
`
const RatingScore = styled.div``
const Title = styled.div`
    padding: 20px 0 0 0;
    font-size: 20px;
`
const Description = styled.div`
    padding: 10px 0 20px 0;
    font-size: 26px;
`

const Review= (props) =>{
    const {score, title, description}=props.attributes

    return (
        <Card>
            <RatingContainer>
                <Rating 
                    score={score}
                />
            </RatingContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Card>
    )
}

export default Review