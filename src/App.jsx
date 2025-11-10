import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
const App = () => {
  // TODO: Use React Router to set up routes for ProductList, ProductDetail, and Cart components so they render correctly based on the URL path.
  return (
      <BrowserRouter>
          <Routes>
              <Route path = "/" element = {<ProductList/>} />
              <Route path = "/product/:id" element = {<ProductDetail/>} />
              <Route path = "/cart" element = {<Cart/>} />
              <Route path = "*" element = {<NotFound/>} />     
          </Routes>
      </BrowserRouter>
   
  );
};

export default App;
