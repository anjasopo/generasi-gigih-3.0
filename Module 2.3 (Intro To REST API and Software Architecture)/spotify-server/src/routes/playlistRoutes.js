const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController'); // Double-check the path here

router.get('/', playlistController.getAllPlaylists);
router.get('/:playlistId/songs', playlistController.getSongsInPlaylist);
router.post('/:playlistId/songs/:songId', playlistController.addSongToPlaylist);
router.post('/:playlistId/songs/:songId/play', playlistController.playSong);
router.get('/:playlistId/most-played', playlistController.getMostPlayedSongs); // New route for getting most played songs

module.exports = router;