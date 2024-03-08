import Footer from "./Components/Footer/Footer";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import Modal from "./Utilities/Components/Modal";
import ModalContent from "./Utilities/Components/ModalContent";
import { Routes, Route } from "react-router-dom";
import ContactUsPage from "./Pages/ContactUsPage";
import FAQPage from "./Pages/FAQPage";

import "animate.css";
import AboutUsPage from "./Pages/AboutUsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import TermAndConditionPage from "./Pages/TermAndConditionPage.js";
import PrivacyPolicy from "./Pages/PrivacyPolicy.js";

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
        <Route path="/about_us" element={<AboutUsPage />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/term_and_conditions" element={<TermAndConditionPage />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
