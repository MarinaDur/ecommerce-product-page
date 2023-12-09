import { styled, css } from "styled-components";
import Image from "./Image";

const IconCon = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background: hsl(var(--color-white));
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  ${(props) =>
    props.$screen === "full-screen" &&
    css`
      z-index: 9999999999999999;
      overflow: visible;
    `}

  ${(props) =>
    props.$side === "left" &&
    css`
      ${(props) =>
        props.$screen === "small-screen" &&
        css`
          left: 2rem;
        `}

      ${(props) =>
        props.$screen === "full-screen" &&
        css`
          left: 0;
          transform: translate(-50%, -50%);
        `}
    `}

  ${(props) =>
    props.$side === "right" &&
    css`
      ${(props) =>
        props.$screen === "small-screen" &&
        css`
          right: 2rem;
        `}

      ${(props) =>
        props.$screen === "full-screen" &&
        css`
          right: 0;
          transform: translate(50%, -50%);
        `}
    `}
`;

const StyledIconNextPrev = styled(Image)`
  width: 10px;
`;

function IconNextPrev({ handleImg, type, side, screen }) {
  return (
    <IconCon $side={side} type={type} $screen={screen} onClick={handleImg}>
      <StyledIconNextPrev src={`icon-${type}.svg`} alt={type} />
    </IconCon>
  );
}

export default IconNextPrev;
