import React, { useState, useEffect } from 'react';
import api from '../interceptors/auth.interceptor';
import { useParams, Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    api.get('/products')
      .then((res) => {
        //console.log(res.data);
        setProduct(res.data.products.find((item) => item.id === Number(id)));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // TODO: Fetch product details from an API using the product id from useParams
  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <Link to="/" className="back-link">
        ← Back to Products
      </Link>
      <div className="product-detail-container">
        <h2>{product.title}</h2>
        <ProductItem key={product.id} product={product} />
        <div className="product-description">
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating} / 5
          </p>
          <p>
            <strong>Return Policy:</strong> {product.returnPolicy}
          </p>
          <p>
            <strong>Warranty Information:</strong> {product.warrantyInformation}
          </p>
          <p>
            <strong>Shipping Information:</strong> {product.shippingInformation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
