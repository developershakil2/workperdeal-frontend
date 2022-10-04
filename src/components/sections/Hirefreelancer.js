import React from 'react';
import { Link } from "react-router-dom";

const Hirefreelancer = () => {
    return (
        <>
            <section id="buyinstant" className="mb-5">
                <div className="container m-auto">
                    <h2 className="my-5">Hire Freelancers </h2>
                    <div style={{ backgroundColor: "#007fff" }} className="buy_wrap row">
                        <div className="buy_right col-12 col-md-6 col-lg-6 col-xl-6">
                            <img src="images/hirefreelancer.jpg" alt="hirefreelancer" />
                        </div>

                        <div className="buy_left col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="buy_left_wrap mt-5">
                                <h3>Hire a Freelancer</h3>
                                <p>
                                    Hire An Expert To Your Need You Can Find Best Freelancer For Your Project Post a Job it's Totally Free And Freelancers will Apply on Your Job Post simply Select Your Perfect Expert
                                </p>
                            </div>

                            <div className="buy_left_wrap mt-5">
                                <h3>Pay Securely With Us  </h3>
                                <p>
                                    We Protect Payment, After Your Payment for Freelancers We will Hold Your Payment untill Your Satisfy When You Will Done With Your Project Then We Will Release Your Payment to Freelancers

                                </p>
                            </div>
                            <div className="buy_left_wrap mt-5 mb-5">
                                <h3>Hire A Freelancer In 3 Way</h3>
                                <p>
                                    1 Hire a Talant With Fixed Price <br />
                                    2 Hire a Talant With Task Basis <br />
                                    3 Hire a Talant With Their Services
                                </p>
                            </div>



                            <Link to="/freelancers">Hire Freelancers</Link>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}



export default Hirefreelancer;