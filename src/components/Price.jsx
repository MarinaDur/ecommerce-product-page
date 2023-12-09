import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Headings from "../ui/Headings";
import Paragraph from "../ui/Paragraph";

const StyledPrice = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const StyledCurrentPriceCon = styled(Flex)`
  flex-direction: row;
`;

const StyledPercentage = styled.div`
  padding: 0.3rem 0.5rem;
  background: hsl(var(--color-light-orange));
`;

function Price() {
  return (
    <StyledPrice>
      <StyledCurrentPriceCon>
        <Headings as="h2">$125.00</Headings>
        <StyledPercentage>
          <Paragraph $type="percent">50%</Paragraph>
        </StyledPercentage>
      </StyledCurrentPriceCon>
      <Paragraph $type="prev-price">$250</Paragraph>
    </StyledPrice>
  );
}

export default Price;
