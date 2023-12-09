import { styled, css } from "styled-components";
import Image from "./Image";
import { usePurchase } from "../context/PurchaseContext";

const StyledCon = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1.4rem;
  background: hsl(var(--color-light-grayish-blue));
  border: none;
  border-radius: 5px;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* For Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const PlusMinusButtons = styled(Image)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${(props) =>
    props.$type === "minus" &&
    css`
      left: 2rem;
    `}
  ${(props) =>
    props.$type === "plus" &&
    css`
      right: 2rem;
    `}
`;

function Input() {
  const { quantity, handleQuantity, handleAddition, handleSubtraction } =
    usePurchase();
  return (
    <StyledCon>
      <StyledInput
        type="number"
        value={quantity}
        onChange={handleQuantity}
      ></StyledInput>
      <PlusMinusButtons
        src="icon-plus.svg"
        alt="plus"
        $type="plus"
        onClick={handleAddition}
      />
      <PlusMinusButtons
        src="icon-minus.svg"
        alt="minus"
        $type="minus"
        onClick={handleSubtraction}
      />
    </StyledCon>
  );
}

export default Input;
