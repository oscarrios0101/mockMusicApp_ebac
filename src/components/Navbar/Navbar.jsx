import React from "react";
import { StyledNav, StyledList, StyledLink } from "./Navbar.styles";

const Navbar = (
  { siteTitle } // Receive props
) => (
  <StyledNav>
    <StyledList>
      <li>
        <StyledLink to="/">{siteTitle}</StyledLink> {/* Use prop */}
      </li>
    </StyledList>
  </StyledNav>
);

Navbar.defaultProps = {
  // default prop
  siteTitle: "Music App",
};

export default Navbar;
