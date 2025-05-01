import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { getSongsByAlbumId, getAlbumById } from "../../utils/musicApi"; // Import the API function
import styles from "./AlbumDetails.module.css";
import SongDetail from "../SongDetail/SongDetail";

const AlbumDetails = () => {
  // Get the albumId from the URL parameters
  const { albumId } = useParams();
  const handleSongClick = (song) => {
    console.log("Song clicked:", song);
  };

  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongsByAlbumId(albumId).then((data) => {
      setLoading(false);
      if (data && data.track.length > 0) {
        // console.log(`we are getting the songs data${data}`);
        // setSongs(data);
        console.log(data.track);
        setSongs(data.track);
        setError(false);
        setLoading(false);
      }
    });
  }, [albumId]); // Re-run effect if albumId changes

  useEffect(() => {
    getAlbumById(albumId).then((data) => {
      setLoading(false);
      if (data && data.album.length > 0) {
        setAlbum(data.album[0]);
        setError(false);
        setLoading(false);
      }
    });
  }, [albumId]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Album Details</h2>
      {loading && (
        <p className={styles.loadingMessage}>Loading album details...</p>
      )}
      {error && (
        <p className={styles.errorMessage}>
          Error loading album details: {error.message}
        </p>
      )}
      {!loading && !album && !error && (
        <p className={styles.noAlbumMessage}>
          No album found with ID: {albumId}
        </p>
      )}
      {album && (
        <div className={styles.albumInfo}>
          <p className={styles.albumName}>Album Name: {album.strAlbum}</p>
          <p className={styles.albumId}>Album ID: {album.idAlbum}</p>
        </div>
      )}

      <div className={styles.songsPlaceholder}>
        <h3 className={styles.songsHeading}>Songs</h3>
        {songs.map((song) => (
          <SongDetail key={song.idTrack} song={song} />
        ))}
      </div>
    </div>
  );
};

export default AlbumDetails;
