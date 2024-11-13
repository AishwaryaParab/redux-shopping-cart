import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../reducers/cartSlice";

const Cart = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  return (
    <div onClick={() => {dispatch(cartActions.setShowCart())}} className="cartIcon">
      <h3>Cart: {totalQuantity} Items</h3>
    </div>
  );
};

export default Cart;
