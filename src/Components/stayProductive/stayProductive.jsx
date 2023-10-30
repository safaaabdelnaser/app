import StayProductiveImage from "../../assets/Images/illustration-stay-productive.png";
import iconArrow from "../../assets/Images/icon-arrow.svg";
const StayProductive = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center pb-[170px]">
        <div>
          <img src={StayProductiveImage} alt="StayProductive" />
        </div>
        {/* text beside image */}
        <div className="text-white">
          <h3 className="text-red-200 font-bold text-2xl leading-[40px]">
            Stay Productive
            <br />
            wherever you are
          </h3>
          <div className="my-4 font-normal tracking-[0.8px] text-md">
            <p className="mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              veniam ullam maxime neque, earum autem animi voluptate beatae
              aliquid cum expedita, cumque, nulla perferendis commodi
              exercitationem illum laboriosam iure rem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              eum fuga amet in maxime odit beatae error sequi alias
              reprehenderit eveniet accusantium nisi esse autem numquam officiis
              reiciendis nemo sapiente.
            </p>
          </div>
          <a
            href="/"
            className="text-mainColor hover:text-red-200 transition-colors duration-200 border-b-2 border-mainColor pb-2 flex items-center gap-2 w-fit "
          >
            See how Fylo works
            <img
              src={iconArrow}
              alt="arrow-img"
              className="w-[20px] h-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite]"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default StayProductive;
