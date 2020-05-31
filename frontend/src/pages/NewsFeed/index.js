import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import PostsList from '../../components/PostsList';

function NewsFeed() {
  const companies = {
    selectedCompanies: ['Robel-Corkery', 'Considine-Lockman'],
  };
  return (
    <Container>
      <Header />
      <PostsList companies={companies} />
    </Container>
  );
}

export default NewsFeed;
