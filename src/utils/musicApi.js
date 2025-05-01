// musicApi.js
// using free api from https://www.theaudiodb.com
// using the free api key with the value 2
const apiKey = "2";

const searchByArtistName = (artistName) => {
  if (!artistName || artistName.trim() === "") {
    console.log("Artist name cannot be empty.");
    return Promise.resolve(null);
  }
  const apiUrl = `https://www.theaudiodb.com/api/v1/json/${apiKey}/search.php?s=${artistName}`;
  return fetch(apiUrl).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
};

const getAlbumById = (albumId) => {
  if (!albumId || albumId.trim() === "") {
    console.log("Album ID cannot be empty.");
    return Promise.resolve(null);
  }

  const apiUrl = `https://www.theaudiodb.com/api/v1/json/${apiKey}/album.php?m=${albumId}`;
  return fetch(apiUrl).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
};

const getAlbumsByArtistId = (artistId) => {
  if (!artistId || artistId.trim() === "") {
    console.log("Artist ID cannot be empty.");
    return Promise.resolve(null);
  }
  const apiUrl = `https://www.theaudiodb.com/api/v1/json/${apiKey}/album.php?i=${artistId}`;
  return fetch(apiUrl).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
};

const getSongsByAlbumId = (albumId) => {
  if (!albumId || albumId.trim() === "") {
    console.log("Album ID cannot be empty.");
    return Promise.resolve(null);
  }
  const apiUrl = `https://www.theaudiodb.com/api/v1/json/${apiKey}/track.php?m=${albumId}`;
  return fetch(apiUrl).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
};

const getSongById = (songId) => {
  if (!songId || songId.trim() === "") {
    console.log("Song ID cannot be empty.");
    return Promise.resolve(null);
  }

  const apiUrl = `https://www.theaudiodb.com/api/v1/json/${apiKey}/track.php?h=${songId}`;
  return fetch(apiUrl).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
};

export {
  searchByArtistName,
  getAlbumById,
  getAlbumsByArtistId,
  getSongsByAlbumId,
  getSongById,
};
