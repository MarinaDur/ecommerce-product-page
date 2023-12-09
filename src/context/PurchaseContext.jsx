import { createContext, useContext, useState } from "react";

const PurchaseContext = createContext();

function PurchaseProvider({ children }) {
  const [quantity, setQuantity] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imageNum, setImageNum] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [isFullImgOpen, setIsFullImgOpen] = useState(false);
  const [startSwipePos, setStartSwipePos] = useState(null);

  const sneakersPrice = 125;
  const totalPrice = sneakersPrice * cartQuantity;

  function handleQuantity(e) {
    if (e.target.value < 0) return;

    setQuantity(Number(e.target.value));
  }

  function handleAddition() {
    setQuantity((prev) => prev + 1);
  }

  function handleSubtraction() {
    if (quantity > 1) setQuantity((prev) => prev - 1);
    else {
      return;
    }
  }
  function handleDeleteItems() {
    setCartQuantity(0);
  }

  function handleOpenMenu() {
    setIsMenuOpen(true);
    if (isCartOpen) setIsCartOpen(false);
  }
  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  function handleNextImg() {
    if (imageNum === 4) setImageNum(1);
    else {
      setImageNum((prev) => prev + 1);
    }
  }

  function handlePrevImg() {
    if (imageNum === 1) setImageNum(4);
    else {
      setImageNum((prev) => prev - 1);
    }
  }

  function handleCart() {
    setIsCartOpen((prev) => !prev);
  }
  function handleCloseCart() {
    setIsCartOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCartQuantity(quantity);
  }

  function handleImageId(id) {
    setImageNum(id);
  }

  function handleOpenFullScreenImage() {
    setIsFullImgOpen(true);
    setIsCartOpen(false);
  }
  function handleCloseFullScreenImage() {
    setIsFullImgOpen(false);
    console.log(isFullImgOpen);
  }

  const handleTouchStart = (e) => {
    setStartSwipePos(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startSwipePos) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const diffX = startSwipePos - currentX;

    if (diffX > 60 && diffX < 75) {
      // Swipe left
      handleNextImg();
    } else if (diffX < -60 && diffX > -75) {
      // Swipe right
      handlePrevImg();
    }
  };

  const handleTouchEnd = () => {
    setStartSwipePos(null);
  };
  return (
    <PurchaseContext.Provider
      value={{
        quantity,
        handleQuantity,
        handleAddition,
        handleSubtraction,
        isMenuOpen,
        handleOpenMenu,
        handleCloseMenu,
        imageNum,
        handleNextImg,
        handlePrevImg,
        handleCart,
        handleCloseCart,
        isCartOpen,
        handleSubmit,
        cartQuantity,
        totalPrice,
        handleImageId,
        isFullImgOpen,
        handleOpenFullScreenImage,
        handleCloseFullScreenImage,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handleDeleteItems,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
}

function usePurchase() {
  const context = useContext(PurchaseContext);
  if (context === undefined)
    throw new Error("PurchaseContext was used outside of the PurchaseProvider");
  return context;
}

export { PurchaseProvider, usePurchase };
