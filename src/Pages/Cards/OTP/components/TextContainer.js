import React from 'react'
import styled from 'styled-components'
import Text from '../../../../components/Text/Text'
import Line from '../../../../components/Line/Line'

const TextContainer = () => {

    const StyledText = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

  return (
    <StyledText>
        <Text Text="We will send you one time password this email address." size="23.3px" fw="500" ls="0.05em" center/>
        <div style={{height:'1rem'}} />
        <Line width="90%"/>
        <div style={{height:'3rem'}} />
        <Text Text="( example123@gmail.com )" size="23.3px" fw="500" ls="0.05em" center />
        <div style={{height:'4rem'}} />
    </StyledText>
  )
}

export default TextContainer