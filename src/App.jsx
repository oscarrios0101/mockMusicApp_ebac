import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.module.css";

import Homepage from "./components/Homepage/Homepage";
import { SearchProvider } from "./components/Context/SearchContex";
import AlbumDetails from "./components/AlbumDetails/AlbumDetails";

import SongWrapperComponent from "./components/SongWrapperComponent/SongWrapperComponent";
// import TestElement from "./components/TestElement/TestElement";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <SearchProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/album/:albumId" element={<AlbumDetails />} />
            <Route path="/song/:songId" element={<SongWrapperComponent />} />
            {/* <Route path="/test/" element={<TestElement />} /> */}
          </Routes>
        </SearchProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
