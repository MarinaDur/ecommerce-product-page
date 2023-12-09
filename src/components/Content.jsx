import { styled } from "styled-components";
import Flex from "../ui/Flex";
import HeadingText from "../ui/HeadingText";
import DescPrice from "./DescPrice";
import Form from "./Form";

const StyledContent = styled(Flex)`
  padding-inline: 2rem;
  gap: 2rem;
  align-items: flex-start;
  width: 100%;

  flex-direction: column;
`;

function Content() {
  return (
    <StyledContent>
      <HeadingText />
      <DescPrice />
      <Form />
    </StyledContent>
  );
}

export default Content;
