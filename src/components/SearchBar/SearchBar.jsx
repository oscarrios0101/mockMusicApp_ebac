import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import {
  searchByArtistName,
  getAlbumById,
  getAlbumsByArtistId,
} from "../../utils/musicApi";
import SearchResults from "../SearchResults/SearchResults";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("artist");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRadioChange = (e) => {
    setSearchType(e.target.value);
    setSearchResults(null);
    setError(null);
  };

  const triggerSearch = async () => {
    if (searchQuery.trim()) {
      setLoading(true);
      setError(null);
      try {
        let results;
        switch (searchType) {
          case "artist":
            results = await searchByArtistName(searchQuery);
            setSearchResults(results);
            break;
          case "albumId":
            results = await getAlbumById(searchQuery);
            setSearchResults(results);
            break;
          case "albumsByArtist":
            results = await getAlbumsByArtistId(searchQuery);
            setSearchResults(results);
            break;
          default:
            setError("Invalid search type.");
            setLoading(false);
            return;
        }
        console.log("Search Results:", results);
        setSearchResults(results);
      } catch (err) {
        console.error("Search Error:", err);
        setError(`Search failed: ${err.message}`);
        setSearchResults(null);
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please enter a search term.");
      setSearchResults(null);
    }
  };

  return (
    <div className={styles.SearchBarContainer}>
      <div className={styles.SearchInputContainer}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder={
            searchType === "artist"
              ? "Search for artist name..."
              : searchType === "albumId"
              ? "Search for album ID..."
              : "Search..." // Default placeholder
          }
        />
        <button
          type="button"
          className={styles.searchButton}
          onClick={triggerSearch}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      <div className={styles.RadioContainer}>
        <div className={styles.RadioButtons}>
          <input
            type="radio"
            value="artist"
            checked={searchType === "artist"}
            onChange={handleRadioChange}
          />
          <label>Artist</label>

          <input
            type="radio"
            value="albumId"
            checked={searchType === "albumId"}
            onChange={handleRadioChange}
          />
          <label>Album ID</label>
        </div>
      </div>

      {loading && <p>Searching...</p>}
      {error && <p className={styles.errorMessage}>Error: {error}</p>}

      {searchResults && (
        <SearchResults searchResults={searchResults} searchType={searchType} />
      )}
    </div>
  );
};

export default SearchBar;
