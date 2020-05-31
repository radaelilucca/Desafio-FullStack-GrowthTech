import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { FaArrowRight, FaTrashAlt } from 'react-icons/fa';
import {
  Container,
  CompaniesList,
  Company,
  ConfirmButton,
  ClearButton,
} from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

function SelectCompanies() {
  const history = useHistory();

  const [availableCompanies, setAvailableCompanies] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  function addInitialAndSelected(item) {
    item.initial = item.name.charAt(0);
    item.selected = false;
    item.id = Math.floor(Math.random() * 101);
  }

  useEffect(() => {
    async function loadCompanies() {
      const response = await api.get('/companies');
      const laodedCompanies = response.data;

      laodedCompanies.forEach(addInitialAndSelected);

      setAvailableCompanies(laodedCompanies);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }

    function getCompaniesFromLocalStorage() {
      const hasCompanies = localStorage.getItem('selectedCompanies');
      if (!hasCompanies) {
        return;
      }
      setCompanies(hasCompanies.split(','));
    }

    loadCompanies();
    getCompaniesFromLocalStorage();
  }, []);

  function handleSubmit() {
    localStorage.setItem('selectedCompanies', companies);
    history.push('/feed');
  }

  function handleSelectCompany(company) {
    setSelectedCompanies([...selectedCompanies, company]);
    setCompanies([...companies, company.name]);
  }

  function clearSelection() {
    setSelectedCompanies([]);
    setCompanies([]);
    localStorage.removeItem('selectedCompanies');
  }

  return (
    <Container>
      <Header />
      <h1>Para começar, escolha as empresas que deseja seguir:</h1>

      {loading ? (
        <Loading />
      ) : (
        <CompaniesList>
          {availableCompanies.map((company) => (
            <Company
              key={company.id}
              selected={!!companies.includes(company.name)}
              onClick={() => handleSelectCompany(company)}
            >
              <img
                src={`http://localhost:3333/logo-${company.initial}.svg`}
                alt="EMPRESA"
              />
              <div className="companyInfos">
                <p> {company.name} </p>
                <span>{company.catchPhrase}</span>
              </div>
            </Company>
          ))}
        </CompaniesList>
      )}
      <div className="buttons">
        <ClearButton onClick={clearSelection} type="button" loading={loading}>
          LIMPAR
          <FaTrashAlt size={18} />
        </ClearButton>
        <ConfirmButton onClick={handleSubmit} type="button" loading={loading}>
          PROSSEGUIR
          <FaArrowRight size={18} />
        </ConfirmButton>
      </div>
    </Container>
  );
}

export default SelectCompanies;
