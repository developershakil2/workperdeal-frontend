import React from 'react';
import { Link } from 'react-router-dom'
const CateSection = () => {
    return (
        <>





            <div className="explor_cat ">
                <div className="row">


                    <div className=" cat_icon_wrapper my-5   col-6 col-md-3 col-lg-3 col-xl-3">
                        <Link to="/categories">
                            <i class="fa-solid fa-code"></i>
                            <p>Programming {"&"} Tech</p>
                        </Link>
                    </div>
                    <div className=" cat_icon_wrapper my-5  col-6 col-md-3 col-lg-3 col-xl-3">
                        <Link to="/categories">
                            <i class="fa-solid fa-palette"></i>

                            <p>Graphics {"&"} Design</p>
                        </Link>
                    </div>
                    <div className=" cat_icon_wrapper my-5  col-6 col-md-3 col-lg-3 col-xl-3">
                        <Link to="/categories">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <p>Content Writing</p>
                        </Link>
                    </div>
                    <div className=" cat_icon_wrapper my-5  col-6 col-md-3 col-lg-3 col-xl-3">
                        <Link to="/categories">
                            <i class="fa-solid fa-film"></i>


                            <p>Video {"&"} Animation</p>
                        </Link>
                    </div>
                    <div className=" cat_icon_wrapper my-5  col-6 col-md-3 col-lg-3 col-xl-3">
                        <Link to="/categories">
                            <i class="fa-sharp fa-solid fa-chart-bar"></i>

                            <p>Digital Marketing</p>
                        </Link>
                    </div>

                    <div className=" cat_icon_wrapper my-5  col-6 col-md-3 col-lg-3 col-xl-3">
                        <Link to="/categories">
                            <i class="fa-sharp fa-solid fa-microphone"></i>

                            <p>Music {"&"} Audio</p>
                        </Link>
                    </div>
                    <div className=" cat_icon_wrapper my-5  col-6 col-md-3 col-lg-3 col-xl-3">
                        <Link to="/categories">
                            <i class="fa-sharp fa-solid fa-desktop"></i>
                            <p>Data Entry</p>
                        </Link>
                    </div>
                    <div className=" cat_icon_wrapper my-5  col-6 col-md-3 col-lg-3 col-xl-3">
                        <Link to="/categories">
                            <i class="fa-brands fa-figma"></i>
                            <p>UI/UX design</p>
                        </Link>
                    </div>

                    <Link id="fservices" to="/gigs">Visit Freelancer Services</Link>
                </div>


            </div>

        </>
    )
}



export default CateSection;