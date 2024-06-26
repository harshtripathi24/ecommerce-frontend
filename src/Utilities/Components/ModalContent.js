import React, { useEffect } from "react";

import ProductQucikView from "../../Components/Products/ProductQucikView";
import LoginModal from "./LoginModal";
import WriteReviewModal2 from "../../Components/ReviewSection/WriteReviewModal2";
import { useGlobalContext } from "../Context/Context";
import "./ModalContent.css";
import FilterModal from "./FilterModal";
import SignUpModal from "./SignUpModal";
import UpdateAddressModal from "./UpdateAddressModal";
import ChangePasswordModal from "./ChangePasswordModal";

const ModalContent = () => {
  const {
    isQuickViewOpen,

    isLoginModalOpen,
    isUpdateAddressModalOpen,
    isReviewModalOpen,
    isFilterOpen,
    isSignUpModalOpen,
    searchedProducts,
    isChangePasswordModalOpen,
  } = useGlobalContext();

  return (
    <>
      {isQuickViewOpen && <ProductQucikView />}
      {isLoginModalOpen && <LoginModal />}
      {isReviewModalOpen && <WriteReviewModal2 />}
      {isFilterOpen && <FilterModal productsData={searchedProducts} />}
      {isSignUpModalOpen && <SignUpModal />}
      {isUpdateAddressModalOpen && <UpdateAddressModal />}
      {isChangePasswordModalOpen && <ChangePasswordModal />}
    </>
  );
};

export default ModalContent;
