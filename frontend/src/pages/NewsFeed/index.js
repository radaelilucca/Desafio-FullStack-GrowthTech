import React from 'react';
import { Container } from './styles';

function NewsFeed() {
  const logegd = localStorage.getItem('loggedCompany')
  return <h1>{logegd}</h1>;
}

export default NewsFeed;