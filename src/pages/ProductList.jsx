import React, { useState, useEffect } from 'react';
import api from '../interceptors/auth.interceptor';
import ProductItem from '../components/ProductItem.jsx';
import CartSummary from '../components/CartSummary.jsx';
import './ProductList.css';
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //find current page
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
  //for pagination
  const itemsPerPage = 12;//TODO: make this a choice for client
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
    setSearchParams({ page });
  };
  
  useEffect(() => {
    api.get('/products')
      .then((res) => {
        console.log(res.data); 
        setProducts(res.data.products.map(p=>({...p, quantity: 0})));setLoading(false)})
      .catch((err) => {
        //console.error(err); 
        setError(err); setLoading(false);});
  }, []);

  // fetch the product list from an API
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
        {currentProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>

      <div className="pagination">
        <button
        disabled = {currentPage === 1}
        onClick={()=>{changePage(currentPage - 1)}}>
          Prev
        </button>

        <span>
          {currentPage}/{totalPages}
        </span>
        <button
        disabled = {currentPage === totalPages}
        onClick={()=>{ changePage(currentPage + 1)}}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
