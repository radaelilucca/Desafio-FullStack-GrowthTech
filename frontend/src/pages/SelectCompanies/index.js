import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Container, CompaniesList, Company } from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import fakeLogos from './logos';

function SelectCompanies() {
  const history = useHistory();
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleSubmit() {
    setCompanies(['Robel-Corkery']);
    history.push('/feed');
  }
  function addInitial(item) {
    item.initial = item.name.charAt(0);
    console.log(item);
  }
  useEffect(() => {
    async function loadCompanies() {
      const response = await api.get('/companies');
      const laodedCompanies = response.data;

      laodedCompanies.forEach(addInitial);

      setCompanies(laodedCompanies);
      setLoading(false);
    }

    loadCompanies();
  }, []);

  return (
    <Container>
      <Header />
      <h1>Para começar, escolha as empresas que deseja seguir:</h1>
      {loading ? (
        <h1>LOADING</h1>
      ) : (
        <CompaniesList>
          {companies.map((company) => (
            <Company initial={company.initial}>
              <img src="/fake/logo-c.svg" alt="EMPRESA" />
              <div className="companyInfos">
                <p> {company.name} </p>
                <span>{company.catchPhrase}</span>
              </div>
            </Company>
          ))}
        </CompaniesList>
      )}
      <button id="confirmButton" type="button" onClick={handleSubmit}>
        PROSSEGUIR
        <FaArrowRight size={22} />
      </button>
    </Container>
  );
}

export default SelectCompanies;
