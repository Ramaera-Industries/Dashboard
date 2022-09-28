import React from 'react'
import styled from 'styled-components'
import Text from '../../../../components/Text/Text'

const TextContainer = () => {

    const Flex = styled.div`
        display: flex;
        align-items: center;
    `
    const P = styled.p`
        background: -webkit-linear-gradient(#F9D423, #E65C00);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 23.3px;
        font-weight: 500;
        font-family: poppins;
    `

  return (
    <Flex>
        <Text Text="Welcome" size="23.3px" fw="500" ls="0.05em"/>
        <span style={{width:"0.5rem"}} />
        <P>Ramaera</P>
        <span style={{width:"0.3rem"}} />
        <Text Text=", Please enter the Code sent to your registered mail ID" size="23.3px" fw="500" ls="0.05em" />
    </Flex>
  )
}

export default TextContainer