import express from "express";
import { createRequire } from "node:module";
import bodyParser from 'body-parser';
import { songCreationSchema } from "./schemas/song.schema.js";

const require = createRequire(import.meta.url);
const readJSON = (path) => require(path);

const app = express();
const PORT = 3000;
//Use body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const songs = readJSON('./songs.json');

app.get('/', (req, res) => {
    res.status(200).send('<h1>Hola mundo</h1>')
});

app.get('/song', (req, res) => {
    const { genre } = req.query;
    if (genre) {
        const songsFiltered = songs.filter(song =>
            song.genre.some(
                x => x.toLowerCase() === genre.toLowerCase()
            )
        )
        return res.json(songsFiltered);
    }
    return res.json(songs);
});

app.get('/song/:id', (req, res) => {
    const { id } = req.params;
    const filteredSong = songs.filter(song => song.id === id);
    if(filteredSong && filteredSong.length > 0){
        return res.json(filteredSong[0]);
    }
    return res.status(404).json({message: 'Song doesnt exists'});
});

app.post('/song', (req, res)=>{
    const body = req.body;
    const data = songCreationSchema.validate(body);
    if(data.error){
        return res.status(400).json(data.error.details[0].message);
    }
    const songToAdd = {
        ...data.value,
        id: new Date().getTime().toString()
    };
    songs.push(songToAdd);
    return res.json(songToAdd);
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})