// Function to generate the playlist content
function generatePlaylist() {
    const playlistContainer = document.getElementById('dummy-playlist').querySelector('.list');
  
    // Fetch the songs data from the server
    fetch('/api/songs')
      .then(response => response.json())
      .then(songs => {
        songs.forEach(song => {
          const item = document.createElement('div');
          item.classList.add('item');
          playlistContainer.appendChild(item);
  
          const songsContainer = document.createElement('div');
          songsContainer.classList.add('songs');
          item.appendChild(songsContainer);
  
          const title = document.createElement('h4');
          title.textContent = song.title;
          songsContainer.appendChild(title);
  
          const duration = document.createElement('p');
          duration.textContent = song.duration;
          songsContainer.appendChild(duration);
  
          const artists = document.createElement('p');
          artists.textContent = song.artists.join(', ');
          songsContainer.appendChild(artists);
        });
      })
      .catch(error => {
        console.log('Error fetching songs:', error);
      });
  }
  
  // Call the function to generate the playlist content
  generatePlaylist();
  