import { styled } from "styled-components";
import Image from "./Image";
import { usePurchase } from "../context/PurchaseContext";
import CartQuantity from "./CartQuantity";

const StyledCartCon = styled.div`
  width: 28px;
  height: 28px;
  position: relative;
`;

const StyledCartImg = styled(Image)`
  width: 100%;
`;

function IconCart() {
  const { handleCart, cartQuantity } = usePurchase();
  return (
    <StyledCartCon onClick={handleCart}>
      {cartQuantity > 0 && <CartQuantity />}
      <StyledCartImg src="icon-cart.svg" />
    </StyledCartCon>
  );
}

export default IconCart;
