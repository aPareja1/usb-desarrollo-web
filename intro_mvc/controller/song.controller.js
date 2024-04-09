import { SongModel } from "../model/song.model.js";
import { songCreationSchema, songUpdateSchema } from "../schemas/song.schema.js";

export class SongController{
    static getById(req,res){
        const {id} = req.params;
        const song = SongModel.getById(id);
        if(song !== null){
            return res.json(song);
        }
        return res.status(404).json({code_error: 'SONG_DOESNT_EXISTS'})
    }
    
    static getAll(req, res){
        const {genre} = req.query;
        const songs = SongModel.getAll(genre);
        return res.json(songs);
    }
    
    static create(req, res){
        const song = req.body;
        const data = songCreationSchema.validate(song);
        if(data.error){
            return res.status(400).json(data.error.details[0].message);
        }
        return res.json(SongModel.create(song));
       
    }

    static update(req, res){
        const song = req.body;
        const data = songUpdateSchema.validate(song);
        if(data.error){
            return res.status(400).json(data.error.details[0].message);
        }
        try {
            const result = SongModel.update(song);
            return res.json(result);
        } catch (error) {
            return res.status(404).json(error);
        }
       
    }
    static delete(req, res){
        const {id} = req.params;
        try {
            SongModel.delete(id);
            return res.json({message: `Song:${id} Deleted`})
        } catch (error) {
            return res.json(error);
        }
    }

}