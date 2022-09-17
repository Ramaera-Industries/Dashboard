import React from 'react'
import styled from 'styled-components'

const CardLayout = ({children}) => {

    const StyledHeaderCard = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        background: linear-gradient(90deg, #141E30 0%, #243B55 100%);

        @media only screen and (max-width: 1300px) {
            flex-direction: column;
            max-width: 888px;
        }
        @media only screen and (max-width: 520px) {
     
        }
    `

    return (
        <StyledHeaderCard>
            {children}
        </StyledHeaderCard>
    )
}

export default CardLayout
