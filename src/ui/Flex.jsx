import { styled } from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export default Flex;
