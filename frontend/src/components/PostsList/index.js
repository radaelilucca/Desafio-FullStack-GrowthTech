import React, { useEffect, useState } from 'react';

import { Container, PostList, Post, User, PostContent } from './styles';

import api from '../../services/api';

import logo from '../../assets/logoempresatest.svg';

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('/posts', {
        params: {
          selectedComanies: [
            'Robel-Corkery',
            'Keebler LLC',
            'Considine-Lockman',
          ],
        },
      });

      setPosts(response.data);
    }

    loadPosts();

    console.log(posts);
  }, []);

  return (
    <Container>
      <PostList>
        {posts.map((post) => (
          <Post key={post.id}>
            <User>
              <img
                src={`https://api.adorable.io/avatars/70/abo${post.id}@adorable.png`}
                alt="USER"
              />
              <div className="info">
                <p>{post.userId}</p>
                <span>Romaguera-Laguardian</span>
                <span>HellSinc Citty</span>
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
