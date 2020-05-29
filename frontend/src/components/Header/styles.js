import styled from 'styled-components';
import {darken} from 'polished'
import {FaPowerOff} from 'react-icons/fa'

export const Container = styled.div`
  width: 70vw;
  max-width: 1040px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;  

 
  `;

export const Content  = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 220px;
    margin: 0 20px;
    
  }

 p{
   font-size: 16px;
   font-weight: bold;
 }

 span{
   font-size: 16px;   
 }

`

export const Nav  = styled.div`
  display: flex;

`

export const SettingsButton  = styled.button`
  height: 45px;
  width: 180px;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  border: none;
  border-radius: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
`
export const LogoutButton = styled(FaPowerOff).attrs({size: 20})`
  margin-left: 18px; 
  background: #285CD3;
  border-radius: 12px;
  width: 45px;
  height: 45px;
  padding: 8px; 
  &:hover {
      background: ${darken(0.03, '#285CD3')}
    }

  

`
