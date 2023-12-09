import { styled } from "styled-components";
import NavBar from "./NavBar";
import Flex from "../ui/Flex";
import User from "./User";
import React from "react";
import Cart from "./Cart";
import { useState } from "react";
import { useEffect } from "react";

const StyledHeader = styled(Flex)`
  width: 100%;
  padding-inline: 2rem;
  justify-content: center;
  position: sticky;
  top: 0;
  right: 0;
  background: hsl(var(--color-white));
  z-index: 999;
`;

const StyledCon = styled(Flex)`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  max-width: 950px;
  padding: 3rem 0;
  border-bottom: 3px solid hsl(var(--color-light-grayish-blue));
`;

function Header() {
  const [showCart, setShowCart] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setShowCart(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <StyledHeader as="header">
      <StyledCon>
        <NavBar />
        <User />
        {showCart && <Cart />}
      </StyledCon>
    </StyledHeader>
  );
}

export default Header;
