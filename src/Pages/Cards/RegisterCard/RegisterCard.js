import React from 'react'
import CardLayout from '../../../components/CardLayout/CardLayout'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import styled from 'styled-components'

const ResponsiveDisplay = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
  }
`

const RegisterCard = () => {
  return (
    <CardLayout>
      <ResponsiveDisplay>
        <LeftSide />
        <RightSide />
      </ResponsiveDisplay>
    </CardLayout>
  )
}

export default RegisterCard