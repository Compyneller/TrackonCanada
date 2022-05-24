import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import OurServices from "./Pages/OurServices";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="AppNavBar">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<OurServices />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
