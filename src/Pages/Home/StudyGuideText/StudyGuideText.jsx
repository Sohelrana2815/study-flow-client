const StudyGuideText = () => {
  return (
    <>
      <div className="text-center xl:w-3/5 md:w-4/5 w-full mx-auto space-y-8 my-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#6C5EBF] font-lora">
          Welcome to Our Study Template
        </h2>
        <h4 className="text-[#FFB400] text-xl md:text-2xl font-medium font-lora">
          Creative Thinking for Modern Education
        </h4>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300 font-lora text-base md:text-lg">
          Phosphorescently initiate principle-centered networks via innovative
          services. Enthusiastically streamline fully-tested metrics without
          compromising on future-proof web services. Rapidly innovate with
          standards-compliant solutions, enabling error-free, seamless user
          experiences. Our platform integrates bricks-and-clicks paradigms to
          engineer assertively, ensuring excellence in every interaction.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button className="px-8 py-3 bg-[#6C5EBF] text-white rounded-full shadow-md hover:bg-[#5a4caf] dark:bg-[#FFB400] dark:hover:bg-[#e0a300] transition-colors duration-300">
            Read More
          </button>
          <button className="px-8 py-3 bg-[#6C5EBF] text-white rounded-full shadow-md hover:bg-[#5a4caf] dark:bg-[#FFB400] dark:hover:bg-[#e0a300] transition-colors duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default StudyGuideText;
