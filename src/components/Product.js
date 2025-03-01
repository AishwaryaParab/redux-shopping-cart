import React from "react";

import "./Product.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../reducers/cartSlice";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={() => {dispatch(cartActions.addToCart({name, id, price}))}}>Add to cart</button>
    </div>
  );
};

export default Product;
