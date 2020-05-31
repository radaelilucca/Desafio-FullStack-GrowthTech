import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import PostsList from '../../components/PostsList';

function NewsFeed() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    function getCompaniesFromLocalStorage() {
      const hasCompanies = localStorage.getItem('selectedCompanies');
      if (!hasCompanies) {
        return;
      }
      setCompanies(hasCompanies.split(','));
    }
    getCompaniesFromLocalStorage();
  }, []);
  return (
    <Container>
      <Header />
      <PostsList companies={companies} />
    </Container>
  );
}

export default NewsFeed;
