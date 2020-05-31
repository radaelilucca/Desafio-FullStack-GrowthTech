import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import {
  Container,
  Content,
  ProfileCard,
  ProfileHeader,
  PostsContainer,
} from './styles';

import Header from '../../components/Header';
import PostsList from '../../components/PostsList';

function UserProfile() {
  const [user, setUser] = useState({});
  const [company, setCompany] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getUser() {
      const response = await api.get(`/users/${id}`);

      setUser(response.data);
      setCompany(response.data.company.name);
    }

    getUser();
    console.log(user);
  }, []);

  return (
    <Container>
      <Header />
      <h1>ATIVIDADES DO USUÁRIO</h1>
      <Content>
        <ProfileCard>
          <img
            src={`https://api.adorable.io/avatars/70/abo${user.id}@adorable.png`}
            alt={user.name}
          />
          <ProfileHeader>
            <h2>{user.name}</h2>
            <p>@{user.username}</p>
          </ProfileHeader>
        </ProfileCard>
        <PostsContainer>
          <PostsList companies={company} />
        </PostsContainer>
      </Content>
    </Container>
  );
}

export default UserProfile;
