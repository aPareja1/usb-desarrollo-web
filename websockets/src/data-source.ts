import "reflect-metadata";
import { DataSource } from "typeorm";

import * as dotenv from "dotenv";
import { Song } from "./entity/Song.entity";


dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } =
  process.env;
  
export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT || "5432"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: false,
//logging logs sql command on the treminal
  logging:  false,
  entities: [Song],
  migrations: [__dirname + "/migration/*.ts"],
  subscribers: [],
});