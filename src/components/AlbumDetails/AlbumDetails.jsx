// src/components/AlbumDetails/AlbumDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongsByAlbumId, getAlbumById } from "../../utils/musicApi";
import SongDetail from "../SongDetail/SongDetail";
import {
  Container,
  Heading,
  LoadingMessage,
  ErrorMessage,
  NoAlbumMessage,
  AlbumInfo,
  AlbumName,
  AlbumId,
  SongsPlaceholder,
  SongsHeading,
} from "./AlbumDetails.styles";

const AlbumDetails = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const data = await getSongsByAlbumId(albumId);
        setLoading(false);
        if (data && data.track && data.track.length > 0) {
          setSongs(data.track);
        } else {
          setSongs([]);
        }
      } catch (err) {
        setLoading(false);
        setError(err.message);
        console.error("Error fetching songs:", err);
      }
    };

    fetchSongs();
  }, [albumId]);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const data = await getAlbumById(albumId);
        setLoading(false);
        if (data && data.album && data.album.length > 0) {
          setAlbum(data.album[0]);
        } else {
          setAlbum(null);
        }
      } catch (err) {
        setLoading(false);
        setError(err.message);
        console.error("Error fetching album:", err);
      }
    };

    fetchAlbum();
  }, [albumId]);

  return (
    <Container>
      <Heading>Album Details</Heading>
      {loading && <LoadingMessage>Loading album details...</LoadingMessage>}
      {error && (
        <ErrorMessage>Error loading album details: {error}</ErrorMessage>
      )}
      {!loading && !album && !error && (
        <NoAlbumMessage>No album found with ID: {albumId}</NoAlbumMessage>
      )}
      {album && (
        <AlbumInfo>
          <AlbumName>Album Name: {album.strAlbum}</AlbumName>
          <AlbumId>Album ID: {album.idAlbum}</AlbumId>
          {/* You can add more album details here if needed */}
        </AlbumInfo>
      )}

      <SongsPlaceholder>
        <SongsHeading>Songs</SongsHeading>
        {songs.map((song) => (
          <SongDetail key={song.idTrack} song={song} />
        ))}
      </SongsPlaceholder>
    </Container>
  );
};

export default AlbumDetails;
