import { styled, css } from "styled-components";

const StyledMenuListItems = styled.li`
  font-size: 1.5rem;
  cursor: pointer;
  ${(props) =>
    props.type === "small" &&
    css`
      font-weight: 700;
    `}
  ${(props) =>
    props.type === "big" &&
    css`
      color: hsl(var(--color-dark-grayish-blue));
      position: relative;
      transition: all 2s ease-in-out;

      &:hover {
        &::after {
          content: "";
          position: absolute;
          top: 6rem;
          left: 0;
          width: 100%;
          height: 4px;
          background: hsl(var(--color-pr-orange));
        }
      }
    `}
`;

function MenuListItems({ type }) {
  return (
    <>
      <StyledMenuListItems type={type}>Collections</StyledMenuListItems>
      <StyledMenuListItems type={type}>Men</StyledMenuListItems>
      <StyledMenuListItems type={type}>Women</StyledMenuListItems>
      <StyledMenuListItems type={type}>About</StyledMenuListItems>
      <StyledMenuListItems type={type}>Contact</StyledMenuListItems>
    </>
  );
}

export default MenuListItems;
