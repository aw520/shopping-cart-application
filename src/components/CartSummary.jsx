import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import './CartSummary.css';

const CartSummary = () => {
  const { totalQuantity, totalPrice } = useSelector((s) => s.cart);
  return (
    <div className="cart-summary">
      <h3 className="cart-summary-text">Total Items: {totalQuantity}</h3>
      <h3 className="cart-summary-text">Total Price: ${totalPrice.toFixed(2)}</h3>
      <Link to="/cart" className="cart-link">Go to Cart</Link>
    </div>
  );
};

export default CartSummary;
