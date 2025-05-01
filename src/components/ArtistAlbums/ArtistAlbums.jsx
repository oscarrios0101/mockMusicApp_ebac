import styles from "./ArtistAlbums.module.css";
import { useNavigate } from "react-router-dom";

const ArtistAlbums = ({ artistAlbums, loadingAlbums, albumError, onClick }) => {
  const navigate = useNavigate();

  const handleAlbumClick = (albumId) => {
    navigate(`/album/${albumId}`);
  };
  return (
    <section className={styles.albumSection}>
      <h3>Albums:</h3>
      {loadingAlbums ? (
        <p>Loading albums...</p>
      ) : albumError ? (
        <p className={styles.error}>Error loading albums.</p>
      ) : artistAlbums.length === 0 ? (
        <p className={styles.noAlbums}>No albums found for this artist.</p>
      ) : (
        <div className={styles.albumGrid}>
          {artistAlbums.map((album) => (
            <div
              key={album.idAlbum}
              className={styles.albumCard}
              onClick={() => handleAlbumClick(album.idAlbum)}
            >
              {album.strAlbumThumb && (
                <img
                  src={album.strAlbumThumb}
                  alt={album.strAlbum}
                  className={styles.albumCover}
                />
              )}
              <div className={styles.albumInfo}>
                <h4 className={styles.albumTitle}>{album.strAlbum}</h4>
                <p className={styles.albumYear}>({album.intYearReleased})</p>
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
