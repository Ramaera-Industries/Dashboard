import React from 'react'
import styled from 'styled-components'

const Line = (props) => {

  const StyledLine = styled.div`
    height: ${props.height ? props.height : "1px"} ;
    width: ${props.width ? props.width : "100%"};
    background: ${props.bg ? props.bg : "#E5E5E5"};
    margin: ${props.margin ? props.margin : '0'};
`

  return (
    <StyledLine />
  )
}

export default Line