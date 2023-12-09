import { styled, css } from "styled-components";
import Flex from "../ui/Flex";
import Headings from "../ui/Headings";
import Image from "../ui/Image";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import { usePurchase } from "../context/PurchaseContext";

const StyledCart = styled(Flex)`
  width: 95%;
  border-radius: 10px;
  background: ${(props) =>
    props.$isCartOpen ? "hsl(var(--color-white))" : "transparent"};
  /* padding-inline: 2rem; */
  z-index: 9999999;
  align-items: flex-start;
  padding-bottom: 0.5rem;
  gap: ${(props) => (props.$cartQuantity ? "3rem" : "0")};
  height: ${(props) => (props.$isCartOpen ? "275px" : "0")};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  margin: 3rem auto;
  position: absolute;
  top: 80px;
  right: 0;
  left: 0;
  box-shadow: -1px 9px 25px -3px hsl(var(--color-dark-grayish-blue) / 0.5);
  -webkit-box-shadow: -1px 9px 25px -3px hsl(var(--color-dark-grayish-blue) /
        0.5);
  -moz-box-shadow: -1px 9px 25px -3px hsl(var(--color-dark-grayish-blue) / 0.5);

  @media (min-width: 550px) {
    height: ${(props) => (props.$isCartOpen ? "300px" : "0")};
    gap: ${(props) => (props.$cartQuantity ? "1rem" : "0")};
  }
  @media (min-width: 650px) {
    height: ${(props) => (props.$isCartOpen ? "330px" : "0")};
  }
  @media (min-width: 768px) {
    max-width: 440px;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    max-width: 380px;
    height: ${(props) => (props.$isCartOpen ? "210px" : "0")};
    /* position: absolute; */
    top: 10px;
    right: 0;
    /* box-shadow: -1px 9px 25px -3px hsl(var(--color-dark-grayish-blue) / 0.5);
    -webkit-box-shadow: -1px 9px 25px -3px hsl(var(--color-dark-grayish-blue) /
          0.5);
    -moz-box-shadow: -1px 9px 25px -3px hsl(var(--color-dark-grayish-blue) / 0.5); */
  }
  @media (min-width: 1024px) {
    top: 5vh;
    width: 100%;
  }
  @media (min-width: 1280px) {
    right: clamp(-2vw, -4vw, -3vw);
  }
`;

const StyledHeaderCon = styled.div`
  border-bottom: 0.5px solid hsl(var(--color-grayish-blue));
  width: 100%;
`;

const StyledCartInsideDiv = styled.div`
  width: 100%;
  padding: 3rem;

  ${(props) =>
    props.type === "btn" &&
    css`
      padding-top: 0;
    `}

  @media (min-width: 768px) {
    padding: 2rem;

    ${(props) =>
      props.type === "btn" &&
      css`
        padding-top: 0;
      `}
  }
`;

const StyledCartMain = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 17% 1fr 8%;
  justify-items: start;
  padding-inline: 3rem;
  width: 100%;
  gap: 1rem;

  @media (min-width: 1280px) {
    padding-inline: 2rem;
  }
`;

const StyledImageCon = styled.div`
  width: 100%;
  border-radius: 5px;
`;

const StyledImage = styled(Image)`
  border-radius: 5px;

  ${(props) =>
    (props.type =
      "delete" &&
      css`
        justify-self: end;
      `)}
`;

const StyledTextCon = styled(Flex)`
  align-items: flex-start;
  gap: 0.5rem;

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

const StyledEmptyCartCon = styled(Flex)`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.$isCartOpen ? "flex" : "none")};
`;

const TotalPrice = styled.span`
  color: hsl(var(--color-black));
  font-weight: 700;
`;

function Cart() {
  const { isCartOpen, cartQuantity, totalPrice, handleDeleteItems } =
    usePurchase();

  return (
    <StyledCart $isCartOpen={isCartOpen} $cartQuantity={cartQuantity}>
      <StyledHeaderCon>
        <StyledCartInsideDiv as="header">
          <Headings as="h2">Cart</Headings>
        </StyledCartInsideDiv>
      </StyledHeaderCon>
      {cartQuantity ? (
        <>
          <StyledCartMain>
            <StyledImageCon>
              <StyledImage src="image-product-1-thumbnail.jpg" alt="product" />
            </StyledImageCon>
            <StyledTextCon>
              <Paragraph>Fall Limited Edition Sneakers</Paragraph>
              <Paragraph>
                $125.00 x {cartQuantity}{" "}
                <TotalPrice>{`$${totalPrice.toFixed(2)}`}</TotalPrice>
              </Paragraph>
            </StyledTextCon>
            <StyledImage
              src="icon-delete.svg"
              alt="delete"
              type="delete"
              onClick={handleDeleteItems}
            />
          </StyledCartMain>
          <StyledCartInsideDiv type="btn">
            <Button>
              <Paragraph $type="btn">Checkout</Paragraph>
            </Button>
          </StyledCartInsideDiv>
        </>
      ) : (
        <StyledEmptyCartCon $isCartOpen={isCartOpen}>
          <Paragraph $type="cart-quantity">Your cart is empty</Paragraph>
        </StyledEmptyCartCon>
      )}
    </StyledCart>
  );
}

export default Cart;
