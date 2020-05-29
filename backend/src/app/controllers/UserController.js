import api from "../../services/api";

class UserController {
  async index(req, res) {
    const response = await api.get("/users");

    const users = response.data;
    return res.json(users);
  }
}

export default new UserController();
