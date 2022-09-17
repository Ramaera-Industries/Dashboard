import React from 'react';
import styled from 'styled-components';

const PageWidth = ({children,Left}) => {

  const StyledWidth = styled.section`
    width: 1400px;
    height: auto;
    display: flex;
    align-items: ${Left ? 'left' : 'center'} ;
    justify-content: space-between;
    flex-direction: column;
  @media only screen and (max-width: 1500px) {
      width: 95%;
  }
  @media only screen and (max-width: 1400px) {
      width: 98%;
  }
  @media only screen and (max-width: 540px) {
    width: 100%;
}
  
`;

  return (
    <StyledWidth >
      {children}
    </StyledWidth>
  )
};

export default PageWidth;
