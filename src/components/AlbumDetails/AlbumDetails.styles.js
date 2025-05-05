// src/components/AlbumDetails/AlbumDetails.styles.js
import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.spacing.large};
`;

export const Heading = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.medium};
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const LoadingMessage = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-style: italic;
  font-size: 0.9em;
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.error || "#dc3545"};
  font-weight: bold;
  font-size: 0.9em;
`;

export const NoAlbumMessage = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 0.9em;
`;

export const AlbumInfo = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.medium};
  padding: ${(props) => props.theme.spacing.medium};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const AlbumName = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.1em;
  margin-bottom: ${(props) => props.theme.spacing.small};
  font-weight: bold;
`;

export const AlbumId = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 0.8em;
`;

export const SongsPlaceholder = styled.div`
  margin-top: ${(props) => props.theme.spacing.large};
`;

export const SongsHeading = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.medium};
  font-family: ${(props) => props.theme.fonts.heading};
`;
