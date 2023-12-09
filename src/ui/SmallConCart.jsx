import { styled, css } from "styled-components";
import { usePurchase } from "../context/PurchaseContext";
import Cart from "../components/Cart";

const StyledSmallConCart = styled.div`
  position: absolute;
  width: 100%;
  height: ${(props) => (props.$isCartOpen ? "80vh" : "0")};
  background: transparent;
  /* overflow: hidden; */
  /* ${(props) => props.type === "small" && css``} */
  top: 80px;
  left: 0;
  z-index: 5555;

  /* @media (min-width: 1024px) {
    padding-inline: 2rem;
  } */
  @media (min-width: 768px) {
    display: none;
    height: 0;
  }
`;

function SmallConCart() {
  const { isCartOpen, handleCloseCart } = usePurchase();
  return (
    <StyledSmallConCart $isCartOpen={isCartOpen} onClick={handleCloseCart}>
      <Cart />
    </StyledSmallConCart>
  );
}

export default SmallConCart;
