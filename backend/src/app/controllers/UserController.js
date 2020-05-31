import api from "../../services/api";

class UserController {
  async index(req, res) {
    const { id } = req.params;

    const response = await api.get("/users");

    const users = response.data;

    let selectedUser = {};
    users.map((user) => {
      if (user.id == id) {
        selectedUser = user;
      }
    });

    return res.json(selectedUser);
  }
}

export default new UserController();
