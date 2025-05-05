// src/components/Homepage/Homepage.js
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { StyledMain, StyledTitle } from "./Homepage.styles";

const Homepage = ({ appName }) => {
  // Receive props
  return (
    <StyledMain>
      <StyledTitle>{appName}</StyledTitle>
      <SearchBar />
    </StyledMain>
  );
};

Homepage.defaultProps = {
  appName: "Music App", // Default prop value
};

export default Homepage;
