import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #41414d;
    margin-bottom: 40px;
    align-self: flex-start;
    margin-left: 18%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  background: #fff;
  height: 542px;
  width: 430px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const ProfileCard = styled.div`
  height: 542px;
  width: 430px;
  color: #41414d;
  display: flex;
  width: 100%;
  flex-direction: column;

  .wavebox {
    height: 542px;
    width: 430px;
  }

  .avatar {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin-top: 25px;
    border: 4px solid #fff;
    align-self: center;
    position: absolute;
    transition: 0.3s;

    &:hover {
      border-radius: 5px;
      transform: scale(1.1);
    }
  }

  .header {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 36px;
      margin-top: 4px;
      color: #41414d;
    }

    p {
      font-size: 20px;
      opacity: 0.7;
    }
  }

  .infos {
    align-self: flex-start;
    margin-left: 20px;

    div {
      display: flex;
      p {
        margin-right: 4px;
        margin-bottom: 10px;
        font-weight: bold;
        color: #41414d;
        font-size: 19px;
      }

      span {
        color: #41414d;
        font-size: 19px;
        margin-bottom: 6px;
      }
    }
  }

  .actButtons {
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
  }
  .butt {
    background: #285cd3;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s;

    &:hover {
      transform: scale(1.3);
    }
  }
`;
export const PostsContainer = styled.div`
  overflow: hidden;
  height: 542px;

  h1 {
    display: none;
  }
`;
