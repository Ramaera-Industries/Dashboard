import React from 'react'
import styled from 'styled-components'
import SmallNavBar from '../../../components/SmallNavBar/SmallNavBar'
import TextContainer from './components/TextContainer'
import Button from '../../../components/Button/Button'
import Input from './components/Input'

const Otp = () => {

    const StyledOtp = styled.div`
        background: linear-gradient(90deg, #141E30 0%, #243B55 100%);
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;
        padding: 2rem 0;
    `
    const Flex = styled.div`
        display: flex;
    `

  return (
    <StyledOtp>
        <SmallNavBar />
        <div style={{height:'6rem'}} />
        <TextContainer />
        <Flex>
            <Input />
            <Input />
            <Input />
            <Input />
        </Flex>
        <div style={{height:'6rem'}} />
        <Button Text="Done" fontSize="24px" fw="bold" ls="0" lightBorder big width="16rem"/>
    </StyledOtp>
  )
}

export default Otp