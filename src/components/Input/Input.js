import React from 'react'
import styled from 'styled-components'
import Line from '../Line/Line'

const Input = (props) => {

    const StyledInput = styled.input`
        color: #082F37;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;  
        border: none; 

        &:placeholder{
            color: #A1A1A1;
            Font style: Medium
            Font size: 14px
            Line height: 21px
            Line height: 100%
        }

        &:focus, &:focus{
            outline: none;
        }
    ` 
    const Div = styled.div`
        margin: 3rem 0 0 0;
        width: 26rem;
    `

  return (
    <Div>
        <StyledInput placeholder={props.placeholder ? props.placeholder : "placeholder"} />
        <div style={{height:'0.5rem'}} />
        <Line />
    </Div>
  )
}

export default Input