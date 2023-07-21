const fs = require('fs');
const path = require('path');
const Playlist = require('../model/playlistModel');
let data = require('../data/data.json');

function updateRootSongs(updatedRootSongs) {
  const dataFilePath = path.join(__dirname, '..', 'data', 'data.json');
  data.songs = updatedRootSongs;
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

function getPlaylistById(playlistId) {
  const playlistData = data.playlists.find((p) => p.playlistId === playlistId);
  if (!playlistData) return null;

  const playlist = new Playlist(playlistData.playlistId);
  playlist.songs = playlistData.songs;
  return playlist;
}

function getAllPlaylists() {
  return data.playlists.map((playlistData) => {
    const playlist = new Playlist(playlistData.playlistId);
    playlist.songs = playlistData.songs;
    return playlist;
  });
}

function getSongById(songId) {
  return data.songs.find((song) => song.id === songId);
}

function addSongToPlaylist(playlistId, songId) {
  const playlistData = data.playlists.find((p) => p.playlistId === playlistId);
  const song = data.songs.find((song) => song.id === songId);

  if (playlistData && song) {
    const existingSong = playlistData.songs.find((song) => song.id === songId);
    if (existingSong) {
      return null;
    }

    playlistData.songs.push({ ...song, playCount: 0 });

    updatePlaylist(playlistData);

    return { ...song, playCount: 0 };
  } else {
    return null;
  }
}

function updatePlaylist(playlistData) {
  const dataFilePath = path.join(__dirname, '..', 'data', 'data.json');
  const updatedPlaylists = data.playlists.map((p) =>
    p.playlistId === playlistData.playlistId ? playlistData : p
  );

  data.playlists = updatedPlaylists;

  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

module.exports = {
  updateRootSongs,
  getPlaylistById,
  getAllPlaylists,
  getSongById,
  addSongToPlaylist,
  updatePlaylist
};