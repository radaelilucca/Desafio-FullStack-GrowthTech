import React from 'react';
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
  return (
    <Container>
      <Content>
        <img src={logo} alt="API SIMPLES - ME dê minha vaga!" />
        <div className="welcomeText">
          <span>Bem vinda,</span>
          <p>{logged}</p>
        </div>
      </Content>
      <Nav>
        <SettingsButton>
          PREFERENCIAS
          <FaUsersCog size={26} />
        </SettingsButton>
        <LogoutButton color="#fff" />
      </Nav>
    </Container>
  );
}

export default Header;
