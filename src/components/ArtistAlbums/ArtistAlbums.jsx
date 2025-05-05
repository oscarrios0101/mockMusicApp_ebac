import { useNavigate } from "react-router-dom";

const ArtistAlbums = ({ artistAlbums, loadingAlbums, albumError, onClick }) => {
  const navigate = useNavigate();

  const handleAlbumClick = (albumId) => {
    navigate(`/album/${albumId}`);
  };
  return (
    <section>
      <h3>Albums:</h3>
      {loadingAlbums ? (
        <p>Loading albums...</p>
      ) : albumError ? (
        <p>Error loading albums.</p>
      ) : artistAlbums.length === 0 ? (
        <p>No albums found for this artist.</p>
      ) : (
        <div>
          {artistAlbums.map((album) => (
            <div
              key={album.idAlbum}
              onClick={() => handleAlbumClick(album.idAlbum)}
            >
              {album.strAlbumThumb && (
                <img src={album.strAlbumThumb} alt={album.strAlbum} />
              )}
              <div>
                <h4>{album.strAlbum}</h4>
                <p>({album.intYearReleased})</p>
                <p>album id: {`${album.idAlbum}`}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ArtistAlbums;
