import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw;

  h1 {
    color: #41414d;
    margin-bottom: 18px;
    align-self: flex-start;
    margin-left: 18%;
  }

  .buttons {
    display: flex;
    width: 730px;
    justify-content: space-between;
  }
`;

export const CompaniesList = styled.ul`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
export const ConfirmButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  width: 170px;
  height: 45px;
  border-radius: 12px;
  display: ${(props) => (props.loading ? 'none' : 'flex')};
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const ClearButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  width: 116px;
  height: 45px;
  border-radius: 12px;
  display: ${(props) => (props.loading ? 'none' : 'flex')};
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-right: 22px;
`;
