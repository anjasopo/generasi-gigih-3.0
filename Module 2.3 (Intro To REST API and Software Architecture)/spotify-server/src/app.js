const express = require('express');
const songRoutes = require('./routes/songRoutes');
const playlistRoutes = require('./routes/playlistRoutes');

const app = express();
app.use(express.json());

app.use('/songs', songRoutes);
app.use('/playlists', playlistRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
