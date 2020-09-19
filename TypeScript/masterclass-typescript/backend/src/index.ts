import express from "express";
import cors from "cors";
import routes from "./routes";
const app = express();


app.use(cors({ origin: true, credentials: false }));

app.use(routes);

//Permite que qualquer url acesse o backend

app.listen(3333, () => console.log("servidor iniciado com sucesso"));
