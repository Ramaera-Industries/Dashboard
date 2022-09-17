import React from 'react';
import styled from 'styled-components';

const PageLayout = ({children}) => {

  const StyledPageLayout = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    // padding: 8rem 0 4rem 0;
    background-color: #e5e5e5;
`;

  return (
    <StyledPageLayout >
      {children}
    </StyledPageLayout>
  )
};

export default PageLayout;
