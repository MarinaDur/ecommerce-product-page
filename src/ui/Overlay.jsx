import { styled } from "styled-components";
import { usePurchase } from "../context/PurchaseContext";

const StyledOverlay = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: hsl(var(--color-black) / 0.5);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 8889;
`;

function Overlay() {
  const { handleCloseMenu } = usePurchase();
  return <StyledOverlay onClick={handleCloseMenu}></StyledOverlay>;
}

export default Overlay;
