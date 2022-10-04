import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';



const GetInspaired = () => {
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
                <Link className="FrSlideLink" to="/">

                    <img className="frImg" src="images/c3.png" alt="c1" />
                    <span>Website development</span>
                    <p> <img className="userSlideImg" src="images/h.png" alt="userimg" /> creativeitforum</p>
                </Link>
            </div>
            <div style={{ marginRight: "10px" }}>
                <Link className="FrSlideLink" to="/">

                    <img className="frImg" src="images/c1.jpeg" alt="c1" />
                    <span>Search Engine Optimization</span>
                    <p> <img className="userSlideImg" src="images/h5.png" alt="userimg" /> shakilhossain</p>
                </Link>
            </div>
            <div style={{ marginRight: "10px" }}>
                <Link className="FrSlideLink" to="/">

                    <img className="frImg" src="images/c2.png" alt="c1" />
                    <span>Mobile Apps Development</span>
                    <p> <img className="userSlideImg" src="images/h3.png" alt="userimg" /> hossainhotton</p>
                </Link>
            </div>
            <div style={{ marginRight: "10px" }}>
                <Link className="FrSlideLink" to="/">

                    <img className="frImg" src="images/c3.png" alt="c1" />
                    <span>Graphics Designing</span>
                    <p> <img className="userSlideImg" src="images/h4.png" alt="userimg" /> Easinarafat</p>
                </Link>
            </div>
            <div style={{ marginRight: "10px" }}>
                <Link className="FrSlideLink" to="/">

                    <img className="frImg" src="images/c5.png" alt="c1" />
                    <span>UI/UX Designing</span>
                    <p> <img className="userSlideImg" src="images/h2.png" alt="userimg" /> suraiyaritu</p>
                </Link>
            </div>
            <div style={{ marginRight: "10px" }}>
                <Link className="FrSlideLink" to="/">

                    <img className="frImg" src="images/c6.png" alt="c1" />
                    <span>Content Write </span>
                    <p> <img className="userSlideImg" src="images/h5.png" alt="userimg" /> shamimosman</p>
                </Link>
            </div>

            <div style={{ marginRight: "10px" }}>
                <Link className="FrSlideLink" to="/">

                    <img className="frImg" src="images/c7.png" alt="c1" />
                    <span>Logo Designing</span>
                    <p> <img className="userSlideImg" src="images/h3.png" alt="userimg" /> atikur</p>
                </Link>
            </div>
        </Carousel>

    )
}


export default GetInspaired;