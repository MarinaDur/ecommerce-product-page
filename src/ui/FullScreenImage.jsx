import { styled } from "styled-components";
import Flex from "./Flex";
import BigImgContainer from "../components/BigImgContainer";
import { usePurchase } from "../context/PurchaseContext";

const StyledFullScreenImage = styled(Flex)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: hsl(var(--color-black) / 0.7);
  z-index: 99999999;
  justify-content: center;
`;

function FullScreenImage() {
  const { handleCloseFullScreenImage } = usePurchase();

  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      // Only execute the logic if the click occurred directly on the container
      handleCloseFullScreenImage();
    }
  };
  return (
    <StyledFullScreenImage onClick={handleClick}>
      <BigImgContainer type="full-screen" />
    </StyledFullScreenImage>
  );
}

export default FullScreenImage;
