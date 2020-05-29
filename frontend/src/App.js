import 'dotenv/config'
import React from 'react';
import GlobalStyle from './styles/global'

import Routes from './routes'


function App() {
  return (
    <Routes>
      <GlobalStyle />
    </Routes>
  );
}

export default App;
