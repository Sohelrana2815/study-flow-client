const SectionTitle2 = ({ heading, subheading, className = "" }) => {
  return (
    <div className={`text-center py-6 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white font-lora leading-tight mb-2">
        {heading}
      </h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium mt-2">
        {subheading}
      </p>
      <div className="mt-4 w-16 h-1 mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded"></div>
    </div>
  );
};

export default SectionTitle2;
