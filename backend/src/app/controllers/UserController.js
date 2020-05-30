import api from "../../services/api";

class UserController {
  async index(req, res) {
    const { selectedCompanies } = req.body;
    if (!selectedCompanies) {
      return res.status(404).json({ error: "NOT FOUND" });
    }
    const response = await api.get("/users");

    const users = response.data;

    const postUsers = [];
    users.map((user) => {
      if (selectedCompanies.includes(user.company.name)) {
        postUsers.push(user);
      }
    });

    return res.json(postUsers);
  }
}

export default new UserController();
