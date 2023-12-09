import { LazyLoadImage } from "react-lazy-load-image-component";
import { styled, css } from "styled-components";
import Flex from "../ui/Flex";
import { usePurchase } from "../context/PurchaseContext";
import IconNextPrev from "../ui/IconNextPrev";
import Svg from "../ui/Svg";

const StyledBigImgContainer = styled(Flex)`
  @media (max-width: 1023px) {
    display: none;
  }

  width: 100%;
  flex-direction: column;

  ${(props) =>
    props.type === "full-screen" &&
    css`
      position: relative;
      width: clamp(500px, 50vw, 600px);
    `}
`;

const StyledImageCon = styled(Flex)`
  @media (max-width: 1023px) {
    display: none;
  }
  cursor: pointer;
  width: 80%;
  border-radius: 10px;
  overflow: visible;

  ${(props) =>
    props.type === "full-screen" &&
    css`
      position: relative;
      flex-direction: column;
    `}
`;
const StyledImagesCon = styled(Flex)`
  @media (max-width: 1023px) {
    display: none;
  }

  width: 80%;
  justify-content: space-between;

  ${(props) =>
    props.type === "full-screen" &&
    css`
      width: 70%;
    `}
`;

const SmallImageContainer = styled(Flex)`
  @media (max-width: 1023px) {
    display: none;
  }
  width: 20.5%;
  border-radius: 10px;
  cursor: pointer;
  background: white;
  outline: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  overflow: hidden;

  ${(props) =>
    props.$picked &&
    css`
      border: 2px solid hsl(var(--color-pr-orange));
    `}
`;
const StyledImages = styled.img`
  @media (max-width: 1023px) {
    display: none;
  }
  position: relative;
  width: 100%;
  border-radius: 10px;

  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    opacity: 0.7;
  }

  ${(props) =>
    props.$picked &&
    css`
      /* border: 2px solid hsl(var(--color-pr-orange)); */
      opacity: 0.5;
    `}
`;

function BigImgContainer({ type }) {
  const {
    imageNum,
    handleImageId,
    isFullImgOpen,
    handleOpenFullScreenImage,
    handleNextImg,
    handlePrevImg,
    handleCloseFullScreenImage,
  } = usePurchase();

  return (
    <StyledBigImgContainer type={type}>
      <StyledImageCon>
        {isFullImgOpen && type === "full-screen" && (
          <Svg
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fill-rule="evenodd"
            type="close-btn"
            handleClose={handleCloseFullScreenImage}
          />
        )}
        <LazyLoadImage
          src={`image-product-${imageNum}.jpg`}
          alt="product"
          width="100%"
          placeholderSrc={`image-product-low-${imageNum}.jpg`}
          effect="blur"
          onClick={handleOpenFullScreenImage}
        />
        {isFullImgOpen && type === "full-screen" && (
          <>
            <IconNextPrev
              type="previous"
              side="left"
              screen="full-screen"
              handleImg={handlePrevImg}
            />
            <IconNextPrev
              type="next"
              side="right"
              screen="full-screen"
              handleImg={handleNextImg}
            />
          </>
        )}
      </StyledImageCon>
      <StyledImagesCon type={type}>
        <SmallImageContainer $picked={imageNum === 1}>
          <StyledImages
            src="image-product-1-thumbnail.jpg"
            alt="product"
            onClick={() => handleImageId(1)}
            $picked={imageNum === 1}
          />
        </SmallImageContainer>
        <SmallImageContainer $picked={imageNum === 2}>
          <StyledImages
            src="image-product-2-thumbnail.jpg"
            alt="product"
            onClick={() => handleImageId(2)}
            $picked={imageNum === 2}
          />
        </SmallImageContainer>
        <SmallImageContainer $picked={imageNum === 3}>
          <StyledImages
            src="image-product-3-thumbnail.jpg"
            alt="product"
            onClick={() => handleImageId(3)}
            $picked={imageNum === 3}
          />
        </SmallImageContainer>
        <SmallImageContainer $picked={imageNum === 4}>
          <StyledImages
            src="image-product-4-thumbnail.jpg"
            alt="product"
            onClick={() => handleImageId(4)}
            $picked={imageNum === 4}
          />
        </SmallImageContainer>
      </StyledImagesCon>
    </StyledBigImgContainer>
  );
}

export default BigImgContainer;
