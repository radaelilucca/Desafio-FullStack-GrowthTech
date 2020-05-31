import api from "../../services/api";
import randomSort from "../../utils/randomSort";
import filterPosts from "../../utils/filterPosts";

class PostController {
  async index(req, res) {
    const { selectedCompanies } = req.body;

    const response = await api.get("/posts");

    const posts = response.data;

    const filteredPosts = await filterPosts(posts, selectedCompanies);
    filteredPosts.sort(randomSort);
    return res.json(filteredPosts);
  }
}

export default new PostController();
