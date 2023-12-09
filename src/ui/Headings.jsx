import { styled, css } from "styled-components";

const Headings = styled.h1`
  font-size: 3rem;
  color: hsl(var(--color-black));

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 1.5rem;
      text-align: left;
    `}
`;

export default Headings;
