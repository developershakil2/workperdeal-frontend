import React from 'react';

import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <>
            <div className="topNavBar row">
                <div className="logo_left col-6">
                    <Link to="/"><img className="logo" src="images/Logo.jpg" alt="logo" /></Link>

                </div>
                <div className="sign_login_right text-right col-6">
                    <Link style={{ marginRight: "16px" }} to="/signup">SIGN UP</Link>
                    <Link to="/login">LOGIN</Link>
                </div>
            </div>

        </>
    )
}

export default TopNav;