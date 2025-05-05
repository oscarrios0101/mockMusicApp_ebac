// src/components/SearchBar/SearchBar.js
import React, { useState } from "react";
import {
  StyledSearchBarContainer,
  StyledInput,
  StyledButton,
  StyledRadioGroup,
  StyledRadioLabel,
  StyledLoading,
  StyledError,
} from "./SearchBar.styles";

import {
  searchByArtistName,
  getAlbumById,
  getAlbumsByArtistId,
} from "../../utils/musicApi";
import SearchResults from "../SearchResults/SearchResults";

const SearchBar = ({ searchTypes = ["artist"] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState(searchTypes[0] || "artist");
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

  const getPlaceholderText = () => {
    switch (searchType) {
      case "artist":
        return "Search for artist name...todo search by artist id and album id";

      default:
        return "Search...";
    }
  };

  return (
    <StyledSearchBarContainer>
      <StyledInput
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder={getPlaceholderText()}
      />
      <StyledButton type="button" onClick={triggerSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </StyledButton>
      <StyledRadioGroup>
        <div>
          <input
            type="radio"
            value="artist"
            checked={searchType === "artist"}
            onChange={handleRadioChange}
            id="artistRadio"
          />
          <StyledRadioLabel htmlFor="artistRadio">Artist Name</StyledRadioLabel>
        </div>
      </StyledRadioGroup>

      {loading && <StyledLoading>Searching...</StyledLoading>}
      {error && <StyledError>Error: {error}</StyledError>}

      {searchResults && (
        <SearchResults searchResults={searchResults} searchType={searchType} />
      )}
    </StyledSearchBarContainer>
  );
};

export default SearchBar;
