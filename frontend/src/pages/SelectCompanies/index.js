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
      }, 800);
    }

    function getCompaniesFromLocalStorage() {
      const hasCompanies = localStorage.getItem('selectedCompanies');
      if (!hasCompanies) {
        return;
      }
      setSelectedCompanies(hasCompanies.split(','));
    }

    loadCompanies();
    getCompaniesFromLocalStorage();
  }, []);

  function handleSubmit() {
    localStorage.setItem('selectedCompanies', selectedCompanies);
    history.push('/feed');
  }

  function handleSelectCompany(name) {
    const alreadySelected = selectedCompanies.findIndex(
      (company) => company === name
    );

    if (alreadySelected >= 0) {
      const filteredCompanies = selectedCompanies.filter(
        (company) => company !== name
      );
      setSelectedCompanies(filteredCompanies);
    } else {
      setSelectedCompanies([...selectedCompanies, name]);
    }
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
              selected={!!selectedCompanies.includes(company.name)}
              onClick={() => handleSelectCompany(company.name)}
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

      <ConfirmButton onClick={handleSubmit} type="button" loading={loading}>
        PROSSEGUIR
        <FaArrowRight size={18} />
      </ConfirmButton>
    </Container>
  );
}

export default SelectCompanies;
