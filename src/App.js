import Footer from "./Components/Footer/Footer";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import Modal from "./Utilities/Components/Modal";
import ModalContent from "./Utilities/Components/ModalContent";
import { Routes, Route } from "react-router-dom";
import ContactUsPage from "./Pages/ContactUsPage";
import FAQPage from "./Pages/FAQPage";
import { ToastContainer, toast } from "react-toastify";
import { useAuthContext } from "./Utilities/Context/AuthContext.js";
import axios from "axios";

import "animate.css";
import AboutUsPage from "./Pages/AboutUsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import TermAndConditionPage from "./Pages/TermAndConditionPage.js";
import PrivacyPolicy from "./Pages/PrivacyPolicy.js";
import SearchedPage from "./Pages/SearchedPage.js";
import WishList from "./Pages/WishList.js";

import { useAuth } from "./Utilities/Hooks/useAuth.js";
import { useEffect } from "react";
import CartPage from "./Pages/CartPage.js";

function App() {
  const { token, login, logout, userId } = useAuth();

  const { loginAuthContext } = useAuthContext();

  const getLogin = async (uid, token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios
      .get(
        `${process.env.REACT_APP_BACKEND_BASER_URL}/api/users/show-user/${uid}`,
        config
      )
      .then((response) => {
        loginAuthContext(response.data.user, token);
      })
      .catch((error) => {
        console.log(error);

        let err =
          "Error Occurred: " +
          error.response.status +
          " Error Occurred in Fetching User " +
          error.response.data.message;
        toast.error(err, {
          position: "top-center",
          theme: "colored",
        });
      });
  };

  useEffect(() => {
    if (token) {
      getLogin(userId, token);
    }
  }, [token]);

  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:pid" element={<ProductPage />} />
        <Route path="/contact_us" element={<ContactUsPage />} />
        <Route path="/about_us" element={<AboutUsPage />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/term_and_conditions" element={<TermAndConditionPage />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/searched_page/:tagName" element={<SearchedPage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:pid" element={<ProductPage />} />
        <Route path="/contact_us" element={<ContactUsPage />} />
        <Route path="/about_us" element={<AboutUsPage />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/term_and_conditions" element={<TermAndConditionPage />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/searched_page/:tagName" element={<SearchedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  }

  return (
    <>
      <Header />
      <Modal>
        <ModalContent />
      </Modal>
      {routes}
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
