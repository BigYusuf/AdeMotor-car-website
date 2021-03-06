import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import UserListPage from './pages/UserListPage';
import UserEditPage from './pages/UserEditPage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import ProductEditPage from './pages/ProductEditPage';
import ProductCreatePage from './pages/ProductCreatePage';
import ProductListPage from './pages/ProductListPage';
import ViewAllProductPage from './pages/ViewAllProductPage';
import CartPage from './pages/CartPage';
import ShippingAddressPage from './pages/ShippingAddressPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import OrderListPage from './pages/OrderListPage';


function App() {
  return (
      <BrowserRouter>
    <div>
        <Route path = '/' component = {HomePage} exact></Route>
        <Route path = '/login' component = {LoginPage}></Route>
        <Route path = '/register' component = {RegisterPage}></Route>
        <Route path = '/products' component = {ViewAllProductPage}></Route>
        <Route path = '/product/:id' component = {ProductPage} exact></Route>
        <Route path = '/createproduct' component = {ProductCreatePage} exact></Route>
        <Route path="/product/:id/edit" component={ProductEditPage} exact></Route>
        <Route path="/cart/:id?" component={CartPage} exact></Route>
        <Route path="/shipping" component={ShippingAddressPage} ></Route>
        <Route path="/payment" component={PaymentPage} ></Route>
        <Route path="/placeorder" component={PlaceOrderPage} ></Route>
        <Route path="/order/:id" component={OrderPage}></Route>
        <Route path="/orderhistory" component={OrderHistoryPage}></Route>
        <PrivateRoute path="/profile" component={ProfilePage}></PrivateRoute>
        <AdminRoute path="/productlist" component={ProductListPage}></AdminRoute>
        <AdminRoute path="/userlist" component={UserListPage}></AdminRoute>
        <AdminRoute path="/orderlist" component={OrderListPage}></AdminRoute>
        <AdminRoute path="/user/:id/edit" component={UserEditPage}></AdminRoute>
        
        
    </div>
    </BrowserRouter>
  );
}

export default App;
