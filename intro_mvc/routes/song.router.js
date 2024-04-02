import { Router } from "express";
import { SongsController } from "../controller/songs.controller.js";
export const songsRoutes = Router();

songsRoutes.get('/song', SongsController.getAll);
songsRoutes.get('/song/:id', SongsController.getById);
songsRoutes.post('/song', SongsController.create);
songsRoutes.put('/song', SongsController.update);
songsRoutes.delete('/song/:id', SongsController.delete);