import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';

import { Link } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState("false");
    const [headeractive, setHeaderActive] = useState("false");
    
  
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    const signoutHandler = () => {
      dispatch(signout());
    };
    const handleBar = () => {
        if(window.innerWidth < 768){
        setActive(!active);
    }
    };
    
    window.onscroll = () =>{
    
        if(window.scrollY > 0){
            setHeaderActive(!headeractive);
        }else{
            setHeaderActive(headeractive);
        };
    
    };
    return (
        <div>
            <header className={!headeractive ? "header active" : "header"} >

                <div id="menu-btn" onClick={handleBar} className={!active ? "fas fa-times": "fas fa-bars"}></div>
                <Link to="#" className="logo"> <span>ade</span>Motors </Link>

                <nav className={!active ? "navbar active" : "navbar"}>
                    
                        <a href="#home"onClick={handleBar}>home</a>
                        <a href="#vehicles"onClick={handleBar}>vehicles</a>
                        <a href="#services"onClick={handleBar}>services</a>
                        <a href="#featured"onClick={handleBar}>featured</a>
                        <a href="#reviews"onClick={handleBar}>reviews</a>
                        <a href="#contact"onClick={handleBar}>contact</a>
                    
                </nav>
            <div>
                <Link to="/cart" className="header__cart"> Cart
                {cartItems.length >= 0 && 
                ( <span className="badge">{cartItems.length}</span> )}
              </Link>

                  {userInfo ? (
                <div className="dropdown">
                  <Link to="#"className="dropdown-name" >
                    {userInfo.name }<i className="fa fa-caret-down"></i>{' '}
                  </Link>
                  <ul className="dropdown-contents">
                    <li> <Link to="/profile">User Profile</Link> </li>
                    <li>  <Link to="/orderhistory">Order History</Link></li>
                    {userInfo.isAdmin && (
                      <>
                      <hr/>
                    <li> <Link to="/dashboard">Dashboard</Link> </li>
                    <li> <Link to="/productlist">Products</Link> </li>
                    <li>  <Link to="/userlist">Users</Link> </li>
                    <li>  <Link to="/orderlist">Orders</Link> </li>
                    </>
                      )}
                    <li> <Link to="#signout" onClick={signoutHandler}> Sign Out </Link> </li>
                  </ul>
                </div>
              ) : (
                  <div id="login-btn">
                <Link to="/login" className="btn">Sign In
                  <i className="far fa-user"></i>
                </Link>

                  </div>
              )}
            </div>
            </header> 

        </div>
    )
}

export default Navbar