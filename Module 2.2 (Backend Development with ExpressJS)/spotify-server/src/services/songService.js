const songRepository = require('../repositories/songRepository');

function getAllSongs() {
  return songRepository.getAllSongs();
}

function getSongById(id) {
  return songRepository.getSongById(id);
}

function addSong(song) {
  const data = require('../data/data.json');

  // Check if the song with the provided ID already exists
  const existingSong = data.songs.find((s) => s.id === song.id);
  if (existingSong) {
    return null;
  }

 // Add the new song to the songs array with "currentlyPlaying" set to 0
 const newSong = {
  ...song,
  currentlyPlaying: 0,
};

data.songs.push(newSong);

  // Write the updated data back to the data.json file
  const fs = require('fs');
  const path = require('path');
  const songsFilePath = path.join(__dirname, '..', 'data', 'data.json');
  fs.writeFileSync(songsFilePath, JSON.stringify(data, null, 2));

  return newSong;
}

module.exports = {
  getAllSongs,
  getSongById,
  addSong,
};
