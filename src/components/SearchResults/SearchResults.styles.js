// src/components/SearchResults/SearchResults.styles.js
import styled from "styled-components";

export const StyledSearchResultsSection = styled.section`
  padding: ${(props) => props.theme.spacing.large};
  margin-top: ${(props) => props.theme.spacing.medium};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 800px;
`;

export const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.medium};
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const StyledInfoText = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 0.9em;
  margin-bottom: ${(props) => props.theme.spacing.small};
  font-family: ${(props) => props.theme.fonts.main};
`;

export const StyledLoading = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-style: italic;
  font-size: 0.9em;
`;

export const StyledError = styled.p`
  color: ${(props) => props.theme.colors.error || "#dc3545"};
  font-weight: bold;
  font-size: 0.9em;
`;
