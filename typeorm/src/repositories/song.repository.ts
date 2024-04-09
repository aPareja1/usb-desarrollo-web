
import { Song } from "../entity/Song.entity";
import { AppDataSource } from "../data-source";

export class SongRepository{
    private repository = AppDataSource.getRepository(Song);

   
    async findByTitle(title: string) {
        return this.repository.findOneBy({ title });
    }

   
}