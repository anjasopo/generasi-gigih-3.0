const data = require('../data/data.json');

function getAllSongs() {
  return data.songs;
}

function getSongById(id) {
  return data.songs.find((song) => song.id === id);
}

function updateRootSongs(updatedRootSongs) {
  data.songs = updatedRootSongs;

  const fs = require('fs');
  const path = require('path');
  const songsFilePath = path.join(__dirname, '..', 'data', 'data.json');
  fs.writeFileSync(songsFilePath, JSON.stringify(data, null, 2));
}

module.exports = {
  getAllSongs,
  getSongById,
  updateRootSongs,
};