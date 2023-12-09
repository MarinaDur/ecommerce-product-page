import { styled } from "styled-components";
import Flex from "./Flex";
import Headings from "./Headings";
import Paragraph from "./Paragraph";

const StyledHeadingText = styled(Flex)`
  align-items: flex-start;
  flex-direction: column;
`;

function HeadingText() {
  return (
    <StyledHeadingText>
      <Paragraph $type="company">SNEAKER COMPANY</Paragraph>
      <Headings>Fall Limited Edition Sneakers</Headings>
    </StyledHeadingText>
  );
}

export default HeadingText;
