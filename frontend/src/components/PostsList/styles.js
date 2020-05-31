import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px 0;

  h1 {
    color: #41414d;
    margin-bottom: 20px;
  }
`;

export const PostList = styled.ul``;

export const Post = styled.li`
  background: #fff;
  max-width: 800px;
  min-height: 110px;

  margin-bottom: 12px;
  padding: 2px;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const User = styled.div`
  display: flex;

  min-width: 300px;
  min-height: 100px;
  margin-top: 22px;
  margin-left: 18px;

  border-right: 1px solid #eee;

  img {
    height: 70px;
    margin-right: 12px;
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
