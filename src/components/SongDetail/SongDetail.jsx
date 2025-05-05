// src/components/SongDetail/SongDetail.js
import React from "react";
import {
  StyledSongLink,
  StyledSongContainer,
  StyledList,
  StyledListItem,
  StyledId,
} from "./SongDetail.styles";

const SongDetail = ({ song }) => {
  return (
    <StyledSongLink to={`/song/${song.idTrack}`}>
      <StyledSongContainer>
        <StyledList>
          <StyledListItem>
            <strong>Song Name:</strong>
            {song.strTrack}
          </StyledListItem>
          <StyledListItem>
            <strong>Album Name:</strong>
            {song.strAlbum}
          </StyledListItem>
          <StyledListItem>
            <strong>Artist Name:</strong>
            {song.strArtist}
          </StyledListItem>
          <StyledId>ID: {song.idTrack}</StyledId>
        </StyledList>
      </StyledSongContainer>
    </StyledSongLink>
  );
};

export default SongDetail;
