import React, { useEffect } from "react";

import ProductQucikView from "../../Components/Products/ProductQucikView";
import LoginModal from "./LoginModal";
import { useGlobalContext } from "../Context/Context";
import "./ModalContent.css";

const ModalContent = () => {
  const {
    isQuickViewOpen,
    closeQuickView,
    isLoginModalOpen,
    closeLoginModal,
    isModalOpen,
  } = useGlobalContext();

  // useEffect(() => {
  //   if (!isModalOpen) {
  //     closeQuickView();
  //     closeLoginModal();
  //   }
  // }, [isModalOpen]);

  return (
    <>
      {isQuickViewOpen && <ProductQucikView />}
      {isLoginModalOpen && <LoginModal />}
    </>
  );
};

export default ModalContent;
