import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, PostList, Post, User, PostContent } from './styles';

import api from '../../services/api';

function PostsList({ companies }) {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const data = {
    selectedCompanies: companies,
  };
  useEffect(() => {
    async function loadPosts() {
      const response = await api.post('/posts', data);

      setPosts(response.data);

      setLoading(false);
      setLoaded(true);
    }

    loadPosts();
  }, [loaded]);

  function handleGoToUser(id) {
    history.push(`/user/profile/${id}`);
  }

  return (
    <Container>
      <PostList loading={loading}>
        {posts.map((post) => (
          <Post key={post.id}>
            <User
              onClick={() => {
                handleGoToUser(post.user.id);
              }}
            >
              <img
                src={`https://api.adorable.io/avatars/70/abo${post.user.id}@adorable.png`}
                alt="USER"
              />
              <div className="info">
                <p>{post.user.name}</p>
                <span className="company">
                  Company: {post.user.company.name}
                </span>
                <span> City: {post.user.address.city} </span>
              </div>
            </User>

            <PostContent>
              <p> {post.title} </p>
              <content>{post.body}</content>
            </PostContent>
          </Post>
        ))}
      </PostList>
    </Container>
  );
}

export default PostsList;
