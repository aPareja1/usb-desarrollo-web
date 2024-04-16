import { Request, Response } from "express";
import { SongResponse } from "../dto/song.dto";
import { SongRepository } from "../repositories/song.repository";
import { Song } from "../entity/Song.entity";

import { v4 as uuidv4 } from 'uuid';

export class SongController{
    
    private songRepository: SongRepository = new SongRepository();
    public getByTitle = async (req: Request, res: Response) => {
        try {
            const title = <string>req.query.title;
            console.log(title);
            const song: SongResponse = await this.songRepository.findByTitle(title);
            return res.status(200).json({
                song,
              });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    public getById = async (req: Request, res: Response) => {
        const {id} = req.params;
        try {
            console.log('Promise unresolved');
            const song: Song = await this.songRepository.findById(id);
            if(song === null){
                res.status(404).json({ error: 'Song doesnt exists'});
            }
            res.status(200).json({song});
            
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public getAll = async (req: Request, res: Response) => {
        const genre = <string> req.query.genre;
        try {
            const songs: Song[] = await this.songRepository.getAll(genre);
            return res.status(200).json(songs);
        } catch (error) {
             res.status(400).json({ error: error.message });
       }
    }

    public save = async (req: Request, res: Response) => {
        const body = req.body;
        try {
            
            const id = uuidv4();
            body['id']= id;
            const result: Song = await this.songRepository.save(body);
            return res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public update = async (req: Request, res: Response) => {
        const body = req.body;
        try {
            const id = body.id;
            let songToUpdate: Song = await this.songRepository.findById(id);
            songToUpdate = {
                ...body
            } 
            const result: Song = await this.songRepository.save(songToUpdate);
            return res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public delete = async (req: Request, res: Response) => {
        const {id} = req.params;
        try {
            await this.songRepository.delete(id);
            res.status(200).json({message: 'Deleted'});
            
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }



}