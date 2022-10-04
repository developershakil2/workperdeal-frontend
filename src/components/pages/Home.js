import React from 'react';
import NavBar from '../partial/NavBar';
import HomeSearch from '../partial/HomeSearch';
import { Link } from 'react-router-dom';
import HomeImgSlide from '../partial/Home_img_slide';
import HomeCatSlider from '../partial/HomeCatSlider';
import BuyInstant from '../sections/BuyInstant';
import GetInspaired from '../sections/Getinspared';
const Home = () => {
    return (
        <>
            <section id="home_section">
                <div className="container m-auto">
                    <NavBar />
                </div>


                <div className="HomeContent">
                    <div className="home_c_wrapper container m-auto row">

                        <div className="home_left_content col-12 col-md-7 col-lg-7 col-xl-7 row">
                            <div className="lefft_content_wraper col-12">
                                <h1>Choose your Best Freelancer<br /> {'&'} Services For Your Business</h1>
                                <p className="my-4 ">
                                    Workperdeal will assest you to Done your work perfectly for your Business
                                    Search Now For The Best Services for your business
                                </p>
                                <HomeSearch />

                                <div className="home_control_btn">
                                    <Link to="/buyinstant">Buy Instant</Link>
                                    <Link to="/freelancers">Hire Freelancer</Link>
                                    <Link to="/projects">Find Projects</Link>
                                </div>
                            </div>
                        </div>
                        <div className="homeRightContent  col-12 col-md-5 col-lg-5 col-xl-5 row">
                            <div className="col-12">
                                <HomeImgSlide />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="home_brand_footer">
                    <div className="home_brand_w"></div>
                    <div className="container m-auto">
                        <div className="brand_wrap">
                            <img src="images/hb.png" alt="hb" />
                            <img src="images/hb1.png" alt="hb" />
                            <img src="images/hb2.png" alt="hb1" />
                            <img src="images/hb3.png" alt="hb2" />
                            <img src="images/hb4.png" alt="hb3" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="homecats" >
                <div className="container m-auto">
                    <h2 className="my-5">Top Categories </h2>
                    <HomeCatSlider />
                </div>
            </section>

            <BuyInstant />

            <section id="homecats" >
                <div className="container m-auto">
                    <h2 className="my-5">Get Inspired By Successful Freelancers </h2>
                    <GetInspaired />
                </div>
            </section>

        </>

    )
}

export default Home;