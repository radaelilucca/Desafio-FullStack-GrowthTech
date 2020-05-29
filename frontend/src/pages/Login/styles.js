import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,400&display=swap');

  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 

`;


export const Content = styled.div`
  min-width: 1140px;
  min-height: 600px;
  background: #fff;

  border-radius: 50px;

  display: flex;
  justify-content: space-between;


`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;

  border-right: 1px solid #eee;

 form {
   display: flex;
   flex-direction: column;

  input {
    width: 350px;
    height: 54px;
    border: 2px solid #285CD3;
    border-radius: 12px;
    color: #41414d;
    text-align: center;
    font: 16px 'Roboto';
    text-transform: uppercase;

  }

  button {
    width: 350px;
    height: 54px;
    color: #fff;
    font-family: 'Roboto';
    font-weight: bold;

    border: none;
    border-radius: 12px;

    margin-top: 14px;
  }
 }

 img {
   width: 380px;
 }
`




