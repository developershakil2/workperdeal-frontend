import React, { useState } from 'react';
import TopNav from './TopNav';
import CatNav from './CatNav'
const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBarMainWrap">
                <div className="nav_wrapper">
                    <TopNav />
                    <CatNav />
                </div>
            </div>
        </div>
    )
}


export default NavBar;