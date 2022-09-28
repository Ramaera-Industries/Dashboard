import React from 'react'
import styled from 'styled-components'

const Container = ({children}) => {

    const StyledContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
    `

  return (
    <StyledContainer >
        {children}
    </StyledContainer>
  )
}

export default Container