import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import PostsList from '../../components/PostsList';
import Loading from '../../components/Loading';

function NewsFeed() {
  const [companies, setCompanies] = useState([]);
  const [nocompanies, setNoCompanies] = useState(false);

  useEffect(() => {
    function getCompaniesFromLocalStorage() {
      const hasCompanies = localStorage.getItem('selectedCompanies');
      if (!hasCompanies) {
        setNoCompanies(true);
        return;
      }
      setCompanies(hasCompanies.split(','));
      setNoCompanies(false);
    }
    getCompaniesFromLocalStorage();
  }, []);

  return (
    <Container>
      <Header />
      <h1>FEED DE NOTÍCIAS</h1>
      <PostsList companies={companies} />
    </Container>
  );
}

export default NewsFeed;
