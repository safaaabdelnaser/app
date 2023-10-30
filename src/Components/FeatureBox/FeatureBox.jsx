const FeatureBox = ({ title, icon, desc }) => {
  return (
    <div className="text-white element-center flex-col text-center">
      <img
        src={`/public/${icon}`}
        alt={title}
        className="w-[80px] object-contain h-[80px]"
      />
      <h4 className="text-xl my-[15px]">{title}</h4>
      <p className="font-normal text-md">{desc}</p>
    </div>
  );
};

export default FeatureBox;
