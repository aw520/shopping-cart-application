import React, { useState, useEffect } from 'react';
import api from '../interceptors/auth.interceptor';
import ProductItem from '../components/ProductItem.jsx';
import CartSummary from '../components/CartSummary.jsx';
import './ProductList.css';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/products')
      .then((res) => {
        console.log(res.data); 
        setProducts(res.data.products.map(p=>({...p, quantity: 0})));setLoading(false)})
      .catch((err) => {
        //console.error(err); 
        setError(err); setLoading(false);});
  }, []);

  // TODO: Fetch the product list from an API
  if (loading) {
    return <p>Loading products...</p>;
  }
  

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Products</h2>
      <CartSummary />
      <ul className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
