const SectionTitle2 = ({ heading, subheading, className = "" }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center font-lora">{heading}</h2>
      <p className="text-2xl font-bold">{subheading}</p>
    </div>
  );
};

export default SectionTitle2;
