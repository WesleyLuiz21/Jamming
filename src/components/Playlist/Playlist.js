import './Playlist.css';
import TrackList from '../TrackList/TrackList';

function Playlist(props) {
    return (
        <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <TrackList />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    )
}
export default Playlist;