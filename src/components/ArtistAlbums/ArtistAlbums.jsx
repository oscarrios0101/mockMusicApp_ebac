import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledAlbumsSection = styled.section`
  margin-top: 1em;
`;

const StyledTitle = styled.h3`
  color: #333;
  margin-bottom: 0.5em;
`;

const StyledLoading = styled.p`
  color: #555;
  font-style: italic;
`;

const StyledError = styled.p`
  color: #dc3545;
  font-weight: bold;
`;

const StyledAlbumList = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(150px, 1fr)
  ); /* Responsive grid */
  gap: 1em;
  margin-top: 1em;
`;

const StyledAlbumItem = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 0.5em;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.1);
  }
`;

const StyledAlbumThumb = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 0.5em;
`;

const StyledAlbumInfo = styled.div`
  h4 {
    font-size: 1em;
    color: #333;
    margin-bottom: 0.2em;
  }
  p {
    font-size: 0.8em;
    color: #777;
    margin-bottom: 0.1em;
  }
`;

const StyledNoAlbums = styled.p`
  color: #777;
  font-style: italic;
`;

const ArtistAlbums = ({ artistAlbums, loadingAlbums, albumError }) => {
  const navigate = useNavigate();

  const handleAlbumClick = (albumId) => {
    navigate(`/album/${albumId}`);
  };

  return (
    <StyledAlbumsSection>
      <StyledTitle>Albums:</StyledTitle>
      {loadingAlbums ? (
        <StyledLoading>Loading albums...</StyledLoading>
      ) : albumError ? (
        <StyledError>Error loading albums.</StyledError>
      ) : artistAlbums.length === 0 ? (
        <StyledNoAlbums>No albums found for this artist.</StyledNoAlbums>
      ) : (
        <StyledAlbumList>
          {artistAlbums.map((album) => (
            <StyledAlbumItem
              key={album.idAlbum}
              onClick={() => handleAlbumClick(album.idAlbum)}
            >
              {album.strAlbumThumb && (
                <StyledAlbumThumb
                  src={album.strAlbumThumb}
                  alt={album.strAlbum}
                />
              )}
              <StyledAlbumInfo>
                <h4>{album.strAlbum}</h4>
                <p>({album.intYearReleased})</p>
                <p>album id: {`${album.idAlbum}`}</p>
              </StyledAlbumInfo>
            </StyledAlbumItem>
          ))}
        </StyledAlbumList>
      )}
    </StyledAlbumsSection>
  );
};

export default ArtistAlbums;
