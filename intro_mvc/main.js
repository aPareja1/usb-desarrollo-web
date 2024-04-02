import express from "express";
import bodyParser from 'body-parser';
import { songsRoutes } from "./routes/song.router.js";

const app = express();
const PORT = 3000;
//Use body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(songsRoutes);
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})