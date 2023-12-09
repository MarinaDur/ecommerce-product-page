import { styled } from "styled-components";
import Flex from "../ui/Flex";
import ImageSlider from "./ImageSlider";
import Content from "./Content";
import Overlay from "../ui/Overlay";
import { usePurchase } from "../context/PurchaseContext";
import SmallConCart from "../ui/SmallConCart";

const StyledMain = styled(Flex)`
  @media (min-width: 768px) {
    max-width: 450px;
    /* align-items: center;
    justify-content: center;
    height: 100vh; */
  }
  @media (min-width: 1024px) {
    max-width: 890px;
    /* padding-inline: 5rem; */
  }
`;

const StyledCon = styled.div`
  @media (min-width: 768px) {
    height: calc(100vh - 113px);
    /* height: ${(props) => `calc(100vh - ${props.headerHeight}px `}; */
  }
  display: grid;
  place-content: center;
  /* width: 100vw; */
`;

function Main() {
  const { isMenuOpen } = usePurchase();

  return (
    <StyledCon>
      <StyledMain as="main">
        {isMenuOpen && <Overlay />}

        <ImageSlider />
        <Content />
        {/* <SmallConCart /> */}
      </StyledMain>
    </StyledCon>
  );
}

export default Main;
