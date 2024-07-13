import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingCart from './shoppingCart.jsx';
import Singup from './singup.jsx';
import AddProduct from './Admin/addProduct.jsx';
import Login from './login.jsx';
import HomePage from './homepage.jsx';
import Users from './Admin/users.jsx';
import DeleteProduct from './Admin/deleteProduct.jsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="admin/add" element={<AddProduct />} />
          <Route path="/shop" element={<ShoppingCart />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="login" element={<Login />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/delete_product" element={<DeleteProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
