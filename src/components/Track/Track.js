import './Track.css';

function Track(props) {
    return (
       <div className="Track">
        <div className="Track-information">
          <h3>{props.name} </h3>
          <p> {props.artist} | {props.album} </p>
        </div>
        <button className="Track-action"> //+ or - will go here </button>
      </div>  
    )
}
export default Track;