import express from "express";
import bodyParser from 'body-parser';
import { songsRoutes } from "./view/song.routes.js";


const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(songsRoutes);
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})