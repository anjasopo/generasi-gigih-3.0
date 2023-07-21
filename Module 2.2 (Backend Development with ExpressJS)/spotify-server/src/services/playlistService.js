const playlistRepository = require('../repositories/playlistRepository');

function getSongsInPlaylist(playlistId) {
  const playlist = playlistRepository.getPlaylistById(playlistId);
  if (playlist) {
    return playlist.songs;
  } else {
    return null;
  }
}

function getAllPlaylists() {
  return playlistRepository.getAllPlaylists();
}

function getPlaylistById(playlistId) {
  const playlist = playlistRepository.getPlaylistById(playlistId);
  if (playlist) {
    const songsInPlaylist = playlist.songs.map((songId) => {
      return playlistRepository.getSongById(songId);
    });
    playlist.songs = songsInPlaylist.filter((song) => song !== null);
  }
  return playlist;
}

function addSongToPlaylist(playlistId, songId) {
  return playlistRepository.addSongToPlaylist(playlistId, songId);
}

async function playSong(playlistId, songId) {
  const song = playlistRepository.getSongById(songId);
  if (song) {
    const playlist = playlistRepository.getPlaylistById(playlistId);
    if (playlist) {
      const updatedPlaylist = playlist.songs.map((song) => {
        return {
          ...song,
          currentlyPlaying: song.id === songId ? 1 : 0,
        };
      });

      playlist.songs = updatedPlaylist;
      playlistRepository.updatePlaylist(playlist);

      return song;
    }
  }
  return null;
}

module.exports = {
  getSongsInPlaylist,
  getAllPlaylists,
  getPlaylistById,
  addSongToPlaylist,
  playSong
};
