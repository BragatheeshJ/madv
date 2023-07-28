import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";
import Howtoapply from "./components/Howtoapply/Howtoapply";
import Contactus from "./components/ContactUs/Contactus";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Confirmpage from "./components/ConfirmPage/Confirmpage";
import Services from "./components/services/Services";
import Faqs from "./components/faqs/Faqs";
import Emicheck from "./components/emi-check/Emicheck";

function App() {
  return (
    <>
      <Navbar />
      <div className="container min-vh-100 my-5 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/howtoapply" element={<Howtoapply />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/confirmpage" element={<Confirmpage />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/emicheck" element={<Emicheck />} /> {/* Add this line */}
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

const ProtectedRoute = ({ component }) => {
  return localStorage.getItem("id") ? component : <div>Protected Route Content</div>;
};

export default App;
