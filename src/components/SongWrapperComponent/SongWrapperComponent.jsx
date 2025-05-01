import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./SongWrapperComponent.module.css";
import { getSongById } from "../../utils/musicApi.js";

const SongWrapperComponent = () => {
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const { songId } = useParams();

  useEffect(() => {
    console.log("Fetching song data for songId:", songId);
    setLoading(true);
    getSongById(songId)
      .then((data) => {
        console.log("Received song data:", data);
        if (data && data.track && data.track.length > 0) {
          console.log("Setting song state to:", data.track[0]);
          setSong(data.track[0]);
        } else {
          console.log("No song data found");
          setSong(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching song data:", error);
        setSong(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [songId]);

  return (
    <div className={styles.songWrapper}>
      {loading ? (
        <p className={styles.loading}>Loading song details...</p>
      ) : (
        song && (
          <div className={styles.songContainer}>
            <h2 className={styles.songTitle}>{song.strTrack}</h2>
            <p className={styles.artistName}>Artist: {song.strArtist}</p>
            <p className={styles.albumName}>Album: {song.strAlbum}</p>
            <img
              src={song.strTrackThumb}
              alt={song.strTrack}
              className={styles.songImage}
            />
          </div>
        )
      )}
    </div>
  );
};

export default SongWrapperComponent;
