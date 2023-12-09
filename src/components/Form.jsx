import { styled } from "styled-components";
import Input from "../ui/Input";
import AddToCartButton from "../ui/AddToCartButton";
import Flex from "../ui/Flex";

const StyledForm = styled(Flex)`
  width: 100%;
  margin-bottom: 6rem;
  align-items: stretch;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

function Form() {
  return (
    <StyledForm>
      <Input />
      <AddToCartButton />
    </StyledForm>
  );
}

export default Form;
