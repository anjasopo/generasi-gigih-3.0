const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Dummy data for songs
const songs = [
  { 
    id: 1, 
    title: 'Dummy song 1', 
    duration: '2:30', 
    artists: ['Name Artist 1'] 
  },
  { 
    id: 2, 
    title: 'Dummy song 2', 
    duration: '3:15', 
    artists: ['Name Artist 2'] 
  },
  { 
    id: 3, 
    title: 'Dummy song 3', 
    duration: '4:10', 
    artists: ['Name Artist 3'] 
  },
  { 
    id: 4, 
    title: 'Dummy song 4', 
    duration: '2:12', 
    artists: ['Name Artist 4'] 
  },
  { 
    id: 5, 
    title: 'Dummy song 5', 
    duration: '5:55', 
    artists: ['Name Artist 5'] 
  }
];

// API endpoint to get the list of songs
app.get('/api/songs', (req, res) => {
  res.json(songs);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
