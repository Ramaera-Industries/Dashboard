import React from 'react'
import styled from 'styled-components'
import Input from '../../../../components/Input/Input'
import Button from '../../../../components/Button/Button'
import GridDisplay from './components/GridDisplay'

const Kyc = () => {

const StyledKyc = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

  return (
    <StyledKyc>
      <div style={{height:'2rem'}} />
      <GridDisplay>
        <Input color="#FFF" placeholder="ID" width="12rem"/>
        <Input color="#FFF" placeholder="Name" width="12rem"/>
        <Input color="#FFF" placeholder="Father's Name" width="12rem"/>
        <Input color="#FFF" placeholder="Mobile No." width="12rem"/>
        <Input color="#FFF" placeholder="Alternate Mobile No." width="12rem"/>
        <Input color="#FFF" placeholder="Email ID" width="12rem"/>
        <Input color="#FFF" placeholder="DOB(DD/MM/YYYY)" width="12rem"/>
        <Input color="#FFF" placeholder="Create Password" width="12rem"/>
      </GridDisplay>
      <div style={{height:'8rem'}} />
      <Button Text="Next" 
      fontSize="24px" fw="bold" ls="0"
      lightBorder width="10rem" height="3rem"
      margin="0 20% 0 0"
      />
    </StyledKyc>
  )
}

export default Kyc