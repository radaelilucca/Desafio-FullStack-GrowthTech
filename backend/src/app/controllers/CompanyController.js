import api from "../../services/api";

class CompanyController {
  async index(req, res) {
    const compannies = [];

    const response = await api.get("/users");
    const users = response.data;

    users.map((user) => {
      compannies.push(user.company);
    });

    return res.json(compannies);
  }
}
export default new CompanyController();
