import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import AllTypes from "./Components/AllTypes/AllTypes";
import LawyersByCategory from "./Components/LawyersByCategory/LawyersByCategory";

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
        </Routes>
      </>
    </Router>
  );
};

export default App;
