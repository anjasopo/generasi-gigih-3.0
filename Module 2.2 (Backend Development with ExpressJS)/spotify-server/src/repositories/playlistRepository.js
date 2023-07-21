const data = require('../data/data.json');

function getPlaylistById(playlistId) {
  const playlist = data.playlists.find((p) => p.playlistId === playlistId);
  return playlist;
}

function getAllPlaylists() {
  return data.playlists;
}

function getSongById(songId) {
  return data.songs.find((song) => song.id === songId);
}

function addSongToPlaylist(playlistId, songId) {
  const playlist = data.playlists.find((p) => p.playlistId === playlistId);
  const song = data.songs.find((song) => song.id === songId);

  if (playlist && song) {
    // Check if the song is already in the playlist
    const existingSong = playlist.songs.find((song) => song.id === songId);
    if (existingSong) {
      return null; // Song already exists in the playlist
    }

    playlist.songs.push(songId); // Add only the song ID to the playlist

    // Set the "currentlyPlaying" attribute to 1 for the added song
    song.currentlyPlaying = 1;

    return song;
  } else {
    return null;
  }
}

function updatePlaylist(playlist) {
  const updatedPlaylists = data.playlists.map((p) =>
    p.playlistId === playlist.playlistId ? playlist : p
  );

  data.playlists = updatedPlaylists;
}

module.exports = {
  getPlaylistById,
  getAllPlaylists,
  getSongById,
  addSongToPlaylist,
  updatePlaylist
};
