// src/components/SearchResults/SearchResults.js
import React, { useEffect, useState } from "react";
import {
  StyledSearchResultsSection,
  StyledTitle,
  StyledInfoText,
  StyledLoading,
  StyledError,
} from "./SearchResults.styles";

import { getAlbumsByArtistId } from "../../utils/musicApi";
import ArtistAlbums from "../ArtistAlbums/ArtistAlbums";

const SearchResults = ({ searchResults, searchType }) => {
  const [artistAlbums, setArtistAlbums] = useState([]);
  const [loadingAlbums, setLoadingAlbums] = useState(false);
  const [albumError, setAlbumError] = useState(null);

  useEffect(() => {
    if (searchType === "artist" && searchResults?.artists?.[0]?.idArtist) {
      const artistId = searchResults.artists[0].idArtist;
      setLoadingAlbums(true);
      setAlbumError(null);
      getAlbumsByArtistId(artistId)
        .then((data) => {
          setLoadingAlbums(false);
          if (data && data.album) {
            setArtistAlbums(data.album);
          } else {
            setArtistAlbums([]);
          }
        })
        .catch((error) => {
          setLoadingAlbums(false);
          setAlbumError(error);
          console.error("Error fetching albums:", error);
        });
    } else {
      setArtistAlbums([]);
    }
  }, [searchResults, searchType]);

  return (
    <StyledSearchResultsSection>
      <StyledInfoText>Here are the search results:</StyledInfoText>
      {console.log(searchResults)}
      {searchType === "artist" && searchResults?.artists?.[0]?.idArtist && (
        <div>
          <StyledTitle>
            Albums by {searchResults.artists[0].strArtist}
          </StyledTitle>
          {loadingAlbums && <StyledLoading>Loading albums...</StyledLoading>}
          {albumError && (
            <StyledError>
              Error loading albums: {albumError.message}
            </StyledError>
          )}
          {artistAlbums.length > 0 && (
            <ArtistAlbums
              artistAlbums={artistAlbums}
              loadingAlbums={loadingAlbums}
              albumError={albumError}
            />
          )}
          {artistAlbums.length === 0 && !loadingAlbums && !albumError && (
            <StyledInfoText>No albums found for this artist.</StyledInfoText>
          )}
        </div>
      )}

      {searchType === "albumId" && searchResults?.album && (
        <div>
          <StyledTitle>Album Details</StyledTitle>
          <StyledInfoText>
            Album Name: {searchResults.album[0].strAlbum}
          </StyledInfoText>
          <StyledInfoText>
            Artist: {searchResults.album[0].strArtist}
          </StyledInfoText>
          {/* Display other album details as needed */}
        </div>
      )}

      {searchType === "albumsByArtist" && searchResults?.album && (
        <div>
          <StyledTitle>Albums by Artist ID</StyledTitle>
          {searchResults.album.length > 0 ? (
            <ArtistAlbums artistAlbums={searchResults.album} />
          ) : (
            <StyledInfoText>No albums found for this artist ID.</StyledInfoText>
          )}
        </div>
      )}

      {searchType !== "artist" &&
        searchType !== "albumId" &&
        searchType !== "albumsByArtist" && (
          <StyledInfoText>
            No specific results to display for this search type.
          </StyledInfoText>
        )}

      {searchType === "artist" && !searchResults?.artists?.[0]?.idArtist && (
        <StyledInfoText>No artist found matching your search.</StyledInfoText>
      )}

      {searchType === "albumId" && !searchResults?.album && (
        <StyledInfoText>No album found with that ID.</StyledInfoText>
      )}

      {searchType === "albumsByArtist" && !searchResults?.album && (
        <StyledInfoText>No albums found for that artist ID.</StyledInfoText>
      )}
    </StyledSearchResultsSection>
  );
};

export default SearchResults;
