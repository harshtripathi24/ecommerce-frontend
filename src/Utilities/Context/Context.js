import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [product, setProduct] = useState({});

  const openModal = () => {
    setIsModalOpen(true);
    console.log("Modal Opened");
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openQuickView = () => {
    setIsQuickViewOpen(true);
    console.log("QuickView Opened");
  };
  const closeQuickView = () => {
    setIsQuickViewOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        isQuickViewOpen,
        openQuickView,
        closeQuickView,
        product,
        setProduct,
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
