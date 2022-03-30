import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';
import PaymentMethodPage from './Pages/PaymentMethodPage';
import ProductListPage from './Pages/ProductListPage';
import ProductPage from './Pages/ProductPage';
import ProfilePage from './Pages/ProfilePage';
import RegisterPage from './Pages/RegisterPage';
import ShippingAddressPage from './Pages/ShippingAddressPage';
import SigninPage from './Pages/SigninPage';
import ProductEditPage from './Pages/ProductEditPage';
import UserListPage from './Pages/UserListPage';
import UserEditPage from './Pages/UserEditPage';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div> <Link className="brand" to="/"> amazona </Link> </div>
          <div>
            <Link to="/cart"> Cart
              {cartItems.length > 0 && ( <span className="badge">{cartItems.length}</span> )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li> <Link to="/profile">User Profile</Link> </li>
                  <li> <Link to="#signout" onClick={signoutHandler}> Sign Out </Link> </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin"> Admin <i className="fa fa-caret-down"></i> </Link>
                <ul className="dropdown-content">
                  <li> <Link to="/dashboard">Dashboard</Link> </li>
                  <li> <Link to="/productlist">Products</Link> </li>
                  <li>  <Link to="/userlist">Users</Link> </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartPage}></Route>
          <Route path="/product/:id" component={ProductPage} exact></Route>
          <Route path="/product/:id/edit" component={ProductEditPage} exact></Route>
          <Route path="/signin" component={SigninPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/shipping" component={ShippingAddressPage}></Route>
          <Route path="/payment" component={PaymentMethodPage}></Route>
          <PrivateRoute path="/profile" component={ProfilePage}></PrivateRoute>
          <AdminRoute path="/productlist" component={ProductListPage}></AdminRoute>
          <AdminRoute path="/userlist" component={UserListPage}></AdminRoute>
          <AdminRoute path="/user/:id/edit" component={UserEditPage}></AdminRoute>
          <Route path="/" component={HomePage} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
