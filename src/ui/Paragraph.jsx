import { styled, css } from "styled-components";

const Paragraph = styled.p`
  font-size: 1.5rem;
  color: hsl(var(--color-dark-grayish-blue));

  ${(props) =>
    props.$type === "company" &&
    css`
      color: hsl(var(--color-pr-orange));
      letter-spacing: 2px;
      font-weight: 700;
    `}
  ${(props) =>
    props.$type === "main" &&
    css`
      /* color: hsl(var(--color-dark-grayish-blue)); */
      line-height: 1.5;
    `}
  ${(props) =>
    props.$type === "percent" &&
    css`
      color: hsl(var(--color-pr-orange));
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1;
    `}
  ${(props) =>
    props.$type === "prev-price" &&
    css`
      position: relative;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.5;
      color: hsl(var(--color-grayish-blue));

      &::before {
        content: "";
        position: absolute;
        top: 55%;
        left: 0;
        right: 0;
        border-bottom: 2px solid;
      }
    `}

     ${(props) =>
    props.$type === "btn" &&
    css`
      color: hsl(var(--color-white));
      line-height: 1;
      font-weight: 700;
      font-size: 1.4rem;
    `}

     ${(props) =>
    props.$type === "quantity" &&
    css`
      color: hsl(var(--color-white));
      line-height: 1;
      font-size: 1rem;
      font-weight: 700;
    `}
     ${(props) =>
    props.$type === "cart-quantity" &&
    css`
      color: hsl(var(--color-dark-grayish-blue));
      line-height: 1;
      font-weight: 700;
    `}
`;

export default Paragraph;
