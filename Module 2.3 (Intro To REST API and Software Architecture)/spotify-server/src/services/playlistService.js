const playlistRepository = require('../repositories/playlistRepository');
const songRepository = require('../repositories/songRepository');

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

function getMostPlayedSongs(playlistId) {
  const playlist = playlistRepository.getPlaylistById(playlistId);
  if (playlist) {
    const sortedSongs = playlist.getMostPlayedSongs();
    return sortedSongs;
  }
  return null;
}

function addSongToPlaylist(playlistId, songId) {
  const playlist = playlistRepository.getPlaylistById(playlistId);
  const song = playlistRepository.getSongById(songId);

  if (playlist && song) {
    // Check if the song is already in the playlist
    const existingSong = playlist.songs.find((song) => song.id === songId);
    if (existingSong) {
      return null; // Song already exists in the playlist
    }

    // Add the complete song object to the playlist
    playlist.songs.push(song);

    // Save the updated data back to the data.json file
    playlistRepository.updatePlaylist(playlist);

    return song; // Return the full song object
  } else {
    return null;
  }
}

async function playSong(playlistId, songId) {
  try {
    const song = songRepository.getSongById(songId);
    if (!song) {
      return { status: 404, message: 'Song not found' };
    }

    const playlist = playlistRepository.getPlaylistById(playlistId);
    if (!playlist) {
      return { status: 404, message: 'Playlist not found' };
    }

    const updatedPlaylist = playlist.songs.map((playlistSong) => ({
      ...playlistSong,
      currentlyPlaying: playlistSong.id === songId ? 1 : 0,
      playCount: playlistSong.id === songId ? (playlistSong.playCount || 0) + 1 : playlistSong.playCount || 0,
    }));

    playlist.songs = updatedPlaylist;
    playlistRepository.updatePlaylist(playlist);

    const updatedRootSongs = songRepository.getAllSongs().map((rootSong) => ({
      ...rootSong,
      currentlyPlaying: rootSong.id === songId ? 1 : 0,
      playCount: rootSong.id === songId ? (rootSong.playCount || 0) + 1 : rootSong.playCount || 0,
    }));

    songRepository.updateRootSongs(updatedRootSongs);

    const updatedSong = songRepository.getSongById(songId);
    delete updatedSong.status;

    return {
      status: 200,
      message: 'Song is playing',
      song: updatedSong,
    };
  } catch (error) {
    console.error('Error playing song:', error);
    return {
      status: 500,
      message: 'Internal server error',
    };
  }
}

module.exports = {
  getSongsInPlaylist,
  getAllPlaylists,
  getPlaylistById,
  addSongToPlaylist,
  playSong,
  getMostPlayedSongs
};
