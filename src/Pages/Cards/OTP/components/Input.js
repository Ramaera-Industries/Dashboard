import React from 'react'
import styled from 'styled-components'

const Input = () => {

    const StyledInput = styled.input`
        background: linear-gradient(180deg, #ECE9E6 0%, #FFFFFF 100%);
        border-radius: 8px;
        height: 146px;
        width: 84.18px;
        border: none;
        margin: 0 1.5rem;
        text-align: center;
        font-size: 57.34px;

        &:focus, &:focus{
            outline: none;
        }
    `

  return (
    <StyledInput>
       
    </StyledInput>
  )
}

export default Input