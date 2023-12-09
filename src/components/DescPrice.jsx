import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Paragraph from "../ui/Paragraph";
import Price from "./Price";

const StyledDescPrice = styled(Flex)`
  align-items: flex-start;
  gap: 2rem;
  flex-direction: column;
`;

function DescPrice() {
  return (
    <StyledDescPrice>
      <Paragraph $type="main">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </Paragraph>
      <Price />
    </StyledDescPrice>
  );
}

export default DescPrice;
