// src/components/SearchBar/SearchBar.styles.js
import styled from "styled-components";

export const StyledSearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.medium};
  align-items: center;
  padding: ${(props) => props.theme.spacing.large};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
`;

export const StyledInput = styled.input`
  padding: ${(props) => props.theme.spacing.medium};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.text};
`;

export const StyledButton = styled.button`
  padding: ${(props) => props.theme.spacing.medium}
    ${(props) => props.theme.spacing.large};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
  font-family: ${(props) => props.theme.fonts.main};

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.primaryHover}; /* Optional hover color */
  }

  &:disabled {
    background-color: ${(props) =>
      props.theme.colors.disabled || "#ccc"}; /* Optional disabled color */
    color: ${(props) =>
      props.theme.colors.disabledText ||
      "#fff"}; /* Optional disabled text color */
    cursor: not-allowed;
  }
`;

export const StyledRadioGroup = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.medium};
  align-items: center;
`;

export const StyledRadioLabel = styled.label`
  font-size: 0.9em;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.main};
`;

export const StyledLoading = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-style: italic;
  font-size: 0.9em;
`;

export const StyledError = styled.p`
  color: ${(props) =>
    props.theme.colors.error || "#dc3545"}; /* Optional error color */
  font-weight: bold;
  font-size: 0.9em;
`;
