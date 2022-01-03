import React, {Fragment} from 'react'
import styled from 'styled-components'
import Hover from './Stars/Hover'
import Gray from './Stars/Gray'
import Selected from './Stars/Selected'

const RatingContainer = styled.div `
    text-align:center;
    border-radius: 4px;
    font-size: 18px;
    padding:40px 0 10px 0;
    border: 1px solid #e6e6e6;
    background: #fff;
`
const RatingBox = styled.div `
background: #fff;
display:flex;
justify-content:center;
flex-direction:row-reverse;

position:relative;

input{
    display:none;
}

label{
    cursor: pointer;
    width:40px;
    height:40px;
    background-image: url('/star/star-gray.svg');
    background-repeat: no-repeat;
    background-position:center;
    background-size:70%;


}

input:checked ~ label,
input:checked ~ label ~ label {
    background-image: url('/star/star-selected.svg');
}

input:not(:checked) ~ label:hover,
input:not(:checked) ~ label:hover ~ label{
    background-image: url('/star/star-hover.svg');
}
`
const Field = styled.div `
    border-radius:4px;
    width: 100%;
    input{
        min-height:50px;
        border-radius:4px;
        border: 1px solid #e6e6e6;
        margin: 12px 0;
        padding:12px;
        width: 96%;
    }

    textarea{
        width: 100%;
        min-height:80px;
        border-radius:4px;
        border: 1px solid #e6e6e6;
        margin: 12px 0;
        padding:12px;
    }
`
const Wrapper = styled.div `
    background: #000;
    padding: 20px;
    height: 100vh;
    padding-top: 100px;
`
const SubmitBtn = styled.button `
    color: #fff;
    background: #333;
    border-radius:4px;
    padding: 12px;
    font-size:18px;
    cursor: pointer;
    transition: easy-in-out 0.1s;
    border: 1px solid #fff;
    margin-top: 50px;
    text-align:center;
    width: 100%;
    &:hover{
        background: #fff;
        color: #000;
        border: 1px solid #fff;
    }
`
const Headline = styled.div `
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
`
const RatingTitle = styled.div `
    font-size: 20px:
    padding-bottom: 20px;
    font-weight: bold;
`

//const RatingTitle = styled.div ``


const ReviewForm = (props) =>{
    const ratingOptions = [5,4,3,2,1].map((score,index)=>{
        return(<Fragment>
            <input type="radio" value={score} checked={props.review.score == score} name="rating" onChange={()=>console.log('selected:', score)} id={`rating-${score}`}></input>
            <label onClick={props.setRating.bind(this, score)}></label>
        </Fragment>
    )})
    return(
        <Wrapper>
            <form onSubmit={props.handleSubmit}>
                <Headline>Have an experience with {props.attributes.name}? Share your review </Headline>
                
                <Field>
                    <input onChange={props.handleChange} type="text" value={props.review.title ||""} name="title" placeholder="Review Title"></input>
                </Field>

                <Field>
                    <input onChange={props.handleChange} type="text" name="description" value={props.review.description ||""} placeholder="Review Description"></input>
                </Field>

                <Field>
                    <RatingContainer>
                        <RatingTitle>Rate this airline</RatingTitle>
                        <RatingBox>
                        {ratingOptions}
                        </RatingBox>
                    </RatingContainer>
                </Field> 
                <SubmitBtn type='submit'>Submit your review</SubmitBtn>
            </form>
        </Wrapper>
    )
}

export default ReviewForm