import {Router} from "express";
import { SongController } from "../controller/song.controller.js";

export const songsRoutes = Router();

songsRoutes.get('/song', SongController.getAll);
songsRoutes.get('/song/:id', SongController.getById);
songsRoutes.post('/song', SongController.create);
songsRoutes.put('/song', SongController.update);
songsRoutes.delete('/song/:id', SongController.delete);
