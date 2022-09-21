import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import getAnswerAi from "./functions/getAnswerAi";
import translateAi from "./functions/translateAi";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello from the TypeScript world!</h1>");
});
app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));

app.get("/question", async (req: Request, res: Response) => {
  const answer = await getAnswerAi(req.query.answer as string);
  res.send(answer);
});

app.get("/translate", async (req: Request, res: Response) => {
  const answer = await translateAi(req.query.text as string);
  res.send(answer);
});
