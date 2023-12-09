import { styled, css } from "styled-components";
import { usePurchase } from "../context/PurchaseContext";

const StyledSvg = styled.svg`
  ${(props) =>
    props.type === "button" &&
    css`
      width: 16px;
      height: 14px;
    `}
  ${(props) =>
    props.type === "close-btn" &&
    css`
      align-self: flex-end;
    `}
    z-index:5555;
`;

const StyledPath = styled.path`
  ${(props) =>
    props.type === "button" &&
    css`
      fill: hsl(var(--color-white));
    `}

  ${(props) =>
    props.type === "close-btn" &&
    css`
      fill: hsl(var(--color-white));

      &:hover {
        fill: hsl(var(--color-pr-orange));
      }
    `}
`;

function Svg({
  width,
  height,
  xmins,
  d,
  fill,
  fillRule,
  type,
  viewBox,
  handleClose,
}) {
  const { handleCloseFullScreenImage } = usePurchase();

  function handle() {
    console.log("clicked");
    handleCloseFullScreenImage();
  }
  return (
    <StyledSvg
      viewBox={viewBox}
      width={width}
      height={height}
      xmlns={xmins}
      type={type}
      onClick={handle}
    >
      <StyledPath d={d} fill={fill} fillRule={fillRule} type={type} />
    </StyledSvg>
  );
}

export default Svg;
