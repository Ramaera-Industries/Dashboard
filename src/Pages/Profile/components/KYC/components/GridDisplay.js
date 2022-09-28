import React from 'react'
import styled from 'styled-components'

const GridDisplay = ({children}) => {

    const StyleGridDisplay = styled.div`
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, minmax(13rem, 1fr));
        //place-items: center;
        row-gap: 1.5rem;
    `

  return (
    <StyleGridDisplay >
        {children}
    </StyleGridDisplay>
  )
}

export default GridDisplay