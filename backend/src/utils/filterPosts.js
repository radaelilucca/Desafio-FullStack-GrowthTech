/* eslint-disable array-callback-return */
import api from "../services/api";

export default async function filterPosts(posts, selectedCompanies) {
  const usersResponse = await api.get("/users");
  const users = usersResponse.data;

  const filteredUsers = [];
  const filteredPosts = [];

  users.map((user) => {
    if (selectedCompanies.includes(user.company.name)) {
      const { id } = user;
      filteredUsers.push(id);
    }
  });

  posts.map((post) => {
    if (filteredUsers.includes(post.userId)) {
      filteredPosts.push(post);
    }
  });

  function updatePostsUser(post) {
    const user = users.find((x) => x.id === post.userId);
    post.user = user;
  }

  filteredPosts.forEach(updatePostsUser);

  return filteredPosts;
}
