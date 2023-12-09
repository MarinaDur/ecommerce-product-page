import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Logo from "../ui/Logo";
import IconMenu from "../ui/IconMenu";
import { usePurchase } from "../context/PurchaseContext";
import BigMenu from "./BigMenu";

const StyledNavBar = styled(Flex)`
  width: 80%;
  align-items: baseline;
  gap: 2rem;
  flex-direction: row;

  @media (min-width: 1024px) {
    align-items: center;
    gap: 4rem;
  }
`;

function NavBar() {
  const { handleOpenMenu } = usePurchase();
  return (
    <StyledNavBar as="nav">
      <IconMenu src="icon-menu.svg" alt="menu" onClick={handleOpenMenu} />
      <Logo src="logo.svg" alt="logo" />
      <BigMenu />
    </StyledNavBar>
  );
}

export default NavBar;
