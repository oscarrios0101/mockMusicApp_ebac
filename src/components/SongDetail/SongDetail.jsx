import { Link } from "react-router-dom";

const SongDetail = ({ song }) => {
  // const handleContainerClick = () => {
  //   console.log(`song clicked: ${song.strTrack}`);
  // };

  return (
    // Use Link to navigate, passing the song id in the URL
    <Link to={`/song/${song.idTrack}`}>
      <div>
        {" "}
        {/* Keep your styling div inside the Link */}
        <div>
          <ul>
            <li>
              Song Name:
              <br />
              {song.strTrack}
            </li>
            <li>
              Album Name:
              <br />
              {song.strAlbum}
            </li>
            <li>
              Artist Name:
              <br />
              {song.strArtist}
            </li>

            <li>Id track: {song.idTrack}</li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default SongDetail;
