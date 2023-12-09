import { styled } from "styled-components";
import Flex from "../ui/Flex";
import IconCart from "../ui/IconCart";
import Avatar from "../ui/Avatar";
import Cart from "./Cart";
import { useState } from "react";
import { useEffect } from "react";

const StyledUser = styled(Flex)`
  align-items: baseline;
  width: 50%;
  gap: 2rem;
  justify-content: flex-end;
  flex-direction: row;
  position: relative;

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

function User() {
  const [showCart, setShowCart] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setShowCart(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <StyledUser>
      <IconCart />
      <Avatar />
      {showCart && <Cart />}
    </StyledUser>
  );
}

export default User;
