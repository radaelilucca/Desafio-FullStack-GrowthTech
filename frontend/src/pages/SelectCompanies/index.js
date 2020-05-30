import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Container, CompaniesList, Company } from './styles';

import Header from '../../components/Header';
import logo from '../../assets/logoempresatest.svg';

function SelectCompanies() {
  const history = useHistory();
  function handleSubmit() {
    history.push('/feed');
  }
  return (
    <Container>
      <Header />
      <h1>Para começar, escolha as empresas que deseja seguir:</h1>
      <CompaniesList>
        <Company>
          <img src={logo} alt="EMPRESA" />
          <div className="companyInfos">
            <p>NOME DA EMPRESA</p>
            <span>Construindo sonhos, mundano vidas, fasenos casd ago</span>
          </div>
        </Company>
        <Company selected>
          <img src={logo} alt="EMPRESA" />
          <div className="companyInfos">
            <p>NOME DA EMPRESA</p>
            <span>CATCH FRASE</span>
          </div>
        </Company>
        <Company>
          <img src={logo} alt="EMPRESA" />
          <div className="companyInfos">
            <p>NOME DA EMPRESA</p>
            <span>CATCH FRASE</span>
          </div>
        </Company>
        <Company>
          <img src={logo} alt="EMPRESA" />
          <div className="companyInfos">
            <p>NOME DA EMPRESA</p>
            <span>CATCH FRASE</span>
          </div>
        </Company>
        <Company>
          <img src={logo} alt="EMPRESA" />
          <div className="companyInfos">
            <p>NOME DA EMPRESA</p>
            <span>CATCH FRASE</span>
          </div>
        </Company>
        <Company>
          <img src={logo} alt="EMPRESA" />
          <div className="companyInfos">
            <p>NOME DA EMPRESA</p>
            <span>CATCH FRASE</span>
          </div>
        </Company>
        <Company>
          <img src={logo} alt="EMPRESA" />
          <div className="companyInfos">
            <p>NOME DA EMPRESA</p>
            <span>CATCH FRASE</span>
          </div>
        </Company>
        <Company>
          <img src={logo} alt="EMPRESA" />
          <div className="companyInfos">
            <p>NOME DA EMPRESA</p>
            <span>CATCH FRASE</span>
          </div>
        </Company>
        <Company>
          <img src={logo} alt="EMPRESA" />
          <div className="companyInfos">
            <p>NOME DA EMPRESA</p>
            <span>CATCH FRASE</span>
          </div>
        </Company>
        <Company selected>
          <img src={logo} alt="EMPRESA" />
          <div className="companyInfos">
            <p>NOME DA EMPRESA</p>
            <span>CATCH FRASE</span>
          </div>
        </Company>
      </CompaniesList>
      <button id="confirmButton" type="button" onClick={handleSubmit}>
        PROSSEGUIR
        <FaArrowRight size={22} />
      </button>
    </Container>
  );
}

export default SelectCompanies;
