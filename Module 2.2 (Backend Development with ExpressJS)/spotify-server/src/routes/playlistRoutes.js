const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');

router.get('/', playlistController.getAllPlaylists);
router.get('/:playlistId/songs', playlistController.getSongsInPlaylist);
router.post('/:playlistId/songs/:songId', playlistController.addSongToPlaylist);
router.post('/:playlistId/songs/:songId/play', playlistController.playSong); // New route for playing a song

module.exports = router;
