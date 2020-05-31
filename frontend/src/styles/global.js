import { darken } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,400&display=swap');


* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%; 
    width: 100vw; 

  }
  body {
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0f0f0;
       
  }


  body, input, button {
    font: 14px 'Roboto', sans-serif;   
 }
  a {
    text-decoration: none;
    } 
  ul {
    list-style: none;
    } 
  }

  button {
    cursor: pointer;
    background: #285CD3;
    transition: 0.2s;
    border: 0;

    &:hover {
      background: ${darken(0.03, '#285CD3')}
    }
  }


`;
