const songService = require('../services/songService');

function getAllSongs(req, res) {
  const songs = songService.getAllSongs();
  res.json(songs);
}

function getSongById(req, res) {
  const { id } = req.params;
  const song = songService.getSongById(id);
  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ message: 'Lagu tidak ditemukan' });
  }
}

function addNewSong(req, res) {
  const { id, title, artists, url } = req.body;
  if (!id || !title || !artists || !url) {
    return res.status(400).json({ message: 'Wajib mengisi data: id, title, artis dan url' });
  }

  // Call the addSong function from the songService
  const newSong = songService.addSong({ id, title, artists, url });

  if (!newSong) {
    return res.status(409).json({ message: 'Lagu dengan id yang sama sudah ada' });
  }

  res.status(201).json({ message: 'Berhasil menambahkan lagu', song: newSong });
}

module.exports = {
  getAllSongs,
  getSongById,
  addNewSong,
};
