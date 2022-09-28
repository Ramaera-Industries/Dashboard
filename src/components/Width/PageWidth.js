import React from 'react';
import styled from 'styled-components';

const PageWidth = ({children,Left,full,padding,margin}) => {

  const StyledWidth = styled.section`
    width: ${full ? '100%' : '1400px'};
    height: auto;
    display: flex;
    align-items: ${Left ? 'left' : 'center'} ;
    justify-content: space-between;
    flex-direction: column;
    padding: ${padding ? padding : '0'};
    margin: ${margin ? margin : '0'};
  @media only screen and (max-width: 1500px) {
      width: ${full ? '100%' : '95%'};
  }
  @media only screen and (max-width: 1400px) {
      width: ${full ? '100%' : '98%'} ;
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
