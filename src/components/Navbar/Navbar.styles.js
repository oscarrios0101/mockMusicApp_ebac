// src/components/Navbar/Navbar.styles.js
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing.medium};
  text-align: center;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.medium};
`;

export const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.background};
  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.main};

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }

  &.active {
    font-weight: bold;
  }
`;
