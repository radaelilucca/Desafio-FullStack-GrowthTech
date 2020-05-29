import api from "../../services/api";

class PostController {
  async index(req, res) {
    const response = await api.get("/posts");

    const posts = response.data;
    return res.json(posts);
  }
}

export default new PostController();
