import React from 'react'
import Logo from './components/Logo'
import styled from 'styled-components'
import Line from '../Line/Line'

const SmallNavBar = () => {

    const StyledNavBar = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

  return (
    <StyledNavBar>
        <Logo />
        <div style={{height:'0.25rem'}} />
        <Line height="2px" width="90%"/>
    </StyledNavBar>
  )
}

export default SmallNavBar