import { styled } from "styled-components";
import MenuListItems from "../ui/MenuListItems";
import Flex from "../ui/Flex";

const StyledBigMenu = styled(Flex)`
  @media (max-width: 1023px) {
    display: none;
  }
  gap: 3rem;
`;

function BigMenu() {
  return (
    <StyledBigMenu as="ul">
      <MenuListItems type="big" />
    </StyledBigMenu>
  );
}

export default BigMenu;
