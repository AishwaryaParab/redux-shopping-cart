import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../reducers/cartSlice";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={() => {dispatch(cartActions.removeFromCart(id))}}>
        -
      </button>
      <button className="cart-actions" onClick={() => {dispatch(cartActions.addToCart({ name, quantity, totalPrice: total, price, id}))}}>
        +
      </button>
    </div>
  );
};

export default CartItem;
