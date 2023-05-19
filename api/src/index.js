import * as dotenv from 'dotenv'
dotenv.config()
import express from "express"
import helmet from "helmet"
import cors from "cors"
import morgan from "morgan"
import { route } from './router.js'
const app = express();
const port = process.env.SERVER_PORT ?? 3000;
app.use(express.json());
app.use(helmet());
app.use(cors())
app.use(morgan("tiny"));
app.use(route)
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
