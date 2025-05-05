import React, { useEffect, useState } from "react";

import { getAlbumsByArtistId } from "../../utils/musicApi";
import ArtistAlbums from "../ArtistAlbums/ArtistAlbums";

const SearchResults = ({ searchResults, searchType }) => {
  const [artistAlbums, setArtistAlbums] = useState([]);
  const [loadingAlbums, setLoadingAlbums] = useState(false);
  const [albumError, setAlbumError] = useState(null);

  // Fetch albums for the selected artist, using coldplay as free example in the api
  //im using the free api from https://www.theaudiodb.com
  //first it gets the artist id from the search results then using that id it fetches the albums

  useEffect(() => {
    if (searchType === "artist" && searchResults.artists[0].idArtist) {
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

  //todo : add logic for other search types

  return (
    <section>
      <p>here is the logic of search results</p>
      {console.log(searchResults)}
      {searchType === "artist" && searchResults?.artists?.[0]?.idArtist && (
        <div>
          <h3>
            Fetching albums for artist ID: {searchResults.artists[0].idArtist}
          </h3>
          {loadingAlbums && <p>Loading albums...</p>}
          {albumError && <p>Error loading albums: {albumError.message}</p>}
          {artistAlbums.length > 0 && (
            <ArtistAlbums
              artistAlbums={artistAlbums}
              loadingAlbums={loadingAlbums}
              albumError={albumError}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default SearchResults;
