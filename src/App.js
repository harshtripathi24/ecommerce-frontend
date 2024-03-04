import Footer from "./Components/Footer/Footer";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import Modal from "./Utilities/Components/Modal";
import ModalContent from "./Utilities/Components/ModalContent";
import { Routes, Route } from "react-router-dom";
import ContactUsPage from "./Pages/ContactUsPage";
import ServicePage from "./Pages/ServicePage";
import FAQPage from "./Pages/FAQPage";

import "animate.css";

function App() {
  return (
    <>
      <Header />
      <Modal>
        <ModalContent />
      </Modal>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:pid" element={<ProductPage />} />
        <Route path="/contact_us" element={<ContactUsPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="*">This is 404 page</Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
