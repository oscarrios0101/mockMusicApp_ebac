import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getSongById } from "../../utils/musicApi.js";

const StyledSongDetails = styled.div`
  padding: 2em;
  margin: 2em auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
  text-align: center;
`;

const StyledTitle = styled.h2`
  color: #333;
  margin-bottom: 0.5em;
`;

const StyledInfo = styled.p`
  color: #555;
  margin-bottom: 0.3em;
`;

const StyledThumb = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 4px;
  margin-top: 1em;
`;

const StyledLoading = styled.p`
  color: #555;
  font-style: italic;
`;

const StyledNotFound = styled.p`
  color: #777;
`;

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
    <StyledSongDetails>
      {loading ? (
        <StyledLoading>Loading song details...</StyledLoading>
      ) : song ? (
        <div>
          <StyledTitle>{song.strTrack}</StyledTitle>
          <StyledInfo>Artist: {song.strArtist}</StyledInfo>
          <StyledInfo>Album: {song.strAlbum}</StyledInfo>
          {song.strTrackThumb && (
            <StyledThumb src={song.strTrackThumb} alt={song.strTrack} />
          )}
        </div>
      ) : (
        <StyledNotFound>Song not found.</StyledNotFound>
      )}
    </StyledSongDetails>
  );
};

export default SongWrapperComponent;
