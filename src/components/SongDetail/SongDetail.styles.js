// src/components/SongDetail/SongDetail.styles.js
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSongLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  margin-bottom: ${(props) => props.theme.spacing.medium};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledSongContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing.medium};
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledListItem = styled.li`
  font-size: 0.9em;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.small};
  font-family: ${(props) => props.theme.fonts.main};

  strong {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    margin-right: 0.3em;
  }
`;

export const StyledId = styled.li`
  font-size: 0.7em;
  color: ${(props) => props.theme.colors.secondary};
`;
