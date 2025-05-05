// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import theme from "./styles/theme";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import SongWrapperComponent from "./components/SongWrapperComponent/SongWrapperComponent";
import AlbumDetails from "./components/AlbumDetails/AlbumDetails";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar siteTitle="Music Explorer" />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage appName="mock music app using styled components" />
            }
          />
          <Route path="/song/:songId" element={<SongWrapperComponent />} />

          <Route path="/album/:albumId" element={<AlbumDetails />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
