import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [product, setProduct] = useState({});

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isUpdateAddressModalOpen, setIsUpdateAddressModalOpen] =
    useState(false);

  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState({});

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openQuickView = () => {
    setIsQuickViewOpen(true);
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

  const openSignUpModal = () => {
    closeLoginModal();

    setIsSignUpModalOpen(true);
  };
  const closeSignUpModel = () => {
    setIsSignUpModalOpen(false);
  };

  const openReviewModal = () => {
    setIsReviewModalOpen(true);
  };

  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
  };

  const openFilterModal = () => {
    setIsFilterOpen(true);
  };

  const closeFilterModal = () => {
    setIsFilterOpen(false); //
  };

  const openAddressModal = () => {
    setIsUpdateAddressModalOpen(true);
  };

  const closeAddressModal = () => {
    setIsUpdateAddressModalOpen(false);
  };

  const openChangePasswordModal = () => {
    setIsChangePasswordModalOpen(true);
  };

  const closeChangePasswordModal = () => {
    setIsChangePasswordModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      closeQuickView();
      closeLoginModal();
      closeSignUpModel();
      closeReviewModal();
      closeFilterModal();
      closeAddressModal();
      closeChangePasswordModal();
    }, 500);
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
        isSignUpModalOpen,
        openSignUpModal,
        closeSignUpModel,
        product,
        setProduct,
        storeName,
        isNavOpen,
        openNav,
        closeNav,
        openReviewModal,
        closeReviewModal,
        isReviewModalOpen,
        isFilterOpen,
        openFilterModal,
        closeFilterModal,
        searchedProducts,
        setSearchedProducts,
        isUpdateAddressModalOpen,
        openAddressModal,
        closeAddressModal,
        isChangePasswordModalOpen,
        openChangePasswordModal,
        closeChangePasswordModal,
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
