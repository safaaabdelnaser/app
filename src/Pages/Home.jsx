import Features from "../Components/Features/Features";
import Landing from "../Components/Landing/Landing";
import Testimonials from "../Components/Testimonials/testimonials";
import GetStarted from "../Components/getStarted/getStarted";
import StayProductive from "../Components/stayProductive/stayProductive";

const Home = () => {
  return (
    <>
      <Landing />
      <Features/>
      <StayProductive/>
      <Testimonials/>
      <GetStarted/>
    </>
  );
};

export default Home;
