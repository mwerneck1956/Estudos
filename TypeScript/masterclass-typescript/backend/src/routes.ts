import { Router } from "express";

import UserController from "./controller/UserController";
const routes = Router();

routes.get("/", (req, res) => {
  return res.send("Hello World TS2");
});

routes.get("/users", UserController.index);
routes.post("/users", UserController.create);

export default routes;
