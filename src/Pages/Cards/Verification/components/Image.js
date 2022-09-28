import React from 'react'
import styled from 'styled-components'
import img from './lappy.png'

const Image = () => {

    const StyledImage = styled.div`
        height: 20rem;
        width: 25rem;
    `

  return (
    <StyledImage>
        <img src={img} alt="" style={{height:'100%',width:'100%'}} />
    </StyledImage>
  )
}

export default Image