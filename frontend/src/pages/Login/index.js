import React, {useState} from 'react';
import { useHistory} from 'react-router-dom'
import { Container, Content, FormContainer } from './styles';
// import history from '../../services/history'


import logo from '../../assets/logo.svg'
import splash from '../../assets/splash.png'

function Login() { 
  const history = useHistory()
  const [companyName, setcompanyName] = useState('')

  function handleSubmit(e){
   e.preventDefault()
   localStorage.setItem('loggedCompany', companyName)
   history.push('/companies')
  
  }


  return (
    <Container className='container'>
      <Content>
        <FormContainer>
          <img className='logo' src={logo} alt="Simples Api" />
          <form onSubmit={handleSubmit}>
            <input type="text" name="companyName" id="company" placeholder="NOME DA SUA EMPRESA" onChange={(e) => setcompanyName(e.target.value)} required />            
            <button type="submit">ACESSAR</button>
           
          </form>
        </FormContainer>
        <img src={splash} alt="Simples Api" />
       
      </Content>
    </Container>
  );
}

export default Login;