import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FaPowerOff, FaUsersCog } from 'react-icons/fa';

import {
  Container,
  Content,
  Nav,
  SettingsButton,
  LogoutButton,
} from './styles';

import logo from '../../assets/logoHeader.svg';

const logged = localStorage.getItem('logged');

function Header() {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <Link to="/feed">
          <img src={logo} alt="API SIMPLES - ME dê minha vaga!" />
        </Link>
        <div className="welcomeText">
          <span>Bem vinda,</span>
          <p>{logged}</p>
        </div>
      </Content>
      <Nav>
        <SettingsButton
          onClick={() => {
            history.push('/companies');
          }}
        >
          PREFERENCIAS
          <FaUsersCog size={26} />
        </SettingsButton>
        <LogoutButton
          color="#fff"
          onClick={() => {
            localStorage.clear();
            history.push('/');
          }}
        />
      </Nav>
    </Container>
  );
}

export default Header;
