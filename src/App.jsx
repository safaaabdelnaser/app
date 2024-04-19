import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import AllTypes from "./Components/AllTypes/AllTypes";
import LawyersByCategory from "./Components/LawyersByCategory/LawyersByCategory";
import MainProfile from "./Components/Profile/MainProfile/MainProfile";
import LawyerPage from "./Components/Lawyers/Lawyers";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/الرئيسية" element={<Home />} />
          <Route path="/all-types" element={<AllTypes />} />
          <Route path="/lawyers/:categoryId" element={<LawyersByCategory />} />
          <Route path="/lawyer/:lawyerId" element={<LawyerPage />} />
          <Route path="/lawyer/:lawyerId/profile" element={<MainProfile />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
