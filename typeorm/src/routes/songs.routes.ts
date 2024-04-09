
import * as express from "express";
import { SongController } from "../controllers/song.controller";

const Router = express.Router();
const songController = new SongController();
Router.get(
    "/song",
    songController.getByTitle
  );


  export { Router as songRouter };