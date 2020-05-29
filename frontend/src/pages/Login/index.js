import React from 'react';
import { Container, Content, FormContainer } from './styles';
import history from '../../services/history'


import logo from '../../assets/logo.svg'
import splash from '../../assets/splash.png'

function Login() { 
  function handleSubmit(e){
    e.preventDefault();

    history.push('/feed')
  }
  return (
    <Container className='container'>
      <Content>
        <FormContainer>
          <img className='logo' src={logo} alt="Simples Api" />
          <form>
            <input type="text" name="companyName" id="company" placeholder="NOME DA SUA EMPRESA" />
            <button type="submit">ACESSAR</button>
          </form>
        </FormContainer>
        <img src={splash} alt="Simples Api" />
       
      </Content>
    </Container>
  );
}

export default Login;