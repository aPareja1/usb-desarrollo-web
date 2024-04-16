
import * as express from "express";
import { SongController } from "../controllers/song.controller";

const Router = express.Router();
const songController = new SongController();
Router.get(
    "/song",
    songController.getByTitle
  );

  Router.get(
    "/song/:id",
    songController.getById
  );

  Router.get(
    "/songs",
    songController.getAll
  );

  Router.post(
    "/song",
    songController.save
  );

  Router.put(
    "/song",
    songController.update
  )

  Router.delete(
    "/song/:id",
    songController.delete
  )
  export { Router as songRouter };