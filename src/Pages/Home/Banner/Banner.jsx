import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/Banner/banner1.png";
import banner2 from "../../../assets/Banner/banner2.png";
import banner3 from "../../../assets/Banner/banner3.png";
import "react-loading-skeleton/dist/skeleton.css";
import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";

const Banner = () => {
  return (
    <AnimatedComponent animation="fade-in">
      <div className="relative">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={5000}
          transitionTime={1000}
          className="rounded-lg shadow-xl"
        >
          {/* Slide 1 */}
          <div className="relative">
            <img
              src={banner1}
              className="w-full h-[60vh] md:h-[70vh] object-cover rounded-lg"
              alt="Banner 1"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 drop-shadow-lg">
                Welcome to Excellence
              </h2>
              <p className="text-sm md:text-lg font-medium">
                Transform your learning experience today!
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative">
            <img
              src={banner2}
              className="w-full h-[60vh] md:h-[70vh] object-cover rounded-lg"
              alt="Banner 2"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 drop-shadow-lg">
                Explore New Horizons
              </h2>
              <p className="text-sm md:text-lg font-medium">
                Discover endless opportunities to grow and succeed.
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="relative">
            <img
              src={banner3}
              className="w-full h-[60vh] md:h-[70vh] object-cover rounded-lg"
              alt="Banner 3"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 drop-shadow-lg">
                Achieve Your Goals
              </h2>
              <p className="text-sm md:text-lg font-medium">
                Join a community dedicated to excellence.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </AnimatedComponent>
  );
};

export default Banner;
