import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  padding: 0 5px;

  h1 {
    color: #41414d;
    margin-bottom: 20px;
  }
`;

export const PostList = styled.div`
  overflow-y: scroll;
  display: ${(props) => props.loading && 'none'};

  height: 570px;
  padding: 0 5px;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${lighten(0.2, '#285cd3')};
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${darken(0.1, '#285cd3')};
  }
`;

export const Post = styled.div`
  background: #fff;
  max-width: 800px;
  min-height: 110px;

  margin-bottom: 12px;
  padding: 2px;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const User = styled.div`
  display: flex;

  min-width: 320px;
  min-height: 100px;
  margin-top: 22px;
  margin-left: 18px;

  border-right: 1px solid #eee;

  img {
    height: 70px;
    margin-right: 12px;
    border-radius: 12px;
  }
  .info {
    display: flex;
    flex-direction: column;

    p {
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 4px;
    }

    span {
      color: #41414d;
    }
  }
`;
export const PostContent = styled.div`
  min-height: 110px;
  margin-top: 22px;
  margin-left: 10px;
  padding: 0 10px;

  p {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 6px;
  }
`;
