import { styled } from "styled-components";
import MenuListItems from "../ui/MenuListItems";
import Flex from "../ui/Flex";
import IconCloseMenu from "../ui/IconCloseMenu";
import { usePurchase } from "../context/PurchaseContext";

const StyledSmallMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (props.$isMenuOpen ? "250px" : "0")};
  min-height: 100vh;
  background: hsl(var(--color-white));
  z-index: 99999;
  /* padding: ${(props) => (props.$isMenuOpen ? " 3rem 2rem" : "0")}; */
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;

const StyledSmallUl = styled(Flex)`
  /* padding-inline: 2rem; */
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 8rem 2rem;
`;

function SmallMenu() {
  const { isMenuOpen, handleCloseMenu } = usePurchase();

  return (
    <StyledSmallMenu $isMenuOpen={isMenuOpen}>
      <IconCloseMenu
        src="icon-close.svg"
        alt="close-menu"
        onClick={handleCloseMenu}
      />
      <StyledSmallUl as="ul">
        <MenuListItems type="small" />
      </StyledSmallUl>
    </StyledSmallMenu>
  );
}

export default SmallMenu;
