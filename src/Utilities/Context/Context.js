import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [product, setProduct] = useState({});

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("Modal Opened");
  };

  const openQuickView = () => {
    setIsQuickViewOpen(true);
    console.log("QuickView Opened");
  };
  const closeQuickView = () => {
    setIsQuickViewOpen(false);
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };
  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      closeQuickView();
      closeLoginModal();
    }, 1000);
  };

  const storeName = "Smart Books";

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        isQuickViewOpen,
        openQuickView,
        closeQuickView,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,
        product,
        setProduct,
        storeName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//Custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
