const SingleTestimonial = ({ name, desc, position, photo }) => {
  return (
    <div className="text-white bg-[#21293c] rounded-md p-6 shadow-[8px_8px_1px_8px_#1c202c]">
      <p className="text-md font-normal tracking-[0.8px] mb-4">{desc}</p>
      <div className="flex items-center gap-4">
        <img
          src={`/public/${photo}`}
          alt={name}
          className="w-[50px] h-[50px] rounded-full object-contain"
        />

        <div>
          <strong className="block mb-1">{name}</strong>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
