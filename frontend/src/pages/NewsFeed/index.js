import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import PostsList from '../../components/PostsList';
import logo from '../../assets/logoempresatest.svg';

function NewsFeed() {
  return (
    <Container>
      <Header />
      <h1>FEED DE NOTÍCIAS</h1>
      <PostsList />
    </Container>
  );
}

export default NewsFeed;
