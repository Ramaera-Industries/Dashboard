import React from 'react'
import styled from 'styled-components'
import logo from './logo.png'
import Heading from '../../../../components/Heading/Heading'
import Text from '../../../../components/Text/Text'

const StyledLeftSide = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
  width: 85%;
`
const Margin = styled.div`
  height: 2rem;
`

const LeftSide = () => {
  return (
    <StyledLeftSide>
      <img src={logo} alt="" style={{height:'12rem',width:'12.5rem',margin:"3rem 0 5rem 0"}} />
      <Container>
        <Heading Text="Registration" fw="500" lh="40px" size="34px"/>
        <Heading Text="Become a partner" lh="40px" size="34px"/>
        <Margin />
        <Text roboto fw="500" size="14px"
          Text="RAMAERA is the future of upcoming Industrialisation in India,aiming presence in all kind of manufacturing sector’s"
        />
      </Container>
    </StyledLeftSide>
  )
}

export default LeftSide