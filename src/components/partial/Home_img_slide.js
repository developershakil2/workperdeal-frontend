import { EVENT_AUTOPLAY_PLAY } from "@splidejs/splide";
import React from "react";
import Slider from "react-slick";

export default function HomeImgSlide() {
    var settings = {
        dots: false,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        speed: 600,
        autoplay: true
    };
    return (
        <Slider className="slider_wrapi" {...settings}>
            <div>
                <img className="hImg" src="images/h5.png" alt="homeimg" />
                <div className="hTitle"><span>Mobile Apps development expert</span></div>
            </div>
            <div>
                <img className="hImg" src="images/h4.png" alt="homeimg" />
                <div className="hTitle"><span>Website development expert</span></div>
            </div>
            <div>
                <img className="hImg" src="images/h2.png" alt="homeimg" />
                <div className="hTitle"><span>Graphics Designing expert</span></div>
            </div>
            <div>
                <img className="hImg" src="images/h.png" alt="homeimg" />
                <div className="hTitle"><span>Owner of Workperdeal</span></div>
            </div>
            <div>
                <img className="hImg" src="images/h3.png" alt="homeimg" />
                <div className="hTitle"><span>UI/UX Expert</span></div>
            </div>

        </Slider>
    );
}