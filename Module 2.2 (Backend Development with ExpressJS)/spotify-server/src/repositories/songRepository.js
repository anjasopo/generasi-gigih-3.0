const data = require('../data/data.json');

function getAllSongs() {
  return data.songs;
}

function getSongById(id) {
  return data.songs.find((song) => song.id === id);
}

module.exports = {
  getAllSongs,
  getSongById,
};
