import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CatNav = () => {
    const lem = "-99999%";
    const le = "0%";
    const [navopen, setnavopen] = useState(lem);

    return (
        <div className="catNav row">
            <div className="buyInstant col-2">
                <Link id="buyIn" to="/buyinstant">BUY INSTANT</Link>
            </div>

            <div style={{ left: navopen }} className="categoriesNav col-10">
                <Link to="/website">Wesite Develpment</Link>
                <Link to="/apps">Apps Development</Link>
                <Link to="/graphics">Graphics Designing</Link>
                <Link to="/seo">SEO</Link>
                <Link to="/video">Video Editing</Link>
                <Link to="/vertualassistand">Vertual Assistent</Link>
                <Link to="/dataentry">Data Entry</Link>


                <div className="nav_footer_social">
                    <Link to="/"><img className="logo" src="images/Logo.jpg" alt="logo" /></Link>
                    <div className="socail_footer_nav">
                        <Link to="/"><i class="fa-brands fa-facebook"></i></Link>
                        <Link to="/"><i class="fa-brands fa-twitter"></i></Link>
                        <Link to="/"><i class="fa-brands fa-linkedin"></i></Link>
                    </div>


                </div>

            </div>
            <div className="openTab">

                <button onClick={() => setnavopen(le)} className="navOpenBtn"><i class="fa-solid fa-bars"></i></button>

            </div>
        </div>
    )
}


export default CatNav;