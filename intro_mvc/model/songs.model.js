import { readJSON } from "../utils.js";



const songs = readJSON('./songs.json');

export class SongsModel {
    static async getById(id) {
        return songs.filter(song => song.id === id);
    }
    static async getAll(genre) {
        if (genre) {
            const songsFiltered = songs.filter(song =>
                song.genre.some(
                    x => x.toLowerCase() === genre.toLowerCase()
                )
            )
            return songsFiltered;
        }
        return songs;
    }

    static create(song) {
        const songToAdd = {
            ...song,
            id: new Date().getTime().toString()
        };
        songs.push(songToAdd);
        return songToAdd;

    }
    static update(song) {
        const ref = songs.findIndex(x => x.id === song.id);
        songs[ref] = {
            ...song
        }
        return song;

    }
    static delete(id) {
        const index = songs.findIndex(x => x.id === id);
        songs.splice(index, 1);
        return true;
    }
}