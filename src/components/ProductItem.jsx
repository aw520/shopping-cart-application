import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addItemToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItemFromCart,
  clearCart,
} from '../store/cartSlice/cart.slice';
import './ProductItem.css';
const ProductItem = ({ product }) => {
  // TODO: Implement the isProductInCart function.
  // TODO: Implement the getProductQuantity function.
  // TODO: Handle the onClick action for the add, remove, and "Add to Cart" buttons.
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const isProductInCart = (productId) => {
    return items.some((item) => item.id === productId);
  };

  const getProductQuantity = (productId) => {
    let item = items.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <li className="product-item">
      <Link to={`/product/${product.id}`} className="product-link">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <h3 className="product-title">{product.title}</h3>
      </Link>
      <p className="product-price">Price: ${product.price}</p>

      {isProductInCart(product.id) ? (
        <div className="product-quantity-container">
          <button
            className="quantity-button remove-button"
            onClick={() => {
              dispatch(decreaseItemQuantity(product));
            }}
          >
            -
          </button>
          <p className="quantity-text">
            Quantity: {getProductQuantity(product.id)}
          </p>
          <button
            className="quantity-button add-button"
            onClick={() => {
              dispatch(increaseItemQuantity(product));
            }}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="add-to-cart-button"
          onClick={() => {
            dispatch(addItemToCart(product));
          }}
        >
          Add to Cart
        </button>
      )}
    </li>
  );
};

export default ProductItem;
