import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 22px;
    width: 100%;
    margin-left: 38%;
  }

  #confirmButton {
    font-size: 20px;
    font-weight: bold;
    color: #fff;

    width: 185px;
    height: 50px;
    border-radius: 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
`;

export const CompaniesList = styled.ul`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  grid-column-gap: 30px;
`;

export const Company = styled.div`
  display: flex;
  background: ${(props) => (props.selected === true ? '#c6d7ff' : '#fff')};
  border-radius: 12px;
  width: 350px;
  height: 100px;
  padding: 8px;
  transition: 0.3s;

  &:hover {
    background: #c6d7ff;
  }

  .selected {
    background: #c6d7ff;
  }

  img {
    height: 80px;
    width: 80px;
    border-right: 1px solid #eee;
    padding-right: 5px;
  }

  .companyInfos {
    flex: 1;
    padding: 10px 5px;
    margin-left: 14px;

    p {
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
  }
`;
