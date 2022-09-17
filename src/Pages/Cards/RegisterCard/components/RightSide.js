import React from 'react'
import styled from 'styled-components'
import Heading from '../../../../components/Heading/Heading'
import Text from '../../../../components/Text/Text'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input'

const StyledRightSide = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 30px 0 0 30px;
  padding: 4rem 0 2.5rem 0;
`
const Container = styled.div`
  width: 80%;
`
const Margin = styled.div`
  height: 0.25rem;
`

const RightSide = () => {
  return (
    <StyledRightSide>
      <Container>
        <Heading 
          color="#45586B" size="30px" lh="45px"
          Text="Register Individual Account!"
        />
        <Margin />
        <Text 
          color="#8692A6" size="18px" lh="28px" fw="Regular"
          Text="For the purpose of industry regulation, your details are required."
        />
      </Container>
      <div>
        <Input  />
        <Input  />
        <Input  />
        <Input  />
        <Input  />
      </div>
      <Margin style={{height:'2rem'}} />
      <Button Text="Sign Up" />
    </StyledRightSide>
  )
}

export default RightSide