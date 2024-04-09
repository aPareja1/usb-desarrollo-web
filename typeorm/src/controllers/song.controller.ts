import { Request, Response } from "express";
import { SongResponse } from "../dto/song.dto";
import { SongRepository } from "../repositories/song.repository";



export class SongController{
    
    private songRepository: SongRepository = new SongRepository();
    /**
 * @swagger
 * /song:
 *   get:
 *     summary: Retrieve a song by its title
 *     tags: [Song]
 *     parameters:
 *       - in: query
 *         name: title
 *         required: true
 *         schema:
 *           type: string
 *         description: The title of the song to retrieve
 *     responses:
 *       200:
 *         description: A song object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 song:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     artist:
 *                       type: string
 *                     album:
 *                       type: string
 *                     year:
 *                       type: integer
 *                     // Agrega más propiedades según la estructura de SongResponse
 *       400:
 *         description: Error message if the song could not be retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
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


}