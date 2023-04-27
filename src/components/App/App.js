import React, { useState } from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Searchbar from '../Searchbar/Searchbar';

function App() {
  const [searchResults, setSearchResults] = useState([
    { name: 'hey', artist: '', album: '', id: '' }
  ]);

  const [playlistName, setPlaylistName] = useState ([
    { name: '', artist: '', album: '', id: ''}
  ]);
  const [playlistTracks, setPlaylistTracks] = useState ([
    { name: '', artist: '', album: '', id: ''}
  ]);

  return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <Searchbar/>
          <div className="App-playlist">
          <SearchResults searchResults={searchResults}/>
          <Playlist playlistTracks={playlistTracks}/>
      </div>
    </div>
  </div>
  );
}

export default App;
