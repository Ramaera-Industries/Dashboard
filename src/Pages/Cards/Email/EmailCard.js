import React from 'react'
import SmallNavBar from '../../../components/SmallNavBar/SmallNavBar'
import styled from 'styled-components'
import Line from '../../../components/Line/Line'
import TextContainer from './components/TextContainer'
import Image from './components/Image'
import Button from '../../../components/Button/Button'

const EmailCard = () => {

    const StyledEmailCard = styled.div`
        background: linear-gradient(90deg, #141E30 0%, #243B55 100%);
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;
        padding: 2rem 0;
    `

  return (
    <StyledEmailCard>
        <SmallNavBar />
        <div style={{height:'6rem'}} />
        <TextContainer />
        <div style={{height:'0.5rem'}} />
        <Line  width="45%" />
        <div style={{height:'7rem'}} />
        <Image />
        <div style={{height:'7rem'}} />
        <Button Text="Open" fontSize="24px" fw="bold" ls="0" lightBorder big width="16rem"/>
    </StyledEmailCard>
  )
}

export default EmailCard