const express = require('express');
const router = express.Router();
const Music = require('../models/music');

// Read All
router.post('/post', (req, res) => {
    const music = new Music({
        title: req.body.title,
        artist: req.body.artist,
        album: req.body.album
    })

    try {
        const musicToSave = music.save();
        res.status(200).json(musicToSave)
    }
    catch (error) {
            res.status(400).json({message: error.message})
    }
})

// Read One
router.get('/get', async (req, res) => {
    try {
        const music = await Music.findById(req.params.id);
        res.status(200).json(music)
    }
    catch (error) {
            res.status(500).json({message: error.message})
    }
});

// Update
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateMusicData = req.body;
        const opions = { new: true };

        const result = await Music.findByIdAndUpdate(id, updateMusicData, opions);

        res.send(result);
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});

// Delete
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleteMusicData = await Music.findByIdAndDelete(id);
        res.send(`Music with ${deleteMusicData.titl} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});

module.exports = router;