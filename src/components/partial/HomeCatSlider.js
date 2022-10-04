import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';



const HomeCatSlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel id="carouseli" responsive={responsive}>
            <div style={{ marginRight: "10px" }}>
                <Link className="CatSlideLink" to="/">
                    <span>Website development</span>
                    <img className="catSldeImg" src="images/c3.png" alt="c1" />
                </Link>
            </div>
            <div style={{ marginRight: "10px" }}>
                <Link className="CatSlideLink" to="/">
                    <span>SEO</span>
                    <img className="catSldeImg" src="images/c1.jpeg" alt="c1" />
                </Link>

            </div>
            <div style={{ marginRight: "10px" }}>
                <Link className="CatSlideLink" to="/">
                    <span>Mobile apps development</span>
                    <img className="catSldeImg" src="images/c2.png" alt="c1" />
                </Link>
            </div>

            <div style={{ marginRight: "10px" }}>
                <Link className="CatSlideLink" to="/">
                    <span>Graphics Designing</span>
                    <img className="catSldeImg" src="images/c4.png" alt="c1" />
                </Link>
            </div>
            <div style={{ marginRight: "10px" }}>
                <Link className="CatSlideLink" to="/">
                    <span>UI/UX Designing </span>
                    <img className="catSldeImg" src="images/c5.png" alt="c1" />
                </Link>
            </div>
            <div style={{ marginRight: "10px" }}>
                <Link className="CatSlideLink" to="/">
                    <span>Logo Designing</span>
                    <img className="catSldeImg" src="images/c7.png" alt="c1" />
                </Link>
            </div>
            <div style={{ marginRight: "10px" }}>
                <Link className="CatSlideLink" to="/">
                    <span>Content Writing</span>
                    <img className="catSldeImg" src="images/c6.png" alt="c1" />
                </Link>
            </div>
        </Carousel>

    )
}


export default HomeCatSlider;