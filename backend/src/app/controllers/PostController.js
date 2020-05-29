import api from "../../services/api";
import randomSort from "../../utils/randomSort";
import filterPosts from "../../utils/filterPosts";

class PostController {
  async index(req, res) {
    const { selectedCompanies } = req.body;
    const isFiltered = req.query.filtered;
    const response = await api.get("/posts");

    const posts = response.data;

    if (!isFiltered) {
      posts.sort(randomSort);
      return res.json(posts);
    }
    const filteredPosts = await filterPosts(posts, selectedCompanies);

    return res.json(filteredPosts);
  }
}

export default new PostController();
