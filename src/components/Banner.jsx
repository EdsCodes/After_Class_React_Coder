import bannerRopa from "../assets/images/banner-ropa.webp";
import bannerMate from "../assets/images/banner-mate.webp";
import bannerCafe from "../assets/images/banner-cafe.webp";

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <img src={bannerRopa} alt="Banner Ropa" className="img-fluid" />
                </div>
                <div className="col text-center">
                    <img src={bannerMate} alt="Banner Mate" className="img-fluid" />
                </div>
                <div className="col text-center">
                    <img src={bannerCafe} alt="Banner Cafe" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default Banner;