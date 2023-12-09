import { styled } from "styled-components";

const Button = styled.button`
  width: 100%;
  background: hsl(var(--color-pr-orange));
  padding: 1.6rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  gap: 1rem;
  box-shadow: 0 15px 10px hsl(var(--color-light-orange));
  transition: all 0.5s ease-in-out;

  &:hover {
    background: hsl(var(--color-pr-orange) / 0.8);
  }
`;

export default Button;
