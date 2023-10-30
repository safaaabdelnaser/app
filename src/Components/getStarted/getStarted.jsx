const GetStarted = () => {
  return (
    <section>
      <div className="container relative">
        <div className="bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-lg element-center flex-col w-[865px] max-w-full min-h-[275px] text-white p-10 text-center">
          <h3 className="text-[25px] md:text-[35px] mb-[15px]">
            Get early access today
          </h3>
          <p className="w-[620px] mx-auto max-w-full mb-4 leading-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis ducimus repellendus quasi maiores doloremque veritatis
            molestias, officiis debitis quaerat natus!
          </p>
          <form className="w-full flex flex-wrap items-center justify-between md:px-[60px] gap-10 mt-4">
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full md:flex-1 h-[50px] pl-6 rounded-[30px] outline-none text-black font-medium"
            />
            <button
              type="submit"
              className="w-full md:w-[200px] h-[50px] bg-mainColor hover:bg-red-200 transition-all duration-200 rounded-[30px] text-black"
            >
              Get Start For Free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
