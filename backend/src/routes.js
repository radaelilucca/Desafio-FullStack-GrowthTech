import { Router } from "express";

import PostController from "./app/controllers/PostController";
import UserController from "./app/controllers/UserController";
import CompanyController from "./app/controllers/CompanyController";

const routes = Router();

routes.get("/users/:id", UserController.index);
routes.post("/posts", PostController.index);
routes.get("/companies", CompanyController.index);

export default routes;
