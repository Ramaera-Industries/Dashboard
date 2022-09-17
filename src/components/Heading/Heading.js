import React from 'react'
import styled from 'styled-components'

const Heading = (props) => {

  const StyledHeading = styled.h1`
    font-size:${props.size ? props.size : "30px"};
    font-weight: ${props.fw ? props.fw : "700"};
    line-height: ${props.lh ? props.lh : "45px"};
    text-align: ${props.center ? "center" : "left"} !important;
    color: ${props.color ? props.color : "#ffffff"};
    font-family: ${props.roboto ? "Roboto" : "Poppins"};

    @media only screen and (max-width: 1500px) {
      font-size:${props.lg ? props.lg : "27px"};
    }

    @media only screen and (max-width: 1200px) {
      font-size:${props.xm ? props.xm : "22px"};
    }

    @media only screen and (max-width: 768px) {
      font-size:${props.ms? props.ms : "16px"};
    }
    `
    
    return (
      <StyledHeading> 
        {props.Text ? props.Text : "Default Heading"}
      </StyledHeading>
    )
}

export default Heading
