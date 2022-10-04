import React from 'react';
import { Link } from "react-router-dom";

const BuyInstant = () => {
    return (
        <>
            <section id="buyinstant" className="mb-5">
                <div className="container m-auto">
                    <h2 className="my-5">Buy Instant To Your Need</h2>
                    <div className="buy_wrap row">

                        <div className="buy_left col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="buy_left_wrap">
                                <h3>Buy Instant</h3>
                                <p>
                                    Buy Best Products By our Top Freelancers Works, Buy ReadyMade Produects By Our Top and Quality ful Freelancers
                                </p>
                            </div>

                            <div className="buy_left_wrap mt-5">
                                <h3>Qualified Products</h3>
                                <p>
                                    Every Products Qualified By Our Workperdeal Spacial Team, Our Team Only allow for 100% Quality ful Products For The Readymade Products
                                </p>
                            </div>
                            <div className="buy_left_wrap mt-5">
                                <h3>What Type Of Products Sell Instantly</h3>
                                <p>
                                    You Can Find In our Instant Products Page To Your Need, Our Top Products For Instant Products, Website Template Wordpress Themes {"&"} Plugins UI/UX Template Xd PSD Figma Web {"&"} Mobile UI design {"&"} More

                                </p>
                            </div>
                            <div className="buy_left_wrap mt-5 mb-4">
                                <h3>Get Your Products</h3>
                                <p>
                                    Visit Our Instant Products Page Choose Your Product For Your Business And Buy It, In Simple Step
                                </p>
                            </div>


                            <Link to="/buyinstant">Visit Instant Products</Link>
                        </div>

                        <div className="buy_right col-12 col-md-6 col-lg-6 col-xl-6">
                            <img src="images/buyinstant.jpg" alt="buyinstant" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default BuyInstant;