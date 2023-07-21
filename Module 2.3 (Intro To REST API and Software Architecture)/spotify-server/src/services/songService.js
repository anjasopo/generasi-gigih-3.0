const songRepository = require('../repositories/songRepository');
const playlistRepository = require('../repositories/playlistRepository');

function getAllSongs() {
  return songRepository.getAllSongs();
}

function getSongById(id) {
  return songRepository.getSongById(id);
}

function addSong(song) {
  const data = require('../data/data.json');

  const existingSong = data.songs.find((s) => s.id === song.id);
  if (existingSong) {
    return null;
  }

  const newSong = {
    ...song,
    currentlyPlaying: 0,
    playCount: 0
  };

  data.songs.push(newSong);

  const fs = require('fs');
  const path = require('path');
  const songsFilePath = path.join(__dirname, '..', 'data', 'data.json');
  fs.writeFileSync(songsFilePath, JSON.stringify(data, null, 2));

  return newSong;
}

async function playSong(playlistId, songId) {
  try {
    const song = playlistRepository.getSongById(songId);
    if (song) {
      const playlist = playlistRepository.getPlaylistById(playlistId);
      if (playlist) {
        const updatedPlaylist = playlist.songs.map((playlistSong) => {
          if (playlistSong.id === songId) {
            return {
              ...playlistSong,
              currentlyPlaying: 1,
              playCount: (playlistSong.playCount || 0) + 1,
            };
          }
          return {
            ...playlistSong,
            currentlyPlaying: 0,
          };
        });

        playlist.songs = updatedPlaylist;
        playlistRepository.updatePlaylist(playlist);

        const updatedRootSongs = songRepository.getAllSongs().map((rootSong) => {
          if (rootSong.id === songId) {
            return {
              ...rootSong,
              currentlyPlaying: 1,
              playCount: (rootSong.playCount || 0) + 1,
            };
          }
          return {
            ...rootSong,
            currentlyPlaying: 0,
          };
        });

        songRepository.updateRootSongs(updatedRootSongs);

        const updatedSong = songRepository.getSongById(songId);

        delete updatedSong.status;

        return {
          status: 200,
          message: "Song is playing",
          song: updatedSong,
        };
      }
    }
    return {
      status: 404,
      message: "Song or playlist not found",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error",
    };
  }
}

module.exports = {
  getAllSongs,
  getSongById,
  addSong,
  playSong
};
