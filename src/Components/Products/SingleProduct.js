import React from "react";

import "./SingleProduct.css";
const SingleProduct = ({ product }) => {
  return (
    <>
      <div className="product">
        <p className="author">{product.author}</p>
        <h4 className="bookName">{product.name}</h4>
        <img className="productImage" src={product.img} alt={product.name} />
        <div className="priceDiv">
          <p className="realPrice"> ${product.price}</p>
          <p className="fakePrice">${product.fakePrice}</p>
          <p className="discountPercent">-50%</p>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
