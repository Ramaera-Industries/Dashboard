import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import PageWidth from '../../components/Width/PageWidth';
import RegisterCard from '../Cards/RegisterCard/RegisterCard';

const HomePage = () => {
  return (
    <PageLayout>
      <PageWidth>
        <RegisterCard />
      </PageWidth>
    </PageLayout>
  )
};

export default HomePage;
