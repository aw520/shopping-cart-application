import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart, clearCart} from '../store/cartSlice/cart.slice';
import './Cart.css';

const Cart = () => {
  // TODO: Use Redux to access and manage the cart state
  // TODO: Implement the onClick action for the "Remove" button
  // TODO: Implement the onClick action for the "Clear Cart" button
  //const items = [];
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {items.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is empty.</p>
          {/* <Link to="/" className="go-shopping-link">
            Go Shopping
          </Link> */}
        </div>
      ) : (
        <>
          <ul className="cart-items-list">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>
                    <strong>Price:</strong> ${item.price}
                  </p>
                  <p>
                    <strong>Quantity:</strong> {item.quantity}
                  </p>
                </div>
                <button className="remove-item-button"
                onClick = {()=>dispatch(removeItemFromCart(item))}>Remove</button>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <p className="total-items">Total Items: {totalQuantity}</p>
            <p className="total-items">Total Price: {totalPrice}</p>
            <div>
              <button className="clear-cart-button" onClick = {()=>dispatch(clearCart())}>Clear Cart</button>
              {/* <Link to="/" className="back-to-products-link">
                Back to Products
              </Link> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
