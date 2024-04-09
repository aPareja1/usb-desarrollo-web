import { AppDataSource } from "./data-source";
import * as express from "express";
import * as dotenv from "dotenv";
import { Request, Response } from "express";

import "reflect-metadata";
import { errorHandler } from "./middleware/errorHandler";
import { songRouter } from "./routes/songs.routes";
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerSpec from './swagger'
const cors = require('cors');
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(errorHandler);
const { PORT = 3000 } = process.env;


app.use("/api", songRouter);
console.log(swaggerSpec);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));





AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));