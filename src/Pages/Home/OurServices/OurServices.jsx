import { BsPuzzle } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import { SlBookOpen } from "react-icons/sl";
const OurServices = () => {
  return (
    <div className="py-12 px-6 bg-gray-100 dark:bg-gray-800 text-center ">
      {/* Title and Description */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-[#6C5EBF] font-lora">
          Our Best Services
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 font-lora">
          Rapidly expedite granular imperatives before economically sound web
          services. Credibly actualize strategic themes to empower your learning
          journey.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="card bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 flex flex-col space-y-4">
          <div className="text-5xl text-[#FFB400] mb-4 flex justify-center">
            <PiStudent />
          </div>
          <h3 className="text-2xl font-semibold text-[#6C5EBF] font-lora">
            Student-Centered Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-3 flex-grow">
            Engage in personalized learning experiences designed to fit your
            unique educational needs.
          </p>
          <button className="mt-auto px-6 py-2 bg-[#6C5EBF] text-white rounded-lg shadow-md hover:bg-[#5a4caf] dark:bg-[#FFB400] dark:hover:bg-[#e0a300] transition-colors">
            Read More
          </button>
        </div>

        {/* Card 2 */}
        <div className="card bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 flex flex-col">
          <div className="text-5xl text-[#FFB400] mb-4 flex justify-center">
            <SlBookOpen />
          </div>
          <h3 className="text-2xl font-semibold text-[#6C5EBF] font-lora">
            Extensive Resource Library
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-3 flex-grow">
            Access a wide variety of books, articles, and guides curated for
            effective learning.
          </p>
          <button className="mt-auto px-6 py-2 bg-[#6C5EBF] text-white rounded-lg shadow-md hover:bg-[#5a4caf] dark:bg-[#FFB400] dark:hover:bg-[#e0a300] transition-colors">
            Read More
          </button>
        </div>

        {/* Card 3 */}
        <div className="card bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 flex flex-col">
          <div className="text-5xl text-[#FFB400] mb-4 flex justify-center">
            <BsPuzzle />
          </div>
          <h3 className="text-2xl font-semibold text-[#6C5EBF] font-lora">
            Interactive Problem Solving
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-3 flex-grow">
            Solve engaging challenges and puzzles to enhance your critical
            thinking skills.
          </p>
          <button className="mt-auto px-6 py-2 bg-[#6C5EBF] text-white rounded-lg shadow-md hover:bg-[#5a4caf] dark:bg-[#FFB400] dark:hover:bg-[#e0a300] transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
