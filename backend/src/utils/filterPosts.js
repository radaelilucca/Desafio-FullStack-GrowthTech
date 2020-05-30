/* eslint-disable array-callback-return */
import api from "../services/api";

export default async function filterPosts(posts, selectedCompanies) {
  // get all users from server
  const usersResponse = await api.get("/users");
  const users = usersResponse.data;

  const filteredUsers = [];

  users.map((user) => {
    if (selectedCompanies.includes(user.company.name)) {
      const { id } = user;
      filteredUsers.push(id);
    }
  });

  const filteredPosts = [];

  posts.map((post) => {
    if (filteredUsers.includes(post.userId)) {
      filteredPosts.push(post);
    }
  });

  return filteredPosts;
}
