class Playlist {
  constructor(playlistId) {
    this.playlistId = playlistId;
    this.songs = [];
  }

  addSong(song) {
    this.songs.push({
      ...song,
      playCount: 0,
    });
  }

  updatePlayCount(songId, playCount) {
    const songIndex = this.songs.findIndex((song) => song.id === songId);
    if (songIndex !== -1) {
      this.songs[songIndex].playCount = playCount;
    }
  }

  getMostPlayedSongs() {
      return this.songs.slice().sort((a, b) => b.playCount - a.playCount);
  }
}

module.exports = Playlist;