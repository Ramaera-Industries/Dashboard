import React from 'react'
import styled from 'styled-components'
import SmallNavBar from '../../../components/SmallNavBar/SmallNavBar'
import TextContainer from './components/TextContainer'
import Button from '../../../components/Button/Button'
import Image from './components/Image'

const Verification = () => {

    const StyledVerification = styled.div`
        background: linear-gradient(90deg, #141E30 0%, #243B55 100%);
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;
        padding: 2rem 0;
    `

  return (
    <StyledVerification>
        <SmallNavBar />
        <div style={{height:'6rem'}} />
        <TextContainer />
        <div style={{height:'4rem'}} />
        <Image />
        <div style={{height:'4rem'}} />
        <Button Text="Next" fontSize="24px" fw="bold" ls="0" lightBorder big width="16rem"/>
    </StyledVerification>
  )
}

export default Verification