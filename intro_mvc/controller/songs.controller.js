
import { SongsModel } from "../model/songs.model.js";
import { songCreationSchema, songUpdateSchema } from "../schemas/song.schema.js";

export class SongsController{
    static async getAll(req, res){
        const { genre } = req.query;
        const songs = await SongsModel.getAll(genre);
        return res.json(songs);
    }
    static async getById(req, res){
        const { id } = req.params;
        const song = await SongsModel.getById(id);
        return res.json(song);
    }
    static async create(req, res){
        const body = req.body;
        const data = songCreationSchema.validate(body);
        if(data.error){
            return res.status(400).json(data.error.details[0].message);
        }
        const result = await SongsModel.create(body);
        return res.status(201).json(result);
    }
    static async update(req,res){
        const body = req.body;
        const data = songUpdateSchema.validate(body);
        if(data.error){
            return res.status(400).json(data.error.details[0].message);
        }
        const result = await SongsModel.update(body);
        return res.json(result);
    }
    static async delete(req, res){
        const {id} = req.params;
        const result = await SongsModel.delete(id);
        return res.json(result);
    }
}