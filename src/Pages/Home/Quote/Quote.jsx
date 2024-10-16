import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";

const Quote = () => {
  const { user } = useAuth();

  const phrases = [
    `Hi, ${user?.displayName} Stay focused`,
    "Keep pushing.",
    "Believe in yourself.",
    "Never give up.",
  ];
  return (
    <div className="text-center h-20 mt-10">
      <h2></h2>
      {user ? (
        <SectionTitle
          strings={phrases}
          typeSpeed={60}
          backSpeed={30}
          loop={true}
          className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500

                 lg:text-4xl md:text-3xl text-lg font-serif "
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Quote;
