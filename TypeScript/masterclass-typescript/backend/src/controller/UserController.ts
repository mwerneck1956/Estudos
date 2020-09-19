import { Request, Response, response } from "express";
import EmailService from "../services/EmailService";
const users = [
  {
    name: "Matheus",
    email: "werneckmatheus12@gmail.com",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "Matheus Werneck",
        email: "Werneckmatheus12@gmail.com",
      },
      message: {
        subject: "Bem vindo ao sistema!",
        body: "Seja bem vindo",
      },
    });
    return res.send();
  },
};
