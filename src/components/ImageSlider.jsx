import { styled } from "styled-components";
import BigImgContainer from "./BigImgContainer";
import SmallImgContainer from "./SmallImgContainer";

const StyledImageSlider = styled.div`
  width: 100%;
`;

function ImageSlider() {
  return (
    <StyledImageSlider>
      <SmallImgContainer />
      <BigImgContainer />
    </StyledImageSlider>
  );
}

export default ImageSlider;
