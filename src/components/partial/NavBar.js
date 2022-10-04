import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CatNav from './CatNav'
const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBarMainWrap">
                <div className="nav_wrapper">
                    <div className="topNavBar row">
                        <div className="logo_left col-6">
                            <Link to="/"><img className="logo" src="images/Logo.jpg" alt="logo" /></Link>

                        </div>
                        <div className="sign_login_right text-right col-6">
                            <Link style={{ marginRight: "16px" }} to="/signup">SIGN UP</Link>
                            <Link to="/login">LOGIN</Link>
                        </div>
                    </div>
                    <CatNav />
                </div>
            </div>
        </div>
    )
}


export default NavBar;