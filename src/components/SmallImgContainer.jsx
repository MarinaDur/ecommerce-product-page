import { LazyLoadImage } from "react-lazy-load-image-component";
import { styled } from "styled-components";
import IconNextPrev from "../ui/IconNextPrev";
import { usePurchase } from "../context/PurchaseContext";

const StyledSmallImgContainer = styled.div`
  width: 100%;
  position: relative;
  min-height: 100px;

  @media (min-width: 1023.99px) {
    display: none;
  }
`;

function SmallImgContainer() {
  const {
    imageNum,
    handleNextImg,
    handlePrevImg,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = usePurchase();
  return (
    <StyledSmallImgContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <LazyLoadImage
        src={`image-product-${imageNum}.jpg`}
        alt="product"
        width="100%"
        placeholderSrc={`image-product-low-${imageNum}.jpg`}
        effect="blur"
      />
      <IconNextPrev
        side="right"
        type="next"
        handleImg={handleNextImg}
        screen="small-screen"
      />
      <IconNextPrev
        side="left"
        type="previous"
        handleImg={handlePrevImg}
        screen="small-screen"
      />
    </StyledSmallImgContainer>
  );
}

export default SmallImgContainer;
