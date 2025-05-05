import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.spacing.large};
  background-color: ${(props) => props.theme.colors.background}; /* Use theme */
`;

export const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary}; /* Use theme */
  margin-bottom: ${(props) => props.theme.spacing.medium};
  font-family: ${(props) => props.theme.fonts.heading}; /* Use theme */
`;
