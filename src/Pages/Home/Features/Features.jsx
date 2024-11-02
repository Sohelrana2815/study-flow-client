import { useEffect } from "react";
import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import FeaturesCard from "./FeaturesCard";
import SectionTitle2 from "../../../Components/SectionTitle2/SectionTitle2";

const Features = ({ onGetStartedClick }) => {
  const axiosPublic = useAxiosPublic();
  const [features, setFeatures] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const res = await axiosPublic.get("/features");
        setFeatures(res.data);
      } catch (err) {
        setError("Failed to fetch features");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatures();
  }, [axiosPublic]);

  if (loading)
    return (
      <div>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  if (error) {
    return <p className="text-xl text-red-600">{error}</p>;
  }

  return (
    <>
      <SectionTitle2 heading="Features" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <FeaturesCard
            onGetStartedClick={onGetStartedClick}
            key={feature._id}
            feature={feature}
          />
        ))}
      </div>
    </>
  );
};

export default Features;
