import React from 'react';
import Logo from "/src/assets/logo.svg"
import { Link } from 'react-router-dom';
import { Home } from '../../pages/home/home';
import { About } from '../../pages/about/about';
import { Shop } from '../../pages/shop/shop';

export const Header = () => {
  return <>
    <div className="container">
        <div>
            <img src={Logo} alt="logo" />
        </div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
        </div>
    </div>    
  </>
}
