import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/Banner/banner1.jpg";
import banner2 from "../../../assets/Banner/banner2.jpg";
import banner3 from "../../../assets/Banner/banner3.jpg";
import banner4 from "../../../assets/Banner/banner4.jpg";
import banner5 from "../../../assets/Banner/banner5.jpg";
import "react-loading-skeleton/dist/skeleton.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useLoading from "../../../Hooks/useLoading";
import SkeletonWrapper from "../../../Utility/SkeletonWrapper";

const Banner = () => {
  const loading = useLoading();

  return (
    <div className="mt-16 ">
      <SkeletonWrapper loading={loading} width={1280} height={800}>
        <Carousel autoPlay infiniteLoop interval={2000}>
          <div>
            <img src={banner1} className="rounded-lg" />
          </div>
          <div>
            <img src={banner2} className="rounded-lg" />
          </div>
          <div>
            <img src={banner3} className="rounded-lg" />
          </div>
          <div>
            <img src={banner4} className="rounded-lg" />
          </div>
          <div>
            <img src={banner5} className="rounded-lg" />
          </div>
        </Carousel>
      </SkeletonWrapper>
    </div>
  );
};

export default Banner;
