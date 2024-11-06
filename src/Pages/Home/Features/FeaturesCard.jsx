import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";

const FeaturesCard = ({ feature, onGetStartedClick }) => {
  const { title, description, imageUrl } = feature;

  return (
    <>
      <AnimatedComponent animation="zoom-in">
        <div className="card bg-base-100  animate-jump-in animate-duration-[1500ms] animate-delay-500   lg:w-96 dark:bg-black shadow-xl dark:shadow-green-500">
          <figure className=" px-10 pt-8 h-48 lg:h-72 lg:w-96">
            <img src={imageUrl} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body  items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions">
              <button
                onClick={onGetStartedClick}
                className="btn btn-primary btn-sm hover:animate-pulse"
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
