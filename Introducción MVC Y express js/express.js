import express from 'express';
import { songsRouter } from './routes/songs.js'
import { createRequire } from 'node:module'
import bodyParser from 'body-parser';
import { songSchema } from './validators/song.schema.js';

const require = createRequire(import.meta.url)

export const readJSON = (path) => require(path);
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const PORT = process.env.PORT ?? 3000;

const songs = readJSON('./songs.json');

app.get('/', (req, res) => {
    res.status(200).send('<h1> Página de ejemplo </h1>')
})

app.get('/song', (req, res) => {
    const { genre } = req.query;
    if (genre) {
        return res.json(songs.filter(
            song => song.genre.some(x => x.toLowerCase() === genre.toLowerCase())
        ))
    }
    return res.json(songs);

});

app.get('/song/:id', (req, res)=>{
    const {id} = req.params;
    const songById = songs.filter((song)=> song.id === id);
    return res.json(songById);
});

app.post('/song', (req, res)=> {
    const songToAdd = req.body;
    const validation = songSchema.validate(songToAdd);
    if(validation.error){
        return res.status(400).json(validation.error);
    }
    console.log(validation);
    songToAdd['id'] = new Date().getTime();
    songs.push(songToAdd);
    return res.status(201).json(songToAdd);
})
//app.use('/song', songsRouter);

app.put('/song', (req,res)=>{

})

app.delete('/song/:id', (req,res)=>{

})
app.listen(PORT, () => {
    console.log(`server listenin on port http://localhost:${PORT}`)
})
