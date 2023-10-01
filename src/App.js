import Footer from "./Components/Footer/Footer";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import Modal from "./Utilities/Components/Modal";
import ModalContent from "./Utilities/Components/ModalContent";
import { Routes, Route } from "react-router-dom";

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
        <Route path="*">This is 404 page</Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
