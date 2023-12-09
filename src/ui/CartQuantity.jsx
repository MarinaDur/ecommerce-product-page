import { styled } from "styled-components";
import Paragraph from "./Paragraph";
import { usePurchase } from "../context/PurchaseContext";

const StyledCartQuantity = styled.div`
  position: absolute;
  padding: 0.2rem 0.6rem;
  background: hsl(var(--color-pr-orange));
  border-radius: 5px;
  top: 0;
  right: 0;
`;

function CartQuantity() {
  const { cartQuantity } = usePurchase();
  return (
    <StyledCartQuantity>
      <Paragraph $type="quantity">{cartQuantity}</Paragraph>
    </StyledCartQuantity>
  );
}

export default CartQuantity;
