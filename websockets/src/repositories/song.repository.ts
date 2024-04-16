
import { Song } from "../entity/Song.entity";
import { AppDataSource } from "../data-source";

export class SongRepository{
    private repository = AppDataSource.getRepository(Song);

   
    async findByTitle(title: string) {
        return this.repository.findOneBy({ title });
    }


    async findById(id: string) {
        return this.repository.findOneBy({ id });
    }
    
    async getAll(genre?: string) {
        return this.repository.find({where: genre ? {genre} : {}});
    }

    async save(song: Song){
        return this.repository.save(song);
    }
   
    async delete (id: string){
        return this.repository.delete(id);
    }
}