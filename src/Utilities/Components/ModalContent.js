import React, { useEffect } from "react";

import ProductQucikView from "../../Components/Products/ProductQucikView";
import LoginModal from "./LoginModal";
import WriteReviewModal2 from "../../Components/ReviewSection/WriteReviewModal2";
import { useGlobalContext } from "../Context/Context";
import "./ModalContent.css";

const ModalContent = () => {
  const {
    isQuickViewOpen,
    closeQuickView,
    isLoginModalOpen,
    closeLoginModal,
    isModalOpen,
    isReviewModalOpen,
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
      {isReviewModalOpen && <WriteReviewModal2 />}
    </>
  );
};

export default ModalContent;
