import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import SpotifyPlaylists from './components/SpotifyPlaylists';
import Preview from './components/Preview';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div>
      <Sidebar />
      <div className="main-container">
        <Topbar />
        <SpotifyPlaylists />
        <SpotifyPlaylists/>
        <SpotifyPlaylists/>
        <hr />
        <Preview />
      </div>
    </div>
  );
};

export default App;
