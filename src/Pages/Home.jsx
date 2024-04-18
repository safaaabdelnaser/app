import AllTypes from "../Components/AllTypes/AllTypes";
// import Lawyers from "../Components/Lawyers/Lawyers";
import Header from "./../Components/Header/Header";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="my-[100px]">
        <AllTypes />
      </div>
      <div>{/* <Lawyers /> */}</div>
    </>
  );
};

export default Home;
