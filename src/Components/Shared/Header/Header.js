import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import HeaderMain from './HeaderMain/HeaderMain';


const Header = () => {
    return (
        <div className="header-section">
            <div className="header-main trapezoid pt-3 pb-5">
                <Navbar />
                <HeaderMain />

            </div>
        </div>
    );
};

export default Header;