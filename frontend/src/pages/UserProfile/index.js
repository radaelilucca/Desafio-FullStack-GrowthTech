import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FaMapMarkedAlt, FaPhone, FaPaperPlane, FaGlobe } from 'react-icons/fa';

import api from '../../services/api';

import wave from '../../assets/wave.svg';
// import gridLoading from '../../assets/gridloading.png';

import {
  Container,
  Content,
  ProfileContainer,
  ProfileCard,
  ProfileHeader,
  PostsContainer,
} from './styles';

import Header from '../../components/Header';
import PostsList from '../../components/PostsList';
import Loading from '../../components/Loading';

function UserProfile() {
  const [user, setUser] = useState({});
  const [company, setCompany] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getUser() {
      const response = await api.get(`/users/${id}`);

      setUser(response.data);
      setCompany(response.data.company.name);
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    }

    getUser();
  }, []);

  return (
    <Container>
      <Header />
      <h1>ATIVIDADES DO USUÁRIO</h1>
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <ProfileContainer>
            <ProfileCard>
              <img className="wave" src={wave} alt="" />

              <img
                className="avatar"
                src={`https://api.adorable.io/avatars/70/abo${user.id}@adorable.png`}
                alt={user.name}
              />

              <div className="header">
                <h2>{user.name}</h2>
                <p>@{user.username}</p>
              </div>
              <div className="actButtons">
                <div className="butt">
                  <FaMapMarkedAlt color="#fff" size={35} />
                </div>
                <div className="butt">
                  <FaPhone color="#fff" size={35} />
                </div>
                <div className="butt">
                  <FaPaperPlane color="#fff" size={35} />
                </div>
                <div className="butt">
                  <FaGlobe color="#fff" size={35} />
                </div>
              </div>
              <div className="infos">
                <div>
                  <p>company:</p>
                  <span>{user.company.name}</span>
                </div>
                <div>
                  <p>email:</p>
                  <span>{user.email}</span>
                </div>
                <div>
                  <p>phone:</p>
                  <span>{user.phone}</span>
                </div>
                <div>
                  <p>city:</p>
                  <span>{user.address.city}</span>
                </div>
                <div>
                  <p>website:</p>
                  <span>{user.website}</span>
                </div>
              </div>
            </ProfileCard>
          </ProfileContainer>
          <PostsContainer>
            <PostsList companies={company} loading={loading} />
          </PostsContainer>
        </Content>
      )}
    </Container>
  );
}

export default UserProfile;
