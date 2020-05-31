import 'dotenv/config';
import React from 'react';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';

import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
