import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useLoading from "../../../Hooks/useLoading";
import SkeletonWrapper from "../../../Utility/SkeletonWrapper";

const Quote = () => {
  const { user } = useAuth();
  const loading = useLoading();
  const phrases = [
    `Hi, ${user?.displayName} Stay focused`,
    "Keep pushing.",
    "Believe in yourself.",
    "Never give up.",
  ];
  return (
    <div className="text-center h-20 mt-10 ">
      <SkeletonWrapper loading={loading} width={150} height={20}>
        {user ? (
          <SectionTitle
            strings={phrases}
            typeSpeed={60}
            backSpeed={30}
            loop={true}
            className="bg-gradient-to-r from-[#0d6efd] to-[#091057] bg-clip-text text-transparent md:text-2xl
            text-xl lg:text-4xl font-bold"
          />
        ) : (
          ""
        )}
      </SkeletonWrapper>
    </div>
  );
};

export default Quote;
