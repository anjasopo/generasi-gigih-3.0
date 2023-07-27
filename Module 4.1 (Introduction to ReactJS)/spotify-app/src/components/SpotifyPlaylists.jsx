import React from 'react';
import PlaylistItem from './PlaylistItem';

const SpotifyPlaylists = () => {
  return (
    <div className="spotify-playlists">
      <h2>Judul Playlist</h2>
      <div className="list">
        <PlaylistItem
          imageUrl="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster"
          title="Today's Top Hits"
          description="Rema & Selena Gomez are on top of the..."
        />

        <PlaylistItem
          imageUrl="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
          title="RapCaviar"
          description="New Music from Lil Baby, Juice WRLD an..."
        />

        <PlaylistItem
          imageUrl="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
          title="All out 2010s"
          description="The biggest spmgs pf tje 2010s. Cover:..."
        />

        <PlaylistItem
          imageUrl="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster"
          title="Rock Classics"
          description="Rock Legends & epic songs that continue t..."
        />

        <PlaylistItem
          imageUrl="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
          title="Chill Hits"
          description="Kick back to the best new and recent chill..."
        />
      </div>
    </div>
  );
};

export default SpotifyPlaylists;