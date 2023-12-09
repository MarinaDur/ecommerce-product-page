import Header from "./components/Header";
import Main from "./components/Main";
import SmallMenu from "./components/SmallMenu";
import { usePurchase } from "./context/PurchaseContext";
import GlobalStyles from "./styles/GlobalStyles";
import FullScreenImage from "./ui/FullScreenImage";

function App() {
  const { isFullImgOpen } = usePurchase();
  return (
    <>
      <GlobalStyles />
      <Header />
      <SmallMenu />
      <Main />
      {isFullImgOpen && <FullScreenImage />}
    </>
  );
}

export default App;
