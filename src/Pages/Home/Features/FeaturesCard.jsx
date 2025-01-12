import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";

const FeaturesCard = ({ feature, onGetStartedClick }) => {
  const { title, description, imageUrl } = feature;

  return (
    <>
      <AnimatedComponent animation="zoom-in">
        <div className="card bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 rounded-lg lg:w-96 w-full mx-auto">
          <figure className="h-48 lg:h-64 overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="rounded-t-lg object-cover w-full h-full"
            />
          </figure>
          <div className="card-body p-6 text-center">
            <h2 className="card-title text-lg lg:text-2xl font-semibold text-gray-800 dark:text-gray-100">
              {title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base mt-2">
              {description}
            </p>
            <div className="card-actions mt-4 flex justify-center">
              <button
                onClick={onGetStartedClick}
                className="btn btn-primary btn-sm lg:btn-md px-6 py-2 rounded-full bg-[#6C5EBF] dark:text-black hover:bg-[#5a4caf] dark:bg-[#FFB400] dark:hover:bg-[#e0a300] transition-colors duration-300 shadow-md text-white"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </>
  );
};

export default FeaturesCard;
