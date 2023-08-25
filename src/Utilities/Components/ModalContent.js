import React from "react";

import ProductQucikView from "../../Components/Products/ProductQucikView";
import { useGlobalContext } from "../Context/Context";
import "./ModalContent.css";

const ModalContent = () => {
  const { isQuickViewOpen } = useGlobalContext();

  return <>{isQuickViewOpen && <ProductQucikView />}</>;
};

export default ModalContent;
