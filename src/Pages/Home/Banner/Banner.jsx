import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/Banner/banner1.png";
import banner2 from "../../../assets/Banner/banner2.png";
import banner3 from "../../../assets/Banner/banner3.png";
import "react-loading-skeleton/dist/skeleton.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";

const Banner = () => {
  return (
    <AnimatedComponent animation="fade-out">
      <div>
        <Carousel showThumbs={false}>
          <div>
            <img src={banner1} className="rounded-lg" />
          </div>
          <div>
            <img src={banner2} className="rounded-lg" />
          </div>
          <div>
            <img src={banner3} className="rounded-lg" />
          </div>
        </Carousel>
      </div>
    </AnimatedComponent>
  );
};

export default Banner;
