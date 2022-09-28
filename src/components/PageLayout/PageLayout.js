import React from 'react';
import styled from 'styled-components';

const PageLayout = ({children,bg,start,padding}) => {

  const StyledPageLayout = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: ${ start ? 'flex-start': 'center'};
    flex-direction: column;
    padding: ${padding ? padding : "2rem 0"};
    background: ${bg ? bg : '#e5e5e5'};
`;

  return (
    <StyledPageLayout>
      {children}
    </StyledPageLayout>
  )
};

export default PageLayout;
