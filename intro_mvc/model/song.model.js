import { readJSON } from "../utils.js";

const songs = readJSON('./songs.json');


export class SongModel {
    static getAll(genre) {
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
    static getById(id) {
        const filteredSong = songs.filter(song => song.id === id);
        if (filteredSong && filteredSong.length > 0) {
            return filteredSong[0];
        }
        return null;

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
        const index = songs.findIndex(el => el.id === song.id);
        if (index === -1) {
            throw new Error('La canción no existe')
        }
        songs[index] = {
            ...song
        }
        return songs[index];

    }
    static delete(id) {
        const index= songs.findIndex(song => song.id === id);
        if(index===-1){
           throw new Error('La canción no existe')  ;
        }
        songs.splice(index, 1);
        return true;
    }


}