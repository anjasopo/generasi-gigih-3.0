const playlistService = require('../services/playlistService');

function getSongsInPlaylist(req, res) {
  const { playlistId } = req.params;
  const songsInPlaylist = playlistService.getSongsInPlaylist(playlistId);
  if (songsInPlaylist) {
    res.json({ playlistId, songs: songsInPlaylist });
  } else {
    res.status(404).json({ message: 'Playlist tidak ditemukan' });
  }
}

function getAllPlaylists(req, res) {
  const playlists = playlistService.getAllPlaylists();
  res.json(playlists);
}

function addSongToPlaylist(req, res) {
  const { playlistId, songId } = req.params;
  if (!playlistId || !songId) {
    return res.status(400).json({ message: 'ID playlist dan ID lagu perlu diisi' });
  }
  const addedSong = playlistService.addSongToPlaylist(playlistId, songId);
  if (addedSong) {
    res.status(201).json({ message: 'Berhasil menambahkan lagu ke playlist' });
  } else {
    res.status(404).json({ message: 'Playlist atau lagu tidak ditemukan' });
  }
}

async function playSong(req, res) {
  const { playlistId, songId } = req.params;
  if (!playlistId || !songId) {
    return res.status(400).json({ message: 'Both Playlist ID and Song ID are required' });
  }

  try {
    const playedSong = await playlistService.playSong(playlistId, songId);
    if (playedSong && playedSong.song) {
      return res.status(200).json({ message: 'Lagu sedang diputar', song: playedSong.song });
    } else {
      return res.status(404).json({ message: 'Playlist or song not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}

function getMostPlayedSongs(req, res) {
  const { playlistId } = req.params; // Extract playlistId from request parameters
  const mostPlayedSongs = playlistService.getMostPlayedSongs(playlistId);
  if (mostPlayedSongs) {
    res.json({ songs: mostPlayedSongs });
  } else {
    res.status(404).json({ message: 'No songs found' });
  }
}

module.exports = {
  getSongsInPlaylist,
  getAllPlaylists,
  addSongToPlaylist,
  playSong,
  getMostPlayedSongs
};