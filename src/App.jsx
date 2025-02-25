import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredits from "./pages/BuyCredits";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-slate-50 ">

      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/BuyCredits" element={<BuyCredits />} />
      </Routes>
      <Footer/>


      
    </div>
  );
}

export default App;
