import React from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import SmallNavBar from '../../components/SmallNavBar/SmallNavBar'
import SideBar from '../../components/SideBar/SideBar'
import PageWidth from '../../components/Width/PageWidth'
import Header from './components/Header'
import Kyc from './components/KYC/Kyc'
import Container from './components/Container'
import styled from 'styled-components'

const Profile = () => {

  const ResponsiveDisplay = styled.div`
      width: 75%;
    `

  return (
    <PageLayout bg="linear-gradient(90deg, #141E30 0%, #243B55 100%)" start>
        <SmallNavBar />
        <PageWidth margin="8rem 0 0 0">
        <Container>
            <SideBar />
            <ResponsiveDisplay>
              <Header />
              <Kyc />
            </ResponsiveDisplay>
          </Container>
        </PageWidth>
    </PageLayout>
  )
}

export default Profile